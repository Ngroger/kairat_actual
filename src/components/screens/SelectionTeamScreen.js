import { View, Text, TouchableOpacity } from 'react-native';
import Navbar from '../ui/Navbar';
import { Svg, Path, G } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import BottomTabs from '../ui/BottomTabs';

function SelectionTeamScreen() {
    const navigation = useNavigation();
    return (
        <View>
            <Navbar activityApp='Tickets' title='ФУТБОЛЬНЫЙ КЛУБ «КАЙРАТ»'/>
            <View style={{ width: '100%', height: '100%', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontFamily: 'MulishBold', fontSize: 32 }}>Разработка</Text>
                <Text style={{ fontFamily: 'MulishRegular', fontSize: 16, textAlign: 'center', width: 350, marginTop: 10 }}>ЭТОТ РАЗДЕЛ В РАЗРАБОТКЕ, ОН БУДЕТ ДОСТУПЕН В БЛИЖАЙШЕЕ ВРЕМЯ!</Text>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 10 }}>
                    <Text style={{ fontFamily: 'MulishRegular', fontSize: 16 }}>Обратно</Text>
                </TouchableOpacity>
            </View>
            <StatusBar translucent={true} backgroundColor='transparent'/>
            <BottomTabs zIndex={1000} position="absolute"/>
        </View>
    )
};

export default SelectionTeamScreen;