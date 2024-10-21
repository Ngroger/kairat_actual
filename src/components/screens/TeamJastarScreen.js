import { View, Text, TouchableOpacity, ScrollView, BackHandler } from 'react-native';
import Navbar from '../ui/Navbar';
import styles from '../../styles/MainScreenStyle';
import { useTranslation } from 'react-i18next';
import { WebView } from 'react-native-webview';
import { useEffect, useState } from 'react';
import i18next from '../../i18next'
import { StatusBar } from 'expo-status-bar';
import BottomTabs from '../ui/BottomTabs';
import { useWebView } from '../../context/WebViewContext';
import { loadLanguage } from '../../store/LanguageStore';
import { useRoute } from '@react-navigation/native';


function TeamJastarScreen() {
    const { t } = useTranslation();
    const [lang, setLang] = useState();
    const { reloadKey, webRef, reloadWebView } = useWebView();
    const [canGoBack, setCanGoBack] = useState(false);

    useEffect(() => {
        // Обновляем состояние при изменении языка
        i18next.on('languageChanged', (newLang) => {
            setLang(newLang);
        });

        // Начальная загрузка языка
        loadCurrentLanguage();

        return () => {
            // Очистка слушателя при размонтировании компонента
            i18next.off('languageChanged');
        };
    }, []);

    const loadCurrentLanguage = async () => {
        const selectedLanguage = await loadLanguage();
        if (selectedLanguage) {
            i18next.changeLanguage(selectedLanguage);
        }
    };

    useEffect(() => {
        const backAction = () => {
            if (canGoBack && webRef.current) {
                webRef.current.goBack();
                return true;
            }
            return false;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, [canGoBack]);

    const handleNavigationStateChange = (navState) => {
        setCanGoBack(navState.canGoBack);
    };

    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: '#FFF' }}>
            <Navbar title={t("main-title")} />
            <WebView
                key={reloadKey}
                ref={webRef}
                cacheEnabled={false}
                style={styles.container}
                source={{ uri: lang === 'kz' ? `https://fckairat.com/kz/team/osnovnoj-sostav-fk-kajrat-zastar-2` : `https://fckairat.com/team/osnovnoy-sostav-fk-kayrat-zhastar` }}
                javaScriptEnabled={true}
                sharedCookiesEnabled={true}
                onNavigationStateChange={handleNavigationStateChange}
            />
            <StatusBar translucent={true} backgroundColor='transparent' />
            <BottomTabs zIndex={0} position="relative" />
        </View>
    )
};

export default TeamJastarScreen;