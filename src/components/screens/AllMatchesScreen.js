import { View, BackHandler } from 'react-native';
import Navbar from '../ui/Navbar';
import styles from '../../styles/MainScreenStyle';
import { useTranslation } from 'react-i18next';
import { WebView } from 'react-native-webview';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useWebView } from '../../context/WebViewContext';
import BottomTabs from '../ui/BottomTabs';
import i18next from '../../i18next';

function AllMatchesScreen() {
    const { t } = useTranslation();
    const { reloadKey, webRef, reloadWebView } = useWebView();
    const [canGoBack, setCanGoBack] = useState(false);
    const [url, setUrl] = useState();

    useEffect(() => {
        const newUrl = i18next.language === 'kz'
            ? `https://fckairat.com/kz/match`
            : `https://fckairat.com/match`;
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

    useEffect(() => {
        reloadWebView();
    }, [])

    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: '#FFF' }}>
            <Navbar title={t("main-title")} />
            <WebView
                key={reloadKey}
                ref={webRef}
                style={[styles.container, { marginTop: 120 }]}
                source={{ uri: url }}
                onNavigationStateChange={handleNavigationStateChange}
            />
            <StatusBar translucent={true} backgroundColor='transparent' />
            <BottomTabs zIndex={0} position="relative" />
        </View>
    );
}

export default AllMatchesScreen;
