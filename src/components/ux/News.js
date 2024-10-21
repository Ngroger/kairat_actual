import { View, ScrollView, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from '../../styles/NewsStyle';
import { MaterialIcons } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState, useRef } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';

function News() {
    const [data, setData] = useState([]);
    const [isHttpError, setIsHttpError] = useState(false);
    const [isOpenFilter, setIsOpenFilter] = useState(false);
    const [filter, setFilter] = useState();
    const { t } = useTranslation();

    useEffect(() => {
        toggleSetFilter('Все', '/v1/news/kajrat');
    }, []);

    toggleSetFilter = async (filter, url) => {
        setFilter(filter);
        try {
            const response = await fetch(`https://fckairat.com/${url}`);
            const result = await response.json();

            // Assuming 'items' is an array in the response
            setData(result.category?.items || []);
            if (response.status === 404) {
                setIsHttpError(true)
            } else {
                setIsHttpError(false);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('NewsScreen', { url: item.url })} style={styles.new}>
                <Image source={{ uri: item.imageAbsolute }} style={styles.newImage} />
                <Text style={styles.newTitle}>{item.title}</Text>
                <View style={styles.dateTimeContainer}>
                    <Text style={styles.date}>{formatDate(item.date)} <Text style={{ color: '#FECC01' }}>/</Text> {formatTime(item.date)}</Text>
                </View>
                <LinearGradient
                    colors={['rgba(35, 31, 32, 0.00)', 'rgba(35, 31, 32, 0.63)', '#231F20']}
                    stops={[0, 0.5625, 1]}
                    style={styles.gradient}
                />
                <View style={styles.headerNews}>
                    {item.categoryTitle.length > 10 ? (
                        <Svg xmlns="http://www.w3.org/2000/svg" width="179" height="28" viewBox="0 0 179 28" fill="none">
                            <Path opacity="0.7" d="M0 0.000173569L179 0L149.575 27.9998L0 28V0.000173569Z" fill="#FECC01" />
                        </Svg>
                    ) : (
                        <Svg xmlns="http://www.w3.org/2000/svg" width="104" height="29" viewBox="0 0 104 29" fill="none">
                            <Path opacity="0.7" d="M0 0.000174461L103.295 0L86.3147 28.1438L0 28.144V0.000174461Z" fill="#FECC01" />
                        </Svg>
                    )}
                    <Text style={styles.titleNews}>{item.categoryTitle.toUpperCase()}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    // Функция для форматирования даты
    const formatDate = (dateString) => {
        const dateParts = dateString.match(/(\d{1,2}) (\D{3,}) (\d{4})/);
        if (dateParts) {
            const [, day, month, year] = dateParts;
            return `${day} ${month} ${year}`;
        }
        return '';
    };

    // Функция для форматирования времени
    const formatTime = (dateString) => {
        const timeParts = dateString.match(/(\d{2}):(\d{2}):\d{2}/);
        if (timeParts) {
            const [, hours, minutes] = timeParts;
            return `${hours}:${minutes}`;
        }
        return '';
    };

    const navigation = useNavigation();
    return (
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{t('news-title').toUpperCase()}</Text>
                <TouchableOpacity onPress={() => setIsOpenFilter(!isOpenFilter)} style={styles.filter}>
                    <Text style={styles.filterTitle}>{filter}</Text>
                    <MaterialIcons name={isOpenFilter ? "keyboard-arrow-up" : "keyboard-arrow-down"} size={24} color="black" />
                </TouchableOpacity>
                {isOpenFilter && (
                    <View style={styles.filterMenu}>
                        <TouchableOpacity onPress={() => { toggleSetFilter(`${t('all')}`, '/v1/news/kajrat'); setIsOpenFilter(false); }} style={[styles.filterContainer, { backgroundColor: filter === `${t('all')}` ? '#FECC01' : '#FFF' }]}>
                            <Text style={styles.filterText}>{t('all')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { toggleSetFilter(`${t('kairat')}`, '/v1/news/kajrat'); setIsOpenFilter(false); }} style={[styles.filterContainer, { backgroundColor: filter === `${t('kairat')}` ? '#FECC01' : '#FFF' }]}>
                            <Text style={styles.filterText}>{t('kairat')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { toggleSetFilter(`${t('kairat-jastar')}`, '/v1/news/kajrat-zastar'); setIsOpenFilter(false); }} style={[styles.filterContainer, { backgroundColor: filter === `${t('kairat-jastar')}` ? '#FECC01' : '#FFF' }]}>
                            <Text style={styles.filterText}>{t('kairat-jastar')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { toggleSetFilter(`${t('women-football')}`, '/v1/news/zenskij-futbol'); setIsOpenFilter(false); }} style={[styles.filterContainer, { backgroundColor: filter === `${t('women-football')}` ? '#FECC01' : '#FFF' }]}>
                            <Text style={styles.filterText}>{t('women-football')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { toggleSetFilter(`${t('club')}`, '/v1/news/novosti-kluba'); setIsOpenFilter(false); }} style={[styles.filterContainer, { backgroundColor: filter === `${t('club')}` ? '#FECC01' : '#FFF' }]}>
                            <Text style={styles.filterText}>{t('club')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { toggleSetFilter(`${t('academy')}`, '/v1/news/novosti-akademii'); setIsOpenFilter(false); }} style={[styles.filterContainer, { backgroundColor: filter === `${t('academy')}` ? '#FECC01' : '#FFF' }]}>
                            <Text style={styles.filterText}>{t('academy')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { toggleSetFilter(`${t('ours-in-team')}`, '/v1/news/nasi-v-sbornoj'); setIsOpenFilter(false); }} style={[styles.filterContainer, { backgroundColor: filter === `${t('ours-in-team')}` ? '#FECC01' : '#FFF' }]}>
                            <Text style={styles.filterText}>{t('ours-in-team')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { toggleSetFilter('Blind Football', '/v1/news/blind-football'); setIsOpenFilter(false); }} style={[styles.filterContainer, { backgroundColor: filter === 'Blind Football' ? '#FECC01' : '#FFF' }]}>
                            <Text style={styles.filterText}>Blind Football</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
            {!isHttpError && (
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true} style={{ width: '100%' }}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            )}
            {isHttpError && (
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.errorMessage}>Пока новостей не добавлено</Text>
                </View>
            )}
        </View>
    )
};

export default News;