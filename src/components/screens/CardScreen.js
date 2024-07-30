import { View, Text } from 'react-native';
import Navbar from '../ui/Navbar';

function CardScreen() {
    return (
        <View>
            <Navbar title='ФК «КАЙРАТ» / МАГАЗИН'/>
            <View style={{ width: '100%', height: '100%', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' }}>
                <Text>Здесь будет эмуляция страницы с информацией о товаре</Text>
            </View>
        </View>
    )
};

export default CardScreen;