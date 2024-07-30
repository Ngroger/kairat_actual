import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Navbar from '../ui/Navbar';
import styles from '../../styles/MainScreenStyle';
import { useTranslation } from 'react-i18next';
import { WebView } from 'react-native-webview';
import { useEffect, useState } from 'react';
import i18next from '../../i18next'

function SubscriptionScreen() {
    const { t } = useTranslation();
    const [lang, setLang] = useState();

    useEffect(() => {
        fetchLang();
    });

    const fetchLang = async () => {
        const lang = i18next.language
        setLang(lang)
    }
    return (
        <View style={{ width: '100%', height: '100%' }}>
            <Navbar title="АБОНЕМЕНТЫ"/>
            <WebView
                style={styles.container}
                source={{ uri: lang === 'kz' ? `https://fckairat.com/kz/view/abonement-2/?appmobile=true` : `https://fckairat.com/view/abonementy/?appmobile=true` }}
            />
        </View>
    )
};

export default SubscriptionScreen;