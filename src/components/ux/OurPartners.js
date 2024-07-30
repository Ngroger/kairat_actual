import { View, Text, Image, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import styles from '../../styles/OurPartnersStyle';
import { useTranslation } from 'react-i18next';

function OurPartners() {
    const { t } = useTranslation();

    const openWebsite = (url) => {
        Linking.openURL(url);
    };

    return (
        <ImageBackground source={require('../../img/Background.png')} resizeMode='cover' style={styles.background}>
            <View style={styles.header}>
                <Svg width={298} height={40} viewBox="0 0 298 40" fill="none">
                    <Path
                        d="M22.6387 0.000238186L297.462 0L273.902 39.9998L0.902344 40L22.6387 0.000238186Z"
                        fill="#FECC01"
                    />
                </Svg>
                <Text style={styles.title}>{t('our-partners')}</Text>
            </View>
            <View style={{ marginTop: 12 }}>
                <View style={styles.imageContainer}>
                    <TouchableOpacity onPress={() => openWebsite('https://im.kz')}>
                        <Image style={{ width: 170, height: 80 }} source={require('../../img/im.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openWebsite('https://knk.kz')}>
                        <Image style={{ width: 150, height: 70 }} source={require('../../img/KEMIKAL.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.imageContainer}>
                    <TouchableOpacity onPress={() => openWebsite('https://1xbet.kz')}>
                        <Image style={{ width: 160, height: 50 }} source={require('../../img/1xbet.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openWebsite('https://alexsu.kz')}>
                        <Image style={{ width: 134, height: 70 }} source={require('../../img/SARYAGASH.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.imageContainer}>
                    <TouchableOpacity onPress={() => openWebsite('https://almaly.kz')}>
                        <Image style={{ width: 150, height: 100 }} source={require('../../img/Almaly.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openWebsite('https://meta-ratings.kz')}>
                        <Image style={{ width: 150, height: 40 }} source={require('../../img/Meta-Raiting.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.imageContainer}>
                    <TouchableOpacity onPress={() => openWebsite('https://almau4u.kz')}>
                        <Image style={{ width: 150, height: 80 }} source={require('../../img/Alma.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openWebsite('https://joma.kz')}>
                        <Image style={{ width: 147, height: 40 }} source={require('../../img/Joma.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={[styles.imageContainer, { justifyContent: 'center' }]}>
                    <TouchableOpacity onPress={() => openWebsite('https://rahatpalace.com')}>
                        <Image style={{ width: 187, height: 70 }} source={require('../../img/RAHAT.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
};

export default OurPartners;