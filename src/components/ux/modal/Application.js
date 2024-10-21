import { View, TouchableOpacity, Image, Text, TextInput } from 'react-native';
import styles from '../../../styles/ApplicationStyle';
import { AntDesign, Ionicons, FontAwesome5, FontAwesome6, Feather, MaterialIcons, Entypo } from '@expo/vector-icons';
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import MaskInput from 'react-native-mask-input';

function Application({ onClose, onSuccess }) {
    const [name, onChangeName] = useState();
    const [selectedDate, setSelectedDate] = useState(null);
    const [city, onChangeCity] = useState();
    const [exp, onChangeExp] = useState();
    const [location, setLocation] = useState('Академия С.П.Квочкина');
    const [url, onChangeUrl] = useState();
    const [mail, onChangeMail] = useState();
    const [phoneNumber, onChangePhoneNumber] = useState();

    const [isNameError, setNameError] = useState(false);
    const [isDateError, setIsDateError] = useState();
    const [isCityError, setCityError] = useState(false);
    const [isExpError, setExpError] = useState(false);
    const [isUrlError, setUrlError] = useState(false);
    const [isMailError, setMailError] = useState(false);
    const [isPhoneNumberError, setPhoneNumberError] = useState(false);

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isShowLocation, setShowLocation] = useState(false);

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
            return `${day}.${month}.${year}`;
        } else {
            return '';
        }
    };

    const send = async () => {
        if (name && selectedDate !== null && city && exp && url && mail && phoneNumber) {
            setIsDateError(false);
            setNameError(false);
            setCityError(false);
            setExpError(false);
            setUrlError(false);
            setMailError(false);
            setPhoneNumberError(false);

            const formData = new FormData();
            formData.append("fullName", name);
            formData.append("previousFootballExperience", exp);
            formData.append("birthdate", formatDateReg(selectedDate));
            formData.append("city", city);
            formData.append("preferredLocation", "Костанай");
            formData.append("phone", phoneNumber);
            formData.append("email", mail);

            const response = await fetch('https://fckairat.com/v1/academy/form', {
                method: 'POST',
                body: formData // Отправляем formData напрямую
            });
            const responseJson = await response.json();

            if (response.ok) {
                if (responseJson.success) {
                    onSuccess();
                    onClose();
                }
            }
        } else {
            if (!name) {
                setNameError(true);
            } else {
                setNameError(false);
            }
            if (selectedDate === null) {
                setIsDateError(true);
            } else {
                setIsDateError(false);
            }
            if (!city) {
                setCityError(true);
            } else {
                setCityError(false);
            }
            if (!exp) {
                setExpError(true);
            } else {
                setExpError(false);
            }
            if (!url) {
                setUrlError(true);
            } else {
                setUrlError(false);
            }
            if (!mail) {
                setMailError(true);
            } else {
                setMailError(false);
            }
            if (!phoneNumber) {
                setPhoneNumberError(true);
            } else {
                setPhoneNumberError(false);
            }
        }
    }

    return (
        <View style={styles.background}>
            <View style={styles.header}>
                <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                    <AntDesign name='close' size={16} color='#FFF' />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <ScrollView style={{ padding: 20, height: 700 }}>
                    <Text style={styles.title}>Заявка</Text>
                    <View style={styles.field}>
                        <Text style={styles.fieldTitle}>ФИО</Text>
                        <TextInput value={name} onChangeText={onChangeName} style={styles.input} />
                    </View>
                    {isNameError && <Text style={{ textAlign: 'center', padding: 10, fontSize: 16, color: '#8B0000', fontFamily: 'MulishRegular' }}>Необходимо заполнить «ФИО»</Text>}
                    <View style={[styles.field, { flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }]}>
                        <Text style={styles.fieldTitle}>Дата рождения</Text>
                        <Text style={[styles.input, { width: 90 }]}>{selectedDate ? formatDate(selectedDate) : 'дд.мм.гггг'}</Text>
                        <TouchableOpacity onPress={showDatePicker}>
                            <FontAwesome5 name='calendar-alt' size={16} color="#231F20" />
                        </TouchableOpacity>
                    </View>
                    {isDateError && <Text style={{ textAlign: 'center', padding: 10, fontSize: 16, color: '#8B0000', fontFamily: 'MulishRegular' }}>Необходимо заполнить «Дата рождения»</Text>}
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                    <View style={styles.field}>
                        <Text style={styles.fieldTitle}>Город проживания</Text>
                        <TextInput value={city} onChangeText={onChangeCity} style={styles.input} />
                    </View>
                    {isCityError && <Text style={{ textAlign: 'center', padding: 10, fontSize: 16, color: '#8B0000', fontFamily: 'MulishRegular' }}>Необходимо заполнить «Город проживания»</Text>}
                    <View style={styles.field}>
                        <Text style={styles.fieldTitle}>Опыт в футболе</Text>
                        <TextInput value={exp} onChangeText={onChangeExp} multiline={true} style={[styles.input, { height: 150, textAlignVertical: 'top' }]} />
                    </View>
                    {isExpError && <Text style={{ textAlign: 'center', padding: 10, fontSize: 16, color: '#8B0000', fontFamily: 'MulishRegular' }}>Необходимо заполнить «Опыт в футболе»</Text>}
                    <TouchableOpacity onPress={() => setShowLocation(!isShowLocation)} style={[styles.field, { flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }]}>
                        <Text style={styles.fieldTitle}>Предпочитаемая локация</Text>
                        <Text style={[styles.input, { width: '80%' }]}>{location}</Text>
                        <TouchableOpacity onPress={() => setShowLocation(!isShowLocation)}>
                            <MaterialIcons name={isShowLocation ? 'arrow-drop-up' : 'arrow-drop-down'} size={24} color="#231F20" />
                        </TouchableOpacity>
                    </TouchableOpacity>
                    {isShowLocation && (
                        <View style={{ backgroundColor: '#FFF', width: '100%', padding: 12 }}>
                            <TouchableOpacity onPress={() => { setLocation('Академия У.А. Пехлеваниди'); setShowLocation(false) }}>
                                <Text style={{ fontFamily: 'MulishMedium', fontSize: 16, margin: 4 }}>Академия У.А. Пехлеваниди</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { setLocation('Академия С.П. Квочкина'); setShowLocation(false) }}>
                                <Text style={{ fontFamily: 'MulishMedium', fontSize: 16, margin: 4 }}>Академия С.П. Квочкина</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { setLocation('Кайрат Алтын Адам'); setShowLocation(false) }}>
                                <Text style={{ fontFamily: 'MulishMedium', fontSize: 16, margin: 4 }}>Кайрат Алтын Адам</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { setLocation('Кайрат Каскелен'); setShowLocation(false) }}>
                                <Text style={{ fontFamily: 'MulishMedium', fontSize: 16, margin: 4 }}>Кайрат Каскелен</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { setLocation('Кайрат Талгар'); setShowLocation(false) }}>
                                <Text style={{ fontFamily: 'MulishMedium', fontSize: 16, margin: 4 }}>Кайрат Талгар</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { setLocation('Кайрат Кызылорда'); setShowLocation(false) }}>
                                <Text style={{ fontFamily: 'MulishMedium', fontSize: 16, margin: 4 }}>Кайрат Кызылорда</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { setLocation('Кайрат Сайрам'); setShowLocation(false) }}>
                                <Text style={{ fontFamily: 'MulishMedium', fontSize: 16, margin: 4 }}>Кайрат Сайрам</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { setLocation('Кайрат Футбол-ленд'); setShowLocation(false) }}>
                                <Text style={{ fontFamily: 'MulishMedium', fontSize: 16, margin: 4 }}>Кайрат Футбол-ленд</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { setLocation('Кайрат Меркурий'); setShowLocation(false) }}>
                                <Text style={{ fontFamily: 'MulishMedium', fontSize: 16, margin: 4 }}>Кайрат Меркурий</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { setLocation('Кайрат Торнадо'); setShowLocation(false) }}>
                                <Text style={{ fontFamily: 'MulishMedium', fontSize: 16, margin: 4 }}>Кайрат Торнадо</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    <View style={styles.field}>
                        <Text style={styles.fieldTitle}>Ссылка на видео</Text>
                        <TextInput value={url} onChangeText={onChangeUrl} style={styles.input} />
                    </View>
                    {isUrlError && <Text style={{ textAlign: 'center', padding: 10, fontSize: 16, color: '#8B0000', fontFamily: 'MulishRegular' }}>Необходимо заполнить «Ссылка на видео»</Text>}
                    <View style={styles.field}>
                        <Text style={styles.fieldTitle}>Электронный почтовый адрес</Text>
                        <TextInput value={mail} onChangeText={onChangeMail} style={styles.input} />
                    </View>
                    {isMailError && <Text style={{ textAlign: 'center', padding: 10, fontSize: 16, color: '#8B0000', fontFamily: 'MulishRegular' }}>Необходимо заполнить «Электронный почтовый адрес»</Text>}
                    <View style={styles.field}>
                        <Text style={styles.fieldTitle}>Телефон для связи</Text>
                        <MaskInput
                            value={phoneNumber}
                            keyboardType='numeric'

                            onChangeText={(masked, unmasked) => {
                                onChangePhoneNumber(unmasked); // you can use the unmasked value as well
                            }}
                            mask={['+', /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                        />
                    </View>
                    {isPhoneNumberError && <Text style={{ textAlign: 'center', padding: 10, fontSize: 16, color: '#8B0000', fontFamily: 'MulishRegular' }}>Необходимо заполнить «Телефон для связи»</Text>}
                    <TouchableOpacity onPress={send} style={styles.sendButton}>
                        <Text style={styles.sendButtonText}>Отправить</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
};

export default Application;