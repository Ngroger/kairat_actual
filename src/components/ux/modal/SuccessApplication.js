import { View, TouchableOpacity, Text } from "react-native";
import styles from '../../../styles/SuccessApplicationStyle'
import { AntDesign, Ionicons, FontAwesome5, FontAwesome6, Feather, MaterialIcons, Entypo  } from '@expo/vector-icons';

function SuccessApplication({ onClose }) {
    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <AntDesign name='close' size={16} color='#000'/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}>Успешно</Text>
                <Text style={styles.subtitle}>Заявка успешно отправлена!</Text>
            </View>    
        </View>
    );
};

export default SuccessApplication;