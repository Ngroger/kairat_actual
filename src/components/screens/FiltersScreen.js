import { View, Text, TextInput, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import styles from '../../styles/FiltersScreenStyle';
import { AntDesign, Feather, MaterialIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import CategoryAccordion from '../ui/CategoryAccordion';
import BottomTabs from '../ui/BottomTabs';

function FiltersScreen() {
    const navigation = useNavigation();
    const [isOpenPopular, setIsOpenPopular] = useState(false);
    const [popular, setPopular] = useState();

    const [isOpenSportClothes, setIsOpenSportClothes] = useState(false);
    const [sportCloth, setSportCloth] = useState();

    const [isOpenSportShooes, setIsOpenSportShooes] = useState(false);
    const [sportShoes, setSportShoes] = useState();

    const [isOpenSportBalls, setIsOpenSportBalls] = useState(false);
    const [sportBalls, setSportBalls] = useState();

    const [isOpenBags, setIsOpenBags] = useState(false);
    const [bags, setSportBags] = useState();

    const [isOpenAtribute, setIsOpenAtribute] = useState(false);
    const [atribute, setSportAtribute] = useState();

    const [isOpenAccessories, setIsOpenAccessories] = useState(false);
    const [accessories, setAccessories] = useState();

    const toggleOpenAccordion = (setState) => {
        setState(prevState => !prevState);
    };
        

    return (
        <View>
            <View style={styles.navbar}>
                <Text style={styles.title}>Сортировка</Text>
                <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Text style={styles.removeFiltersButton}>Сбросить</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
                        <AntDesign name='close' size={16} color='#000'/>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={{ paddingHorizontal: 16, width: '100%', height: '100%', backgroundColor: '#FFF', marginTop: 50 }}>
                <View style={styles.filterHeader}>
                    <Feather name="bar-chart" size={24} color="#231F20" />
                    <Text style={styles.filterHeaderText}>Цена по возрастанию</Text>
                    <MaterialIcons style={{ marginLeft: 10 }} name="keyboard-arrow-down" size={24} color="#231F20" />
                </View>
                <View style={styles.InputContainer}>
                    <View style={styles.field}>
                        <TextInput style={styles.input} placeholder='От' placeholderTextColor='#777777' keyboardType='numeric'/>
                    </View>
                    <View style={[styles.field, { marginLeft: 10 }]}>
                        <TextInput style={styles.input} placeholder='От' placeholderTextColor='#777777' keyboardType='numeric'/>
                    </View>
                </View>
                <View style={styles.filterHeader}>
                    <Ionicons name="bookmarks-outline" size={24} color="#231F20" />
                    <Text style={styles.filterHeaderText}>Бренд</Text>
                </View>
                <ScrollView horizontal={true} style={styles.filterSelectorContainer}>
                    <TouchableOpacity style={styles.activefilterSelect}>
                        <Text style={styles.filterSelectText}>Все</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.filterSelect, { marginLeft: 10 }]}>
                        <Text style={styles.filterSelectText}>Adidas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.filterSelect, { marginLeft: 10 }]}>
                        <Text style={styles.filterSelectText}>Nike</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.filterSelect, { marginLeft: 10 }]}>
                        <Text style={styles.filterSelectText}>Company Long</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.filterSelect, { marginLeft: 10 }]}>
                        <Text style={styles.filterSelectText}>Nike</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.filterSelect, { marginLeft: 10 }]}>
                        <Text style={styles.filterSelectText}>Puma</Text>
                    </TouchableOpacity>
                    
                </ScrollView>
                <View style={styles.filterHeader}>
                    <FontAwesome5 name="ruler-horizontal" size={24} color="#231F20" />
                    <Text style={styles.filterHeaderText}>Размеры</Text>
                </View>
                <ScrollView horizontal={true} style={styles.filterSelectorContainer}>
                    <TouchableOpacity style={styles.filterSelect}>
                        <Text style={styles.filterSelectText}>XXS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.filterSelect, { marginLeft: 10 }]}>
                        <Text style={styles.filterSelectText}>XS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.filterSelect, { marginLeft: 10 }]}>
                        <Text style={styles.filterSelectText}>S</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.filterSelect, { marginLeft: 10 }]}>
                        <Text style={styles.filterSelectText}>M</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.filterSelect, { marginLeft: 10 }]}>
                        <Text style={styles.filterSelectText}>L</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.filterSelect, { marginLeft: 10 }]}>
                        <Text style={styles.filterSelectText}>XL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.filterSelect, { marginLeft: 10 }]}>
                        <Text style={styles.filterSelectText}>XXXL</Text>
                    </TouchableOpacity>

                </ScrollView>
                <Text style={styles.filterHeaderText}>Категории</Text>
                <CategoryAccordion title='Популярное' onClose={() => toggleOpenAccordion(setIsOpenPopular)} state={isOpenPopular}/>
                <CategoryAccordion title='Спортивная одежда' onClose={() => toggleOpenAccordion(setIsOpenSportClothes)} state={isOpenSportClothes}/>
                <CategoryAccordion title='Спортивная обувь' onClose={() => toggleOpenAccordion(setIsOpenSportShooes)} state={isOpenSportShooes}/>
                <CategoryAccordion title='Спортивные мячи' onClose={() => toggleOpenAccordion(setIsOpenSportBalls)} state={isOpenSportBalls}/>
                <CategoryAccordion title='Сумки' onClose={() => toggleOpenAccordion(setIsOpenBags)} state={isOpenBags}/>
                <CategoryAccordion title='Атрибутика' onClose={() => toggleOpenAccordion(setIsOpenAtribute)} state={isOpenAtribute}/>
                <CategoryAccordion title='Аксессуары' onClose={() => toggleOpenAccordion(setIsOpenAccessories)} state={isOpenAccessories}/>
                <TouchableOpacity style={styles.acceptFilters}>
                    <Text style={styles.acceptFiltersText}>Показать товары</Text>
                </TouchableOpacity>
            </ScrollView>
            <StatusBar translucent={true} backgroundColor="transparent"/>
            <BottomTabs zIndex={1000} position="absolute"/>
        </View>
    )
};

export default FiltersScreen;