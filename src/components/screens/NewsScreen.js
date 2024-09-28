import { View, BackHandler } from 'react-native';
import styles from '../../styles/NewsScreenStyle';
import Navbar from '../ui/Navbar';
import { useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import BottomTabs from '../ui/BottomTabs';
import { useTranslation } from 'react-i18next';
import WebView from 'react-native-webview';
import { useWebView } from '../../context/WebViewContext';
import { useEffect, useState } from 'react';

function NewsScreen() {
    const route = useRoute();
    const { url } = route.params;
    const {t} = useTranslation();
    const { reloadKey, webRef } = useWebView();
    const [canGoBack, setCanGoBack] = useState(false);
    
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
            <Navbar title={t("title-news-kairat")}/>
            <WebView
                key={reloadKey}
                ref={webRef}
                onNavigationStateChange={handleNavigationStateChange}
                style={styles.container}
                source={{ uri: `https://fckairat.com/${url}` }}
            />
            <StatusBar translucent={true} backgroundColor='transparent'/>
            <BottomTabs position="relative" zIndex={0}/>
        </View>
    )
};

export default NewsScreen;