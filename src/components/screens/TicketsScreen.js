import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Navbar from '../ui/Navbar';
import styles from '../../styles/MainScreenStyle';
import { useTranslation } from 'react-i18next';
import { WebView } from 'react-native-webview';
import { useEffect, useState, useRef } from 'react';
import i18next from '../../i18next'
import UserIdStorage from '../../store/UserIdStore';
import UserTokenStorage from '../../userSrorage';
import { useIsFocused } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import BottomTabs from '../ui/BottomTabs';

function TicketsScreen() {
    const { t } = useTranslation();
    const [lang, setLang] = useState();
    const webViewRef = useRef(null);
    const [webViewKey, setWebViewKey] = useState(0);
    const isFocused = useIsFocused();
    
    useEffect(() => {
        fetchLang();
    }, []);

    const fetchLang = async () => {
        const lang = i18next.language;
        setLang(lang);
    };

    useEffect(() => {
        // Increment the key to force WebView reload when the component is accessed
        if (isFocused) {
            setWebViewKey(prevKey => prevKey + 1);
        }
    }, [isFocused]);

    return (
        <View style={{ width: '100%', height: '100%' }}>
            <Navbar activityApp='Tickets' title="ФУТБОЛЬНЫЙ КЛУБ «КАЙРАТ»"/>
            <WebView
                key={webViewKey}
                ref={webViewRef}
                cacheEnabled={false}
                style={[styles.container, { marginTop: 120 }]}
                thirdPartyCookiesEnabled={true}
                source={{ uri: lang === 'kz' ? `https://fckairat.com/match/tiketon-modal/5153112/` : `https://fckairat.com/match/tiketon-modal/5153112/` }}
                javaScriptEnabled={true}
            />
            <StatusBar translucent={true} backgroundColor='transparent'/>
            <BottomTabs zIndex={1000} position="absolute"/>
        </View>
    );
}

export default TicketsScreen;