import { View, ScrollView, TouchableOpacity, Image, Text, ActivityIndicator, Share } from 'react-native';
import styles from '../../styles/NewsScreenStyle';
import Navbar from '../ui/Navbar';
import Svg, { Circle, Rect, Path } from 'react-native-svg';
import Shop from '../ux/Shop';
import OurPartners from '../ux/OurPartners';
import LastNews from '../ux/LastNews';
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import News from '../ux/News';

function NewsScreen() {
    const route = useRoute();
    const { url } = route.params;
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://fckairat.com/v1/${url}`);
                const result = await response.json();
                setData(result || []);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [data]);

    removeHtmlTags = (text) => {
        const withoutTags = text.replace(/<[^>]+>/g, '');
        return withoutTags.replace(/\./g, '.\n\n');
    }

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

    const shareText = async (text) => {
        try {
            await Share.share({
                message: text
            });
        } catch (error) {
            console.error('Error sharing:', error);
        }
    };

    if(!data || Object.keys(data).length === 0) {
        return <ActivityIndicator/>
    }

    return (
        <View>
            <Navbar title="ФК «КАЙРАТ» / НОВОСТИ"/>
            <ScrollView style={{ width: '100%', height: '100%', backgroundColor: '#FFF' }}>
                <Image source={{ uri: data.imageAbsolute }} style={styles.previewImage}/>
                <Image source={require('../../img/LINES.png')} style={styles.lines}/>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                                <Text style={styles.headerNew}>{data.categoryTitle.toUpperCase()}</Text>
                                <Svg width={95} height={25} viewBox="0 0 95 25" fill="none">
                                    <Path
                                    d="M13.9026 0.000154972L94.5833 0L79.5147 24.9998L0 25L13.9026 0.000154972Z"
                                    fill="#FECC01"
                                    />
                                </Svg>
                            </View>
                            <Text style={styles.time}>{formatDate(data.date)}{'\n'} <Text style={{ color: '#FECC01', fontFamily: 'MulishExtraBold' }}>/  </Text>{formatTime(data.date)}</Text>
                        </View>

                        <Text style={styles.title}>{data.title.toUpperCase()}</Text>
                    </View>
                    <View style={styles.shareContainer}>
                        <TouchableOpacity onPress={() => shareText(`${data.title} https://fckairat.com${data.url}`)}>
                            <Image style={{ width: 25, height: 25, marginRight: 10, transform: [{ rotate: '-90deg' }] }} source={require('../../img/WhatsApp.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => shareText(`${data.title} https://fckairat.com${data.url}`)}>
                            <Image style={{ width: 25, height: 25, marginRight: 10, transform: [{ rotate: '-90deg' }] }} source={require('../../img/Facebook.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => shareText(`${data.title} https://fckairat.com${data.url}`)}>
                            <Image style={{ width: 25, height: 25, marginRight: 10, transform: [{ rotate: '-90deg' }] }} source={require('../../img/VK.png')}/>
                        </TouchableOpacity>
                        <Text style={styles.share}>Поделиться</Text>
                    </View>
                    <Text style={styles.text}>{data.description}</Text>
                </View>
                <News/>
                {/* <Shop/> */}
                <View style={{ marginTop: 40 }}>
                    <OurPartners/>
                </View>
            </ScrollView>
        </View>
    )
};

export default NewsScreen;