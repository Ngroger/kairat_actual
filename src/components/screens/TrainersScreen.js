import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from '../../styles/TrainersScreenStyle';
import Navbar from '../ui/Navbar';
import Svg, { Circle, Rect, Path } from 'react-native-svg'
import { Ionicons } from '@expo/vector-icons';
import OurPartners from '../ux/OurPartners';
import { StatusBar } from 'expo-status-bar';
import BottomTabs from '../ui/BottomTabs';

function TrainersScreen() {
    return (
        <View>
            <Navbar title="ФУТБОЛЬНЫЙ КЛУБ «КАЙРАТ»"/>
            <ScrollView style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>ТРЕНЕРЫ АКАДЕМИИ</Text>
                </View>
                <Image source={require('../../img/LINES.png')} style={styles.lines}/>
                <View style={styles.cardsContainer}>
                    <View style={styles.card}>
                        <Image style={styles.image}/>
                        <Text style={styles.name}>Вячеслав Соболев</Text>
                        <Text style={styles.status}>Старший тренер U-17</Text>
                        <Text style={styles.age}>33 года</Text>
                    </View>
                    <View style={styles.card}>
                        <Image style={styles.image}/>
                        <Text style={styles.name}>Вячеслав Соболев</Text>
                        <Text style={styles.status}>Старший тренер U-17</Text>
                        <Text style={styles.age}>33 года</Text>
                    </View>
                    <View style={styles.card}>
                        <Image style={styles.image}/>
                        <Text style={styles.name}>Вячеслав Соболев</Text>
                        <Text style={styles.status}>Старший тренер U-17</Text>
                        <Text style={styles.age}>33 года</Text>
                    </View>
                    <View style={styles.card}>
                        <Image style={styles.image}/>
                        <Text style={styles.name}>Вячеслав Соболев</Text>
                        <Text style={styles.status}>Старший тренер U-17</Text>
                        <Text style={styles.age}>33 года</Text>
                    </View>
                    <View style={styles.card}>
                        <Image style={styles.image}/>
                        <Text style={styles.name}>Вячеслав Соболев</Text>
                        <Text style={styles.status}>Старший тренер U-17</Text>
                        <Text style={styles.age}>33 года</Text>
                    </View>
                    <View style={styles.card}>
                        <Image style={styles.image}/>
                        <Text style={styles.name}>Вячеслав Соболев</Text>
                        <Text style={styles.status}>Старший тренер U-17</Text>
                        <Text style={styles.age}>33 года</Text>
                    </View>
                    <View style={styles.card}>
                        <Image style={styles.image}/>
                        <Text style={styles.name}>Вячеслав Соболев</Text>
                        <Text style={styles.status}>Старший тренер U-17</Text>
                        <Text style={styles.age}>33 года</Text>
                    </View>
                    <View style={styles.card}>
                        <Image style={styles.image}/>
                        <Text style={styles.name}>Вячеслав Соболев</Text>
                        <Text style={styles.status}>Старший тренер U-17</Text>
                        <Text style={styles.age}>33 года</Text>
                    </View>
                </View>
                <OurPartners/>
            </ScrollView>
            <StatusBar translucent={true} backgroundColor='transparent'/>
            <BottomTabs zIndex={1000} position="absolute"/>
        </View>
    )
};

export default TrainersScreen;