import { Text, View, TouchableOpacity, ScrollView, Image, FlatList, Linking } from 'react-native';
import styles from '../../styles/AllMatchesScreenStyle';
import Navbar from '../ui/Navbar';
import Svg, { Circle, Rect, Path } from 'react-native-svg'
import { Ionicons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import OurPartners from '../ux/OurPartners';
import { differenceInSeconds } from 'date-fns';
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

function redirectToURL(url) {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
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

function AllMatchesScreen() {
    const [data, setData] = useState([]);
    const [oldData, setOldData] = useState([]);
    const [year, setYear] = useState(2024);
    const [isHttpError, setIsHttpError] = useState(false);
    const { t } = useTranslation();
    
    useEffect(() => {
        fetchNextMatches();
        fetchOldMatches();
    }, [year]);

    const fetchNextMatches = async () => {
        try {
            const response = await fetch(`https://fckairat.com/v1/match/next`);
            const result = await response.json();
    
            // Assuming 'items' is an array in the response
            setData(result.matches || []);
            // console.log(result.items);
            if (response.status === 404) {
                setIsHttpError(true)
            } else {
                setIsHttpError(false);
            }
        } catch (error) {
            console.error("Error fetching data:", error);   
        }
    }

    const fetchOldMatches = async () => {
        try {
            const response = await fetch(`https://fckairat.com/v1/match/${year}`);
            const result = await response.json();
    
            // Assuming 'items' is an array in the response
            setOldData(result.items || []);
            // console.log(result.items);
            if (response.status === 404) {
                setIsHttpError(true)
            } else {
                setIsHttpError(false);
            }
        } catch (error) {
            console.error("Error fetching data:", error);   
        }
    }

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

    toggleSetYear = async (year) => {
        setYear(year);
        
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
                        <Text style={styles.address}>{item.stadium.title.toUpperCase()}</Text>
                        <Text style={styles.versus}>VS</Text>
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
                <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 12, marginBottom: 12 }}>
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

    function OldMatch({ item }) {
        return (
            <View style={[styles.match, { padding: 10 }]}>
                <View style={styles.matchHeader}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                        <Image style={styles.kaz} source={require('../../img/kaz.png')}/>
                        <Text style={styles.matchTitle}>{item.tournament.toUpperCase()} {item.tour} ТУР</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', displayFlex: 'row', justifyContent: 'center' }}>
                        <Text style={styles.date}>{formatDate(item.date)}{'\n'}<Text style={{ fontFamily: 'MulishMedium' }}>{getDayOfWeek(item.date)}</Text></Text>
                    </View>
                </View>
                <View style={[styles.matchInfo, { marginBottom: 16 }]}>
                    <View style={styles.teamInfo}>
                        <Image style={[styles.teamImage, { marginTop: 12 }]} source={{ uri: item.teams[0].imageAbsolute }}/>
                        <Text style={styles.matchTeam}>{item.teams[0].title.toUpperCase()}{'\n'}<Text style={{ fontFamily: 'MulishRegular', fontSize: 10 }}>{item.teams[0].city.toUpperCase()}</Text></Text>   
                    </View>
                    <View style={styles.matchStat}>
                        <Text style={styles.scores}>{item.result}</Text>
                        { item.linkPhotos === "" ? (
                            <TouchableOpacity onPress={() => redirectToURL(item.broadcast)} style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Svg xmlns="http://www.w3.org/2000/svg" width="135" height="61" viewBox="0 0 134 41" fill="none">
                                    <Path d="M1.72579 39.9997L24.0794 1H131.375L108.428 39.9997H1.72579Z" fill="#FECC01" stroke="#FECC01" stroke-width="2"/>
                                </Svg>
                                <Svg style={{ position: 'absolute', zIndex: 10 }}  width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M9.10156 11.9995V10.5195C9.10156 8.6095 10.4516 7.8395 12.1016 8.7895L13.3816 9.5295L14.6616 10.2695C16.3116 11.2195 16.3116 12.7795 14.6616 13.7295L13.3816 14.4695L12.1016 15.2095C10.4516 16.1595 9.10156 15.3795 9.10156 13.4795V11.9995Z" stroke="#231F20" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <Path d="M12 21.999C17.5228 21.999 22 17.5219 22 11.999C22 6.47618 17.5228 1.99902 12 1.99902C6.47715 1.99902 2 6.47618 2 11.999C2 17.5219 6.47715 21.999 12 21.999Z" stroke="#231F20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                            </TouchableOpacity>
                        ) : (
                            <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', marginTop: -6 }}>
                                <TouchableOpacity onPress={() => redirectToURL(item.linkPhotos)} style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Svg xmlns="http://www.w3.org/2000/svg" width="85" height="41" viewBox="0 0 134 41" fill="none">
                                        <Path d="M1.72579 39.9997L24.0794 1H131.375L108.428 39.9997H1.72579Z" fill="#FECC01" stroke="#FECC01" stroke-width="2"/>
                                    </Svg>
                                    <Svg style={{ position: 'absolute', zIndex: 10 }}  width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M6.76017 21.999H17.2402C20.0002 21.999 21.1002 20.309 21.2302 18.249L21.7502 9.98902C21.8902 7.82902 20.1702 5.99902 18.0002 5.99902C17.3902 5.99902 16.8302 5.64902 16.5502 5.10902L15.8302 3.65902C15.3702 2.74902 14.1702 1.99902 13.1502 1.99902H10.8602C9.83017 1.99902 8.63017 2.74902 8.17017 3.65902L7.45017 5.10902C7.17017 5.64902 6.61017 5.99902 6.00017 5.99902C3.83017 5.99902 2.11017 7.82902 2.25017 9.98902L2.77017 18.249C2.89017 20.309 4.00017 21.999 6.76017 21.999Z" stroke="#231F20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <Path d="M10.5 7.99902H13.5" stroke="#231F20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <Path d="M12 17.999C13.79 17.999 15.25 16.539 15.25 14.749C15.25 12.959 13.79 11.499 12 11.499C10.21 11.499 8.75 12.959 8.75 14.749C8.75 16.539 10.21 17.999 12 17.999Z" stroke="#231F20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => redirectToURL(item.broadcast)} style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Svg xmlns="http://www.w3.org/2000/svg" width="85" height="41" viewBox="0 0 134 41" fill="none">
                                        <Path d="M1.72579 39.9997L24.0794 1H131.375L108.428 39.9997H1.72579Z" fill="#FECC01" stroke="#FECC01" stroke-width="2"/>
                                    </Svg>
                                    <Svg style={{ position: 'absolute', zIndex: 10 }}  width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M9.10156 11.9995V10.5195C9.10156 8.6095 10.4516 7.8395 12.1016 8.7895L13.3816 9.5295L14.6616 10.2695C16.3116 11.2195 16.3116 12.7795 14.6616 13.7295L13.3816 14.4695L12.1016 15.2095C10.4516 16.1595 9.10156 15.3795 9.10156 13.4795V11.9995Z" stroke="#231F20" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <Path d="M12 21.999C17.5228 21.999 22 17.5219 22 11.999C22 6.47618 17.5228 1.99902 12 1.99902C6.47715 1.99902 2 6.47618 2 11.999C2 17.5219 6.47715 21.999 12 21.999Z" stroke="#231F20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                </TouchableOpacity>
                            </View>
                        ) }
                        <Text style={[styles.address, { marginTop: 0 }]}>{item.stadium.title.toUpperCase()}</Text>
                    </View>
                    <View style={styles.teamInfo}>
                        <Image style={[styles.teamImage, { marginTop: 12 }]} source={{ uri: item.teams[1].imageAbsolute }}/>
                        <Text style={styles.matchTeam}>{item.teams[1].title.toUpperCase()}{'\n'}<Text style={{ fontFamily: 'MulishRegular', fontSize: 10 }}>{item.teams[0].city.toUpperCase()}</Text></Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View>
            <Navbar title="ФУТБОЛЬНЫЙ КЛУБ «КАЙРАТ»"/>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={[styles.title, { width: '100%' }]}>{t('matches-and-results').toUpperCase()}</Text>
                </View>
                <Image source={require('../../img/LINES.png')} style={styles.lines}/>
                { !isHttpError && (
                    <>
                        <ScrollView>
                            <View style={styles.oldMatchesContainer}>
                                <Text style={[styles.title, { marginTop: 16 }]}>{t('next-matches').toUpperCase()}</Text>
                            </View>
                            { data && data.map((item, index) => <Match key={index} item={item} />) }
                            <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', marginTop: 16 }}>
                                <Text style={styles.title}>{t('old-matches').toUpperCase()}</Text>
                                <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ width: '10%' }}>
                                        { year === 2024 ? (
                                            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={[styles.yearText, { position: 'absolute', zIndex: 100 }]}>2024</Text>
                                                <Svg xmlns="http://www.w3.org/2000/svg" width="59" height="22" viewBox="0 0 59 22" fill="none">
                                                    <Path d="M12.9514 0.000136375L59 0L44.9624 21.9999L0 22L12.9514 0.000136375Z" fill="#FECC01"/>
                                                </Svg>
                                            </TouchableOpacity>
                                        ) : (
                                            <TouchableOpacity onPress={() => toggleSetYear(2024)} style={{ paddingVertical: 10 }}>
                                                <Text style={styles.yearText}>2024 <Text style={{ color: '#FECC01' }}> /</Text></Text>
                                            </TouchableOpacity>
                                        ) }
                                        { year === 2023 ? (
                                            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={[styles.yearText, { position: 'absolute', zIndex: 100 }]}>2023</Text>
                                                <Svg xmlns="http://www.w3.org/2000/svg" width="59" height="22" viewBox="0 0 59 22" fill="none">
                                                    <Path d="M12.9514 0.000136375L59 0L44.9624 21.9999L0 22L12.9514 0.000136375Z" fill="#FECC01"/>
                                                </Svg>
                                            </TouchableOpacity>
                                        ) : (
                                            <TouchableOpacity onPress={() => toggleSetYear(2023)} style={{ paddingVertical: 10 }}>
                                                <Text style={styles.yearText}>2023 <Text style={{ color: '#FECC01' }}> /</Text></Text>
                                            </TouchableOpacity>
                                        ) }
                                        { year === 2022 ? (
                                            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={[styles.yearText, { position: 'absolute', zIndex: 100 }]}>2022</Text>
                                                <Svg xmlns="http://www.w3.org/2000/svg" width="59" height="22" viewBox="0 0 59 22" fill="none">
                                                    <Path d="M12.9514 0.000136375L59 0L44.9624 21.9999L0 22L12.9514 0.000136375Z" fill="#FECC01"/>
                                                </Svg>
                                            </TouchableOpacity>
                                        ) : (
                                            <TouchableOpacity onPress={() => toggleSetYear(2022)} style={{ paddingVertical: 10 }}>
                                                <Text style={styles.yearText}>2022 <Text style={{ color: '#FECC01' }}> /</Text></Text>
                                            </TouchableOpacity>
                                        ) }
                                        { year === 2021 ? (
                                            <TouchableOpacity onPress={() => toggleSetYear(2021)} style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={[styles.yearText, { position: 'absolute', zIndex: 100 }]}>2021</Text>
                                                <Svg xmlns="http://www.w3.org/2000/svg" width="59" height="22" viewBox="0 0 59 22" fill="none">
                                                    <Path d="M12.9514 0.000136375L59 0L44.9624 21.9999L0 22L12.9514 0.000136375Z" fill="#FECC01"/>
                                                </Svg>
                                            </TouchableOpacity>
                                        ) : (
                                            <TouchableOpacity onPress={() => toggleSetYear(2020)} style={{ paddingVertical: 10 }}>
                                                <Text style={styles.yearText}>2021 <Text style={{ color: '#FECC01' }}> /</Text></Text>
                                            </TouchableOpacity>
                                        ) }
                                        { year === 2020 ? (
                                            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={[styles.yearText, { position: 'absolute', zIndex: 100 }]}>2020</Text>
                                                <Svg xmlns="http://www.w3.org/2000/svg" width="59" height="22" viewBox="0 0 59 22" fill="none">
                                                    <Path d="M12.9514 0.000136375L59 0L44.9624 21.9999L0 22L12.9514 0.000136375Z" fill="#FECC01"/>
                                                </Svg>
                                            </TouchableOpacity>
                                        ) : (
                                            <TouchableOpacity onPress={() => toggleSetYear(2020)} style={{ paddingVertical: 10 }}>
                                                <Text style={styles.yearText}>2020 <Text style={{ color: '#FECC01' }}> /</Text></Text>
                                            </TouchableOpacity>
                                        ) }
                                        { year === 2019 ? (
                                            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={[styles.yearText, { position: 'absolute', zIndex: 100 }]}>2019</Text>
                                                <Svg xmlns="http://www.w3.org/2000/svg" width="59" height="22" viewBox="0 0 59 22" fill="none">
                                                    <Path d="M12.9514 0.000136375L59 0L44.9624 21.9999L0 22L12.9514 0.000136375Z" fill="#FECC01"/>
                                                </Svg>
                                            </TouchableOpacity>
                                        ) : (
                                            <TouchableOpacity onPress={() => toggleSetYear(2019)} style={{ paddingVertical: 10 }}>
                                                <Text style={styles.yearText}>2019 <Text style={{ color: '#FECC01' }}> /</Text></Text>
                                            </TouchableOpacity>
                                        ) }
                                        { year === 2018 ? (
                                            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={[styles.yearText, { position: 'absolute', zIndex: 100 }]}>2018</Text>
                                                <Svg xmlns="http://www.w3.org/2000/svg" width="59" height="22" viewBox="0 0 59 22" fill="none">
                                                    <Path d="M12.9514 0.000136375L59 0L44.9624 21.9999L0 22L12.9514 0.000136375Z" fill="#FECC01"/>
                                                </Svg>
                                            </TouchableOpacity>
                                        ) : (
                                            <TouchableOpacity onPress={() => toggleSetYear(2018)} style={{ paddingVertical: 10 }}>
                                                <Text style={styles.yearText}>2018 <Text style={{ color: '#FECC01' }}> /</Text></Text>
                                            </TouchableOpacity>
                                        ) }
                                        { year === 2017 ? (
                                            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={[styles.yearText, { position: 'absolute', zIndex: 100 }]}>2017</Text>
                                                <Svg xmlns="http://www.w3.org/2000/svg" width="59" height="22" viewBox="0 0 59 22" fill="none">
                                                    <Path d="M12.9514 0.000136375L59 0L44.9624 21.9999L0 22L12.9514 0.000136375Z" fill="#FECC01"/>
                                                </Svg>
                                            </TouchableOpacity>
                                        ) : (
                                            <TouchableOpacity onPress={() => toggleSetYear(2017)} style={{ paddingVertical: 10 }}>
                                                <Text style={styles.yearText}>2017 <Text style={{ color: '#FECC01' }}> /</Text></Text>
                                            </TouchableOpacity>
                                        ) }
                                    </ScrollView>
                                </View>
                                { oldData && oldData.map((item, index) => <OldMatch key={index} item={item} />) }
                        </ScrollView>
                    </>

                ) } 
                { isHttpError && (
                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Пока новостей не добавлено</Text>
                    </View>
                ) }
            </View>
        </View>
    )
};

export default AllMatchesScreen;