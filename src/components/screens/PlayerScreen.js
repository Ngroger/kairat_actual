import { View, Text, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native';
import styles from '../../styles/PlayerScreenStyle';
import Navbar from '../ui/Navbar';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import Svg, { Circle, Defs, Filter, FeFlood, FeBlend, FeGaussianBlur, Path } from 'react-native-svg';
import OurPartners from '../ux/OurPartners';
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import BottomTabs from '../ui/BottomTabs';

function PlayerScreen() {
    const route = useRoute();
    const { slug } = route.params;
    const navigation = useNavigation();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://fckairat.com/v1/team/player/view/${slug}`);
                const result = await response.json();
        
                // Assuming 'items' is an array in the response
                setData(result || []);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        
        fetchData();
    }, []);

    const formatAchievements = (data) => {
        // Функция для очистки текста от HTML-тегов
        const stripHtmlTags = (html) => {
            return html.replace(/<[^>]*>?/gm, ''); // Удаляем все HTML теги
        };
    
        // Очистить текст от HTML-тегов
        const achievementsText = stripHtmlTags(data);
    
        // Разделить текст на строки, чтобы добавить символ "•" перед каждым предложением
        const achievementsLines = achievementsText.split("\n");
    
        // Добавить символ "•" перед каждым предложением
        const formattedAchievements = achievementsLines
            .filter((line) => line.trim() !== "") // Отфильтровать пустые строки
            .map((line) => `• ${line.trim()}`) // Добавить символ "•" перед каждым предложением
            .join("\n"); // Объединить строки обратно
    
        return formattedAchievements;
    };
    
    if(!data || Object.keys(data).length === 0) {
        return <ActivityIndicator/>
    }

    removeHtmlTags = (text) => {
        const withoutTags = text.replace(/<[^>]+>/g,''); // Удалить HTML-теги
        const withoutLaquo = withoutTags.replace(/&laquo;/g, ''); // Удалить &laquo;
        const withoutRaquo = withoutLaquo.replace(/&raquo;/g, '');
        return withoutRaquo.replace(/\./g, '.\n\n'); // Добавить пустые строки после каждой точки
    }
    

    return (
        <View>
            <Navbar title="ФУТБОЛЬНЫЙ КЛУБ «КАЙРАТ»"/>
                <ScrollView style={styles.content}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.buttonBack}>
                            <AntDesign name="arrowleft" size={24} color="#FECC01" />
                        </TouchableOpacity>
                        <Text style={styles.title}>ИГРОК ФУТБОЛЬНОЙ КОМАНДЫ "КАЙРАТ"</Text>
                    </View>
                    <Image source={require('../../img/LINES.png')} style={styles.lines}/>
                    <View style={styles.playerContent}>
                        <View style={styles.imageContainer}>
                            <Image source={require('../../img/SOSTAV.png')} style={styles.image}/>
                            <Image source={{ uri: data.imageAbsolute }}  style={[styles.image, { position: 'absolute', zIndex: 100 }]}/>
                            <View style={styles.imageHeader}>
                                <View style={styles.numberContainer}>
                                    <Text style={styles.number}>{data.number}</Text>
                                    <Svg width={51} height={76.5} viewBox="0 0 34 51" fill="none">
                                        <Path
                                        d="M13.9017 42.6253C10.165 36.9828 6.42892 31.3413 2.70103 25.6945L17.1356 3.39177C19.4194 6.92096 21.7038 10.4497 23.9882 13.9783L23.9906 13.982C26.5177 17.8856 29.0447 21.7891 31.5709 25.6931C27.7611 31.4446 23.9554 37.1996 20.15 42.9539C19.1455 44.4728 18.1411 45.9917 17.1366 47.5105C16.0584 45.8819 14.98 44.2535 13.9017 42.6253Z"
                                        fill="#FECC01"
                                        stroke="#FECC01"
                                        strokeWidth={3}
                                        />
                                    </Svg>
                                </View>
                                { data.isClubStudent && <Image style={{ width: 50, height: 50 }} source={require('../../img/HG.png')}/> }
                            </View>
                        </View>
                        <Text style={styles.name}>{data.name} {data.lastname}</Text>
                        <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12 }}>
                            <Text style={{ fontFamily: 'MulishBold', fontSize: 16, letterSpacing: 1 }}>{data.position}</Text>
                            <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                                <Text style={{ fontFamily: 'MulishBold', fontSize: 16, letterSpacing: 1, right: 6 }}>{data.instagram}</Text>
                                <AntDesign name="instagram" size={24} color="black" />
                            </View>
                        </View>
                        <View style={styles.infoContainer}>
                            <View>
                                <Text style={styles.infoText}>Гражданство - <Text style={{ fontFamily: 'MulishBlack' }}>{data.citizenship}</Text></Text>
                                <Text style={styles.infoText}>Место рождения - <Text style={{ fontFamily: 'MulishBlack' }}>{data.placeBirth}</Text></Text>
                                <Text style={styles.infoText}>Возраст - <Text style={{ fontFamily: 'MulishBlack' }}>{data.age} год</Text> / {data.birthDay}</Text>
                            </View>
                            <Svg width={20} height={61} viewBox="0 0 20 61" fill="none">
                                <Path
                                d="M1.77482 61H0L18.2252 0H20L1.77482 61Z"
                                fill="#FECC01"
                                />
                            </Svg>
                            <View>
                                <Text style={styles.infoText}>В клубе - <Text style={{ fontFamily: 'MulishBlack' }}>{data.inClub} лет</Text></Text>
                                <Text style={styles.infoText}>Рост - <Text style={{ fontFamily: 'MulishBlack' }}>{data.height} см</Text></Text>
                                <Text style={styles.infoText}>Вес - <Text style={{ fontFamily: 'MulishBlack' }}>{data.weight} кг</Text></Text>
                            </View>
                        </View>
                        <View style={styles.statistic}>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={styles.statisticText}>МАЧТЕЙ{'\n'}<Text style={{ fontFamily: 'MulishMedium' }}> за «КАЙРАТ»</Text></Text>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                                    <Text style={[styles.statisticText, { fontSize: 32, marginTop: 20 }]}>{data.matchClub}</Text>
                                    <Image style={{ resizeMode: 'cover', width: 100, height: 100 }} source={require('../../img/Effect.png')}/>
                                </View>
                                <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', position: 'absolute', zIndex: 1000, top: 75, right: 0 }}>
                                    <Text style={{ fontSize: 12, fontFamily: 'MulishRegular' }}>В сезоне{'\n'} 2023/24</Text>
                                    <View style={{ width: 30, height: 30, backgroundColor: '#231F20', borderRadius: 1000, justifyContent: 'center', alignItems: 'center', left: 6,  }}>
                                        <Text style={{ fontFamily: 'MulishBold', color: '#FECC01', fontSize: 16 }}>{data.goalsClubForYear}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={styles.statisticText}>ГОЛОВ{'\n'}<Text style={{ fontFamily: 'MulishMedium' }}> за «КАЙРАТ»</Text></Text>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                                    <Text style={[styles.statisticText, { fontSize: 32, marginTop: 20 }]}>{data.goalsClub}</Text>
                                    <Image style={{ resizeMode: 'cover', width: 100, height: 100 }} source={require('../../img/Effect.png')}/>
                                </View>
                                <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', position: 'absolute', zIndex: 1000, top: 75, right: 0 }}>
                                    <Text style={{ fontSize: 12, fontFamily: 'MulishRegular' }}>В сезоне{'\n'} 2023/24</Text>
                                    <View style={{ width: 30, height: 30, backgroundColor: '#231F20', borderRadius: 1000, justifyContent: 'center', alignItems: 'center', left: 6,  }}>
                                        <Text style={{ fontFamily: 'MulishBold', color: '#FECC01', fontSize: 16 }}>{data.goalsClubForYear}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={styles.statisticText}>АСИСТОВ{'\n'}<Text style={{ fontFamily: 'MulishMedium' }}> за «КАЙРАТ»</Text></Text>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                                    <Text style={[styles.statisticText, { fontSize: 32, marginTop: 20 }]}>{data.assistsClub}</Text>
                                    <Image style={{ resizeMode: 'cover', width: 100, height: 100 }} source={require('../../img/Effect.png')}/>
                                </View>
                                <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', position: 'absolute', zIndex: 1000, top: 75, right: 0 }}>
                                    <Text style={{ fontSize: 12, fontFamily: 'MulishRegular' }}>В сезоне{'\n'} 2023/24</Text>
                                    <View style={{ width: 30, height: 30, backgroundColor: '#231F20', borderRadius: 1000, justifyContent: 'center', alignItems: 'center', left: 6,  }}>
                                        <Text style={{ fontFamily: 'MulishBold', color: '#FECC01', fontSize: 16 }}>{data.goalsClubForYear}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {data.achievements !== '' && (
                            <View style={styles.achievements}>
                                <Text style={styles.achievementsTitle}>Достижения</Text>
                                <View>
                                    <Text style={styles.achievementsInfo}>
                                        {data.achievements
                                            .replace(/<[^>]+>/g, '') // Удалить HTML-теги
                                            .replace(/&bull; /g, '') // Удалить строку "&bull; "
                                            .split('\n\t') // Разбить текст по новым строкам и табуляции
                                            .filter(Boolean) // Удалить пустые элементы
                                            .map((achievement, index) => index === 0 ? achievement : `• ${achievement}`) // Добавить символ "•" в начало каждого предложения, кроме первого
                                            .join('\n') // Объединить обработанные предложения обратно в текст
                                        }
                                    </Text>
                                </View>
                            </View>
                        )} 
                        <View style={styles.career}>
                            <Text style={styles.careetTitle}>Карьера</Text>
                            <Text style={styles.careerInfo}>{removeHtmlTags(data.career)}</Text>
                        </View>
                        {/* <View style={styles.shop}>
                            <View style={styles.card}>
                                <Image style={styles.imageShop}/>
                                <Text style={styles.shopTitle}>Футболка Данияра Касабулата</Text>
                                <Text style={styles.cost}>8 700Т</Text>
                                <TouchableOpacity style={styles.addProduct}>
                                    <Text style={styles.addProductText}>Добавить в корзину</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.addProduct, { backgroundColor: '#FFF' }]}>
                                    <Text style={styles.addProductText}>Подробнее</Text>
                                </TouchableOpacity>
                            </View>
                        </View> */}
                    </View>
                    <OurPartners/>
                </ScrollView>
                <StatusBar translucent={true} backgroundColor='transparent'/>
                <BottomTabs zIndex={0} position="relative"/>
        </View>
    )
};

export default PlayerScreen