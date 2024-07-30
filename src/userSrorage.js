// UserStorage.js

import AsyncStorage from '@react-native-async-storage/async-storage';

const UserTokenStorage = {
    getUserToken: async () => {
        try {
            const userToken = await AsyncStorage.getItem('userToken');
            return userToken;
        } catch (error) {
            console.error('Error getting userToken from AsyncStorage:', error);
            return null;
        }
    },

    saveUserToken: async (userToken) => {
        try {
            // Convert userToken to string before saving
            const userTokenString = userToken.toString(); // Ensure userToken is a string
            await AsyncStorage.setItem('userToken', userTokenString);
            console.log('UserToken saved successfully.');
        } catch (error) {
            console.error('Error saving userToken to AsyncStorage:', error);
        }
    },

    removeUserToken: async () => {
        try {
            await AsyncStorage.removeItem('userToken');
            console.log('UserToken removed from AsyncStorage.');
        } catch (error) {
            console.error('Error removing userToken from AsyncStorage:', error);
        }
    }
};

export default UserTokenStorage;
