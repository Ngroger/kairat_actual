import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../styles/FiltersScreenStyle';
import { Ionicons } from '@expo/vector-icons';

function CategoryAccordion({ title, onClose, value, state, selected }) {
    return (
        <View>
            <View style={styles.accordion}>
                <TouchableOpacity style={styles.activeCheckbox}>
                    <Ionicons name="checkmark-sharp" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={onClose}>
                    <Text style={styles.titleAccordion}>{title}</Text>
                </TouchableOpacity>
            </View>
            { state && (
                <View style={styles.openAccordion}>
                    <View style={styles.accordionItemsContainer}>
                        <TouchableOpacity style={styles.checkbox}>
                            <Ionicons name="checkmark-sharp" size={24} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.accordionItem}>Костюмы</Text>
                        <Text style={styles.countOfItems}>3</Text>
                    </View>
                </View>
            ) }
        </View>
    )
};

export default CategoryAccordion;