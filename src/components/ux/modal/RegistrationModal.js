import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from '../../../styles/RegistrationModalStyle';
import { AntDesign, FontAwesome6, Feather, FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react';
import Authorization from '../../ui/Authorization';
import Registration from '../../ui/Registration';
import RecoveryPassword from './RecoveryPassword';

function RegistrationModal({ onClose }) {
    const [method, setMethod] = useState('Auth');

    toggleSetMethod = (methodType) => {
        setMethod(methodType);
    }

    return (
        <View style={styles.background}>
            <View style={[styles.header, { marginTop: method === 'Reg' ? 50 : (method === 'Recovery' ? 200 : 100) }]}>
                <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                    <AntDesign name='close' size={16} color='#FFF'/>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Image style={{ height: 86, width: 50, resizeMode: 'contain' }} source={require('../../../img/Kairat.png')}/>
                    <Text style={styles.title}>Единый личный кабинет{'\n'}ФК «Кайрат»</Text>
                </View>
                { method === 'Auth' && <Authorization changeMethod={toggleSetMethod}/> }
                { method === 'Reg' && <Registration changeMethod={toggleSetMethod}/> }
                { method === 'Recovery' && <RecoveryPassword changeMethod={toggleSetMethod}/> }
            </View>
        </View>
    )
};

export default RegistrationModal;