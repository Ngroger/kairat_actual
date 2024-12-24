import { View } from 'react-native';
import Navbar from '../ui/Navbar';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import WebView from 'react-native-webview';
import styles from '../../styles/NavbarStyle';
import { useTranslation } from 'react-i18next';
import { StatusBar } from 'expo-status-bar';
import BottomTabs from '../ui/BottomTabs';
import { useWebView } from '../../context/WebViewContext';
import i18next from '../../i18next';


function AcademyScreen() {
    const { webRef, reloadKey, reloadWebView } = useWebView();
    const [url, setUrl] = useState();
    const { t } = useTranslation();

    useEffect(() => {
        const newUrl = i18next.language === 'kz'
            ? `https://fckairat.com/kz/academy/about/#academy-players`
            : `https://fckairat.com/academy/about/#academy-players`;
        setUrl(newUrl);
    }, [i18next.language]);

    useEffect(() => {
        if (url) {
            reloadWebView();
        }
    }, [url]);

    useEffect(() => {
        reloadWebView();
    }, []);

    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: '#FFF' }}>
            <Navbar title={t("main-title")} />
            <WebView
                key={reloadKey}
                ref={webRef}
                style={[styles.container, { backgroundColor: '#FFF', marginTop: 120 }]}
                source={{ uri: url }}
                injectedJavaScript={`
                    const style = document.createElement('style');
                        style.innerHTML = \`
                            body {
                                overflow-x: hidden !important;
                            }
                            ::-webkit-scrollbar {
                                display: none; /* Скрыть скроллбар */
                            }
                        \`;
                        document.head.appendChild(style);
                        true;
                `}

                javaScriptEnabled={true}
            />

            <StatusBar translucent={true} backgroundColor='transparent' />
            <BottomTabs zIndex={0} position="relative" />
        </View>
    )
};

export default AcademyScreen;