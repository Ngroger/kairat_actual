// FontLoader.js
import * as Font from 'expo-font'

export const FontLoader = async () => {
    await Font.loadAsync({
            'MulishBlack': require('../../assets/fonts/Mulish-Black.ttf'),
            'MulishBold': require('../../assets/fonts/Mulish-Bold.ttf'),
            'MulishExtraBold': require('../../assets/fonts/Mulish-ExtraBold.ttf'),
            'MylishExtraLight': require('../../assets/fonts/Mulish-ExtraLight.ttf'),
            'MulishLight': require('../../assets/fonts/Mulish-Light.ttf'),
            'MulishMedium': require('../../assets/fonts/Mulish-Medium.ttf'),
            'MulishRegular': require('../../assets/fonts/Mulish-Regular.ttf'),
            'MulishSemiBold': require('../../assets/fonts/Mulish-SemiBold.ttf')
    });
};
