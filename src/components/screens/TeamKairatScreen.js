// import { View, Text, ScrollView, TouchableOpacity, Image, FlatList, Touchable } from 'react-native';
// import styles from '../../styles/TeamKairatScreenStyle'
// import Navbar from '../ui/Navbar';
// import { MaterialIcons, FontAwesome5  } from '@expo/vector-icons';
// import Svg, { Path } from 'react-native-svg';
// import OurPartners from '../ux/OurPartners';
// import { useNavigation } from '@react-navigation/native';
// import TrainerModal from '../ux/modal/TrainerModal';
// import { useState, useEffect } from 'react';
// import { useRoute } from '@react-navigation/native';
// import { Triangle } from 'react-native-shape';
// import { LinearGradient } from 'expo-linear-gradient';

// function TeamKairatScreen({ route }) {
//     const navigation = useNavigation();
//     const [isTrainerShow, setShowTrainer] = useState(false);
//     const [data, setData] = useState([]);
//     const [year, setYear] = useState(2024);
//     const [isOpenYearSelector, setIsOpenYearSelector] =  useState(false);
//     const [selectedPlayer, setSelectedPayler] = useState('');
//     const [category, setCategory] = useState('Все');

//     const { cat } = route.params;

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(`https://fckairat.com/v1/team/cat/osnovnoj-sostav-fk-kajrat`);
//                 const result = await response.json();
        
//                 // Assuming 'items' is an array in the response
//                 setData(result.items || []);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };
        
//         fetchData();
//     }, []);
    
//     const renderCategory = ({ item }) => {
//         if (category !== 'Все' && category !== item.position) {
//             return null; // Если выбранная категория не совпадает с позицией игроков, пропустить рендеринг
//         }
    
//         return (
//             <View style={styles.cardsContainer}>
//                 <Text style={styles.cardsTitle}>{item.position.toUpperCase()}</Text>
//                 <FlatList
//                     style={styles.cards}
//                     data={item.players}
//                     renderItem={renderPlayer}
//                     keyExtractor={(player) => player.slug}
//                 />
//             </View>
//         );
//     };
    

//     const renderPlayer = ({ item }) => {
//         if (selectedPlayer === item.slug) {
//             return (
//                 <TouchableOpacity onPress={() => setSelectedPayler()} style={{ width: 170, height: 350, backgroundColor: '#FECC01', top: 10, paddingVertical: 100, borderRadius: 12, borderWidth: 2, alignItems: 'center', position: 'relative', zIndex: 1000, marginBottom: 10  }}>
//                     <Image source={{ uri: item.imageAbsolute }} style={[styles.cardImage, { width: '85%', height: 200, borderRadius: 16, marginTop: 16 }]}/>
//                     { item.isClubStudent && (
//                         <View style={[styles.cardNumber, { left: 30, top: 30 }]}>
//                             <Text style={[styles.number, { color: '#FECC01' }]}>{item.number}</Text>
//                             <Svg width={34} height={51} viewBox="0 0 34 51" fill="none">
//                                 <Path
//                                     d="M13.9017 42.6253C10.165 36.9828 6.42892 31.3413 2.70103 25.6945L17.1356 3.39177C19.4194 6.92096 21.7038 10.4497 23.9882 13.9783L23.9906 13.982C26.5177 17.8856 29.0447 21.7891 31.5709 25.6931C27.7611 31.4446 23.9554 37.1996 20.15 42.9539C19.1455 44.4728 18.1411 45.9917 17.1366 47.5105C16.0584 45.8819 14.98 44.2535 13.9017 42.6253Z"
//                                     fill="#000"
//                                     stroke="#000"
//                                     strokeWidth={3}
//                                 />
//                             </Svg>
//                         </View>
//                     ) }
//                     <Text style={[styles.cardName, { bottom: 150, left: 30, fontSize: 16, lineHeight: 30 }]}>{item.name} {'\n'}<Text style={{ fontSize: 22 }}>{item.lastname}</Text></Text>
//                     <View style={{ marginTop: 125 }}>
//                         <Text style={styles.additionalInfoText}>Амплуа - <Text style={{ fontFamily: 'MulishBlack' }}>{item.position}</Text></Text>
//                         <Text style={styles.additionalInfoText}>Гражданство - <Text style={{ fontFamily: 'MulishBlack' }}>{item.citizenship}</Text></Text>
//                         <Text style={styles.additionalInfoText}>Возраст - <Text style={{ fontFamily: 'MulishBlack' }}>{item.age} год</Text></Text>
//                         <Text style={styles.additionalInfoText}>В клубе - <Text style={{ fontFamily: 'MulishBlack' }}>{item.inClub} лет</Text></Text>
//                         <Text style={styles.additionalInfoText}>Рост - <Text style={{ fontFamily: 'MulishBlack' }}>{item.height} см</Text></Text>
//                         <Text style={styles.additionalInfoText}>Вес - <Text style={{ fontFamily: 'MulishBlack' }}>{item.weight} кг</Text></Text>
//                     </View>
//                     <TouchableOpacity onPress={() => navigation.navigate('PlayerScreen', { slug: item.slug })} style={styles.buttonMoreDetails}>
//                         <Svg xmlns="http://www.w3.org/2000/svg" width={95} height={26} viewBox="0 0 95 26" fill="none">
//                             <Path d="M13.9067 2.5525e-05L95 0V15.9998C95 21.5227 90.5229 25.9998 85 25.9999L0 26L13.9067 2.5525e-05Z" fill="#231F20"/>
//                         </Svg>
//                         <Text style={styles.moreDetailsText}>Подробнее</Text>
//                     </TouchableOpacity>
//                 </TouchableOpacity>
//             )
//         }

//         return (
//             <View style={styles.card}>
//                 <TouchableOpacity onPress={() => setSelectedPayler(item.slug)}>
//                     <Image source={require('../../img/SOSTAV.png')} style={{ width: '100%', height: '100%' }}/>
//                     <Image source={{ uri: item.imageAbsolute }} style={styles.cardImage}/>
//                     { item.isClubStudent && (
//                         <View style={styles.cardNumber}>
//                             <Text style={styles.number}>{item.number}</Text>
//                             <Svg width={34} height={51} viewBox="0 0 34 51" fill="none">
//                                 <Path
//                                 d="M13.9017 42.6253C10.165 36.9828 6.42892 31.3413 2.70103 25.6945L17.1356 3.39177C19.4194 6.92096 21.7038 10.4497 23.9882 13.9783L23.9906 13.982C26.5177 17.8856 29.0447 21.7891 31.5709 25.6931C27.7611 31.4446 23.9554 37.1996 20.15 42.9539C19.1455 44.4728 18.1411 45.9917 17.1366 47.5105C16.0584 45.8819 14.98 44.2535 13.9017 42.6253Z"
//                                 fill="#FECC01"
//                                 stroke="#FECC01"
//                                 strokeWidth={3}
//                                 />
//                             </Svg>
//                         </View>
//                     ) } 
//                     <Text style={styles.cardName}>{item.name}{'\n'}<Text style={{ fontSize: 22 }}>{item.lastname}</Text></Text>
//                     <LinearGradient
//                         colors={['rgba(35, 31, 32, 0.00)', 'rgba(35, 31, 32, 0.63)', '#231F20']}
//                         stops={[0, 0.5625, 1]}
//                         style={styles.gradient}
//                     />
//                 </TouchableOpacity>
//             </View>
//         );
//     };

//     const groupPlayersByPosition = (players) => {
//         const groupedPlayers = {};
//         players.forEach(player => {
//             if (!groupedPlayers[player.position]) {
//                 groupedPlayers[player.position] = [];
//             }
//             groupedPlayers[player.position].push(player);
//         });
//         return Object.entries(groupedPlayers).map(([position, players]) => ({
//             position,
//             players,
//         }));
//     };

//     const team = [
//         {
//             "title": 2023,
//             "image": "https://fckairat.com/uploads/content/2023-image-eef9a4b727.jpg",
//             2023: {
//                 "items": {
//                     "Нападающие": {
//                         "title": "Нападающие",
//                         "items": [
//                             { "title": "Галымжан Кенжебек" },
//                             { "title": "Артур Шушеначев" },
//                             { "title": "Вячеслав Швырев" },
//                             { "title": "Жоао Пауло" },
//                             { "title": "Ян Труфанов" },
//                             { "title": "Сэйф Попов" }
//                         ]
//                     },
//                     "Вратари": {
//                         "title": "Вратари",
//                         "items": [
//                             { "title": "Темирлан Анарбеков" },
//                             { "title": "Вадим Ульянов" },
//                             { "title": "Данил Устименко"  }
//                         ]
//                     },
//                     "Тренерский штаб": {
//                         "title": "Тренерский штаб",
//                         "items": [
//                             { "title": "Евгений Коструб" },
//                             { "title": "Артем Савельев" },
//                             { "title": "Илья Юров" },
//                             { "title": "Кирилл Кекер" },
//                             { "title": "Эльшад Хинизов" },
//                             { "title": "Талгат Канышев" },
//                             { "title": "Олег Недашковский" },
//                             { "title": "Максим Зуев"  }
//                         ]
//                     },
//                     "Защитники": {
//                         "title": "Защитники",
//                         "items": [
//                             { "title": "Дамир Касабулат" },
//                             { "title": "Сергей Кейлер" },
//                             { "title": "Егор Ткаченко" },
//                             { "title": "Александр Широбоков" },
//                             { "title": "Виктор Васин" },
//                             { "title": "Лев Кургин" },
//                             { "title": "Маки Баньяк" },
//                             { "title": "Александр Мрынский" },
//                             { "title": "Офри Арад" }
//                         ]
//                     },
//                     "Полузащитники": {
//                         "title": "Полузащитники",
//                         "items": [
//                             { "title": "Андрей Ульшин" },
//                             { "title": "Еркебулан Сейдахмет" },
//                             { "title": "Арсен Буранчиев" },
//                             { "title": "Адилет Садыбеков" },
//                             { "title": "Антон Крачковский" },
//                             { "title": "Дмитрий Сергеев" },
//                             { "title": "Мирас Кобеев" }
//                         ]
//                     },
//                     "Администрация": {
//                         "title": "Администрация",
//                         "items": [
//                             { "title": "Александр Шапкин" },
//                             { "title": "Арман Джаксыгулов" },
//                             { "title": "Бекжан Пирмаханов" },
//                             { "title": "Виктор Павленок" },
//                             { "title": "Георгий Михайлов" },
//                             { "title": "Дастан Туралиев" },
//                             { "title": "Дмитрий Николаев" },
//                             { "title": "Рамиль Юсупов" },
//                             { "title": "Тиаго Виейра Пинто" },
//                             { "title": "Нурбол Абатаев" }
//                         ]
//                     }
//                 }
//             }
//         },
//         {
//             "title": 2022,
//             "image": "/uploads/content/2023-image-eef9a4b727.jpg",
//             2022: {
//                 "items": {
//                     "Вратари": {
//                         "title": "Вратари",
//                         "items": [
//                             { "title": "Данил Устименко" },
//                             { "title": "Темирлан Анарбеков" },
//                             { "title": "Вадим Ульянов" }
//                         ]
//                     },
//                     "Защитники": {
//                         "title": "Защитники",
//                         "items": [
//                             { "title": "Дамир Касабулат" },
//                             { "title": "Сергей Кейлер" },
//                             { "title": "Егор Ткаченко" },
//                             { "title": "Александр Широбоков" },
//                             { "title": "Виктор Васин" },
//                             { "title": "Лев Кургин" },
//                             {
//                                 "title": "Маки Баньяк"
//                             }
//                         ]
//                     },
//                     "Тренерский штаб": {
//                         "title": "Тренерский штаб",
//                         "items": [
//                             { "title": "Артем Савельев" },
//                             { "title": "Евгений Коструб" },
//                             { "title": "Илья Юров" },
//                             { "title": "Эльшад Хинизов" },
//                             { "title": "Талгат Канышев" },
//                             { "title": "Олег Недашковский" }
//                         ]
//                     },
//                     "Полузащитники": {
//                         "title": "Полузащитники",
//                         "items": [
//                             { "title": "Данияр Усенов" },
//                             { "title": "Андрей Ульшин" },
//                             { "title": "Еркебулан Сейдахмет" },
//                             { "title": "Арсен Буранчиев" },
//                             { "title": "Адилет Садыбеков" },
//                             { "title": "Антон Крачковский" },
//                             { "title": "Дмитрий Сергеев" }
//                         ]
//                     },
//                     "Администрация": {
//                         "title": "Администрация",
//                         "items": [
//                             { "title": "Александр Корнилов" },
//                             { "title": "Бекжан Пирмаханов" },
//                             { "title": "Виктор Павленок" },
//                             { "title": "Георгий Михайлов" },
//                             { "title": "Дастан Туралиев" },
//                             { "title": "Диого Лейте" },
//                             { "title": "Дмитрий Николаев" },
//                             { "title": "Рамиль Юсупов" },
//                             { "title": "Тиаго Виейра Пинто" }
//                         ]
//                     },
//                     "Нападающие": {
//                         "title": "Нападающие",
//                         "items": [
//                             { "title": "Артур Шушеначев" },
//                             { "title": "Вячеслав Швырев" },
//                             { "title": "Жоао Пауло" }
//                         ]
//                     }
//                 }
//             }
//         },
//         {
//             "title": 2021,
//             "image": "/uploads/content/2023-image-eef9a4b727.jpg",
//             2021: {
//                 "items": {
//                     "Вратари": {
//                         "title": "Вратари",
//                         "items": [
//                             { "title": "Данил Устименко" },
//                             { "title": "Темирлан Анарбеков" }
//                         ]
//                     },
//                     "Защитники": {
//                         "title": "Защитники",
//                         "items": [
//                             { "title": "Сергей Кейлер" },
//                             { "title": "Александр Широбоков" },
//                             { "title": "Маки Баньяк" }
//                         ]
//                     },
//                     "Полузащитники": {
//                         "title": "Полузащитники",
//                         "items": [
//                             { "title": "Айбол Абикен" },
//                             { "title": "Данияр Усенов" },
//                             { "title": "Андрей Ульшин" },
//                             { "title": "Еркебулан Сейдахмет" },
//                             { "title": "Арсен Буранчиев" }
//                         ]
//                     },
//                     "Администрация": {
//                         "title": "Администрация",
//                         "items": [
//                             { "title": "Александр Корнилов" },
//                             { "title": "Бауыржан Калдыкулов" },
//                             { "title": "Виктор Павленок" },
//                             { "title": "Георгий Михайлов" },
//                             { "title": "Дастан Туралиев" },
//                             { "title": "Диого Лейте" },
//                             { "title": "Дмитрий Николаев" },
//                             { "title": "Рамиль Юсупов" }
//                         ]
//                     },
//                     "Тренерский штаб": {
//                         "title": "Тренерский штаб",
//                         "items": [
//                             { "title": "Артем Гавриленко" },
//                             { "title": "Артем Савельев" },
//                             { "title": "Илья Юров" },
//                             { "title": "Кирилл Кекер" },
//                             { "title": "Эльшад Хинизов" },
//                             { "title": "Талгат Канышев" }
//                         ]
//                     },
//                     "Нападающие": {
//                         "title": "Нападающие",
//                         "items": [
//                             { "title": "Артур Шушеначев" },
//                             { "title": "Жоао Пауло" }
//                         ]
//                     }
//                 }
//             }
//         },
//         {
//             "title": 2020,
//             "image": "/uploads/content/2023-image-eef9a4b727.jpg",
//             2020: {
//                 "items": {
//                     "Вратари": {
//                         "title": "Вратари",
//                         "items": [
//                             { "title": "Данил Устименко" }
//                         ]
//                     },
//                     "Защитники": {
//                         "title": "Защитники",
//                         "items": [
//                             { "title": "Сергей Кейлер" },
//                             { "title": "Александр Широбоков" }
//                         ]
//                     },
//                     "Полузащитники": {
//                         "title": "Полузащитники",
//                         "items": [
//                             { "title": "Айбол Абикен" },
//                             { "title": "Данияр Усенов" },
//                             { "title": "Андрей Ульшин" },
//                             { "title": "Арсен Буранчиев" }
//                         ]
//                     },
//                     "Администрация": {
//                         "title": "Администрация",
//                         "items": [
//                             { "title": "Александр Корнилов" },
//                             { "title": "Бауыржан Калдыкулов" },
//                             { "title": "Виктор Павленок" },
//                             { "title": "Георгий Михайлов" },
//                             { "title": "Дастан Туралиев" },
//                             { "title": "Диого Лейте" },
//                             { "title": "Дмитрий Николаев" },
//                             { "title": "Рамиль Юсупов" },
//                             { "title": "Нурбол Абатаев" }
//                         ]
//                     },
//                     "Нападающие": {
//                         "title": "Нападающие",
//                         "items": [
//                             { "title": "Артур Шушеначев" },
//                             { "title": "Галымжан Кенжебек" }
//                         ]
//                     },
//                     "Тренерский штаб": {
//                         "title": "Тренерский штаб",
//                         "items": [
//                             { "title": "Илья Юров" },
//                             { "title": "Кирилл Кекер" },
//                             { "title": "Эльшад Хинизов" }
//                         ]
//                     }
//                 }
//             }
//         },
//         {
//             "title": 2019,
//             "image": "/uploads/content/2023-image-eef9a4b727.jpg",
//             2019: {
//                 "items": {
//                     "Вратари": {
//                         "title": "Вратари",
//                         "items": [
//                             {"title": "Данил Устименко" }
//                         ]
//                     },
//                     "Защитники": {
//                         "title": "Защитники",
//                         "items": [
//                             {"title": "Сергей Кейлер" }
//                         ]
//                     },
//                     "Полузащитники": {
//                         "title": "Полузащитники",
//                         "items": [
//                             {"title": "Айбол Абикен" },
//                             {"title": "Еркебулан Сейдахмет" }
//                         ]
//                     },
//                     "Администрация": {
//                         "title": "Администрация",
//                         "items": [
//                             {"title": "Александр Корнилов" },
//                             {"title": "Виктор Павленок" },
//                             {"title": "Георгий Михайлов" },
//                             {"title": "Дастан Туралиев" },
//                             {"title": "Диого Лейте" },
//                             {"title": "Дмитрий Николаев" },
//                             {"title": "Рамиль Юсупов" }
//                         ]
//                     },
//                     "Тренерский штаб": {
//                         "title": "Тренерский штаб",
//                         "items": [
//                             {"title": "Артем Савельев" },
//                             {"title": "Кирилл Кекер" },
//                             {"title": "Эльшад Хинизов" }
//                         ]
//                     },
//                     "Нападающие": {
//                         "title": "Нападающие",
//                         "items": [
//                             {"title": "Артур Шушеначев" },
//                             {"title": "Вячеслав Швырев" }
//                         ]
//                     }
//                 }
//             }
//         },
//         {
//             "title": 2018,
//             "image": "/uploads/content/2023-image-eef9a4b727.jpg",
//             2018: {
//                 "items": {
//                     "Полузащитники": {
//                         "title": "Полузащитники",
//                         "items": [
//                             {"title": "Айбол Абикен" }
//                         ]
//                     },
//                     "Администрация": {
//                         "title": "Администрация",
//                         "items": [
//                             {"title": "Александр Корнилов" },
//                             {"title": "Виктор Павленок" },
//                             {"title": "Георгий Михайлов" },
//                             {"title": "Диого Лейте" },
//                             {"title": "Дмитрий Николаев" },
//                             {"title": "Рамиль Юсупов" }
//                         ]
//                     },
//                     "Нападающие": {
//                         "title": "Нападающие",
//                         "items": [
//                             {"title": "Вячеслав Швырев" }
//                         ]
//                     },
//                     "Тренерский штаб": {
//                         "title": "Тренерский штаб",
//                         "items": [
//                             {"title": "Кирилл Кекер" }
//                         ]
//                     }
//                 }
//             }
//         }
//     ]

//     // Находим команду для выбранного года
//     const selectedTeam = team.find(item => item.title === year);


//     const renderPlayers = (category) => {
//         return selectedTeam[year].items[category].items.map((player, index) => (
//         <Text key={index} style={{ textAlign: 'left', fontSize: 16, fontFamily: 'MulishRegular', letterSpacing: 0.6, marginTop: 2 }}>{player.title}</Text>
//         ));
//     };
    
//     // Для примера я использую первую команду из вашего массива
//     const teamData = team[0];

//     // Находим данные о команде для выбранного года
//     const teamInfo = teamData[year.toString()];

//     return (
//         <View>
//             <View>
//                 <Navbar title="ФУТБОЛЬНЫЙ КЛУБ «КАЙРАТ»"/>
//                 <ScrollView style={{ marginTop: 120, backgroundColor: '#FFF', height: '100%' }}>
//                     <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', display: 'flex', paddingVertical: 16, paddingHorizontal: 24 }}>
//                         <Text style={styles.title}>КАЙРАТ</Text>
//                         <View>
//                             <TouchableOpacity onPress={() => setIsOpenYearSelector(!isOpenYearSelector)} style={{ padding: 6, borderWidth: 2, borderColor: '#FECC01', flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
//                                 <Text>{year}</Text>
//                                 <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
//                             </TouchableOpacity>
//                             { isOpenYearSelector && (
//                                 <View style={{ position: 'absolute', top: '100%', backgroundColor: '#FFF', zIndex: 1, width: '100%' }}>
//                                     <TouchableOpacity onPress={() => (setYear(2024), setIsOpenYearSelector(false))} style={{ padding: 6, flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
//                                         <Text>2024</Text>
//                                     </TouchableOpacity>
//                                     <TouchableOpacity onPress={() => (setYear(2023), setIsOpenYearSelector(false))}  style={{ padding: 6, flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
//                                         <Text>2023</Text>
//                                     </TouchableOpacity>
//                                     <TouchableOpacity onPress={() => (setYear(2022), setIsOpenYearSelector(false))}  style={{ padding: 6, flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
//                                         <Text>2022</Text>
//                                     </TouchableOpacity>
//                                     <TouchableOpacity onPress={() => (setYear(2022), setIsOpenYearSelector(false))}  style={{ padding: 6, flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
//                                         <Text>2022</Text>
//                                     </TouchableOpacity>
//                                     <TouchableOpacity onPress={() => (setYear(2021), setIsOpenYearSelector(false))}  style={{ padding: 6, flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
//                                         <Text>2021</Text>
//                                     </TouchableOpacity>
//                                     <TouchableOpacity onPress={() => (setYear(2020), setIsOpenYearSelector(false))}  style={{ padding: 6, flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
//                                         <Text>2020</Text>
//                                     </TouchableOpacity>
//                                     <TouchableOpacity onPress={() => (setYear(2019), setIsOpenYearSelector(false))}  style={{ padding: 6, flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
//                                         <Text>2019</Text>
//                                     </TouchableOpacity>
//                                     <TouchableOpacity onPress={() => (setYear(2018), setIsOpenYearSelector(false))}  style={{ padding: 6, flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
//                                         <Text>2018</Text>
//                                     </TouchableOpacity>
//                                 </View>
//                             ) }
//                         </View>
//                     </View>
//                     { year === 2024 ? (
//                         <>
//                             <View style={{ paddingVertical: 1, paddingHorizontal: 24 }}>
//                                 <View style={styles.filtersContainer}>
//                                     <TouchableOpacity onPress={() => setCategory('Все')} style={styles.filter}>
//                                         <Text style={ category === 'Все' ? [styles.filterText, { color: '#FECC01' }] : styles.filterText}>Все <Text style={{ color: '#FECC01' }}> /</Text></Text>
//                                     </TouchableOpacity>
//                                     <TouchableOpacity onPress={() => setCategory('Вратарь')} style={styles.filter}>
//                                         <Text style={ category === 'Вратарь' ? [styles.filterText, { color: '#FECC01' }] : styles.filterText}>Вратари <Text style={{ color: '#FECC01' }}> /</Text></Text>
//                                     </TouchableOpacity>
//                                     <TouchableOpacity onPress={() => setCategory('Защитник')} style={styles.filter}>
//                                         <Text style={ category === 'Защитник' ? [styles.filterText, { color: '#FECC01' }] : styles.filterText}>Защитники <Text style={{ color: '#FECC01' }}> /</Text></Text>
//                                     </TouchableOpacity>
//                                     <TouchableOpacity onPress={() => setCategory('Полузащитник')} style={styles.filter}>
//                                         <Text style={ category === 'Полузащитник' ? [styles.filterText, { color: '#FECC01' }] : styles.filterText}>Полузащитники <Text style={{ color: '#FECC01' }}> /</Text></Text>
//                                     </TouchableOpacity>
//                                     <TouchableOpacity onPress={() => setCategory('Нападающий')} style={styles.filter}>
//                                         <Text style={ category === 'Нападающий' ? [styles.filterText, { color: '#FECC01' }] : styles.filterText}>Нападающие <Text style={{ color: '#FECC01' }}> /</Text></Text>
//                                     </TouchableOpacity>
//                                     <TouchableOpacity onPress={() => setCategory('Тренерский штаб')} style={styles.filter}>
//                                         <Text style={ category === 'Тренерский штаб' ? [styles.filterText, { color: '#FECC01' }] : styles.filterText}>Тренеры <Text style={{ color: '#FECC01' }}> /</Text></Text>
//                                     </TouchableOpacity>
//                                     <TouchableOpacity onPress={() => setCategory('Администрация')} style={styles.filter}>
//                                         <Text style={ category === 'Администрация' ? [styles.filterText, { color: '#FECC01' }] : styles.filterText}>Администрация <Text style={{ color: '#FECC01' }}> /</Text></Text>
//                                     </TouchableOpacity>
//                                 </View>
//                             </View>
//                             <FlatList
//                                 data={groupPlayersByPosition(data)}
//                                 renderItem={renderCategory}
//                                 keyExtractor={(item) => item.position}
//                             />
//                         </>
//                     ) : (
//                         <View style={{ paddingHorizontal: 24 }}>
//                         <Image style={{ width: '100%', height: 280, backgroundColor: '#BDBDBD' }} source={{ uri: selectedTeam.image }} />
//                             <View style={{ width: '100%', backgroundColor: '#FECC01', borderRadius: 16, marginTop: -10, padding: 24 }}>
//                             <Text style={{ position: 'absolute', zIndex: 100, top: 40, left: -10, transform: [{ rotate: '-90deg' }], fontSize: 40, letterSpacing: 0.6, fontFamily: 'MulishExtraBold' }}>{year}</Text>
//                             {Object.keys(selectedTeam[year].items).map((category, index) => (
//                                 <View key={index} style={{ width: '100%', paddingHorizontal: 80, marginTop: index !== 0 ? 32 : 0 }}>
//                                 <Text style={{ textAlign: 'left', fontSize: 16, fontFamily: 'MulishBold', letterSpacing: 0.6 }}>{category}</Text>
//                                 {renderPlayers(category)}
//                                 </View>
//                             ))}
//                             </View>
//                         </View>
//                     ) }
//                     <View style={{ marginTop: 50 }}>
//                         <OurPartners/>
//                     </View>
//                 </ScrollView>
//             </View>
//             { isTrainerShow && <TrainerModal/> }
//         </View>

//     )
// };

// export default TeamKairatScreen;

// import { View, Text, TouchableOpacity } from 'react-native';
// import Navbar from '../ui/Navbar';
// import { Svg, Path, G } from 'react-native-svg';
// import { useNavigation } from '@react-navigation/native';

// function TeamJastarScreen() {
//     const navigation = useNavigation();
//     return (
//         <View>
//             <Navbar activityApp='Tickets' title='ФК «КАЙРАТ» / МАГАЗИН'/>
//             <View style={{ width: '100%', height: '100%', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' }}>
//                 <Text style={{ fontFamily: 'MulishBold', fontSize: 32 }}>Разработка</Text>
//                 <Text style={{ fontFamily: 'MulishRegular', fontSize: 16, textAlign: 'center', width: 350, marginTop: 10 }}>ЭТОТ РАЗДЕЛ В РАЗРАБОТКЕ, ОН БУДЕТ ДОСТУПЕН В БЛИЖАЙШЕЕ ВРЕМЯ!</Text>
//                 <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 10 }}>
//                     <Text style={{ fontFamily: 'MulishRegular', fontSize: 16 }}>Обратно</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     )
// };

// export default TeamJastarScreen;

import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Navbar from '../ui/Navbar';
import styles from '../../styles/MainScreenStyle';
import { useTranslation } from 'react-i18next';
import { WebView } from 'react-native-webview';
import { useEffect, useState } from 'react';
import i18next from '../../i18next'

function TeamKairatScreen() {
    const { t } = useTranslation();
    const [lang, setLang] = useState();

    useEffect(() => {
        fetchLang();
    });

    const fetchLang = async () => {
        const lang = i18next.language
        setLang(lang)
    }
    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: '#FFF' }}>
            <Navbar title="ФУТБОЛЬНЫЙ КЛУБ «КАЙРАТ»"/>
            <WebView
                style={styles.container}
                source={{ uri: lang === 'kz' ? `https://fckairat.com/kz/team?slug=osnovnoj-sostav-fk-kajrat-2/?appmobile=true` : `https://fckairat.com/team/osnovnoj-sostav-fk-kajrat/?appmobile=true` }}
            />
        </View>
    )
};

export default TeamKairatScreen;