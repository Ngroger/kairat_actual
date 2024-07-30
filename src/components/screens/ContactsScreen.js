import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Navbar from '../ui/Navbar';
import { Svg, Path, Rect, ClipPath, Defs, G } from 'react-native-svg';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useRef, useEffect, useState } from 'react';
import OurPartners from '../ux/OurPartners';
import { SimpleLineIcons } from '@expo/vector-icons';
import NewsJastar from '../ux/NewsJastar';
import { EvilIcons, Feather  } from '@expo/vector-icons';

function ContactsScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const { scrollToOffset } = route.params || {};
    const [isShowOffer, setIsShowOffer] = useState(false);
    const [isShowMeirimi, setIsShowMeirimi] = useState(false);
    const [isShowBlind, setIsShowBlind] = useState(false);

    useEffect(() => {
        if (scrollToOffset) {
            scrollViewRef.current.scrollTo({ y: scrollToOffset, animated: true });
        }
    }, [scrollToOffset]);

    const scrollViewRef = useRef();

    return (
        <View>
            <Navbar activityApp='Tickets' title='ФУТБОЛЬНЫЙ КЛУБ «КАЙРАТ»'/>
            <ScrollView ref={scrollViewRef} style={{ backgroundColor: '#FFF', width: '100%', height: '100%', marginTop: 120 }}>
                <View style={{ marginBottom: 120 }}>
                    <Text style={{ fontSize: 20, fontFamily: 'MulishBold', paddingHorizontal: 24, marginTop: 24 }}>Контакты</Text>
                    <Text style={{ fontSize: 12, fontFamily: 'MulishRegular', paddingHorizontal: 24, letterSpacing: 0.6, marginTop: 10 }}>
                        <Text style={{ fontFamily: 'MulishBold' }}>Администрация Клуба:</Text>{'\n'}
                        Адрес: г. Алматы, 050054, ул. Майлина, 230
                        Телефон: +7 (727) 339 03 49
                        Е-mail: info@fckairat.kz{'\n'}{'\n'}

                        <Text style={{ fontFamily: 'MulishBold' }}>По вопросам набора детей в Академию:</Text>{'\n'}
                        Академия им. Т. С. Сегизбаева:{'\n'}
                        Телефон: +7 (702) 150 83 26 (ул. Майлина, 230){'\n'}
                        E-mail: k.talasbayev@fckairat.kz (Касымхан Таласбаев, скаут-селекционер){'\n'}{'\n'}

                        <Text style={{ fontFamily: 'MulishBold' }}>Официальный магазин ФК «Кайрат»:</Text>{'\n'}{'\n'}
                        Телефoн: +7 747 062 15 49{'\n'}
                        Е-mail: o.dzhumakanova@fckairat.kz (Оксана Джумаканова){'\n'}{'\n'}

                        <Text style={{ fontFamily: 'MulishBold' }}>По вопросам покупки онлайн билетов:</Text>{'\n'}{'\n'}
                        Телефон: +7 (727) 339 03 47{'\n'}
                        E-mail: ts@fckairat.kz{'\n'}{'\n'}
                    </Text>
                    <NewsJastar slug='novosti-kluba'/>
                    <View style={{ marginTop: 40 }}>
                        <OurPartners/>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
};

export default ContactsScreen;