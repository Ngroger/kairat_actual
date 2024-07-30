import { View, ScrollView, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from '../../styles/NewsStyle';
import { MaterialIcons } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

function NewsJastar({ slug }) {
    const [data, setData] = useState([]);
    const navigation = useNavigation();
    const [isHttpError, setIsHttpError] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://fckairat.com/v1/news/kajrat/`);
                const result = await response.json();
        
                // Assuming 'items' is an array in the response
                setData(result.category?.items || []);
                
                if (response.status === 404) { 
                    setIsHttpError(true);
                } else {
                    setIsHttpError(false);
                }
            } catch (error) {
                console.error("Error fetching data:", error);   
            }
        };
        
        fetchData();

    }, [data]);

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

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('NewsScreen', { url: item.url })} style={styles.new}>
                <Image source={{ uri: item.imageAbsolute }} style={styles.newImage}/>
                <Text style={styles.newTitle}>{item.title.toUpperCase()}</Text>
                <View style={styles.dateTimeContainer}>
                    <Text style={styles.date}>{formatDate(item.date)} <Text style={{ color: '#FECC01' }}>/</Text> {formatTime(item.date)}</Text>
                </View>
                <LinearGradient
                    colors={['rgba(35, 31, 32, 0.00)', 'rgba(35, 31, 32, 0.63)', '#231F20']}
                    stops={[0, 0.5625, 1]}
                    style={styles.gradient}
                />
                <View style={styles.headerNews}>
                    <Svg width={100} height={29} viewBox="0 0 104 29" fill="none">
                        <Path
                            opacity="0.7"
                            d="M0 0.000174461L103.295 0L86.3147 28.1438L0 28.144V0.000174461Z"
                            fill="#FECC01"
                        />
                    </Svg>
                    <Text style={styles.titleNews}>{item.categoryTitle.toUpperCase()}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View>
            { !isHttpError && (
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true} style={{ width: '100%'}}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            ) }
            { isHttpError && (
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.errorMessage}>Пока новостей не добавлено</Text>
                </View>
            ) }
        </View>
    )
};

export default NewsJastar;