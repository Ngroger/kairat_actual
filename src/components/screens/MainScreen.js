import { View, Text, TouchableOpacity, ScrollView, BackHandler } from 'react-native';
import Navbar from '../ui/Navbar';
import styles from '../../styles/MainScreenStyle';
import { useTranslation } from 'react-i18next';
import { WebView } from 'react-native-webview';
import { useEffect, useState, useRef, useCallback } from 'react';
import i18next from '../../i18next'
import UserIdStorage from '../../store/UserIdStore';
import UserTokenStorage from '../../userSrorage';

function MainScreen() {
    const { t } = useTranslation();
    const [lang, setLang] = useState();
    const webViewRef = useRef(null);
    const [canGoBack, setCanGoBack] = useState(false);

    useEffect(() => {
        fetchLang();
    }, []);

    const fetchLang = async () => {
        const lang = i18next.language;
        setLang(lang);
    };

    useEffect(() => {
        const backAction = () => {
            if (canGoBack && webViewRef.current) {
                webViewRef.current.goBack();
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
                ref={webViewRef}
                cacheEnabled={false}
                style={[styles.container, { marginTop: 100 }]}
                thirdPartyCookiesEnabled={true}
                source={{ uri: lang === 'kz' ? `https://fckairat.com/kz/?appmobile=true` : `https://fckairat.com/?appmobile=true` }}
                javaScriptEnabled={true}
                onNavigationStateChange={handleNavigationStateChange}
            />
        </View>
    );
}

export default MainScreen;