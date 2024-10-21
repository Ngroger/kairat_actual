import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from '../../styles/RegistrationModalStyle';
import { AntDesign, FontAwesome6, Feather, FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react';
import UserStorage from '../../userSrorage';
import { useNavigation } from '@react-navigation/native';

function Authorization({ changeMethod }) {
    const [isShowPassword, setIsShowPassword] = useState(true);
    const [email, onChangeEmail] = useState();
    const [password, onChangePassword] = useState();
    const navigation = useNavigation();

    const auth = async () => {
        const data = {
            login: email,
            password: password
        }

        try {
            const response = await fetch('https://fckairat.com/v1/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const responseData = await response.json();
                if (responseData.success) {
                    await UserStorage.saveUserToken(responseData.bearer_token);
                    navigation.navigate('ProfilScreen');
                }
            } else {
                throw new Error('Registration failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <>
            <Text style={[styles.title, { marginLeft: 0, marginTop: 10 }]}>Авторизация</Text>
            <View style={styles.field}>
                <Text style={styles.fieldTitle}>Email</Text>
                <TextInput value={email} onChangeText={onChangeEmail} style={styles.input} />
            </View>
            <View style={[styles.field, { flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }]}>
                <Text style={styles.fieldTitle}>Пароль</Text>
                <TextInput value={password} onChangeText={onChangePassword} style={[styles.input, { width: 180 }]} secureTextEntry={isShowPassword} />
                <TouchableOpacity onPress={() => setIsShowPassword(!isShowPassword)}>
                    <Feather name={isShowPassword ? "eye" : "eye-off"} size={24} color="#231F20" />
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => changeMethod('Reg')}>
                    <Text style={styles.registrationButton}>Регистрация</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => changeMethod('Recovery')}>
                    <Text style={styles.recoveryButton}>Забыли пароль</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={auth} style={styles.login}>
                <Text style={styles.loginText}>Войти</Text>
            </TouchableOpacity>
            <Text style={styles.anotherWay}>Или войдите через соцсети</Text>
            <View style={styles.wayContainer}>
                <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.accountContainer}>
                        <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={require('../../img/icons/Google.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.accountContainer, { backgroundColor: '#FC3F1D', borderWidth: 0, marginLeft: 10 }]}>
                        <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={require('../../img/icons/Yandex.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.accountContainer, { borderColor: '#231F20', marginLeft: 10 }]}>
                        <AntDesign name="apple1" size={20} color="#231F20" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.accountContainer, { backgroundColor: '#1877F2', borderWidth: 0, marginLeft: 10 }]}>
                        <FontAwesome6 name="vk" size={20} color="#FFF" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.accountContainer, { backgroundColor: '#1877F2', borderWidth: 0, marginLeft: 10 }]}>
                        <FontAwesome5 name="facebook" size={20} color="#FFF" />
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.agree}>Авторизуясь, вы соглашаетесь с <Text style={{ textDecorationLine: 'underline', color: '#231F20' }}>пользовательским соглашением</Text> и даёте согласие на <Text style={{ textDecorationLine: 'underline', color: '#231F20' }}>обработку персональных данных</Text></Text>
        </>
    )
};

export default Authorization;