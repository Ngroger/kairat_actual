import { Text, Image, TouchableOpacity, View } from 'react-native';
import styles from '../../styles/ShopSliderStyle';
import Svg, { Circle, Rect, Path } from 'react-native-svg'
import { SimpleLineIcons } from '@expo/vector-icons';

function ShopSlider() {
    return (
        <View style={styles.container}>
            <Image style={{ position: 'absolute', zIndex: -10 }} source={require('../../img/degLines.png')}/>
            <View>
                <View style={styles.slide}>
                    <Image style={styles.image}/>
                    <View style={{ flexDirection: 'row', display: 'flex' }}>
                        <View>
                            <Text style={styles.title}>ФУТБОЛКА{'\n'}КАЙРАТ{'\n'}ИМЕННАЯ{'\n'}</Text>
                            <View style={{ flexDirection: 'row', display: 'flex', top: -10 }}>
                                <Text style={styles.subtitle}>ТВОЯ ФАМИЛИЯ{'\n'}И НОМЕР</Text>
                                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', position: 'absolute', zIndex: 10, left: 105, top: 6 }}>
                                    <Svg width={117} height={23} viewBox="0 0 117 23" fill="none">
                                        <Path d="M15.2599 0.36341L116.442 0.363281L100.688 22.1965L0.725098 22.1966L15.2599 0.36341Z" fill="#231F20" />
                                    </Svg>
                                    <Text style={styles.moreDetailText}>ПОДРОБНЕЕ</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={{ fontSize: 108, marginTop: -27, color: '#231F20' }}>/</Text>
                        <Image style={{ width: 57, height: 28, marginTop: '12%' }} source={require('../../img/XX.png')}/>
                    </View>
                </View>
                <View style={styles.navigation}>
                    <View style={styles.arrowContainer}>
                        <TouchableOpacity>
                            <SimpleLineIcons name="arrow-left" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <SimpleLineIcons name="arrow-right" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.pagination}>
                        <TouchableOpacity>
                            <View style={styles.activeSlide}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.nextSlide}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.nextSlide}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
};

export default ShopSlider;