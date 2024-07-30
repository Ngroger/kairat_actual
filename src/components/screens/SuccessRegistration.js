import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import Navbar from '../ui/Navbar';
import { Svg, Path, G } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

function SuccessRegistrationScreen() {
    const navigation = useNavigation();
    return (
        <View>
            <Navbar activityApp='Tickets' title='ФУТБОЛЬНЫЙ КЛУБ «КАЙРАТ»'/>
            <View style={{ width: '100%', height: '100%', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontFamily: 'MulishRegular', fontSize: 16, textAlign: 'center', width: 350, marginTop: 10 }}>УЧЁТНАЯ ЗАПИСЬ ЗАРЕГИСТРИРОВАНА. ДЛЯ АКТИВАЦИИ АККАУНТА ПЕРЕЙДИТЕ ПО ССЫЛКЕ В EMAIL</Text>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 10 }}>
                    <Text style={{ fontFamily: 'MulishRegular', fontSize: 16 }}>Обратно</Text>
                </TouchableOpacity>
            </View>
            <StatusBar/>
        </View>
    )
};

export default SuccessRegistrationScreen;