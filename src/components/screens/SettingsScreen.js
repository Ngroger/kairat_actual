import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Navbar from '../ui/Navbar';
import { useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import BottomTabs from '../ui/BottomTabs';

function SettingsScreen() {
    const route = useRoute();
    const { userData } = route.params;

    return (
        <View style={{ width: '100%', height: '100%' }}>
            <Navbar title='ВАШ КАБИНЕТ'/>
            <ScrollView style={{ padding: 24, width: '100%', height: '100%', backgroundColor: '#FFF', marginTop: 120 }}>
                <View style={{ marginBottom: 40 }}>
                    <Text style={{ fontSize: 20, fontFamily: 'MulishBlack', width: '100%', textAlign: 'center', borderBottomWidth: 3, borderBottomColor: '#FECC01', paddingBottom: 12, letterSpacing: 0.6 }}>НАСТРОЙКИ ПОЛЬЗОВАТЕЛЯ</Text>
                    <Text style={{ marginVertical: 12, fontSize: 16, fontFamily: 'MulishBold', letterSpacing: 0.6 }}>Новый пароль</Text>
                    <View style={{ borderBottomWidth: 3, borderBottomColor: '#FECC01', paddingBottom: 48 }}>
                        <View style={{ width: '100%', padding: 12, borderWidth: 1.5, borderColor: '#FECC01', borderRadius: 6, paddingHorizontal: 18 }}>
                            <Text style={{ backgroundColor: '#FFF', paddingVertical: 2, paddingHorizontal: 4, position: 'absolute', zIndex: 1, top: -10, left: 10, fontSize: 12, fontFamily: 'MulishRegular', letterSpacing: 0.6 }}>Старый пароль</Text>
                            <TextInput style={{ color: '#000', fontSize: 16, fontFamily: 'MulishRegular' }}  secureTextEntry={true}/>
                        </View>
                        <View style={{ width: '100%', padding: 12, borderWidth: 1.5, borderColor: '#FECC01', borderRadius: 6, paddingHorizontal: 18, marginTop: 24 }}>
                            <Text style={{ backgroundColor: '#FFF', paddingVertical: 2, paddingHorizontal: 4, position: 'absolute', zIndex: 1, top: -10, left: 10, fontSize: 12, fontFamily: 'MulishRegular', letterSpacing: 0.6 }}>Пароль</Text>
                            <TextInput style={{ color: '#000', fontSize: 16, fontFamily: 'MulishRegular' }}  secureTextEntry={true}/>
                        </View>
                        <View style={{ width: '100%', padding: 12, borderWidth: 1.5, borderColor: '#FECC01', borderRadius: 6, paddingHorizontal: 18, marginTop: 24 }}>
                            <Text style={{ backgroundColor: '#FFF', paddingVertical: 2, paddingHorizontal: 4, position: 'absolute', zIndex: 1, top: -10, left: 10, fontSize: 12, fontFamily: 'MulishRegular', letterSpacing: 0.6 }}>Новый пароль</Text>
                            <TextInput style={{ color: '#000', fontSize: 16, fontFamily: 'MulishRegular' }}  secureTextEntry={true}/>
                        </View>
                        <TouchableOpacity style={{ width: '100%', backgroundColor: '#FECC01', justifyContent: 'center', alignItems: 'center', marginTop: 24, padding: 12, borderRadius: 6 }}>
                            <Text style={{ fontFamily: 'MulishBlack', fontSize: 16 }}>Сохранить</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ marginVertical: 12, fontSize: 16, fontFamily: 'MulishBold', letterSpacing: 0.6 }}>Обновление данных</Text>
                    <View>
                        <View style={{ width: '100%', padding: 12, borderWidth: 1.5, borderColor: '#FECC01', borderRadius: 6, paddingHorizontal: 18 }}>
                            <Text style={{ backgroundColor: '#FFF', paddingVertical: 2, paddingHorizontal: 4, position: 'absolute', zIndex: 1, top: -10, left: 10, fontSize: 12, fontFamily: 'MulishRegular', letterSpacing: 0.6 }}>Email*</Text>
                            <TextInput value={userData.email} style={{ color: '#000', fontSize: 16, fontFamily: 'MulishRegular' }}/>
                        </View>
                        <View style={{ width: '100%', padding: 12, borderWidth: 1.5, borderColor: '#FECC01', borderRadius: 6, paddingHorizontal: 18, marginTop: 24 }}>
                            <Text style={{ backgroundColor: '#FFF', paddingVertical: 2, paddingHorizontal: 4, position: 'absolute', zIndex: 1, top: -10, left: 10, fontSize: 12, fontFamily: 'MulishRegular', letterSpacing: 0.6 }}>Номер телефона</Text>
                            <TextInput value={userData.phone} style={{ color: '#000', fontSize: 16, fontFamily: 'MulishRegular' }}/>
                        </View>
                        <View style={{ width: '100%', padding: 12, borderWidth: 1.5, borderColor: '#FECC01', borderRadius: 6, paddingHorizontal: 18, marginTop: 24 }}>
                            <Text style={{ backgroundColor: '#FFF', paddingVertical: 2, paddingHorizontal: 4, position: 'absolute', zIndex: 1, top: -10, left: 10, fontSize: 12, fontFamily: 'MulishRegular', letterSpacing: 0.6 }}>Имя*</Text>
                            <TextInput value={userData.fullname} style={{ color: '#000', fontSize: 16, fontFamily: 'MulishRegular' }}/>
                        </View>
                        <View style={{ width: '100%', padding: 12, borderWidth: 1.5, borderColor: '#FECC01', borderRadius: 6, paddingHorizontal: 18, marginTop: 24 }}>
                            <Text style={{ backgroundColor: '#FFF', paddingVertical: 2, paddingHorizontal: 4, position: 'absolute', zIndex: 1, top: -10, left: 10, fontSize: 12, fontFamily: 'MulishRegular', letterSpacing: 0.6 }}>Фамилия*</Text>
                            <TextInput value={userData.surname} style={{ color: '#000', fontSize: 16, fontFamily: 'MulishRegular' }}/>
                        </View>
                        <View style={{ width: '100%', padding: 12, borderWidth: 1.5, borderColor: '#FECC01', borderRadius: 6, paddingHorizontal: 18, marginTop: 24 }}>
                            <Text style={{ backgroundColor: '#FFF', paddingVertical: 2, paddingHorizontal: 4, position: 'absolute', zIndex: 1, top: -10, left: 10, fontSize: 12, fontFamily: 'MulishRegular', letterSpacing: 0.6 }}>Пол*</Text>
                            <TextInput value={userData.gender} style={{ color: '#000', fontSize: 16, fontFamily: 'MulishRegular' }}/>
                        </View>
                        <View style={{ width: '100%', padding: 12, borderWidth: 1.5, borderColor: '#FECC01', borderRadius: 6, paddingHorizontal: 18, marginTop: 24 }}>
                            <Text style={{ backgroundColor: '#FFF', paddingVertical: 2, paddingHorizontal: 4, position: 'absolute', zIndex: 1, top: -10, left: 10, fontSize: 12, fontFamily: 'MulishRegular', letterSpacing: 0.6 }}>Дата рождения*</Text>
                            <TextInput value={userData.bithday} style={{ color: '#000', fontSize: 16, fontFamily: 'MulishRegular' }}/>
                        </View>
                        <View style={{ width: '100%', padding: 12, borderWidth: 1.5, borderColor: '#FECC01', borderRadius: 6, paddingHorizontal: 18, marginTop: 24 }}>
                            <Text style={{ backgroundColor: '#FFF', paddingVertical: 2, paddingHorizontal: 4, position: 'absolute', zIndex: 1, top: -10, left: 10, fontSize: 12, fontFamily: 'MulishRegular', letterSpacing: 0.6 }}>Ваш город*</Text>
                            <TextInput value={userData.location} style={{ color: '#000', fontSize: 16, fontFamily: 'MulishRegular' }}/>
                        </View>
                        <View style={{ width: '100%', padding: 12, borderWidth: 1.5, borderColor: '#FECC01', borderRadius: 6, paddingHorizontal: 18, marginTop: 24 }}>
                            <Text style={{ backgroundColor: '#FFF', paddingVertical: 2, paddingHorizontal: 4, position: 'absolute', zIndex: 1, top: -10, left: 10, fontSize: 12, fontFamily: 'MulishRegular', letterSpacing: 0.6 }}>Адрес</Text>
                            <TextInput style={{ color: '#000', fontSize: 16, fontFamily: 'MulishRegular' }}/>
                        </View>
                        <TouchableOpacity style={{ width: '100%', backgroundColor: '#FECC01', justifyContent: 'center', alignItems: 'center', marginTop: 24, padding: 12, borderRadius: 6 }}>
                            <Text value={userData.address} style={{ fontFamily: 'MulishBlack', fontSize: 16 }}>Отправить</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <StatusBar translucent={true} backgroundColor='transparent'/>
            <BottomTabs zIndex={1000} position="absolute"/>
        </View>
    )
};

export default SettingsScreen;