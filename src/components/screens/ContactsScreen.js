import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Navbar from '../ui/Navbar';
import { Svg, Path, Rect, ClipPath, Defs, G } from 'react-native-svg';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useRef, useEffect, useState } from 'react';
import OurPartners from '../ux/OurPartners';
import { SimpleLineIcons } from '@expo/vector-icons';
import NewsJastar from '../ux/NewsJastar';
import { EvilIcons, Feather  } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import BottomTabs from '../ui/BottomTabs';
import { useTranslation } from 'react-i18next';

function ContactsScreen() {
    const route = useRoute();
    const { scrollToOffset } = route.params || {};
    const {t} = useTranslation();

    useEffect(() => {
        if (scrollToOffset) {
            scrollViewRef.current.scrollTo({ y: scrollToOffset, animated: true });
        }
    }, [scrollToOffset]);

    const scrollViewRef = useRef();

    return (
        <>
            <View>
                <Navbar activityApp='Tickets' title={t("main-title")}/>
                <ScrollView ref={scrollViewRef} style={{ backgroundColor: '#FFF', width: '100%', height: '100%', marginTop: 120 }}>
                    <View style={{ marginBottom: 120 }}>
                        <Text style={{ fontSize: 20, fontFamily: 'MulishBold', paddingHorizontal: 24, marginTop: 24 }}>{t("contacts-screen.title")}</Text>
                        <Text style={{ fontSize: 12, fontFamily: 'MulishRegular', paddingHorizontal: 24, letterSpacing: 0.6, marginTop: 10 }}>
                            <Text style={{ fontFamily: 'MulishBold' }}>{t("contacts-screen.title")}</Text>{'\n'}
                            {t("contacts-screen.address")}: г. Алматы, 050054, ул. Майлина, 230
                            {t("contacts-screen.phone")}: +7 (727) 339 03 49
                            Е-mail: info@fckairat.kz{'\n'}{'\n'}

                            <Text style={{ fontFamily: 'MulishBold' }}>{t("contacts-screen.for-questions")}</Text>{'\n'}
                            Академия им. Т. С. Сегизбаева:{'\n'}
                            Телефон: +7 (702) 150 83 26 (ул. Майлина, 230){'\n'}
                            E-mail: k.talasbayev@fckairat.kz (Касымхан Таласбаев, скаут-селекционер){'\n'}{'\n'}

                            <Text style={{ fontFamily: 'MulishBold' }}>{t("contacts-screen.official-shop")}</Text>{'\n'}{'\n'}
                            {t("contacts-screen.phone")}: +7 747 062 15 49{'\n'}
                            Е-mail: o.dzhumakanova@fckairat.kz (Оксана Джумаканова){'\n'}{'\n'}

                            <Text style={{ fontFamily: 'MulishBold' }}>{t("contacts-screen.tickets-questions")}</Text>{'\n'}{'\n'}
                            {t("contacts-screen.phone")}: +7 (727) 339 03 47{'\n'}
                            E-mail: ts@fckairat.kz{'\n'}{'\n'}
                        </Text>
                        <NewsJastar slug='novosti-kluba'/>
                        <View style={{ marginTop: 40, marginBottom: 60 }}>
                            <OurPartners/>
                        </View>
                    </View>
                </ScrollView>
                <StatusBar translucent={true} backgroundColor='transparent'/>
            </View>
            <BottomTabs zIndex={1000} position="absolute"/>
        </>
    )
};

export default ContactsScreen;