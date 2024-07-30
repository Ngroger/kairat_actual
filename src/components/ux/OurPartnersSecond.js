import { View, Text, Image, ImageBackground } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import styles from '../../styles/OurPartnersStyle';

function OurPartners() {
    return (
        <ImageBackground source={require('../../img/Background.png')} resizeMode='cover' style={styles.background}>
            <View style={styles.header}>
                <Svg width={298} height={40} viewBox="0 0 298 40" fill="none">
                    <Path
                        d="M22.6387 0.000238186L297.462 0L273.902 39.9998L0.902344 40L22.6387 0.000238186Z"
                        fill="#FECC01"
                    />
                </Svg>
                <Text style={styles.title}>НАШИ ПАРТНЁРЫ</Text>
            </View>
            <View style={{ marginTop: 12 }}>
                <View style={styles.imageContainer}>
                    <Image style={{ width: 187, height: 70, resizeMode: 'contain' }} source={require('../../img/KEMIKAL.png')}/>
                    <Image style={{ width: 134, height: 70, resizeMode: 'contain' }} source={require('../../img/SARYAGASH.png')}/>
                </View>
                <View style={styles.imageContainer}>
                    <Image style={{ width: 147, height: 25, resizeMode: 'contain' }} source={require('../../img/1xbet.png')}/>
                    <Image style={{ width: 180, height: 25, resizeMode: 'contain' }} source={require('../../img/Almaly.png')}/>
                </View>
                <View style={styles.imageContainer}>
                    <Image style={{ width: 147, height: 80, resizeMode: 'contain' }} source={require('../../img/Fitnation.png')}/>
                    <Image style={{ width: 180, height: 80, resizeMode: 'contain' }} source={require('../../img/Alma.png')}/>
                </View>
                <View style={styles.imageContainer}>
                    <Image style={{ width: 147, height: 40, resizeMode: 'contain' }} source={require('../../img/Joma.png')}/>
                    <Image style={{ width: 150, height: 40, resizeMode: 'contain' }} source={require('../../img/Meta-Raiting.png')}/>
                </View>
                <View style={[styles.imageContainer, { justifyContent: 'center' }]}>
                    <Image style={{ width: 187, height: 70, resizeMode: 'contain' }} source={require('../../img/RAHAT.png')}/>
                </View>
            </View>
        </ImageBackground>
    )
};

export default OurPartners;