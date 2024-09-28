import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next from 'i18next';

// Сохранение выбранного языка
export const saveLanguage = async (language) => {
    try {
        await AsyncStorage.setItem('language', language);
    } catch (error) {
        console.error('Error saving language:', error);
    }
};

// Загрузка выбранного языка
export const loadLanguage = async () => {
    try {
        const storedLanguage = await AsyncStorage.getItem('language');
        if (storedLanguage) {
            i18next.language = storedLanguage;
            await i18next.changeLanguage(storedLanguage);
            return storedLanguage; // Возвращаем язык
        }
    } catch (error) {
        console.error('Error loading language:', error);
        return null; // Возвращаем null в случае ошибки
    }
};
