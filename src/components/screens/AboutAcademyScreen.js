import { View, Text, TouchableOpacity, Image, ScrollView, Linking } from 'react-native';
import Navbar from '../ui/Navbar';
import { Svg, Path, Rect, ClipPath, Defs, G } from 'react-native-svg';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useRef, useEffect, useState } from 'react';
import OurPartners from '../ux/OurPartners';
import { SimpleLineIcons } from '@expo/vector-icons';
import BottomTabs from '../ui/BottomTabs';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';
import PressFeedback from '../ui/modal/PressFeedback';
import { scale } from 'react-native-size-matters';

function AboutAcademyScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const { scrollToOffset } = route.params || {};
    const [isShowOffer, setIsShowOffer] = useState(false);
    const [isShowMeirimi, setIsShowMeirimi] = useState(false);
    const [isShowBlind, setIsShowBlind] = useState(false);
    const [isPressFeedback, setisPressFeedback] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        if (scrollToOffset) {
            setTimeout(() => {
                scrollViewRef.current?.scrollTo({ y: scrollToOffset, animated: true });
            }, 100); // Установите задержку в 100 мс или больше, если нужно
        }
    }, [scrollToOffset]);


    const scrollViewRef = useRef();


    return (
        <View>
            <Navbar activityApp='Tickets' title={t("main-title")} />
            <ScrollView ref={scrollViewRef} style={{ backgroundColor: '#FFF', width: '100%', height: '100%', marginTop: 120 }}>
                <View style={{ width: '100%', height: 400 }}>
                    <Image style={{ position: 'absolute', zIndex: 10, right: 0 }} source={require('../../img/LINES3.png')} />
                    <Image style={{ width: '100%', height: '100%' }} source={require('../../img/Group25.png')} />
                    <Image style={{ position: 'absolute', zIndex: 10 }} source={require('../../img/LINES1.png')} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', padding: 24 }}>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                        <G clip-path="url(#clip0_1_3616)">
                            <Path d="M14.7896 0H4.90269C2.19923 0 0 2.28989 0 5.1048V10.8956C0 13.7105 2.19923 16.0004 4.90269 16.0004H14.79C17.4935 16.0004 19.6927 13.7105 19.6927 10.8956V5.1048C19.6923 2.28989 17.4931 0 14.7896 0ZM12.2769 1.20141H14.7896C14.8035 1.20141 14.8169 1.20181 14.8308 1.20181V3.86134C14.8169 3.86134 14.8035 3.86014 14.7896 3.86014H12.2769V1.20141ZM14.7896 6.43436C14.4712 6.43436 14.2127 6.70348 14.2127 7.03507V9.00819H12.8396C12.605 7.73909 11.6423 6.73632 10.4231 6.49243V5.06235H14.7896C15.6362 5.06235 16.3512 5.63863 16.595 6.43476H14.7896V6.43436ZM16.6846 7.63577V8.47155C16.2862 8.71544 15.8412 8.88484 15.3665 8.96133V7.63577H16.6846ZM4.90269 6.43436H3.09731C3.34115 5.63783 4.05692 5.06195 4.90269 5.06195H9.26923V6.49203C8.05 6.73632 7.08731 7.73869 6.85269 9.00779H5.47923V7.03467C5.47923 6.70308 5.22077 6.43396 4.90231 6.43396L4.90269 6.43436ZM4.32577 7.63577V8.96133C3.85154 8.88444 3.40615 8.71544 3.00769 8.47155V7.63577H4.32577ZM9.84616 7.63577C10.69 7.63577 11.4065 8.21285 11.6512 9.00819H8.04116C8.28577 8.21285 9.00231 7.63577 9.84616 7.63577ZM8.56923 1.20141H11.1231V3.86054H8.56923V1.20141ZM4.86154 1.20181C4.87539 1.20181 4.88885 1.20141 4.90269 1.20141H7.41539V3.86054H4.90269C4.88885 3.86054 4.87539 3.86134 4.86154 3.86174V1.20181ZM3.70769 1.40445V4.11283C2.61692 4.5966 1.85385 5.72232 1.85385 7.03467V7.37306C1.41346 6.73311 1.15385 5.94979 1.15385 5.1044C1.15385 3.38718 2.22462 1.92506 3.70769 1.40445ZM11.1231 14.7986H8.56923V14.1126C8.56923 13.3793 9.14192 12.783 9.84616 12.783C10.5504 12.783 11.1231 13.3793 11.1231 14.1126V14.7986ZM18.5385 10.8952C18.5385 13.0473 16.8569 14.7986 14.7896 14.7986H12.2769V14.1126C12.2769 12.7169 11.1865 11.5816 9.84616 11.5816C8.50577 11.5816 7.41539 12.7169 7.41539 14.1126V14.7986H4.90269C2.83577 14.7986 1.15385 13.0477 1.15385 10.8952V8.39026C2.05385 9.50197 3.40039 10.2092 4.90269 10.2092H14.79C16.2923 10.2092 17.6388 9.50157 18.5388 8.39026V10.8952H18.5385ZM17.8385 7.37306V7.03467C17.8385 5.72072 17.0746 4.5962 15.9846 4.11323V1.40485C17.4677 1.92546 18.5385 3.38718 18.5385 5.1048C18.5385 5.95019 18.2788 6.73391 17.8385 7.37346V7.37306Z" fill="black" />
                        </G>
                        <Defs>
                            <ClipPath id="clip0_1_3616">
                                <Rect width="19.6923" height="16" fill="white" />
                            </ClipPath>
                        </Defs>
                    </Svg>
                    <Text style={{ fontFamily: 'MulishExtraBold', fontSize: 20, marginLeft: 10 }}>{t("home-stadion").toUpperCase()}</Text>
                </View>
                {t("home-stadion-description").split('\n').map((line, index) => (
                    <Text key={index} style={{ paddingHorizontal: 24, fontSize: 16, fontFamily: 'MulishMedium' }}>
                        {line}
                    </Text>
                ))}
                <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', padding: 24 }}>
                    <Text style={{ fontFamily: 'MulishExtraBold', fontSize: 20 }}>{t("centered-stadion.title").toUpperCase()}</Text>
                </View>
                {t("centered-stadion.description").split('\n').map((line, index) => (
                    <Text key={index} style={{ paddingHorizontal: 24, fontSize: 16, fontFamily: 'MulishMedium' }}>
                        {line}
                    </Text>
                ))}
                <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', padding: 24 }}>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <G clip-path="url(#clip0_1_3633)">
                            <Path d="M15.5312 6.52719H12.8534C12.5947 6.52719 12.3847 6.73719 12.3847 6.99594V7.53125H11.5644V4.48531C11.5644 3.67313 10.9037 3.0125 10.0916 3.0125H9.80875V2.47719C9.80875 2.21844 9.59875 2.00844 9.34 2.00844H6.66219C6.40344 2.00844 6.19344 2.21844 6.19344 2.47719V3.0125H5.37375V2.47719C5.37375 1.665 4.71281 1.00437 3.90094 1.00437H3.61531V0.46875C3.61531 0.21 3.40531 0 3.14656 0H0.46875C0.21 0 0 0.21 0 0.46875V2.47719C0 2.73594 0.21 2.94594 0.46875 2.94594H3.14656C3.40531 2.94594 3.61531 2.73594 3.61531 2.47719V1.94187H3.90094C4.19625 1.94187 4.43625 2.18219 4.43625 2.47719V4.48562C4.43625 4.78094 4.19594 5.02094 3.90094 5.02094H3.61531V4.48562C3.61531 4.22687 3.40531 4.01687 3.14656 4.01687H0.46875C0.21 4.01687 0 4.22687 0 4.48562V6.49406C0 6.75281 0.21 6.96281 0.46875 6.96281H3.14656C3.40531 6.96281 3.61531 6.75281 3.61531 6.49406V5.95875H3.90094C4.71313 5.95875 5.37375 5.29781 5.37375 4.48594V3.95062H6.19344V4.48594C6.19344 4.74469 6.40344 4.95469 6.66219 4.95469H9.34C9.59875 4.95469 9.80875 4.74469 9.80875 4.48594V3.95062H10.0916C10.3869 3.95062 10.6269 4.19094 10.6269 4.48594V11.515C10.6269 11.8103 10.3866 12.0503 10.0916 12.0503H9.80875V11.515C9.80875 11.2563 9.59875 11.0463 9.34 11.0463H6.66219C6.40344 11.0463 6.19344 11.2563 6.19344 11.515V12.0503H5.37375V11.515C5.37375 10.7028 4.71281 10.0422 3.90094 10.0422H3.61531V9.50688C3.61531 9.24813 3.40531 9.03813 3.14656 9.03813H0.46875C0.21 9.03813 0 9.24813 0 9.50688V11.5153C0 11.7741 0.21 11.9841 0.46875 11.9841H3.14656C3.40531 11.9841 3.61531 11.7741 3.61531 11.5153V10.98H3.90094C4.19625 10.98 4.43625 11.2203 4.43625 11.5153V13.5238C4.43625 13.8191 4.19594 14.0591 3.90094 14.0591H3.61531V13.5238C3.61531 13.265 3.40531 13.055 3.14656 13.055H0.46875C0.21 13.055 0 13.265 0 13.5238V15.5322C0 15.7909 0.21 16.0009 0.46875 16.0009H3.14656C3.40531 16.0009 3.61531 15.7909 3.61531 15.5322V14.9969H3.90094C4.71313 14.9969 5.37375 14.3362 5.37375 13.5241V12.9888H6.19344V13.5241C6.19344 13.7828 6.40344 13.9928 6.66219 13.9928H9.34C9.59875 13.9928 9.80875 13.7828 9.80875 13.5241V12.9888H10.0916C10.9037 12.9888 11.5644 12.3281 11.5644 11.5159V8.47H12.3847V9.00531C12.3847 9.26406 12.5947 9.47406 12.8534 9.47406H15.5312C15.79 9.47406 16 9.26406 16 9.00531V6.99687C16 6.73812 15.79 6.52812 15.5312 6.52812V6.52719ZM2.67781 2.00844H0.9375V0.9375H2.67781V2.00844ZM2.67781 6.025H0.9375V4.95406H2.67781V6.025ZM8.87156 4.01656H7.13125V2.94563H8.87156V4.01656ZM2.67781 11.0456H0.9375V9.97469H2.67781V11.0456ZM2.67781 15.0622H0.9375V13.9913H2.67781V15.0622ZM8.87156 13.0538H7.13125V11.9828H8.87156V13.0538ZM15.0625 8.535H13.3222V7.46406H15.0625V8.535Z" fill="black" />
                        </G>
                        <Defs>
                            <ClipPath id="clip0_1_3633">
                                <Rect width="16" height="16" fill="white" />
                            </ClipPath>
                        </Defs>
                    </Svg>
                    <Text style={{ fontFamily: 'MulishExtraBold', fontSize: 20, marginLeft: 10 }}>{t("club-infrastructure.title")}</Text>
                </View>
                <View>
                    <View style={{ paddingHorizontal: 24, paddingVertical: 10, flexDirection: 'row', display: 'flex' }}>
                        <Image style={{ borderRadius: 12, width: 168, height: 120 }} source={require('../../img/history4.png')} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 16, fontFamily: 'MulishBold' }}>{t("club-infrastructure.admins.title")}</Text>
                            {t("club-infrastructure.admins.address").split("\n").map((line, index) => (
                                <Text key={index} style={{ fontFamily: 'MulishRegular', fontSize: 12, marginTop: 4 }}>
                                    {line}
                                </Text>
                            ))}
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 24, paddingVertical: 10, flexDirection: 'row', display: 'flex' }}>
                        <View style={{ width: 168, height: 120 }}>
                            <Image style={{ borderRadius: 12, width: '100%', height: '100%' }} source={require('../../img/history5.png')} />
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 16, fontFamily: 'MulishBold', width: 150 }}>{t("club-infrastructure.trains-base.title")}</Text>
                            {t("club-infrastructure.trains-base.address").split('\n').map((line, index) => (
                                <Text key={index} style={{ fontFamily: 'MulishRegular', fontSize: 12, marginTop: 4 }}>
                                    {line}
                                </Text>
                            ))}
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 24, paddingVertical: 10, flexDirection: 'row', display: 'flex' }}>
                        <View style={{ width: 168, height: 120 }}>
                            <Image style={{ borderRadius: 12, width: '100%', height: '100%', resizeMode: 'contain' }} source={require('../../img/history6.png')} />
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 16, fontFamily: 'MulishBold', width: 150 }}>{t("club-infrastructure.children-academy.title")}</Text>
                            {t("club-infrastructure.trains-base.address").split('\n').map((line, index) => (
                                <Text key={index} style={{ fontFamily: 'MulishRegular', fontSize: 12, marginTop: 4 }}>
                                    {line}
                                </Text>
                            ))}
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 24, paddingVertical: 10, flexDirection: 'row', display: 'flex' }}>
                        <View style={{ width: 168, height: 120 }}>
                            <Image style={{ borderRadius: 12, width: '100%', height: '100%' }} source={require('../../img/history7.png')} />
                            <TouchableOpacity
                                onPress={() => Linking.openURL('https://www.instagram.com/fckairat_academy/')}
                                style={{ backgroundColor: '#FECC01', padding: 6, borderRadius: 6, position: 'absolute', zIndex: 10, right: 10, bottom: 10 }}
                            >
                                <Text style={{ fontFamily: 'MulishBold', fontSize: 16 }}>{t("more-button")}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 16, fontFamily: 'MulishBold', width: 150 }}>{t("club-infrastructure.youthful-academy.title")}</Text>
                            {t("club-infrastructure.youthful-academy.address").split('\n').map((line, index) => (
                                <Text key={index} style={{ fontFamily: 'MulishRegular', fontSize: 12, marginTop: 4 }}>
                                    {line}
                                </Text>
                            ))}
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 24, paddingVertical: 10, flexDirection: 'row', display: 'flex' }}>
                        <View style={{ width: 168, height: 120 }}>
                            <Image style={{ borderRadius: 12, width: '100%', height: '100%' }} source={require('../../img/history8.png')} />
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 16, fontFamily: 'MulishBold', width: 150 }}>{t("club-infrastructure.pahlavanidi-academy.title")}</Text>
                            {t("club-infrastructure.pahlavanidi-academy.address").split('\n').map((line, index) => (
                                <Text key={index} style={{ fontFamily: 'MulishRegular', fontSize: 12, marginTop: 4 }}>
                                    {line}
                                </Text>
                            ))}
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 24, paddingVertical: 10, flexDirection: 'row', display: 'flex' }}>
                        <View style={{ width: 168, height: 120 }}>
                            <Image style={{ borderRadius: 12, width: '100%', height: '100%' }} source={require('../../img/history9.png')} />
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 16, fontFamily: 'MulishBold', width: 150 }}>{t("club-infrastructure.official-shop.title")}</Text>
                            {t("club-infrastructure.official-shop.address").split('\n').map((line, index) => (
                                <Text key={index} style={{ fontFamily: 'MulishRegular', fontSize: 12, marginTop: 4 }}>
                                    {line}
                                </Text>
                            ))}
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 24, paddingVertical: 10, flexDirection: 'row', display: 'flex' }}>
                        <View style={{ width: 168, height: 120 }}>
                            <Image style={{ borderRadius: 12, width: '100%', height: '100%' }} source={require('../../img/history10.png')} />
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 16, fontFamily: 'MulishBold', width: 150 }}>{t("club-infrastructure.sport-bar.title")}</Text>
                            {t("club-infrastructure.sport-bar.address").split('\n').map((line, index) => (
                                <Text key={index} style={{ fontFamily: 'MulishRegular', fontSize: 12, marginTop: 4 }}>
                                    {line}
                                </Text>
                            ))}
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', padding: 24 }}>
                        <Svg xmlns="http://www.w3.org/2000/svg" width="14" height="19" viewBox="0 0 14 19" fill="none">
                            <Path d="M12.4419 0H5.39942C4.53868 0 3.84132 0.648301 3.84132 1.45098V5.09586L1.28382 7.47754C0.874575 7.85865 0.640264 8.38598 0.640264 8.9248V15.9897L0.0178244 18.3083C-0.0268064 18.4745 0.013441 18.6508 0.126612 18.7859C0.239783 18.921 0.413524 19 0.597626 19H5.07943C5.35359 19 5.59268 18.8263 5.65923 18.5784L6.21552 16.5055L6.42353 16.4502C7.49587 16.1652 8.33867 15.4037 8.67818 14.414C8.90213 13.7602 8.885 13.0696 8.6467 12.442H12.4419C13.3011 12.442 14 11.7911 14 10.9911V1.45098C14 0.650898 13.3011 0 12.4419 0ZM7.5393 14.0752C7.32212 14.7094 6.78217 15.197 6.09518 15.3796L5.55483 15.5236C5.3496 15.5781 5.19101 15.7307 5.1392 15.9236L4.612 17.8867H1.36312L1.8178 16.1934C1.82975 16.1493 1.83573 16.104 1.83573 16.0583V8.9248C1.83573 8.67914 1.94253 8.4383 2.12942 8.26463L3.84172 6.67004V11.8846C3.84172 12.1919 4.10951 12.4413 4.43946 12.4413C4.76941 12.4413 5.03719 12.1919 5.03719 11.8846V9.79799C5.03719 9.28291 5.48708 8.86395 6.04019 8.86395C6.59329 8.86395 7.04318 9.28291 7.04318 9.79799V11.8846C7.04318 12.0112 7.08941 12.1337 7.17428 12.2324C7.62059 12.7519 7.75767 13.4406 7.5401 14.0748L7.5393 14.0752ZM12.8045 10.9907C12.8045 11.177 12.642 11.3284 12.4419 11.3284H8.23785V9.79836C8.23785 8.66949 7.25159 7.75103 6.03939 7.75103C5.67836 7.75103 5.33725 7.83268 5.03639 7.97666V1.45098C5.03639 1.26691 5.19619 1.11328 5.39902 1.11328H12.4415C12.6416 1.11328 12.8041 1.26469 12.8041 1.45098V10.9907H12.8045Z" fill="black" />
                        </Svg>
                        <Text style={{ fontFamily: 'MulishExtraBold', fontSize: 20, marginLeft: 10 }}>{t("club-management.title").toUpperCase()}</Text>
                    </View>
                    <ScrollView horizontal={true}>
                        <View style={{ marginLeft: 24 }}>
                            <View style={{ width: 251, height: 240, backgroundColor: '#D9D9D9', justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../../img/Group53.png')} style={{ position: 'absolute', zIndex: -10, width: '100%', height: '100%', resizeMode: 'cover' }} />
                                <Image resizeMode="contain" style={{ position: 'absolute', zIndex: 20, borderWidth: 1, width: 160, height: 193, bottom: 0 }} source={require('../../img/Rukovodstvo1.png')} />
                            </View>
                            <Text style={{ fontSize: 16, fontFamily: 'MulishBlack', padding: 12, width: '100%', borderBottomColor: '#FECC01', borderBottomWidth: 4 }}>{t("club-management.one.name")}</Text>

                            <Text style={{ fontFamily: 'MulishRegular', padding: 12, fontSize: 16, width: 200 }}>{t("club-management.one.role")}</Text>
                        </View>
                        <View style={{ marginLeft: 24 }}>
                            <View style={{ width: 251, height: 240, backgroundColor: '#D9D9D9', justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../../img/Group53.png')} style={{ position: 'absolute', zIndex: -10, width: '100%', height: '100%', resizeMode: 'cover' }} />
                                <Image resizeMode="contain" style={{ position: 'absolute', zIndex: 20, borderWidth: 1, width: 160, height: 193, bottom: 0 }} source={require('../../img/Rukovodstvo2.png')} />
                            </View>
                            <Text style={{ fontSize: 16, fontFamily: 'MulishBlack', padding: 12, width: '100%', borderBottomColor: '#FECC01', borderBottomWidth: 4 }}>{t("club-management.two.name")}</Text>
                            <Text style={{ fontFamily: 'MulishRegular', padding: 12, fontSize: 16, width: 200 }}>{t("club-management.two.role")}</Text>
                        </View>
                        <View style={{ marginLeft: 24 }}>
                            <View style={{ width: 251, height: 240, backgroundColor: '#D9D9D9', justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../../img/Group53.png')} style={{ position: 'absolute', zIndex: -10, width: '100%', height: '100%', resizeMode: 'cover' }} />
                                <Image resizeMode="contain" style={{ position: 'absolute', zIndex: 20, borderWidth: 1, width: 160, height: 193, bottom: 0 }} source={require('../../img/Rukovodstvo3.png')} />
                            </View>
                            <Text style={{ fontSize: 16, fontFamily: 'MulishBlack', padding: 12, width: '100%', borderBottomColor: '#FECC01', borderBottomWidth: 4 }}>{t("club-management.three.name")}</Text>
                            <Text style={{ fontFamily: 'MulishRegular', padding: 12, fontSize: 16, width: 200 }}>{t("club-management.three.role")}</Text>
                        </View>
                        <View style={{ marginLeft: 24, marginRight: 24 }}>
                            <View style={{ width: 251, height: 240, backgroundColor: '#D9D9D9', justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../../img/Group53.png')} style={{ position: 'absolute', zIndex: -10, width: '100%', height: '100%', resizeMode: 'cover' }} />
                                <Image resizeMode="contain" style={{ position: 'absolute', zIndex: 20, borderWidth: 1, width: 160, height: 193, bottom: 0 }} source={require('../../img/Rukovodstvo4.png')} />
                            </View>
                            <Text style={{ fontSize: 16, fontFamily: 'MulishBlack', padding: 12, width: '100%', borderBottomColor: '#FECC01', borderBottomWidth: 4 }}>{t("club-management.four.name")}</Text>
                            <Text style={{ fontFamily: 'MulishRegular', padding: 12, fontSize: 16, width: 200 }}>{t("club-management.four.role")}</Text>
                        </View>
                    </ScrollView>
                    <View style={{ marginTop: 48 }}>
                        <OurPartners />
                    </View>
                </View>
                <View style={{ paddingHorizontal: 24, marginTop: 10 }}>
                    <View style={{ borderBottomColor: '#FECC01', borderBottomWidth: 3, width: '100%', paddingVertical: 12 }}>
                        <TouchableOpacity onPress={() => setIsShowOffer(!isShowOffer)} style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', paddingHorizontal: 6, justifyContent: 'space-between' }}>
                            <Text style={{ fontFamily: 'MulishBlack', fontSize: 16 }}>• {t("cooperation.title")}</Text>
                            <SimpleLineIcons name={isShowOffer ? "arrow-up" : "arrow-down"} size={24} color="black" />
                        </TouchableOpacity>
                        {isShowOffer && (
                            <>
                                {t("cooperation.description").split('\n').map((line, index) => (
                                    <Text key={index} style={{ fontSize: 16, marginTop: 10, fontFamily: 'MulishRegular' }}>
                                        {line}
                                    </Text>
                                ))}
                            </>
                        )}
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', padding: 24 }}>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
                        <G clip-path="url(#clip0_1_3957)">
                            <Path d="M15.2208 0H7.32039C6.33919 0 5.54122 0.791406 5.54122 1.76367V2.74766H0V19.9996H12.265V2.74805H6.72379V1.76406C6.72379 1.43789 6.99175 1.17227 7.32079 1.17227H12.8447C13.1737 1.17227 13.4417 1.43789 13.4417 1.76406V8.22422C13.4417 9.19687 14.24 9.98789 15.2208 9.98789C16.2016 9.98789 17 9.19648 17 8.22422V1.76367C17 0.791406 16.202 0 15.2208 0ZM5.27524 3.91992H6.98938V5.09219H5.27524V3.91992ZM11.0824 18.8281H1.18217V3.91992H4.09307V6.26406H8.17155V3.91992H11.0824V18.8281ZM15.8174 8.22422C15.8174 8.55039 15.5495 8.81602 15.2204 8.81602C14.8914 8.81602 14.6234 8.55039 14.6234 8.22422V1.76406C14.6234 1.55664 14.5872 1.35703 14.5202 1.17187H15.2204C15.5495 1.17187 15.8174 1.4375 15.8174 1.76367V8.22383V8.22422Z" fill="black" />
                            <Path d="M8.31496 10.541V9.38673C8.31496 8.31134 7.43228 7.43634 6.34744 7.43634H5.91752C4.83268 7.43634 3.95 8.31134 3.95 9.38673V10.541C3.95 10.984 4.08476 11.3961 4.31607 11.7391C3.52047 12.1004 2.96643 12.8973 2.96643 13.8199V15.259H9.29813V13.8199C9.29813 12.8973 8.74409 12.1004 7.94849 11.7391C8.1798 11.3957 8.31457 10.9836 8.31457 10.541H8.31496ZM5.13217 10.541V10.5109H7.1324V10.541C7.1324 11.0879 6.68357 11.5324 6.13228 11.5324C5.581 11.5324 5.13217 11.0875 5.13217 10.541ZM5.91752 8.60822H6.34744C6.76435 8.60822 7.10639 8.93165 7.13122 9.33868H5.13374C5.15896 8.93165 5.50061 8.60822 5.91752 8.60822ZM8.11596 14.0871H4.14899V13.8199C4.14899 13.2047 4.65378 12.7043 5.27442 12.7043H6.99054C7.61118 12.7043 8.11596 13.2047 8.11596 13.8199V14.0871Z" fill="black" />
                            <Path d="M2.96643 16.484H9.29813V17.6559H2.96643V16.484Z" fill="black" />
                        </G>
                        <Defs>
                            <ClipPath id="clip0_1_3957">
                                <Rect width="17" height="20" fill="white" />
                            </ClipPath>
                        </Defs>
                    </Svg>
                    <Text style={{ fontFamily: 'MulishExtraBold', fontSize: 20, marginLeft: 10 }}>{t("press-center-title")}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', paddingHorizontal: 24 }}>
                    <Text style={{ fontFamily: 'MulishExtraBold', fontSize: 20 }}>{t("reglament")}</Text>
                </View>
                {t("accreditation").split('\n').map((line, index) => (
                    <Text key={index} style={{ fontFamily: 'MulishRegular', fontSize: 16, paddingHorizontal: 24, marginTop: 12 }}>
                        {line}
                    </Text>
                ))}
                <View style={{ paddingHorizontal: 24 }}>
                    <View style={{ backgroundColor: '#FECC01', width: '100%', borderRadius: 12, padding: 12, flexDirection: 'row', display: 'flex' }}>
                        <Image style={{ width: 69, height: 125 }} source={require('../../img/123.png')} />
                        <View style={{ marginLeft: 12 }}>
                            <Text style={{ fontSize: scale(14), fontFamily: 'MulishBlack' }}>{t("press-center-info.title")}</Text>
                            {t("press-center-info.address").split('\n').map((line, index) => (
                                <Text key={index} style={{ fontSize: scale(14), fontFamily: 'MulishRegular', marginTop: 10 }}>
                                    {line}
                                </Text>
                            ))}
                            <TouchableOpacity onPress={() => setisPressFeedback(true)} style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF', borderRadius: 12, width: 170, padding: 6 }}>
                                <Text style={{ fontSize: scale(14), fontFamily: 'MulishMedium' }}>{t("press-center-info.send")}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 24, marginTop: 24 }}>
                    <Text style={{ fontSize: 20, fontFamily: 'MulishBlack' }}>{t("media-accreditation.title")}</Text>
                    {t("media-accreditation.info").split('\n').map((line, index) => (
                        <Text key={index} style={{ fontSize: 16, marginTop: 10, fontFamily: 'MulishRegular' }}>{line}</Text>
                    ))}
                    {t("media-accreditation.cancel").split('\n').map((line, index) => (
                        <Text key={index} style={{ fontSize: 16, marginTop: 10, fontFamily: 'MulishBlack' }}>{line}</Text>
                    ))}
                </View>
                <View style={{ padding: 24 }}>
                    <Text style={{ fontSize: 20, fontFamily: 'MulishBlack' }}>{t("media-rules.title")}</Text>
                    <View style={{ borderWidth: 2, borderRadius: 12, borderColor: '#FECC01', padding: 24, marginTop: 10 }}>
                        {t("media-rules.info").split('\n').map((line, index) => (
                            <Text key={index} style={{ fontSize: 16, fontFamily: 'MulishRegular' }}>
                                {line}
                            </Text>
                        ))}
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', padding: 24 }}>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <G clip-path="url(#clip0_1_3976)">
                            <Path d="M14.625 14.8007H13.037L12.4066 7.04065C12.7048 6.63706 12.8672 6.14944 12.8672 5.64179V2.67179C12.8672 2.49249 12.7754 2.3255 12.6246 2.22812L9.28475 0.083584C9.11108 -0.0278613 8.88854 -0.0278613 8.71487 0.083584L5.37502 2.22812C5.22737 2.32339 5.13245 2.48933 5.13245 2.67179V5.64179C5.13245 6.14979 5.29487 6.63706 5.59299 7.04065L4.96264 14.8007H3.37463C2.69612 14.8007 2.14417 15.3526 2.14417 16.0312V17.4726C2.14417 17.7637 2.38041 17.9999 2.67151 17.9999H15.3278C15.6189 17.9999 15.8551 17.7637 15.8551 17.4726V16.0312C15.8551 15.3526 15.3031 14.8007 14.6246 14.8007H14.625ZM8.47088 6.36319V5.30851H9.52733V6.36319H8.47088ZM10.0547 4.25382H7.94354C7.65245 4.25382 7.4162 4.49007 7.4162 4.78116V6.36319H6.4051C6.26377 6.15085 6.18749 5.90089 6.18749 5.64179V3.19913H11.8125V5.64179C11.8125 5.90089 11.7362 6.15085 11.5949 6.36319H10.582V4.78116C10.582 4.49007 10.3458 4.25382 10.0547 4.25382ZM8.99999 1.15409L10.5426 2.14444H7.45733L8.99999 1.15409ZM6.62096 7.41788H11.3794L11.9791 14.8007H8.47299V13.746C8.47299 13.4549 8.23674 13.2187 7.94565 13.2187C7.65456 13.2187 7.41831 13.4549 7.41831 13.746V14.8007H6.02155L6.62131 7.41788H6.62096ZM14.8008 16.9452H3.1992V16.0312C3.1992 15.9341 3.27795 15.8554 3.37499 15.8554H14.625C14.722 15.8554 14.8008 15.9341 14.8008 16.0312V16.9452Z" fill="black" />
                            <Path d="M7.94531 10.0547C8.23641 10.0547 8.47266 9.81844 8.47266 9.52734V8.47266C8.47266 8.18156 8.23641 7.94531 7.94531 7.94531C7.65422 7.94531 7.41797 8.18156 7.41797 8.47266V9.52734C7.41797 9.81844 7.65422 10.0547 7.94531 10.0547Z" fill="black" />
                            <Path d="M10.0547 12.6914C10.3458 12.6914 10.582 12.4552 10.582 12.1641V11.1094C10.582 10.8183 10.3458 10.582 10.0547 10.582C9.76359 10.582 9.52734 10.8183 9.52734 11.1094V12.1641C9.52734 12.4552 9.76359 12.6914 10.0547 12.6914Z" fill="black" />
                            <Path d="M17.4727 4.25391H15.8906C15.5995 4.25391 15.3633 4.49016 15.3633 4.78125C15.3633 5.07234 15.5995 5.30859 15.8906 5.30859H17.4727C17.7638 5.30859 18 5.07234 18 4.78125C18 4.49016 17.7638 4.25391 17.4727 4.25391Z" fill="black" />
                            <Path d="M16.6486 6.99117L15.1618 6.45012C14.8883 6.35062 14.5856 6.4916 14.4858 6.76511C14.3863 7.03898 14.5272 7.34133 14.8008 7.44117L16.2875 7.98222C16.5614 8.08172 16.8637 7.94074 16.9636 7.66722C17.0631 7.39336 16.9221 7.09101 16.6486 6.99117Z" fill="black" />
                            <Path d="M15.1618 3.11242L16.6486 2.57136C16.9221 2.47187 17.0634 2.16917 16.9636 1.89531C16.8641 1.62179 16.5614 1.48046 16.2875 1.57996L14.8008 2.12101C14.5273 2.2205 14.3859 2.5232 14.4858 2.79706C14.5853 3.07093 14.888 3.21191 15.1618 3.11206V3.11242Z" fill="black" />
                            <Path d="M2.63672 4.78125C2.63672 4.49016 2.40047 4.25391 2.10938 4.25391H0.527344C0.23625 4.25391 0 4.49016 0 4.78125C0 5.07234 0.23625 5.30859 0.527344 5.30859H2.10938C2.40047 5.30859 2.63672 5.07234 2.63672 4.78125Z" fill="black" />
                            <Path d="M3.51382 6.76522C3.41433 6.49135 3.11163 6.35038 2.83777 6.44987L1.35136 6.99092C1.07785 7.09041 0.936518 7.39311 1.03601 7.66698C1.1355 7.94049 1.4382 8.08182 1.71206 7.98233L3.19847 7.44127C3.47234 7.34178 3.61331 7.03909 3.51382 6.76522Z" fill="black" />
                            <Path d="M1.3514 2.5714L2.83781 3.11246C3.11132 3.21195 3.41402 3.07097 3.51386 2.7971C3.61371 2.52324 3.47238 2.22089 3.19851 2.12105L1.7121 1.57999C1.43859 1.4805 1.13589 1.62148 1.03605 1.89535C0.936557 2.16886 1.07753 2.47156 1.3514 2.5714Z" fill="black" />
                        </G>
                        <Defs>
                            <ClipPath id="clip0_1_3976">
                                <Rect width="18" height="18" fill="white" />
                            </ClipPath>
                        </Defs>
                    </Svg>
                    <Text style={{ fontFamily: 'MulishExtraBold', fontSize: 20, marginLeft: 10 }}>{t("social-responsibility-info.title")}</Text>
                </View>
                <View style={{ paddingHorizontal: 24 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                        <Image style={{ height: 40, width: 35, resizeMode: 'center' }} source={require('../../img/Alma2.png')} />
                        <Text style={{ fontFamily: 'MulishExtraBold', fontSize: 12, marginLeft: 10, width: 300 }}>{t("social-responsibility-info.description")}</Text>
                    </View>
                    {t("social-responsibility-info.info").split('\n').map((line, index) => (
                        <Text key={index} style={{ fontSize: 16, fontFamily: 'MulishRegular', marginTop: 24 }}>
                            {line}
                        </Text>
                    ))}
                </View>
                <View style={{ paddingHorizontal: 24 }}>
                    <View style={{ borderBottomColor: '#FECC01', borderBottomWidth: 3, width: '100%', paddingVertical: 12 }}>
                        <TouchableOpacity onPress={() => setIsShowMeirimi(!isShowMeirimi)} style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', paddingHorizontal: 6, justifyContent: 'space-between' }}>
                            <Text style={{ fontFamily: 'MulishBlack', fontSize: 16 }}>{t("meirimi.title")}</Text>
                            <SimpleLineIcons name={isShowMeirimi ? "arrow-up" : "arrow-down"} size={24} color="black" />
                        </TouchableOpacity>
                        {isShowMeirimi && (
                            <>
                                {t("meirimi.description").split('\n').map((line, index) => (
                                    <Text key={index} style={{ fontSize: 16, marginTop: 10, fontFamily: 'MulishRegular' }}>
                                        {line}
                                    </Text>
                                ))}
                            </>
                        )}
                    </View>
                    <View style={{ borderBottomColor: '#FECC01', borderBottomWidth: 3, width: '100%', paddingVertical: 12 }}>
                        <TouchableOpacity onPress={() => setIsShowBlind(!isShowBlind)} style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', paddingHorizontal: 6, justifyContent: 'space-between' }}>
                            <Text style={{ fontFamily: 'MulishBlack', fontSize: 16 }}>{t("blind-football.title")}</Text>
                            <SimpleLineIcons name={isShowBlind ? "arrow-up" : "arrow-down"} size={24} color="black" />
                        </TouchableOpacity>
                        {isShowBlind && (
                            <>
                                {t("blind-football.description").split('\n').map((line, index) => (
                                    <Text key={index} style={{ fontSize: 16, marginTop: 10, fontFamily: 'MulishRegular' }}>
                                        {line}
                                    </Text>
                                ))}
                            </>
                        )}
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', padding: 24 }}>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <G clip-path="url(#clip0_1_4023)">
                            <Path d="M12.2656 6.33821L8.76699 3.0249L5.26841 6.33821L3.02016 4.22317L0 8.47413V17.5339H17.534V7.95154L14.3111 4.41392L12.2656 6.33821ZM9.99642 5.60431L8.76699 6.76765L7.53756 5.60431L8.76699 4.43995L9.99642 5.60431ZM6.79031 6.31184L8.76665 8.18202L10.743 6.31184L11.5152 7.04333L8.76631 9.62891L6.01737 7.04333L6.78962 6.31184H6.79031ZM3.17461 5.77931L5.66772 8.12414H4.23829L3.01913 8.97961L1.32669 8.38064L3.17495 5.77931H3.17461ZM1.02704 9.36487L3.17529 10.1251L4.56226 9.15186H6.75949L12.3943 14.4521H1.02738V9.36487H1.02704ZM16.5063 16.5069H1.02738V15.4795H16.5066V16.5069H16.5063ZM13.894 14.4521L9.51629 10.3344L10.6416 9.27583L13.3923 11.8631H16.5059V14.4521H13.8936H13.894ZM16.5063 10.8357H13.7998L11.3916 8.57071L14.2542 5.87794L16.5063 8.34982V10.8357Z" fill="black" />
                            <Path d="M15.8217 0.805467C15.4131 0.313694 14.797 0 14.1094 0V1.02738C14.7703 1.02738 15.308 1.56504 15.308 2.22599H16.3354C16.3354 1.56504 16.873 1.02738 17.534 1.02738V0C16.8463 0 16.2302 0.313694 15.8217 0.805467Z" fill="black" />
                            <Path d="M1.19861 2.22599H2.22599C2.22599 1.56504 2.76366 1.02738 3.42461 1.02738V0C2.73694 0 2.12086 0.313694 1.7123 0.805467C1.30375 0.313694 0.687661 0 0 0V1.02738C0.660949 1.02738 1.19861 1.56504 1.19861 2.22599Z" fill="black" />
                        </G>
                        <Defs>
                            <ClipPath id="clip0_1_4023">
                                <Rect width="17.534" height="17.534" fill="white" />
                            </ClipPath>
                        </Defs>
                    </Svg>
                    <Text style={{ fontFamily: 'MulishExtraBold', fontSize: 20, marginLeft: 10 }}>{t("almaty.title")}</Text>
                </View>
                {t("almaty.info").split('\n').map((line, index) => (
                    <Text key={index} style={{ fontFamily: 'MulishRegular', fontSize: 16, paddingHorizontal: 24 }}>
                        {line}
                    </Text>
                ))}
            </ScrollView>
            <StatusBar translucent={true} backgroundColor='transparent' />
            {isPressFeedback && <PressFeedback onClose={() => setisPressFeedback(false)} />}
            <BottomTabs zIndex={1000} position="absolute" />
        </View>
    )
};

export default AboutAcademyScreen;