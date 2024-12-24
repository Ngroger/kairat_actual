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
        } catch (error) {
            console.error('Error saving userToken to AsyncStorage:', error);
        }
    },

    removeUserToken: async () => {
        try {
            await AsyncStorage.removeItem('userToken');
        } catch (error) {
            console.error('Error removing userToken from AsyncStorage:', error);
        }
    },

    getIsNotificated: async () => {
        try {
            const isNotificated = await AsyncStorage.getItem('isNotificated');
            return isNotificated === 'true'; // Convert from string 'true'/'false' to boolean
        } catch (error) {
            console.error('Error getting isNotificated from AsyncStorage:', error);
            return false; // Default value if there's an error
        }
    },

    toggleIsNotificated: async () => {
        try {
            const isNotificated = await UserTokenStorage.getIsNotificated();
            const newIsNotificated = !isNotificated; // Toggle the value
            await AsyncStorage.setItem('isNotificated', newIsNotificated.toString()); // Save as string
        } catch (error) {
            console.error('Error toggling isNotificated in AsyncStorage:', error);
        }
    }
};

export default UserTokenStorage;
