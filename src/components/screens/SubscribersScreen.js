import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../../styles/SubscribersScreenStyle';
import Navbar from '../ui/Navbar';
import { AntDesign } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { StatusBar } from 'expo-status-bar';
import BottomTabs from '../ui/BottomTabs';

function SubscribersScreen() {
    return (
        <View style={{ width: '100%', height: '100%' }}>
            <Navbar activityApp='Subscribers' title='МОИ АБОНЕМЕНТЫ'/>
            <ScrollView style={styles.content}>
                <View style={styles.subscribe}>
                    <View style={styles.subscribeHeader}>
                        <Text style={styles.subscribeTitle}>АБОНЕМЕНТ</Text>
                        <AntDesign name="printer" size={24} color="#231F20" />
                    </View>
                    <View style={styles.subscribeContent}>
                        <Image source={require('../../img/QR.png')} style={styles.qr}/>
                        <View style={{ marginLeft: 12 }}>
                            <Text style={styles.season}>СЕЗОН 2023/24</Text>
                            <Text style={styles.date}>01.05.2023 - 01.09.2023</Text>
                            <Text style={styles.description}>Данный абонемент дает право на проход на все игры сезона 2023/24.</Text>
                            <Text style={styles.place}>Место: <Text style={{ fontFamily: 'MulishBold' }}>65</Text>{'\n'}Восточная трибуна,{'\n'}33 сектор</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.subscribe}>
                    <View style={styles.subscribeHeader}>
                        <Text style={styles.subscribeTitle}>АБОНЕМЕНТ</Text>
                        <AntDesign name="printer" size={24} color="#231F20" />
                    </View>
                    <View style={styles.subscribeContent}>
                        <View style={{ width: 150, height: 150 }}>
                            <Image source={require('../../img/QR.png')} style={styles.qr}/>
                            <View style={{ position: 'absolute', zIndex: 10000, alignItems: 'center', justifyContent: 'center' }}>
                                <BlurView intensity={100} tint="light" style={styles.blur}/>
                                <Text style={styles.noActive}>Неактивен на данный матч</Text>
                            </View>
                        </View>
                        <View style={{ marginLeft: 12 }}>
                            <Text style={styles.season}>СЕЗОН 2023/24</Text>
                            <Text style={styles.date}>01.05.2023 - 01.09.2023</Text>
                            <Text style={styles.description}>Данный абонемент дает право на проход на все игры сезона 2023/24.</Text>
                            <Text style={styles.place}>Место: <Text style={{ fontFamily: 'MulishBold' }}>65</Text>{'\n'}Восточная трибуна,{'\n'}33 сектор</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <StatusBar translucent={true} backgroundColor='transparent'/>
            <BottomTabs zIndex={1000} position="absolute"/>
        </View>
    )
};

export default SubscribersScreen;