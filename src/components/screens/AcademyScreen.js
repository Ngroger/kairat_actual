import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Navbar from '../ui/Navbar';
import { Svg, Path, Rect, ClipPath, Defs, G } from 'react-native-svg';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useRef, useEffect, useState } from 'react';
import OurPartners from '../ux/OurPartners';
import { SimpleLineIcons } from '@expo/vector-icons';
import NewsJastar from '../ux/NewsJastar';
import { EvilIcons, Feather  } from '@expo/vector-icons';
import Application from '../ux/modal/Application';
import SuccessApplication from '../ux/modal/SuccessApplication';
import WebView from 'react-native-webview';
import styles from '../../styles/NavbarStyle';
import { useTranslation } from 'react-i18next';
import { StatusBar } from 'expo-status-bar';
import BottomTabs from '../ui/BottomTabs';
import { useWebView } from '../../context/WebViewContext';
import i18next from '../../i18next';
import { loadLanguage } from '../../store/LanguageStore';


function AcademyScreen() {
    const navigation = useNavigation();
    const { webRef, reloadKey, reloadWebView } = useWebView();
    const [lang, setLang] = useState(i18next);
    const [url, setUrl] = useState();
    const {t} = useTranslation();

    console.log("test");

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
            <Navbar title={t("main-title")}/>
            <WebView
                key={reloadKey} // Устанавливаем ключ для перерисовки
                ref={webRef}
                style={[styles.container, { backgroundColor: '#FFF', marginTop: 120 }]}
                source={{ uri: url }}
            />
            <StatusBar translucent={true} backgroundColor='transparent'/>
            <BottomTabs zIndex={0} position="relative"/>
        </View>
    )
};

export default AcademyScreen;