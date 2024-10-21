import { Text, TextInput, View, TouchableOpacity, Image, ScrollView, Button } from 'react-native';
import styles from '../../styles/RegistrationModalStyle';
import { AntDesign, FontAwesome6, Feather, FontAwesome5, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useNavigation } from '@react-navigation/native';
import { getUserInfo, addUserInfo } from '../../userSrorage';
import MaskInput from 'react-native-mask-input';


function Registration({ changeMethod }) {
    const [isShowSex, setShowSex] = useState(false);
    const [sex, setSex] = useState('Мужской');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [city, setCity] = useState('Алматы');
    const [isShowCity, setShowCity] = useState(false);
    const [email, onChangeEmail] = useState();
    const [phoneNumber, onChangePhoneNumber] = useState();
    const [name, onChangeName] = useState();
    const [surname, onChangeSurnname] = useState();
    const [address, onChangeAddress] = useState();
    const [isAgree, setIsAgree] = useState(false);

    const [isError, setIsError] = useState();
    const [isEmailError, setIsEmailError] = useState();
    const [isPhoneNumberError, setIsPhoneNumberError] = useState();
    const [isNameError, setIsNameError] = useState();
    const [isSurnameError, setIsSurnameError] = useState();
    const [isSexError, setIsSexError] = useState();
    const [isCityError, setIsCityError] = useState();
    const [isDateError, setIsDateError] = useState();
    const [isLocationError, setIsLocationError] = useState();

    const navigation = useNavigation();

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        hideDatePicker();
        setSelectedDate(date);
    };

    const formatDate = (date) => {
        if (date) {
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const year = date.getFullYear();
            return `${day}.${month}.${year}`;
        } else {
            return '';
        }
    };

    const formatDateReg = (date) => {
        if (date) {
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const year = date.getFullYear();
            return `${year}-${month}-${day}`;
        } else {
            return '';
        }
    };

    function extractUsername(email) {
        // Находим позицию символа '@'
        const atIndex = email.indexOf('@');
        // Если символ '@' найден
        if (atIndex !== -1) {
            // Возвращаем часть строки до символа '@'
            return email.substring(0, atIndex);
        } else {
            // Если символ '@' не найден, возвращаем исходную строку
            return email;
        }
    }

    const registration = async () => {
        if (!email || !phoneNumber || !name || !surname || !sex || !city || !selectedDate || !address) {
            setIsError(true);

            if (!email) setIsEmailError(true)
            else setIsEmailError(false);

            if (!phoneNumber) setIsPhoneNumberError(true)
            else setIsPhoneNumberError(false);

            if (!name) setIsNameError(true)
            else setIsNameError(false);

            if (!surname) setIsSurnameError(true)
            else setIsSurnameError(false);

            if (!city) setIsCityError(true)
            else setIsSurnameError(false);

            if (!selectedDate) setIsDateError(true)
            else setIsDateError(false);

            if (!address) setIsLocationError(true)
            else setIsLocationError(false);

        } else {
            setIsError(false);
            const data = {
                "name": `${name}`,
                "last_name": `${surname}`,
                "email": `${email}`,
                "birthday": formatDateReg(selectedDate),
                "phone": `${phoneNumber}`,
                "gender": sex === 'Мужской' ? 1 : 0,
                "location": city,
                "address": `${address}`
            }

            try {
                const response = await fetch('https://fckairat.com/v1/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    const responseData = await response.json();
                    if (responseData.success) {
                        const userInfo = {
                            username: extractUsername(email),
                            fullname: name,
                            surname: surname,
                            phone: phoneNumber,
                            email: email,
                            address: address,
                            location: city,
                            gender: sex === 'Мужской' ? 1 : 0,
                            avatar: ""
                        };

                        // Добавляем информацию о пользователе в AsyncStorage
                        await addUserInfo(userInfo);

                        // Получаем и логируем все данные из UserStorage
                        const userInfoFromStorage = await getUserInfo();
                        navigation.navigate('Success');
                    }
                } else {
                    throw new Error('Registration failed');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }

    return (
        <>
            <Text style={[styles.title, { marginLeft: 0, marginTop: 10 }]}>Регистрация</Text>
            <ScrollView style={{ height: 300 }}>
                <View style={styles.field}>
                    <Text style={styles.fieldTitle}>Email *</Text>
                    <TextInput value={email} onChangeText={onChangeEmail} style={styles.input} />
                </View>
                {isEmailError && <Text style={{ textAlign: 'center', padding: 10, fontSize: 16, color: '#8B0000', fontFamily: 'MulishRegular' }}>Необходимо заполнить «Email *»</Text>}
                <View style={styles.field}>
                    <Text style={styles.fieldTitle}>Номер телефона *</Text>
                    {/* <TextInput value={phoneNumber} onChangeText={onChangePhoneNumber} maxLength={11} keyboardType='numeric' style={styles.input}/> */}
                    <MaskInput
                        value={phoneNumber}
                        keyboardType='numeric'

                        onChangeText={(masked, unmasked) => {
                            onChangePhoneNumber(unmasked); // you can use the unmasked value as well
                        }}
                        mask={['+', /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                    />
                </View>
                {isPhoneNumberError && <Text style={{ textAlign: 'center', padding: 10, fontSize: 16, color: '#8B0000', fontFamily: 'MulishRegular' }}>Необходимо заполнить «Номер телефона *»</Text>}
                <View style={styles.field}>
                    <Text style={styles.fieldTitle}>Имя *</Text>
                    <TextInput value={name} onChangeText={onChangeName} style={styles.input} />
                </View>
                {isNameError && <Text style={{ textAlign: 'center', padding: 10, fontSize: 16, color: '#8B0000', fontFamily: 'MulishRegular' }}>Необходимо заполнить «Имя *»</Text>}

                <View style={styles.field}>
                    <Text style={styles.fieldTitle}>Фамилия *</Text>
                    <TextInput value={surname} onChangeText={onChangeSurnname} style={styles.input} />
                </View>
                {isSurnameError && <Text style={{ textAlign: 'center', padding: 10, fontSize: 16, color: '#8B0000', fontFamily: 'MulishRegular' }}>Необходимо заполнить «Фамилия *»</Text>}

                <View style={[styles.field, { flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }]}>
                    <Text style={styles.fieldTitle}>Пол *</Text>
                    <TextInput style={[styles.input, { width: 100 }]}>{sex}</TextInput>
                    <TouchableOpacity onPress={() => setShowSex(!isShowSex)}>
                        <MaterialIcons name='arrow-drop-down' size={24} color="#231F20" />
                    </TouchableOpacity>
                </View>
                {isShowSex && (
                    <View style={{ backgroundColor: '#FFF', width: '100%', padding: 12 }}>
                        <TouchableOpacity onPress={() => setSex('Мужской')}>
                            <Text style={{ fontFamily: 'MulishMedium', fontSize: 16, margin: 4 }}>Мужской</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setSex('Женский')}>
                            <Text style={{ fontFamily: 'MulishMedium', fontSize: 16, margin: 4 }}>Женский</Text>
                        </TouchableOpacity>
                    </View>
                )}

                <View style={[styles.field, { flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }]}>
                    <Text style={styles.fieldTitle}>Дата рождения *</Text>
                    <Text style={[styles.input, { width: 90 }]}>{selectedDate ? formatDate(selectedDate) : 'дд.мм.гггг'}</Text>
                    <TouchableOpacity onPress={showDatePicker}>
                        <FontAwesome5 name='calendar-alt' size={16} color="#231F20" />
                    </TouchableOpacity>
                </View>
                {isDateError && <Text style={{ textAlign: 'center', padding: 10, fontSize: 16, color: '#8B0000', fontFamily: 'MulishRegular' }}>Необходимо заполнить «Дата рождения *»</Text>}

                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
                <View style={[styles.field, { flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }]}>
                    <Text style={styles.fieldTitle}>Ваш город *</Text>
                    <TextInput style={[styles.input, { width: 150 }]}>{city}</TextInput>
                    <TouchableOpacity onPress={() => setShowCity(!isShowCity)}>
                        <MaterialIcons name='arrow-drop-down' size={24} color="#231F20" />
                    </TouchableOpacity>
                </View>
                {isShowCity && (
                    <View style={{ backgroundColor: '#FFF', width: '100%', padding: 12 }}>
                        <TouchableOpacity onPress={() => setCity('Нур-Султан')}>
                            <Text style={{ fontFamily: 'MulishMedium', fontSize: 16, margin: 4 }}>Нур-Султан</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setCity('Алматы')}>
                            <Text style={{ fontFamily: 'MulishMedium', fontSize: 16, margin: 4 }}>Алматы</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setCity('Шымкент')}>
                            <Text style={{ fontFamily: 'MulishMedium', fontSize: 16, margin: 4 }}>Шымкент</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setCity('Караганда')}>
                            <Text style={{ fontFamily: 'MulishMedium', fontSize: 16, margin: 4 }}>Караганда</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setCity('Актобе')}>
                            <Text style={{ fontFamily: 'MulishMedium', fontSize: 16, margin: 4 }}>Актобе</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setCity('Тараз')}>
                            <Text style={{ fontFamily: 'MulishMedium', fontSize: 16, margin: 4 }}>Тараз</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setCity('Павлодар')}>
                            <Text style={{ fontFamily: 'MulishMedium', fontSize: 16, margin: 4 }}>Павлодар</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setCity('Уральск')}>
                            <Text style={{ fontFamily: 'MulishMedium', fontSize: 16, margin: 4 }}>Уральск</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setCity('Семей')}>
                            <Text style={{ fontFamily: 'MulishMedium', fontSize: 16, margin: 4 }}>Семей</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setCity('Атырау')}>
                            <Text style={{ fontFamily: 'MulishMedium', fontSize: 16, margin: 4 }}>Атырау</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setCity('Костанай')}>
                            <Text style={{ fontFamily: 'MulishMedium', fontSize: 16, margin: 4 }}>Костанай</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setCity('Петропавловск')}>
                            <Text style={{ fontFamily: 'MulishMedium', fontSize: 16, margin: 4 }}>Петропавловск</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setCity('Актау')}>
                            <Text style={{ fontFamily: 'MulishMedium', fontSize: 16, margin: 4 }}>Актау</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setCity('Талдыкорган')}>
                            <Text style={{ fontFamily: 'MulishMedium', fontSize: 16, margin: 4 }}>Талдыкорган</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setCity('Кызылорда')}>
                            <Text style={{ fontFamily: 'MulishMedium', fontSize: 16, margin: 4 }}>Кызылорда</Text>
                        </TouchableOpacity>
                    </View>
                )}

                <View style={styles.field}>
                    <Text style={styles.fieldTitle}>Адрес *</Text>
                    <TextInput value={address} onChangeText={onChangeAddress} style={styles.input} />
                </View>
                {isLocationError && <Text style={{ textAlign: 'center', padding: 10, fontSize: 16, color: '#8B0000', fontFamily: 'MulishRegular' }}>Необходимо заполнить «Адрес *»</Text>}

            </ScrollView>
            <Text style={[styles.agree, { textAlign: 'left', marginBottom: 12, marginTop: 12 }]}>Нажимая “Отправить”, вы соглашаетесь с <Text style={{ textDecorationLine: 'underline', color: '#231F20' }}>пользовательским соглашением</Text> и даёте согласие на <Text style={{ textDecorationLine: 'underline', color: '#231F20' }}>обработку персональных данных</Text></Text>
            <View style={styles.checkboxContainer}>
                <TouchableOpacity onPress={() => setIsAgree(!isAgree)} style={styles.checkbox}>
                    {isAgree && <Ionicons name="checkmark" size={20} color="black" />}
                </TouchableOpacity>
                <Text style={styles.checkboxTitle}>Получать новости и обновления</Text>
            </View>
            <TouchableOpacity onPress={registration} style={[styles.login, { marginTop: 24 }]}>
                <Text style={styles.loginText}>Отправить</Text>
            </TouchableOpacity>
        </>
    )
};

export default Registration;