import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import styles from '../../styles/NavbarStyle';
import { AntDesign, Ionicons, FontAwesome5, FontAwesome6, Entypo } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Svg, Path } from 'react-native-svg';
import { useTranslation } from 'react-i18next';
import { useWebView } from '../../context/WebViewContext';
import i18next from '../../i18next';
import { loadLanguage, saveLanguage } from '../../store/LanguageStore'

function NavbarMenu({ onClose }) {
    const [openAccordion, setOpenAccordion] = useState('');
    const [isOpenAccordion, setIsOpenAccordion] = useState(false);
    const navigation = useNavigation();
    const { t } = useTranslation();
    const { webRef, reloadKey, reloadWebView } = useWebView();
    const [lang, setLang] = useState(i18next.language)

    const toggleOpenAccordion = (nameAccordion) => {
        setOpenAccordion(prevState => prevState === nameAccordion ? '' : nameAccordion);
    };

    const handlePress = (url) => {
        Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
    };

    const navigateMain = () => {
        reloadWebView();
        navigation.navigate("Main");
    }

    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                    <Ionicons name="close" size={18} color="black" />
                </TouchableOpacity>
                <View style={styles.navigationButtons}>
                    <TouchableOpacity onPress={() => { navigateMain(); onClose(); }} style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={[styles.button, { position: 'absolute', zIndex: 1000 }]}>{t('main-tab')}</Text>
                        <Svg xmlns="http://www.w3.org/2000/svg" width={146} height={30} viewBox="0 0 146 30" fill="none">
                            <Path d="M1.67032 29L16.6732 1.00001L143.685 1L127.424 29H1.67032Z" stroke="black" strokeWidth={2} />
                        </Svg>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginTop: 16, marginLeft: 25 }} onPress={() => toggleOpenAccordion('Новости')}>
                        {openAccordion === 'Новости' && (
                            <Svg
                                style={{ zIndex: -10, position: 'absolute' }}
                                xmlns="http://www.w3.org/2000/svg"
                                width={146}
                                height={30}
                                viewBox="0 0 146 30"
                                fill="none"
                                preserveAspectRatio="xMidYMid slice"
                            >
                                <Path d="M16.0745 6.9782e-06L145.423 0L128 30H0L16.0745 6.9782e-06Z" fill="white" />
                            </Svg>
                        )}
                        <Text style={[styles.button]}>{t("news-title")}</Text>
                    </TouchableOpacity>
                    {openAccordion === 'Новости' && (
                        <View style={styles.additionalMenu}>
                            <TouchableOpacity onPress={() => { navigation.navigate('NewsClubScreen', { initialSlug: 'novosti-kluba' }); onClose(); }}>
                                <Text style={styles.additionalButton}>{t('club')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('NewsClubScreen', { initialSlug: 'kajrat' }); onClose(); }}>
                                <Text style={styles.additionalButton}>{t('kairat')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('NewsClubScreen', { initialSlug: 'kajrat-zastar' }); onClose(); }}>
                                <Text style={styles.additionalButton}>{t('kairat-jastar')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('NewsClubScreen', { initialSlug: 'novosti-akademii' }); onClose(); }}>
                                <Text style={styles.additionalButton}>{t('academy')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('NewsClubScreen', { initialSlug: 'zenskij-futbol' }); onClose(); }}>
                                <Text style={styles.additionalButton}>{t('women-football')}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginTop: 16, marginLeft: 25 }} onPress={() => toggleOpenAccordion('Матчи')}>
                        {openAccordion === 'Матчи' && (
                            <Svg style={{ position: 'absolute', zIndex: -10 }} xmlns="http://www.w3.org/2000/svg" width={126} height={30} viewBox="0 0 146 30" fill="none">
                                <Path d="M16.0745 6.9782e-06L145.423 0L128 30H0L16.0745 6.9782e-06Z" fill="white" />
                            </Svg>
                        )}
                        <Text style={styles.button}>{t('matches-tab')}</Text>
                    </TouchableOpacity>
                    {openAccordion === 'Матчи' && (
                        <View style={styles.additionalMenu}>
                            <TouchableOpacity onPress={() => { navigation.navigate('AllMatches'); onClose(); }}>
                                <Text style={styles.additionalButton}>{t('matches-schedule')}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginTop: 16, marginLeft: 25, }} onPress={() => toggleOpenAccordion('Клубы')}>
                        {openAccordion === 'Клубы' && (
                            <Svg style={{ position: 'absolute', zIndex: -10 }} xmlns="http://www.w3.org/2000/svg" width={126} height={30} viewBox="0 0 146 30" fill="none">
                                <Path d="M16.0745 6.9782e-06L145.423 0L128 30H0L16.0745 6.9782e-06Z" fill="white" />
                            </Svg>
                        )}
                        <Text style={styles.button}>{t('club')}</Text>
                    </TouchableOpacity>
                    {openAccordion === 'Клубы' && (
                        <ScrollView style={[styles.additionalMenu, { height: 200 }]}>
                            <TouchableOpacity onPress={() => { navigation.navigate('OurMission', { scrollToOffset: 0 }); onClose(); }}>
                                <Text style={styles.additionalButton}>{t("club-tabs.mission")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('OurMission', { scrollToOffset: 1400 }); onClose(); }}>
                                <Text style={styles.additionalButton}>{t("club-tabs.club-history")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('OurMission', { scrollToOffset: 5200 }); onClose(); }}>
                                <Text style={styles.additionalButton}>{t("club-tabs.achievements")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('About'); onClose(); }}>
                                <Text style={styles.additionalButton}>{t("club-tabs.home-stadion")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('About', { scrollToOffset: 1450 }); onClose(); }}>
                                <Text style={styles.additionalButton}>{t("club-tabs.infrastructure")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('About', { scrollToOffset: 2400 }); onClose(); }}>
                                <Text style={styles.additionalButton}>{t("club-tabs.ceo")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('About', { scrollToOffset: 3000 }); onClose(); }}>
                                <Text style={styles.additionalButton}>{t("club-tabs.partners")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('Contacts'); onClose(); }}>
                                <Text style={styles.additionalButton}>{t("club-tabs.become-partner")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('About', { scrollToOffset: 3600 }); onClose(); }}>
                                <Text style={styles.additionalButton}>{t("club-tabs.press-center")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('About', { scrollToOffset: 5900 }); onClose(); }}>
                                <Text style={styles.additionalButton}>{t("club-tabs.social")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('About', { scrollToOffset: 6350 }); onClose(); }}>
                                <Text style={styles.additionalButton}>{t("club-tabs.about-city")}</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    )}
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginTop: 16, marginLeft: 25 }} onPress={() => toggleOpenAccordion('Команды')}>
                        {openAccordion === 'Команды' && (
                            <Svg style={{ position: 'absolute', zIndex: -10 }} xmlns="http://www.w3.org/2000/svg" width={146} height={30} viewBox="0 0 146 30" fill="none">
                                <Path d="M16.0745 6.9782e-06L145.423 0L128 30H0L16.0745 6.9782e-06Z" fill="white" />
                            </Svg>
                        )}
                        <Text style={styles.button}>{t('teams')}</Text>
                    </TouchableOpacity>
                    {openAccordion === 'Команды' && (
                        <View style={styles.additionalMenu}>
                            <TouchableOpacity onPress={() => { navigation.navigate('TeamKairatScreen', { slug: '76' }); onClose(); }}>
                                <Text style={styles.additionalButton}>{t('kairat')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('TeamKairatScreen', { slug: '77' }); onClose(); }}>
                                <Text style={styles.additionalButton}>{t('kairat-jastar')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('TeamKairatScreen', { slug: '78' }); onClose(); }}>
                                <Text style={styles.additionalButton}>{t('kairat-u18')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('TeamKairatScreen', { slug: '178' }); onClose(); }}>
                                <Text style={styles.additionalButton}>{t('kairat-u17')}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginTop: 16, marginLeft: 25 }} onPress={() => toggleOpenAccordion('Академии')}>
                        {openAccordion === 'Академии' && (
                            <Svg style={{ position: 'absolute', zIndex: -10 }} xmlns="http://www.w3.org/2000/svg" width={146} height={30} viewBox="0 0 146 30" fill="none">
                                <Path d="M16.0745 6.9782e-06L145.423 0L128 30H0L16.0745 6.9782e-06Z" fill="white" />
                            </Svg>
                        )}
                        <Text style={styles.button}>{t("academy")}</Text>
                    </TouchableOpacity>
                    {openAccordion === 'Академии' && (
                        <ScrollView style={[styles.additionalMenu, { height: 200, marginTop: 4 }]}>
                            <TouchableOpacity onPress={() => { navigation.navigate('PlayersAcademy', { slug: "about", ancgor: "#academy-3" }); onClose(); }}>
                                <Text style={styles.additionalButton}>{t('academy-one')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('PlayersAcademy', { slug: "about", ancgor: "#academy-1" }); onClose(); }}>
                                <Text style={styles.additionalButton}>{t('academy-two')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('PlayersAcademy', { slug: "about", ancgor: "#academy-2" }); onClose(); }}>
                                <Text style={styles.additionalButton}>{t('academy-three')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate("Section"); onClose(); }}>
                                <Text style={styles.additionalButton}>{t('selection')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('PlayersAcademy', { slug: "u-18", ancgor: "" }); onClose(); }}>
                                <Text style={styles.additionalButton}>{t('academy-players')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('PlayersAcademy', { slug: "coach", ancgor: "" }); onClose(); }}>
                                <Text style={styles.additionalButton}>{t('coach')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('PlayersAcademy', { slug: "administration", ancgor: "" }); onClose(); }}>
                                <Text style={styles.additionalButton}>{t('admins')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('PlayersAcademy', { slug: "about", ancgor: "#academy-branch" }); onClose(); }}>
                                <Text style={styles.additionalButton}>{t('filials')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('PlayersAcademy', { slug: "about", ancgor: "#academy-championship" }); onClose(); }}>
                                <Text style={styles.additionalButton}>{t('league')}</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    )}
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginTop: 16, marginLeft: 25 }} onPress={() => toggleOpenAccordion('Контакты')}>
                        {openAccordion === 'Контакты' && (
                            <Svg style={{ position: 'absolute', zIndex: -10 }} xmlns="http://www.w3.org/2000/svg" width={176} height={30} viewBox="0 0 146 30" fill="none">
                                <Path d="M16.0745 6.9782e-06L145.423 0L128 30H0L16.0745 6.9782e-06Z" fill="white" />
                            </Svg>
                        )}
                        <Text style={styles.button}>{t('contacts')}</Text>
                    </TouchableOpacity>
                    {openAccordion === 'Контакты' && (
                        <View style={styles.additionalMenu}>
                            <TouchableOpacity onPress={() => { navigation.navigate('Contacts'); onClose(); }}>
                                <Text style={styles.additionalButton}>{t('contacts')}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginTop: 16, marginLeft: 25 }} onPress={() => toggleOpenAccordion('Магазин')}>
                        {openAccordion === 'Магазин' && (
                            <Svg style={{ position: 'absolute', zIndex: -10 }} xmlns="http://www.w3.org/2000/svg" width={176} height={30} viewBox="0 0 146 30" fill="none">
                                <Path d="M16.0745 6.9782e-06L145.423 0L128 30H0L16.0745 6.9782e-06Z" fill="white" />
                            </Svg>
                        )}
                        <Text style={styles.button}>{t('shop')}</Text>
                    </TouchableOpacity>
                    {openAccordion === 'Магазин' && (
                        <ScrollView style={[styles.additionalMenu, { height: 200, marginTop: 10 }]}>
                            <TouchableOpacity onPress={() => { navigation.navigate("ShopScreen", { slug: "category/6" }); onClose(); }}>
                                <Text style={styles.additionalButton}>{t("shop-cat.cat-1")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate("ShopScreen", { slug: "category/7" }); onClose(); }}>
                                <Text style={styles.additionalButton}>{t("shop-cat.cat-2")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate("ShopScreen", { slug: "category/8" }); onClose(); }}>
                                <Text style={styles.additionalButton}>{t("shop-cat.cat-3")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate("ShopScreen", { slug: "category/9" }); onClose(); }}>
                                <Text style={styles.additionalButton}>{t("shop-cat.cat-4")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate("ShopScreen", { slug: "category/10" }); onClose(); }}>
                                <Text style={styles.additionalButton}>{t("shop-cat.cat-5")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate("ShopScreen", { slug: "category/12" }); onClose(); }}>
                                <Text style={styles.additionalButton}>{t("shop-cat.cat-6")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate("ShopScreen", { slug: "category/13" }); onClose(); }}>
                                <Text style={styles.additionalButton}>{t("shop-cat.cat-7")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate("ShopScreen", { slug: "category/14" }); onClose(); }}>
                                <Text style={styles.additionalButton}>{t("shop-cat.cat-8")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate("ShopScreen", { slug: "category/21" }); onClose(); }}>
                                <Text style={styles.additionalButton}>{t("shop-cat.cat-9")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate("ShopScreen", { slug: "category/21" }); onClose(); }}>
                                <Text style={styles.additionalButton}>{t("shop-cat.my-orders")}</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    )}
                </View>
                <View style={styles.media}>
                    <TouchableOpacity onPress={() => handlePress("https://www.instagram.com/f.c.kairat/")}>
                        <Entypo name="instagram" size={20} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress("https://vk.com/fckairat")}>
                        <FontAwesome6 style={{ marginLeft: 20 }} name="vk" size={20} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress("https://www.tiktok.com/@f.c.kairat_official")}>
                        <FontAwesome6 style={{ marginLeft: 20 }} name="tiktok" size={20} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress("https://t.me/fc_kairat")}>
                        <FontAwesome6 style={{ marginLeft: 20 }} name="telegram" size={20} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress("https://www.youtube.com/user/kairatofficial")}>
                        <AntDesign style={{ marginLeft: 20 }} name="youtube" size={20} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress("https://www.facebook.com/fckairat")}>
                        <FontAwesome5 style={{ marginLeft: 20 }} name="facebook" size={20} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

export default NavbarMenu;