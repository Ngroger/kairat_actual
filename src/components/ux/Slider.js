import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import Slide from './Slide'; // Подключите ваш компонент Slide
import styles from '../../styles/SliderStyle';

function Slider() {
    const [slides, setSlides] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        async function fetchSlides() {
            try {
                const response = await fetch("https://fckairat.com/v1/slider");
                const data = await response.json();
                setSlides(data);
            } catch (error) {
                console.error("Error fetching slides:", error);
            }
        }
        fetchSlides();
    }, []);

    return (
        <View>
            <Swiper
                style={{ marginTop: 120, height: 460 }}
                loop={false}
                showsPagination={true}
                onIndexChanged={(index) => setCurrentIndex(index)}
            >
                {slides.map((slide, index) => (
                    <View key={index}>
                        <Slide title={slide.categoryTitle} desription={slide.title} image={slide.imageAbsolute} />
                    </View>
                ))}
            </Swiper>
        </View>
    );
}

export default Slider;
