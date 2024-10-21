import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from '../../../styles/PressFeedbackStyle';
import { AntDesign } from '@expo/vector-icons';
import MaskInput from 'react-native-mask-input';
import { useState } from 'react';
import { da } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';

function PressFeedback({ onClose }) {
  const [data, setData] = useState({
    fullname: "",
    phoneNumber: "",
    comment: ""
  });
  const { t } = useTranslation();

  const [errors, setErrors] = useState({
    fullname: false,
    phoneNumber: false,
    comment: false
  });

  const handleChangeData = (name, value) => {
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));

    // Убираем ошибку, если поле заполнено
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: value.length === 0
    }));
  };

  const validateForm = () => {
    const newErrors = {
      fullname: data.fullname.length === 0,
      phoneNumber: data.phoneNumber.length === 0,
      comment: data.comment.length === 0
    };

    setErrors(newErrors);

    // Если ни одно поле не пустое, вернем true
    return !Object.values(newErrors).includes(true);
  };

  const sendFeedback = async () => {
    const isValidateForm = await validateForm();
    if (isValidateForm) {
      try {
        const formData = new FormData();
        formData.append('fullName', data.fullname);
        formData.append('phone', data.phoneNumber);
        formData.append('message', data.comment);

        const response = await fetch('https://fckairat.com/v1/club/press-center', {
          method: 'POST',
          body: formData
        });

        const responseJson = await response.json();
        if (responseJson.success) {
          onClose();
        }

      } catch (error) {
      }
    }
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <AntDesign name='close' color='#FFF' size={16} />
        </TouchableOpacity>
        <View style={styles.form}>
          <Text style={styles.title}>{t("press-center-modal.title")}</Text>

          <View style={styles.field}>
            <Text style={styles.fieldTitle}>{t("press-center-modal.fullname-title")}</Text>
            <TextInput
              style={styles.input}
              value={data.fullname}
              onChangeText={(text) => handleChangeData("fullname", text)}
            />

          </View>
          {errors.fullname && <Text style={styles.error}>{t("press-center-modal.fullname-error")}</Text>}
          <View style={styles.field}>
            <Text style={styles.fieldTitle}>{t("press-center-modal.phone-title")}</Text>
            <MaskInput
              style={styles.input}
              keyboardType='numeric'
              mask={['+', /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
              value={data.phoneNumber}
              onChangeText={(masked, unmasked) => handleChangeData("phoneNumber", masked)}
            />

          </View>
          {errors.phoneNumber && <Text style={styles.error}>{t("press-center-modal.phone-error")}</Text>}
          <View style={styles.field}>
            <Text style={styles.fieldTitle}>{t("press-center-modal.comment-title")}</Text>
            <TextInput
              multiline={true}
              style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
              value={data.comment}
              onChangeText={(text) => handleChangeData("comment", text)}
            />
          </View>
          {errors.comment && <Text style={styles.error}>{t("press-center-modal.comment-error")}</Text>}
          <TouchableOpacity
            disabled={!data.fullname || !data.phoneNumber || !data.comment}
            onPress={sendFeedback}
            style={
              !data.fullname || !data.phoneNumber || !data.comment ?
                [styles.button, { opacity: 0.5 }] :
                styles.button
            }
          >
            <Text style={styles.buttonText}>{t("press-center-modal.send-button")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default PressFeedback;
