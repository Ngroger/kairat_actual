import { Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import styles from '../../styles/NavbarStyle';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import NavbarMenu from './NavbarMenu';
import { Svg, Path, G } from 'react-native-svg';
import i18next from '../../i18next'
import { useWebView } from '../../context/WebViewContext';

function Navbar({ title, activityApp }) {
    const [isOpenRegistration, setIsOpenRegistration] = useState(false);
    const [isOpenMenu, setOpenMenu] = useState(false);
    const navigation = useNavigation();
    const [isShowLanguageSelector, setIsShowLanguageSelector] = useState(false);
    const [language, setLanguage] = useState();
    const { reloadWebView } = useWebView();

    useEffect(() => {
        setLanguage(i18next.language === 'kz' ? 'KZ' : 'RU');
    }, [i18next.language]);

    const toggleOpenMenu = () => {
        setOpenMenu(!isOpenMenu);
    };

    const changeLanguage = async (value, name) => {
        setLanguage(name);
        await i18next.changeLanguage(value);
        reloadWebView();
    }

    const navigateMain = () => {
        reloadWebView();
        navigation.navigate("Main");
    }

    return (
        <SafeAreaView style={isOpenMenu || isOpenRegistration === true ? { position: 'absolute', zIndex: 100000, width: '100%', height: '100%' } : { position: 'absolute', zIndex: 100000, width: '100%' }}>
            <View>
                <SafeAreaView style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Section')} style={{ marginLeft: 70 }}>
                        <Svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 20 20" fill="none">
                            <Path d="M12.8245 4.34199L13.9995 6.69199C14.1578 7.01699 14.5828 7.32532 14.9411 7.39198L17.0661 7.74198C18.4245 7.96698 18.7411 8.95032 17.7661 9.93365L16.1078 11.592C15.8328 11.867 15.6745 12.4087 15.7661 12.8003L16.2411 14.8503C16.6161 16.467 15.7495 17.1003 14.3245 16.2503L12.3328 15.067C11.9745 14.8503 11.3745 14.8503 11.0161 15.067L9.02446 16.2503C7.59946 17.092 6.7328 16.467 7.1078 14.8503L7.58281 12.8003C7.67448 12.417 7.51614 11.8753 7.24114 11.592L5.58281 9.93365C4.60781 8.95865 4.92448 7.97531 6.28281 7.74198L8.4078 7.39198C8.76613 7.33365 9.19114 7.01699 9.34947 6.69199L10.5245 4.34199C11.1495 3.06699 12.1828 3.06699 12.8245 4.34199Z" stroke="#231F20" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                            <Path d="M6.66699 4.1665H1.66699" stroke="#231F20" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                            <Path d="M4.16699 15.8335H1.66699" stroke="#231F20" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                            <Path d="M2.50033 10H1.66699" stroke="#231F20" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                        </Svg>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('AllMatches')} style={activityApp === 'Ticket' ? { marginLeft: 20, opacity: 0.5 } : { marginLeft: 20 }}>
                        <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 17 14" fill="none">
                            <Path fill-rule="evenodd" clip-rule="evenodd" d="M1.16868 1.01511C1.92907 0.254723 3.11921 0.0769043 4.65355 0.0769043H12.3459C13.8802 0.0769043 15.0703 0.254723 15.8307 1.01511C16.5911 1.7755 16.7689 2.96564 16.7689 4.49998V5.26921C16.7689 5.58784 16.5106 5.84614 16.192 5.84614C15.4491 5.84614 14.8459 6.44938 14.8459 7.19229C14.8459 7.9352 15.4491 8.53844 16.192 8.53844C16.5106 8.53844 16.7689 8.79674 16.7689 9.11537C16.7689 10.6497 16.5911 11.8398 15.8307 12.6002C15.0703 13.3606 13.8802 13.5384 12.3459 13.5384H4.65355C3.11921 13.5384 1.92907 13.3606 1.16868 12.6002C0.408287 11.8398 0.230469 10.6497 0.230469 9.11537V8.73075C0.230469 8.41213 0.488766 8.15383 0.807392 8.15383C1.5503 8.15383 2.15355 7.55059 2.15355 6.80767C2.15355 6.06476 1.5503 5.46152 0.807392 5.46152C0.488766 5.46152 0.230469 5.20322 0.230469 4.8846V4.49998C0.230469 2.96564 0.408287 1.7755 1.16868 1.01511ZM1.38478 4.37475C2.48681 4.63554 3.30739 5.62622 3.30739 6.80767C3.30739 7.98912 2.48681 8.97981 1.38478 9.2406C1.39581 10.6979 1.60191 11.4017 1.98457 11.7843C2.37803 12.1778 3.11096 12.3846 4.65355 12.3846H12.3459C13.8884 12.3846 14.6214 12.1778 15.0148 11.7843C15.3624 11.4368 15.5643 10.8245 15.6067 9.62331C14.5086 9.35965 13.692 8.37089 13.692 7.19229C13.692 6.01067 14.5128 5.01987 15.6151 4.75926V4.49998C15.6151 2.9574 15.4083 2.22446 15.0148 1.831C14.6214 1.43755 13.8884 1.23075 12.3459 1.23075H4.65355C3.11096 1.23075 2.37803 1.43755 1.98457 1.831C1.60191 2.21366 1.39581 2.91741 1.38478 4.37475Z" fill="#231F20" />
                            <Path fill-rule="evenodd" clip-rule="evenodd" d="M6.96071 0.0766601C7.27934 0.0766601 7.53764 0.334957 7.53764 0.653583L7.53764 2.19204C7.53764 2.51067 7.27934 2.76897 6.96071 2.76897C6.64209 2.76897 6.38379 2.51067 6.38379 2.19204L6.38379 0.653583C6.38379 0.334957 6.64209 0.0766601 6.96071 0.0766601ZM6.96071 4.69204C7.27934 4.69204 7.53764 4.95034 7.53764 5.26897L7.53764 8.34589C7.53764 8.66452 7.27934 8.92281 6.96071 8.92281C6.64209 8.92281 6.38379 8.66452 6.38379 8.34589L6.38379 5.26897C6.38379 4.95034 6.64209 4.69204 6.96071 4.69204ZM6.96071 10.8459C7.27934 10.8459 7.53764 11.1042 7.53764 11.4228L7.53764 12.9613C7.53764 13.2799 7.27934 13.5382 6.96071 13.5382C6.64209 13.5382 6.38379 13.2799 6.38379 12.9613L6.38379 11.4228C6.38379 11.1042 6.64209 10.8459 6.96071 10.8459Z" fill="#231F20" />
                        </Svg>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('SubscriptionScreen')} style={activityApp === 'Profile' ? { marginLeft: 20, opacity: 0.5 } : { marginLeft: 20 }}>
                        <Ionicons size={24} name='ticket-outline' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={activityApp === 'Profile' ? { marginLeft: 20, opacity: 0.5 } : { marginLeft: 20 }}>
                        <Svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 17 18" fill="none">
                            <Path d="M8.54587 9.54999C8.49651 9.54294 8.43305 9.54294 8.37664 9.54999C7.13562 9.50768 6.14844 8.49229 6.14844 7.24422C6.14844 5.96794 7.17792 4.9314 8.46126 4.9314C9.73754 4.9314 10.7741 5.96794 10.7741 7.24422C10.767 8.49229 9.7869 9.50768 8.54587 9.54999Z" stroke="#231F20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <Path d="M13.2141 14.2041C11.959 15.3535 10.2949 16.0515 8.46155 16.0515C6.62821 16.0515 4.96411 15.3535 3.70898 14.2041C3.7795 13.5413 4.20257 12.8926 4.95706 12.3849C6.88911 11.1015 10.0481 11.1015 11.966 12.3849C12.7205 12.8926 13.1436 13.5413 13.2141 14.2041Z" stroke="#231F20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <Path d="M8.46144 16.0513C12.3558 16.0513 15.5127 12.8943 15.5127 9.00001C15.5127 5.1057 12.3558 1.94873 8.46144 1.94873C4.56712 1.94873 1.41016 5.1057 1.41016 9.00001C1.41016 12.8943 4.56712 16.0513 8.46144 16.0513Z" stroke="#231F20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </Svg>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("ShopScreen", { slug: "" })} style={{ marginLeft: 20 }}>
                        <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18" fill="none">
                            <G opacity="1">
                                <Path d="M6.7627 10.5864C6.7627 11.9403 7.8768 13.0544 9.23064 13.0544C10.5845 13.0544 11.6986 11.9403 11.6986 10.5864" stroke="#231F20" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <Path d="M6.98225 1.94873L4.42969 4.50835" stroke="#231F20" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <Path d="M11.4814 1.94873L14.034 4.50835" stroke="#231F20" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <Path d="M2.17969 6.07383C2.17969 4.76934 2.87776 4.66357 3.74507 4.66357H14.7169C15.5842 4.66357 16.2823 4.76934 16.2823 6.07383C16.2823 7.58986 15.5842 7.48409 14.7169 7.48409H3.74507C2.87776 7.48409 2.17969 7.58986 2.17969 6.07383Z" stroke="#231F20" stroke-width="1.5" />
                                <Path d="M3.2373 7.5896L4.23154 13.6819C4.45718 15.0499 5.00013 16.0511 7.01679 16.0511H11.2687C13.4617 16.0511 13.786 15.0922 14.0399 13.7665L15.2245 7.5896" stroke="#231F20" stroke-width="1.5" stroke-linecap="round" />
                            </G>
                        </Svg>
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
                        <View style={styles.selectLanguage}>
                            <Svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 17 18" fill="none">
                                <Path d="M8.46139 15.3461C11.9663 15.3461 14.8075 12.5048 14.8075 8.99996C14.8075 5.49508 11.9663 2.65381 8.46139 2.65381C4.9565 2.65381 2.11523 5.49508 2.11523 8.99996C2.11523 12.5048 4.9565 15.3461 8.46139 15.3461Z" stroke="#231F20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <Path d="M7.05181 3.35889C6.11164 7.01929 6.11164 10.9805 7.05181 14.6409" stroke="#231F20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <Path d="M9.87207 3.35889C10.8122 7.01929 10.8122 10.9805 9.87207 14.6409" stroke="#231F20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <Path d="M2.82031 11.5976V11.1155C6.48071 12.0556 10.442 12.0556 14.1024 11.1155V11.5976" stroke="#231F20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <Path d="M2.82031 6.88482C6.48071 5.94464 10.442 5.94464 14.1024 6.88482" stroke="#231F20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </Svg>
                            <TouchableOpacity onPress={() => setIsShowLanguageSelector(!isShowLanguageSelector)} style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', left: 6 }}>
                                <Text style={styles.language}>{language}</Text>
                                <MaterialIcons name={isShowLanguageSelector ? "keyboard-arrow-up" : "keyboard-arrow-down"} size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
                <View style={styles.titleContainer}>
                    {isShowLanguageSelector && (
                        <View style={{ backgroundColor: '#FFF', width: '11%', position: 'absolute', zIndex: 100, top: -10, right: 35 }}>
                            {language === 'RU' ? (
                                <TouchableOpacity style={{ padding: 6 }} onPress={() => { changeLanguage('kz', 'KZ'); setIsShowLanguageSelector(false) }}>
                                    <Text style={styles.language}>KZ</Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity style={{ padding: 6 }} onPress={() => { changeLanguage('ru', 'RU'); setIsShowLanguageSelector(false) }}>
                                    <Text style={styles.language}>RU</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    )}
                    <TouchableOpacity style={{ position: 'absolute', zIndex: 10000, left: 0, top: -27 }} onPress={() => navigateMain()}>
                        <Image
                            style={styles.logo}
                            source={require('../../img/Logo-kairat_new.png')}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <Text style={[styles.title, { marginLeft: 100 }]}>{title}</Text>
                    <Ionicons onPress={toggleOpenMenu} name="menu" size={32} color="black" />
                </View>
            </View>
            {isOpenMenu && <NavbarMenu onClose={toggleOpenMenu} />}
        </SafeAreaView>
    )
};

export default Navbar;