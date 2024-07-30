import { TouchableOpacity, View, Text, Image, ScrollView, FlatList, ActivityIndicator } from "react-native";
import styles from '../../styles/NewsStyle';
import Navbar from "../ui/Navbar";
import Svg, { Path } from 'react-native-svg';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from "react";
import OurPartners from "../ux/OurPartners";
import { useEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";

function NewsClubScreen() {
    
    // Function to generate pagination array
    const generatePagination = (currentPage, totalOfPages) => {
        const numberOfPagesToShow = 10;
        const pages = [];

        // Calculate start page based on the current page
        const startPage = Math.max(1, currentPage - Math.floor(numberOfPagesToShow / 2));

        // Generate the pagination array
        for (let i = startPage; i < startPage + numberOfPagesToShow; i++) {
            if (i <= totalOfPages) {
                pages.push(i);
            }
        }

        return pages;
    };

    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [totalOfPages, setTotalOfPages] = useState(1);
    const [pagination, setPagination] = useState(generatePagination(1, 1));
    const route = useRoute();
    const { title, slug } = route.params;
    const navigation = useNavigation();
    const [isHttpError, setIsHttpError] = useState(false);

    const selectPage = (pageNumber) => {
        setPage(pageNumber);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://fckairat.com/v1/news/${slug}?per-page=18&page=${page}`);
                const result = await response.json();
        
                if (response.status === 404) {
                    setIsHttpError(true);
                } else {
                    setIsHttpError(false);
                    // Assuming 'items' is an array in the response
                    setData(result.category?.items || []);
                            
                    // Set totalOfPages based on totalCount and pageSize
                    const calculatedTotalPages = Math.ceil(result.pagination.totalCount / 18);
                    console.log("Общее кол-во страниц", calculatedTotalPages);
                    // Use the callback function to ensure you use the latest state
                    setTotalOfPages((prevTotalPages) => calculatedTotalPages || prevTotalPages);

                    // Update pagination based on the new totalOfPages
                    setPagination(generatePagination(page, calculatedTotalPages));
                }        
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        
        fetchData();
    }, [page, totalOfPages, title, slug]);

    const renderNewsItem = ({ item }) => {

        return (
            <TouchableOpacity onPress={() => navigation.navigate('NewsScreen', { url: item.url })} style={[styles.new, { width: '100%', margin: 0, marginTop: 20 }]}>
                <Image source={{ uri: item.imageAbsolute }} style={styles.newImage} />
                <Text style={styles.newTitle}>{item.title}</Text>
                <View style={styles.dateTimeContainer}>
                    <Text style={styles.date}>{formatDate(item.date)} <Text style={{ color: '#FECC01' }}>/</Text> {formatTime(item.date)}</Text>
                </View>
                <View style={styles.headerNews}>
                    <Svg width={104} height={29} viewBox="0 0 104 29" fill="none">
                        <Path
                            opacity="0.7"
                            d="M0 0.000174461L103.295 0L86.3147 28.1438L0 28.144V0.000174461Z"
                            fill="#FECC01"
                        />
                    </Svg>
                    <Text style={styles.titleNews}>{title}</Text>
                </View>
            </TouchableOpacity>
        )
    };

    // Функция для форматирования даты
    const formatDate = (dateString) => {
        const dateParts = dateString.match(/(\d{1,2}) (\D{3}\.) (\d{4})/);
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
    
    return (
        <View>
            <Navbar title='ФУТБОЛЬНЫЙ КЛУБ "КАЙРАТ"'/>
            <ScrollView style={{ height: '100%', width: '100%', marginTop: 120, backgroundColor: '#FFF' }}>
                { !isHttpError && (
                    <>
                        { !data || Object.keys(data).length === 0 ? (
                            <View style={{ width: '100%', height: 700, alignItems: 'center', justifyContent: 'center'}}>
                                <ActivityIndicator size='big' color='#FECC01'/>
                                <Text style={{ fontSize: 16, textAlign: 'center', fontFamily: 'MulishRegular', color: '#BDBDBD' }}>Подождите, это может занять немного времени</Text>
                            </View>
                        ) : (
                            <>
                                <View style={{ paddingHorizontal: 12 }}>
                                    <Image source={require('../../img/LINES.png')} style={styles.lines}/>
                                    <Text style={[styles.title, { marginTop: 20 }]}>"{title}"</Text>
                                    <FlatList
                                        data={data}
                                        renderItem={renderNewsItem}
                                        keyExtractor={(item, index) => index.toString()}
                                    />
                                    
                                    <View style={styles.pagination}>
                                        <TouchableOpacity disabled={page === 1} onPress={() => setPage(page - 1)}>
                                            <MaterialIcons name="keyboard-double-arrow-left" size={24} color={ page === 1 ? '#FECC01' : '#000' } />
                                        </TouchableOpacity>
                                        {pagination.map((pageNumber) => (
                                            <TouchableOpacity key={pageNumber} onPress={() => selectPage(pageNumber)}>
                                                <Text style={page === pageNumber ? styles.activePageNumber : styles.pageNumber}>{pageNumber}</Text>
                                            </TouchableOpacity>
                                        ))}
                                        <TouchableOpacity disabled={page === totalOfPages} onPress={() => setPage(page + 1)}>
                                            <MaterialIcons name="keyboard-double-arrow-right" size={24} color={ page === totalOfPages ? '#FECC01' : '#000' } />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ marginTop: 60 }}>
                                    <OurPartners/>
                                </View>                    
                            </>
                        ) }
                    </>
                ) }
                { isHttpError && (
                    <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', height: 600 }}>
                        <Text style={styles.errorMessage}>Возникла ошибка 404. Мы работаем над исправлением</Text>
                    </View>
                ) }
            </ScrollView>
        </View>
    )
};

export default NewsClubScreen;