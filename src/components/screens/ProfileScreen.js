import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Navbar from '../ui/Navbar';
import styles from '../../styles/MainScreenStyle';
import { useTranslation } from 'react-i18next';
import { WebView } from 'react-native-webview';
import { useEffect, useState, useRef } from 'react';
import i18next from '../../i18next'
import UserIdStorage from '../../store/UserIdStore';
import UserTokenStorage from '../../userSrorage';

function ProfileScreen() {
    const { t } = useTranslation();
    const [lang, setLang] = useState();
    const webViewRef = useRef(null);

    useEffect(() => {
        fetchLang();
    }, []);

    const fetchLang = async () => {
        const lang = i18next.language;
        setLang(lang);
    };

    return (
        <View style={{ width: '100%', height: '100%' }}>
            <Navbar title="ВАШ КАБИНЕТ"/>
            <WebView
                ref={webViewRef}
                cacheEnabled={false}
                style={[styles.container, { marginTop: 100 }]}
                thirdPartyCookiesEnabled={true}
                source={{ uri: lang === 'kz' ? `https://fckairat.com/user/profile/` : `https://fckairat.com/user/profile/` }}
                javaScriptEnabled={true}
            />
        </View>
    );
}

export default ProfileScreen;