import { Text, TextInput, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../../styles/SearchScreenStyle';
import Navbar from '../ui/Navbar';
import { StatusBar } from 'expo-status-bar';
import BottomTabs from '../ui/BottomTabs';

function SearchScreen() {
    return (
        <View style={{ height: '100%', width: '100%'}}>
            <Navbar activityApp='Search' title='ФУТБОЛЬНЫЙ КЛУБ «КАЙРАТ»'/>
            <ScrollView style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>ПОИСК</Text>
                    <TouchableOpacity style={styles.category}>
                        <Text style={styles.categoryText}>Все <Text style={{ color: '#FECC01' }}>/</Text></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                        <Text style={styles.categoryText}>Игроки <Text style={{ color: '#FECC01' }}>/</Text></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                        <Text style={styles.categoryText}>Новости <Text style={{ color: '#FECC01' }}>/</Text></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                        <Text style={styles.categoryText}>Тренеры <Text style={{ color: '#FECC01' }}>/</Text></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                        <Text style={styles.categoryText}>Медиа <Text style={{ color: '#FECC01' }}>/</Text></Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.searchContainer}>
                    <View style={styles.field}>
                        <TextInput style={styles.search} placeholder='Поиск' placeholderTextColor='#777777'/>
                    </View>
                    <TouchableOpacity style={styles.buttonFind}>
                        <Text style={styles.buttonFindText}>Найти</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.resultOfSearch}>
                    <Text style={styles.title}>1. Алип Нуралы</Text>
                    <Text style={styles.description}>... родился 22 декабря 1999 года в Актау. В восемь лет начал заниматься футболом в академии местного «Каспия». В 2015-м начал заниматься в академии «Кайрата», а спустя три года, в 2018-м — дебютировал в основном составе желто-черных. Нуралы Alip Nuraly Nuraly Alip was born on 22 December 1999 in Aktau, Kazakhstan. He began ...</Text>
                    <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                        <Text style={styles.topicTitle}>Искать в разделах</Text>
                        <TouchableOpacity>
                            <Text style={styles.topicItem}>Главная</Text>
                        </TouchableOpacity>
                        <Text style={{ color: '#FECC01', marginLeft: 6 }}>/</Text>
                        <TouchableOpacity>
                            <Text style={styles.topicItem}>Кайрат</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.resultOfSearch}>
                    <Text style={styles.title}>1. Алип Нуралы</Text>
                    <Text style={styles.description}>... родился 22 декабря 1999 года в Актау. В восемь лет начал заниматься футболом в академии местного «Каспия». В 2015-м начал заниматься в академии «Кайрата», а спустя три года, в 2018-м — дебютировал в основном составе желто-черных. Нуралы Alip Nuraly Nuraly Alip was born on 22 December 1999 in Aktau, Kazakhstan. He began ...</Text>
                    <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                        <Text style={styles.topicTitle}>Искать в разделах</Text>
                        <TouchableOpacity>
                            <Text style={styles.topicItem}>Главная</Text>
                        </TouchableOpacity>
                        <Text style={{ color: '#FECC01', marginLeft: 6 }}>/</Text>
                        <TouchableOpacity>
                            <Text style={styles.topicItem}>Кайрат</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.resultOfSearch}>
                    <Text style={styles.title}>1. Алип Нуралы</Text>
                    <Text style={styles.description}>... родился 22 декабря 1999 года в Актау. В восемь лет начал заниматься футболом в академии местного «Каспия». В 2015-м начал заниматься в академии «Кайрата», а спустя три года, в 2018-м — дебютировал в основном составе желто-черных. Нуралы Alip Nuraly Nuraly Alip was born on 22 December 1999 in Aktau, Kazakhstan. He began ...</Text>
                    <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                        <Text style={styles.topicTitle}>Искать в разделах</Text>
                        <TouchableOpacity>
                            <Text style={styles.topicItem}>Главная</Text>
                        </TouchableOpacity>
                        <Text style={{ color: '#FECC01', marginLeft: 6 }}>/</Text>
                        <TouchableOpacity>
                            <Text style={styles.topicItem}>Кайрат</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.resultOfSearch}>
                    <Text style={styles.title}>1. Алип Нуралы</Text>
                    <Text style={styles.description}>... родился 22 декабря 1999 года в Актау. В восемь лет начал заниматься футболом в академии местного «Каспия». В 2015-м начал заниматься в академии «Кайрата», а спустя три года, в 2018-м — дебютировал в основном составе желто-черных. Нуралы Alip Nuraly Nuraly Alip was born on 22 December 1999 in Aktau, Kazakhstan. He began ...</Text>
                    <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                        <Text style={styles.topicTitle}>Искать в разделах</Text>
                        <TouchableOpacity>
                            <Text style={styles.topicItem}>Главная</Text>
                        </TouchableOpacity>
                        <Text style={{ color: '#FECC01', marginLeft: 6 }}>/</Text>
                        <TouchableOpacity>
                            <Text style={styles.topicItem}>Кайрат</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <StatusBar translucent={true} backgroundColor='transparent'/>
            <BottomTabs zIndex={1000} position="absolute"/>
        </View>
    )
};

export default SearchScreen;
