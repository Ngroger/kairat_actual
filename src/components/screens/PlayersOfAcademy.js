import { View, Text, TouchableOpacity, Image, ScrollView, Linking } from 'react-native';
import Navbar from '../ui/Navbar';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import WebView from 'react-native-webview';
import styles from '../../styles/NavbarStyle';
import { loadLanguage } from '../../store/LanguageStore';
import { useTranslation } from 'react-i18next';
import i18next from '../../i18next'
import { useState, useEffect } from 'react';
import BottomTabs from '../ui/BottomTabs';
import { useWebView } from '../../context/WebViewContext';

function PlayersOfAcademy() {
    const route = useRoute();
    const { slug, ancgor } = route.params;
    const [lang, setLang] = useState();
    const { t } = useTranslation();
    const { webRef, reloadKey, reloadWebView } = useWebView();

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
        reloadWebView();
    }, []);

    useEffect(() => {
        fetchLang();
    }, [lang]);

    const fetchLang = async () => {
        const lang = i18next.language;
        setLang(lang)
    };

    return (
        <View style={{ width: '100%', height: '100%' }}>
            <Navbar activityApp='Tickets' title={t("main-title")} />
            <WebView
                key={reloadKey} // Устанавливаем ключ для перерисовки
                ref={webRef}
                source={{
                    uri: lang === 'kz' ? `https://fckairat.com/kz/academy/${slug}/${ancgor}` : `https://fckairat.com/academy/${slug}/${ancgor}`
                }}
                style={[styles.container, { marginTop: 120, backgroundColor: '#FFF' }]}
            />
            <StatusBar translucent={true} backgroundColor='transparent' />
            <BottomTabs zIndex={0} position="relative" />
        </View>
    )
};

export default PlayersOfAcademy;