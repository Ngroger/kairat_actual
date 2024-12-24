import { View, Platform, BackHandler, Alert, Text } from 'react-native';
import Navbar from '../ui/Navbar';
import styles from '../../styles/MainScreenStyle';
import { useTranslation } from 'react-i18next';
import { WebView } from 'react-native-webview';
import { useEffect, useState } from 'react';
import i18next from '../../i18next';
import { StatusBar } from 'expo-status-bar';
import { useWebView } from '../../context/WebViewContext';
import BottomTabs from '../ui/BottomTabs';

function MainScreen() {
    const { t } = useTranslation();
    const { reloadKey, webRef, reloadWebView, handleMessage } = useWebView();
    const [canGoBack, setCanGoBack] = useState(false);

    useEffect(() => {
        reloadWebView();
    }, [])

    const [url, setUrl] = useState();

    useEffect(() => {
        const newUrl = i18next.language === 'kz'
            ? `https://fckairat.com/kz/?appmobile=true`
            : `https://fckairat.com?appmobile=true`;
        setUrl(newUrl);
    }, [i18next.language]);

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
        <View style={{ width: '100%', height: '100%', position: 'relative', backgroundColor: '#FFF' }}>
            <Navbar title={t("main-title")} />
            <WebView
                key={reloadKey}
                ref={webRef}
                style={[styles.container, { marginTop: 120 }]}
                source={{ uri: url }}
                javaScriptEnabled={true}
                onNavigationStateChange={handleNavigationStateChange}
                onMessage={handleMessage}
            />
            <StatusBar translucent={true} backgroundColor='transparent' />
            <BottomTabs position="relative" zIndex={0} />
        </View>
    );
}

export default MainScreen;
