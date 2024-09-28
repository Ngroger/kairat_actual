import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from '../../styles/FootballClubKairatStyle';
import Navbar from '../ui/Navbar';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import Svg, { Circle, Defs, Filter, FeFlood, FeBlend, FeGaussianBlur, Path } from 'react-native-svg';
import OurPartners from '../ux/OurPartners';
import { StatusBar } from 'expo-status-bar';
import BottomTabs from '../ui/BottomTabs';

function FootballClubKairatScreen() {
    const navigation = useNavigation();
    return (
        <View>
            <Navbar title="ФУТБОЛЬНЫЙ КЛУБ «КАЙРАТ»"/>
            <ScrollView style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>ФУТБОЛЬНАЯ КОМАНДА "КАЙРАТ"</Text>
                </View>
                <Image source={require('../../img/LINES.png')} style={styles.lines}/>
                <View style={styles.playersContent}>
                    <Image style={styles.image}/>
                    <View style={styles.list}>
                        <Text style={styles.year}>2021</Text>
                        <View style={{ marginTop: 24 }}>
                            <Text style={styles.titleOfList}>Вратари</Text>
                            <View style={{ marginTop: 24 }}>
                                <Text style={styles.memberOfList}>1 Данил Устименко</Text>
                                <Text style={styles.memberOfList}>27 Темирлан Анарбеков</Text>
                                <Text style={styles.memberOfList}>30 Вадим Ульянов</Text>
                                <Text style={styles.memberOfList}>32 Владимир Бирюков</Text>
                                <Text style={styles.memberOfList}>69 Никита Пивкин </Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 24 }}>
                            <Text style={styles.titleOfList}>Вратари</Text>
                            <View style={{ marginTop: 24 }}>
                                <Text style={styles.memberOfList}>1 Данил Устименко</Text>
                                <Text style={styles.memberOfList}>27 Темирлан Анарбеков</Text>
                                <Text style={styles.memberOfList}>30 Вадим Ульянов</Text>
                                <Text style={styles.memberOfList}>32 Владимир Бирюков</Text>
                                <Text style={styles.memberOfList}>69 Никита Пивкин </Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 24 }}>
                            <Text style={styles.titleOfList}>Вратари</Text>
                            <View style={{ marginTop: 24 }}>
                                <Text style={styles.memberOfList}>1 Данил Устименко</Text>
                                <Text style={styles.memberOfList}>27 Темирлан Анарбеков</Text>
                                <Text style={styles.memberOfList}>30 Вадим Ульянов</Text>
                                <Text style={styles.memberOfList}>32 Владимир Бирюков</Text>
                                <Text style={styles.memberOfList}>69 Никита Пивкин </Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 24, marginBottom: 48 }}>
                            <Text style={styles.titleOfList}>Вратари</Text>
                            <View style={{ marginTop: 24 }}>
                                <Text style={styles.memberOfList}>1 Данил Устименко</Text>
                                <Text style={styles.memberOfList}>27 Темирлан Анарбеков</Text>
                                <Text style={styles.memberOfList}>30 Вадим Ульянов</Text>
                                <Text style={styles.memberOfList}>32 Владимир Бирюков</Text>
                                <Text style={styles.memberOfList}>69 Никита Пивкин </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <OurPartners/>
            </ScrollView>
            <StatusBar translucent={true} backgroundColor='transparent'/>
            <BottomTabs zIndex={1000} position="absolute"/>
        </View>
    )
};

export default FootballClubKairatScreen;