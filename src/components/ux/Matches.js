import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { format, differenceInSeconds } from 'date-fns';
import Svg, { Circle, Rect, Path } from 'react-native-svg'
import styles from '../../styles/MatchesStyle';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';


const months = [
    'янв.', 'фев.', 'мар.', 'апр.', 'мая', 'июн.',
    'июл.', 'авг.', 'сен.', 'окт.', 'ноя.', 'дек.'
];

function formatDate(dateString) {
    const parts = dateString.split(' ');
    const day = parseInt(parts[0]);
    const monthIndex = months.indexOf(parts[1].toLowerCase());
    const year = parseInt(parts[2]);
    return `${day} ${months[monthIndex].toUpperCase()}`;
}

function getDayOfWeek(dateString) {
    const daysOfWeek = ['ВОСКРЕСЕНЬЕ', 'ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА'];
    const parts = dateString.split(' ');
    const day = parseInt(parts[0]);
    const monthIndex = months.indexOf(parts[1].toLowerCase());
    const year = parseInt(parts[2]);
    const date = new Date(year, monthIndex, day);
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
}

function Match({ item }) {
    const [countdown, setCountdown] = useState('');

    function convertToISOString(dateString) {
        const months = {
            'янв.': '01', 'фев.': '02', 'мар.': '03', 'апр.': '04', 'мая': '05', 'июн.': '06',
            'июл.': '07', 'авг.': '08', 'сен.': '09', 'окт.': '10', 'ноя.': '11', 'дек.': '12'
        };
    
        const parts = dateString.match(/(\d+) (\S+) (\d+) г., (\d+):(\d+):(\d+)/);
        const day = parts[1].padStart(2, '0');
        const month = months[parts[2]];
        const year = parts[3];
        const hours = parts[4].padStart(2, '0');
        const minutes = parts[5].padStart(2, '0');
        const seconds = parts[6].padStart(2, '0');
    
        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.000Z`;
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const matchDate = convertToISOString(item.date);
            
            const diffInSeconds = differenceInSeconds(matchDate, now);
            
            const days = Math.floor(diffInSeconds / (3600 * 24));
            const hours = Math.floor((diffInSeconds % (3600 * 24)) / 3600);
            const minutes = Math.floor((diffInSeconds % 3600) / 60);
            const seconds = diffInSeconds % 60;

            setCountdown(`${days} ДНЕЙ ${hours}:${minutes}:${seconds}`);
        }, 100);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <View style={styles.match}>
            <View style={styles.matchHeader}>
                <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                    <Image style={styles.kaz} source={require('../../img/kaz.png')}/>
                    <Text style={styles.matchTitle}>{item.tournament.toUpperCase()} {item.tour} ТУР</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', displayFlex: 'row', justifyContent: 'center' }}>
                    <Text style={styles.date}>{formatDate(item.date)}{'\n'}<Text style={{ fontFamily: 'MulishMedium' }}>{getDayOfWeek(item.date)}</Text></Text>
                    <Text style={{ fontSize: 48, marginLeft: 12, color: '#FECC01', fontWeight: '900' }}>/</Text>
                </View>
            </View>
            <View style={styles.matchInfo}>
                <View style={styles.teamInfo}>
                    <Image style={styles.teamImage} source={{ uri: item.teams[0].imageAbsolute }}/>
                </View>
                <View style={styles.matchStat}>
                    <Text style={styles.score}>{item.time}</Text>
                    <Text style={styles.versus}>VS</Text>
                    <Text style={styles.address}>{item.stadium.title.toUpperCase()}</Text>
                </View>
                <View style={styles.teamInfo}>
                    <Image style={styles.teamImage} source={{ uri: item.teams[1].imageAbsolute }}/>
                </View>
            </View>
            <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 6, marginTop: 2 }}>    
                <Text style={styles.matchTeam}>{item.teams[0].title.toUpperCase()}{'\n'}<Text style={{ fontFamily: 'MulishRegular', fontSize: 10 }}>{item.teams[0].city.toUpperCase()}</Text></Text>           
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10, opacity: item.eventID === "" ? 0.2 : 1 }}>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="134" height="41" viewBox="0 0 134 41" fill="none">
                        <Path d="M1.72579 39.9997L24.0794 1H131.375L108.428 39.9997H1.72579Z" fill="#FECC01" stroke="#FECC01" stroke-width="2"/>
                    </Svg>
                    <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', position: 'absolute', zIndex: 1 }}>
                        <Svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                            <Path fill-rule="evenodd" clip-rule="evenodd" d="M1.02112 1.44544C1.84871 0.617849 3.14402 0.424316 4.81395 0.424316H13.186C14.856 0.424316 16.1513 0.617849 16.9789 1.44544C17.8065 2.27302 18 3.56834 18 5.23827V6.07548C18 6.42226 17.7189 6.70339 17.3721 6.70339C16.5635 6.70339 15.907 7.35994 15.907 8.1685C15.907 8.97707 16.5635 9.63362 17.3721 9.63362C17.7189 9.63362 18 9.91474 18 10.2615C18 11.9315 17.8065 13.2268 16.9789 14.0544C16.1513 14.8819 14.856 15.0755 13.186 15.0755H4.81395C3.14402 15.0755 1.84871 14.8819 1.02112 14.0544C0.193533 13.2268 0 11.9315 0 10.2615V9.84292C0 9.49614 0.281124 9.21501 0.627907 9.21501C1.43647 9.21501 2.09302 8.55846 2.09302 7.7499C2.09302 6.94133 1.43647 6.28478 0.627907 6.28478C0.281124 6.28478 0 6.00366 0 5.65687V5.23827C0 3.56834 0.193533 2.27302 1.02112 1.44544ZM1.25632 5.10198C2.45574 5.38581 3.34884 6.46404 3.34884 7.7499C3.34884 9.03575 2.45574 10.114 1.25632 10.3978C1.26833 11.984 1.49264 12.7499 1.90911 13.1664C2.33734 13.5946 3.13505 13.8197 4.81395 13.8197H13.186C14.865 13.8197 15.6627 13.5946 16.0909 13.1664C16.4691 12.7881 16.6889 12.1217 16.735 10.8144C15.54 10.5274 14.6512 9.45126 14.6512 8.1685C14.6512 6.88246 15.5445 5.8041 16.7442 5.52046V5.23827C16.7442 3.55936 16.5191 2.76166 16.0909 2.33343C15.6627 1.9052 14.865 1.68013 13.186 1.68013H4.81395C3.13505 1.68013 2.33734 1.9052 1.90911 2.33343C1.49264 2.7499 1.26833 3.51584 1.25632 5.10198Z" fill="#231F20"/>
                            <Path fill-rule="evenodd" clip-rule="evenodd" d="M7.32517 0.424316C7.67196 0.424316 7.95308 0.70544 7.95308 1.05222L7.95308 2.72664C7.95308 3.07343 7.67196 3.35455 7.32517 3.35455C6.97839 3.35455 6.69727 3.07343 6.69727 2.72664L6.69727 1.05222C6.69727 0.70544 6.97839 0.424316 7.32517 0.424316ZM7.32517 5.44757C7.67196 5.44757 7.95308 5.7287 7.95308 6.07548L7.95308 9.42432C7.95308 9.7711 7.67196 10.0522 7.32517 10.0522C6.97839 10.0522 6.69727 9.7711 6.69727 9.42432L6.69727 6.07548C6.69727 5.7287 6.97839 5.44757 7.32517 5.44757ZM7.32517 12.1452C7.67196 12.1452 7.95308 12.4264 7.95308 12.7732L7.95308 14.4476C7.95308 14.7944 7.67196 15.0755 7.32517 15.0755C6.97839 15.0755 6.69727 14.7944 6.69727 14.4476L6.69727 12.7732C6.69727 12.4264 6.97839 12.1452 7.32517 12.1452Z" fill="#231F20"/>
                        </Svg>
                        <Text style={{ fontSize: 16, marginLeft: 6, fontFamily: 'MulishBold', color: '#231F20' }}>БИЛЕТЫ</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.matchTeam}>{item.teams[1].title.toUpperCase()}{'\n'}<Text style={{ fontFamily: 'MulishRegular', fontSize: 10 }}>{item.teams[0].city.toUpperCase()}</Text></Text>
            </View>
            <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 12 }}>
                <Text style={styles.start}>
                    НАЧНЁТСЯ ЧЕРЕЗ 
                </Text>
                <Text style={[styles.start, {fontFamily: 'MulishBold', marginLeft: 4}]}>
                    {countdown}
                </Text>
            </View>
        </View>
    )
}

function Matches() {
    const [data, setData] = useState([]);
    const scrollViewRef = useRef();
    const [currentPage, setCurrentPage] = useState(0);
    const navigation = useNavigation();
    const { t } = useTranslation();
    const { width } = Dimensions.get('window');

    const handleScroll = (event) => {
        const { contentOffset } = event.nativeEvent;
        const page = Math.round(contentOffset.x / width);
        setCurrentPage(page);
    };

    const scrollToPage = (pageIndex) => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({
            x: width * pageIndex,
                animated: true
            });
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://fckairat.com/v1/match/next');
            const jsonData = await response.json();
            setData(jsonData.matches);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    
    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>{t('matches-tab').toUpperCase()}</Text>
                </View>
                <View style={styles.container}>
                    <ScrollView
                        ref={scrollViewRef}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onScroll={handleScroll}
                        scrollEventThrottle={16}
                    >
                        { data && data.map((item, index) => <Match key={index} item={item} />) }
                    </ScrollView>
                    <View style={{ width: '100%', flexDirection: 'row', display: 'flex', justifyContent: 'center' }}>
                        {data.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[styles.dot, currentPage === index && styles.activeDot ]}
                                onPress={() => scrollToPage(index)}/>
                        ))}
                    </View>
                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 6, marginBottom: 20 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('AllMatches')}>
                            <Text style={{ fontFamily: 'MulishMedium', fontSize: 16, color: '#231F20' }}>{t('view-all-matches')}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
        </View>
    )
};

export default Matches;
