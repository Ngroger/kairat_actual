import { Text, View, Image, ImageBackground } from 'react-native';
import styles from '../../styles/SliderStyle';
import Svg, { Circle, Rect, Path } from 'react-native-svg'
import { LinearGradient } from 'expo-linear-gradient';

function Slide({ title, desription, image }) {
    return (
        <View style={styles.slide}>
            <Image source={{ uri: image }} style={styles.imageSlide} />
            <Image style={{ position: 'absolute', zIndex: 100, bottom: 0, left: 200 }} source={require('../../img/LINES6.png')} />
            <View style={{ position: 'absolute', zIndex: 1000, bottom: 60, left: 20, width: '100%' }}>
                <View style={styles.header}>
                    <Svg width="95" height="25" viewBox="0 0 95 25" fill="none">
                        <Path
                            opacity="0.7"
                            d="M13.9026 0.000154972L94.5833 0L79.5147 24.9998L0 25L13.9026 0.000154972Z"
                            fill="#FECC01"
                        />
                    </Svg>
                    <Text style={styles.headerTitle}>{title.toUpperCase()}</Text>
                </View>
                <Text style={styles.description}>{desription.toUpperCase()}</Text>
            </View>
            <LinearGradient
                colors={['rgba(35, 31, 32, 0.00)', 'rgba(35, 31, 32, 0.63)', '#231F20']}
                stops={[0, 0.5625, 1]}
                style={styles.gradient}
            />
        </View>
    )
}

export default Slide;