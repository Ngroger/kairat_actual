import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from '../../../styles/RegistrationModalStyle';
import { AntDesign, FontAwesome6, Feather, FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react';

function RecoveryPassword() {
    return (
        <>
            <Text style={[styles.title, { marginLeft: 0, marginTop: 10 }]}>Изменить пароль</Text>
            <View style={styles.field}>
                <Text style={styles.fieldTitle}>Email</Text>
                <TextInput style={styles.input}/>
            </View>
            <Text style={[styles.agree, { textAlign: 'left', marginTop: 12, marginBottom: 0 }]}>Используйте инструкцию по изменению пароля, которую мы отправим на ваш электронный адрес.</Text>
            <TouchableOpacity style={styles.login}>
                <Text style={styles.loginText}>Отправить</Text>
            </TouchableOpacity>
        </>
    )
};

export default RecoveryPassword;