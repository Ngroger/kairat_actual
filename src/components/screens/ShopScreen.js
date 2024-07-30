import { BackHandler } from 'react-native';
import Navbar from '../ui/Navbar';
import { useNavigation, useRoute } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import { useTranslation } from 'react-i18next';
import { useState, useRef, useCallback, useEffect } from 'react';
import i18next from '../../i18next'

function ShopScreen() {
    const navigation = useNavigation();
    const { t } = useTranslation();
    const [lang, setLang] = useState();
    const webViewRef = useRef(null);
    const [canGoBack, setCanGoBack] = useState(false);
    const route = useRoute();
    const { slug = null } = route.params || {};
    
    useEffect(() => {
        fetchLang();
        console.log("slug:",slug);
    }, [slug]);

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

    const fetchLang = async () => {
        const lang = i18next.language;
        setLang(lang);
    };

    const handleNavigationStateChange = (navState) => {
        setCanGoBack(navState.canGoBack);
    };

    return (
        <>
            <Navbar title={t("shop-title")}/>
            <WebView
                ref={webViewRef}
                cacheEnabled={false}
                style={{ marginTop: 120 }}
                source={{ uri: lang === 'kz' ? `https://fckairat.com/kz/shop/catalog/${slug}` : `https://fckairat.com/shop/catalog/${slug}` }}
                onNavigationStateChange={handleNavigationStateChange}
            />
        </>
    )
};

export default ShopScreen;