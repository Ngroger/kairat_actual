import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Navbar from '../ui/Navbar';
import styles from '../../styles/MainScreenStyle';
import { useTranslation } from 'react-i18next';
import { WebView } from 'react-native-webview';
import { useEffect, useState, useRef } from 'react';
import i18next from '../../i18next'
import { StatusBar } from 'expo-status-bar';
import BottomTabs from '../ui/BottomTabs';
import { saveLanguage, loadLanguage } from '../../store/LanguageStore';
import { useWebView } from '../../context/WebViewContext';

function ProfileScreen() {
    const { t } = useTranslation();
    const [lang, setLang] = useState();
    const { reloadKey, webRef, reloadWebView } = useWebView();
    const [url, setUrl] = useState();

    useEffect(() => {
        const newUrl = i18next.language === 'kz'
            ? `https://fckairat.com/kz/user/profile`
            : `https://fckairat.com/user/profile`;
        setUrl(newUrl);
        console.log("profile url: ", url, "profile lang: ",i18next.language);
    }, [i18next.language]);

    useEffect(() => {
        if (url) {
            reloadWebView();
        }
    }, [url]);

    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: '#FFF' }}>
            <Navbar title={t("your-cabinet")}/>
            <WebView
                key={reloadKey}
                ref={webRef}
                cacheEnabled={false}
                style={[styles.container, { marginTop: 150 }]}
                thirdPartyCookiesEnabled={true}
                source={{ uri: url }}
                javaScriptEnabled={true}
            />
            <StatusBar/>
            <BottomTabs zIndex={0} position="relative"/>
        </View>
    );
}

export default ProfileScreen;