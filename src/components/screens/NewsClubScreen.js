import { useState, useEffect } from "react";
import { View } from "react-native";
import Navbar from "../ui/Navbar";
import { useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import BottomTabs from "../ui/BottomTabs";
import i18next from '../../i18next';
import { useTranslation } from "react-i18next";
import WebView from "react-native-webview";
import { useWebView } from "../../context/WebViewContext";
import { BackHandler } from "react-native";

function NewsClubScreen() {
    const route = useRoute();
    const { initialSlug } = route.params; 
    const [url, setUrl] = useState('');
    const { t } = useTranslation();
    const { webRef, reloadKey, reloadWebView } = useWebView();
    const [canGoBack, setCanGoBack] = useState(false);

    useEffect(() => {
        const newUrl = i18next.language === 'kz'
            ? `https://fckairat.com/kz/news/${initialSlug + '-2/'}`
            : `https://fckairat.com/news/${initialSlug}/`;
        setUrl(newUrl);
    }, [i18next.language, initialSlug]);

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
        <View style={{ width: '100%', height: '100%' }}>
            <Navbar title={t("main-title")}/>
            <WebView
                key={reloadKey}
                ref={webRef}
                style={{ width: '100%', marginTop: 100 }}
                source={{ uri: url }}
                onNavigationStateChange={handleNavigationStateChange}
            />
            <StatusBar translucent={true} backgroundColor="transparent"/>
            <BottomTabs zIndex={0} position="relative"/>
        </View>
    );
}

export default NewsClubScreen;
