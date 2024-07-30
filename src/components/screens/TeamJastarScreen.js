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

function TeamJastarScreen() {
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
                source={{ uri: lang === 'kz' ? `https://fckairat.com/kz/team?slug=osnovnoj-sostav-fk-kajrat-zastar-2` : `https://fckairat.com/team/osnovnoy-sostav-fk-kayrat-zhastar/?appmobile=true` }}
            />
        </View>
    )
};

export default TeamJastarScreen;