import { View, Text, TouchableOpacity } from 'react-native';
import Navbar from '../ui/Navbar';
import styles from '../../styles/MainScreenStyle';
import { useTranslation } from 'react-i18next';
import { WebView } from 'react-native-webview';
import { useEffect, useState, useRef } from 'react';
import i18next from '../../i18next';
import { StatusBar } from 'expo-status-bar';
import BottomTabs from '../ui/BottomTabs';
import { saveLanguage, loadLanguage } from '../../store/LanguageStore';
import { useWebView } from '../../context/WebViewContext';
import * as ScreenCapture from 'expo-screen-capture';

function ProfileScreen() {
    const { t } = useTranslation();
    const { reloadKey, webRef, reloadWebView, handleMessage } = useWebView();
    const [url, setUrl] = useState();
    const [loadingStatus, setLoadingStatus] = useState('loading');

    // Блокировка скриншотов
    useEffect(() => {
        const enableScreenCapture = async () => {
            await ScreenCapture.preventScreenCaptureAsync();
        };

        const disableScreenCapture = async () => {
            await ScreenCapture.allowScreenCaptureAsync();
        };

        enableScreenCapture();

        return () => {
            disableScreenCapture(); // Отключение блокировки при размонтировании
        };
    }, []);

    useEffect(() => {
        const newUrl = i18next.language === 'kz'
            ? `https://fckairat.com/kz/user/profile`
            : `https://fckairat.com/user/profile`;
        setUrl(newUrl);
    }, [i18next.language]);

    useEffect(() => {
        if (url) {
            reloadWebView();
        }
    }, [url]);

    const handleLoadStart = () => {
        console.log('WebView: загрузка началась');
        setLoadingStatus('loading');
    };

    const handleLoadEnd = () => {
        console.log('WebView: загрузка завершена');
        setLoadingStatus('loaded');
    };

    const handleError = (error) => {
        console.log('WebView: ошибка загрузки', error);
        setLoadingStatus('error');
    };

    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: '#FFF' }}>
            <Navbar title={t("your-cabinet")} />
            <WebView
                key={reloadKey}
                ref={webRef}
                cacheEnabled={false}
                style={[styles.container, { marginTop: 150 }]}
                thirdPartyCookiesEnabled={true}
                source={{ uri: url }}
                javaScriptEnabled={true}
                onMessage={handleMessage}
                onLoadStart={handleLoadStart}
                onLoadEnd={handleLoadEnd}
                onError={handleError}
            />
            <StatusBar />
            <BottomTabs zIndex={0} position="relative" />
        </View>
    );
}

export default ProfileScreen;
