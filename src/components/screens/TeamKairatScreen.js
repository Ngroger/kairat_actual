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


function TeamKairatScreen() {
    const { t } = useTranslation();
    const { reloadKey, webRef, reloadWebView } = useWebView();
    const route = useRoute();
    const { slug } = route.params;
    const [canGoBack, setCanGoBack] = useState(false);
    const [url, setUrl] = useState();

    console.log("slug: ", slug);

    useEffect(() => {
        const newUrl = i18next.language === 'kz'
            ? `https://fckairat.com/kz/team/${slug}`
            : `https://fckairat.com/team/${slug}`;
        setUrl(newUrl);
        console.log("newUrl: ", newUrl);
    }, [i18next.language, slug]);

    useEffect(() => {
        if (url) {
            reloadWebView();
        }
    }, [url]);

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
                style={styles.container}
                source={{ uri: url }}
                onNavigationStateChange={handleNavigationStateChange}
            />
            <StatusBar translucent={true} backgroundColor='transparent' />
            <BottomTabs zIndex={0} position="relative" />
        </View>
    )
};

export default TeamKairatScreen;