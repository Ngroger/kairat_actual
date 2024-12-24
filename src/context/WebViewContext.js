import React, { createContext, useContext, useRef, useState } from 'react';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { Platform } from 'react-native';
import UserTokenStorage from '../userSrorage';
import { id } from 'date-fns/locale';

// Создаем контекст
const WebViewContext = createContext(null);

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

async function schedulePushNotification() {
    // Удаляем все существующие уведомления перед планированием нового
    await Notifications.cancelAllScheduledNotificationsAsync();

    await Notifications.scheduleNotificationAsync({
        content: {
            title: "ФК Кайрат",
            body: "Добро пожаловать в ФК Кайрат",
        },
        trigger: {
            seconds: 2, // Запуск через 2 секунды
        },
    });
}


async function registerForPushNotificationsAsync() {
    let token;

    if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('myNotificationChannel', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }

    if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        try {
            const projectId =
                Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
            if (!projectId) {
                throw new Error('Project ID not found');
            }
            token = (
                await Notifications.getExpoPushTokenAsync({
                    projectId,
                })
            ).data;
            console.log(token);
        } catch (e) {
            token = `${e}`;
        }
    } else {
        alert('Must use physical device for Push Notifications');
    }

    return token;
}

export const WebViewProvider = ({ children }) => {
    const webRef = useRef(null);
    const [reloadKey, setReloadKey] = useState(0);

    const reloadWebView = () => {
        setReloadKey(prevKey => prevKey + 1);
        if (webRef.current) {
            webRef.current.reload();
        }
    };

    const handleMessage = async (event) => {
        try {
            const message = JSON.parse(event.nativeEvent.data);
            if (message.action === 'getPushToken') {
                console.log('Step 1: Получен запрос на push token', message);
                // Проверяем, был ли уже включен push-уведомления
                const isNotificated = await UserTokenStorage.getIsNotificated();
                if (isNotificated) {
                    console.log('Push notifications already enabled, skipping...');
                    return; // Пропускаем, если уведомления уже включены
                }

                const jsCode = `
                (function() {
                    var cookieToken = document.cookie;
                    var cookies = {};
                    cookieToken.split(';').forEach(function(cookie) {
                        var parts = cookie.split('=');
                        cookies[parts[0].trim()] = parts[1] ? parts[1].trim() : null;
                    });
                    console.log('Cookies:', cookies);
                    window.ReactNativeWebView.postMessage(JSON.stringify({ action: 'sendPushToken', token: cookies.token, id: cookies.id }));
                })();
            `;
                webRef.current.injectJavaScript(jsCode);
            }

            if (message.action === 'sendPushToken') {
                console.log("Step 2: Полученный auth_token:", message.token, "Полученные id: ", message.id);
                await registerForPushNotificationsAsync().then(async (token) => {
                    if (token) {
                        console.log('Step 3: Expo Push Token:', token);

                        await sendExpoPushToken(message.id, message.token, token);
                    }
                });
            }

            if (message.action === 'logout') {
                console.log("Step 6: User logout");
                await UserTokenStorage.toggleIsNotificated();
            }
        } catch (error) {
            console.error('Ошибка обработки сообщения:', error);
        }
    };

    const sendExpoPushToken = async (id, auth_token, token) => {
        console.log("id: ", id);
        console.log("auth_token: ", auth_token);
        console.log("token: ", token);
        try {
            const response = await fetch(`https://fckairat.com/v1/notification/${id}/token_notification`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth_token}`
                },
                body: JSON.stringify({ token: token })
            });

            const responseJson = await response.json();

            console.log("responseJson: ", responseJson);

            if (responseJson.success) {
                await UserTokenStorage.toggleIsNotificated();
                console.log("Step 4: Is notificated");

                await schedulePushNotification();
                console.log("Step 5: PUSH sent");
            }
        } catch (error) {
            console.log("send expo push token error: ", error);
        }
    };

    return (
        <WebViewContext.Provider value={{ webRef, reloadKey, reloadWebView, handleMessage }}>
            {children}
        </WebViewContext.Provider>
    );
};

export const useWebView = () => {
    return useContext(WebViewContext);
};
