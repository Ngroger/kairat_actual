import { BackHandler } from 'react-native';
import Navbar from '../ui/Navbar';
import { useNavigation, useRoute } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import { useTranslation } from 'react-i18next';
import { useState, useRef, useCallback, useEffect } from 'react';
import i18next from '../../i18next'
import { View } from 'react-native-animatable';
import styles from '../../styles/NavbarStyle';
import { StatusBar } from 'expo-status-bar';
import BottomTabs from '../ui/BottomTabs';
import { useWebView } from '../../context/WebViewContext';
import { loadLanguage } from '../../store/LanguageStore';

function ShopScreen() {
    const navigation = useNavigation();
    const { t } = useTranslation();
    const [lang, setLang] = useState();
    const [canGoBack, setCanGoBack] = useState(false);
    const route = useRoute();
    const { slug = null } = route.params || {};
    const { webRef, reloadKey, reloadWebView } = useWebView();

    const [url, setUrl] = useState();

    useEffect(() => {
        const newUrl = i18next.language === 'kz'
            ? `https://fckairat.com/kz/shop/catalog/${slug}/appmobile/true/`
            : `https://fckairat.com/shop/catalog/${slug}/appmobile/true/`;
        setUrl(newUrl);
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
            <Navbar title={t("shop-title")}/>
            <WebView
                key={reloadKey}
                ref={webRef}
                style={[styles.container, { marginTop: 120, backgroundColor: '#FFF' }]}
                source={{
                    uri: url
                }}
                onNavigationStateChange={handleNavigationStateChange}
            />
            <StatusBar translucent={true} backgroundColor='transparent'/>
            <BottomTabs position="relative" zIndex={0}/>
        </View>
    )
};

export default ShopScreen;