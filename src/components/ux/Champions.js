import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../../styles/ChampionsStyle';
import { Svg, Defs, ClipPath, Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

function Champions() {
    const navigation = useNavigation();
    const { t } = useTranslation();

    const teamData = [
        { number: 1, name: 'ТОБОЛ', games: 3, goals: '6-2', points: 7 },
        { number: 2, name: 'КАЙРАТ', games: 3, goals: '4-2', points: 7 },
        { number: 3, name: 'АКТОБЕ', games: 2, goals: '6-1', points: 6 },
        { number: 4, name: 'АСТАНА', games: 3, goals: '4-1', points: 6 },
        { number: 5, name: 'ОРДАБАСЫ', games: 3, goals: '7-3', points: 6 },
        { number: 6, name: 'КЫЗЫЛЖАР', games: 3, goals: '4-2', points: 4 },
        { number: 7, name: 'ТУРАН', games: 3, goals: '22', points: 4 },
    ];

    return(
        <View style={styles.background}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                        <Path d="M8.98242 12.3269V13.8794" stroke="#231F20" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
                        <Path d="M5.28613 16.3929H12.6791V15.6536C12.6791 14.8404 12.0137 14.175 11.2005 14.175H6.76473C5.9515 14.175 5.28613 14.8404 5.28613 15.6536V16.3929V16.3929Z" stroke="#231F20" strokeWidth={1.5} strokeMiterlimit={10}/>
                        <Path d="M4.54688 16.3931H13.4185" stroke="#231F20" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
                        <Path d="M8.87138 11.9571C6.01029 11.9571 3.69629 9.64311 3.69629 6.78202V4.56413C3.69629 2.93028 5.01963 1.60693 6.65348 1.60693H11.0893C12.7231 1.60693 14.0465 2.93028 14.0465 4.56413V6.78202C14.0465 9.64311 11.7325 11.9571 8.87138 11.9571Z" stroke="#231F20" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
                        <Path d="M4.04361 8.74136C3.48913 8.56393 3.0012 8.23864 2.61676 7.8542C1.95139 7.1149 1.50781 6.22775 1.50781 5.19273C1.50781 4.15771 2.32104 3.34448 3.35606 3.34448H3.8366C3.68874 3.68456 3.61481 4.0616 3.61481 4.45343V6.67133C3.61481 7.41062 3.77007 8.10556 4.04361 8.74136Z" stroke="#231F20" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
                        <Path d="M13.6982 8.74136C14.2527 8.56393 14.7407 8.23864 15.1251 7.8542C15.7905 7.1149 16.234 6.22775 16.234 5.19273C16.234 4.15771 15.4208 3.34448 14.3858 3.34448H13.9052C14.0531 3.68456 14.127 4.0616 14.127 4.45343V6.67133C14.127 7.41062 13.9718 8.10556 13.6982 8.74136Z" stroke="#231F20" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
                    </Svg>
                    <Text style={styles.championTitle}>{t('champions').toUpperCase()}</Text>
                </View>
                <View style={styles.content}>
                    <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', display: 'flex' }}>
                            <View>
                                <Text style={{ fontSize: 12, fontFamily: 'MulishRegular', letterSpacing: 0.6 }}>№</Text>
                                {teamData.map((team, index) => (
                                    <Text key={index} style={{ fontSize: 16, fontFamily: team.name === 'КАЙРАТ' ? 'MulishBlack' : 'MulishRegular', letterSpacing: 0.6, marginTop: 10 }}>{team.number}</Text>
                                ))}
                            </View>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 12, fontFamily: 'MulishRegular', letterSpacing: 0.6 }}>{t('teams').toUpperCase()}</Text>
                                {teamData.map((team, index) => (
                                    <Text key={index} style={{ fontSize: 16, fontFamily: team.name === 'КАЙРАТ' ? 'MulishBlack' : 'MulishRegular', letterSpacing: 0.6, marginTop: 10 }}>{team.name}</Text>
                                ))}
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', display: 'flex' }}>
                            <View style={{ alignItems: 'flex-start' }}>
                                <Text style={{ fontSize: 12, fontFamily: 'MulishRegular', letterSpacing: 0.6 }}>{t('games').toUpperCase()}</Text>
                                {teamData.map((team, index) => (
                                    <Text key={index} style={{ fontSize: 16, fontFamily: team.name === 'КАЙРАТ' ? 'MulishBlack' : 'MulishRegular', letterSpacing: 0.6, marginTop: 10 }}>{team.games}</Text>
                                ))}
                            </View>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 12, fontFamily: 'MulishRegular', letterSpacing: 0.6 }}>{t('goals').toUpperCase()}</Text>
                                {teamData.map((team, index) => (
                                    <Text key={index} style={{ fontSize: 16, fontFamily: team.name === 'КАЙРАТ' ? 'MulishBlack' : 'MulishRegular', letterSpacing: 0.6, marginTop: 10 }}>{team.goals}</Text>
                                ))}
                            </View>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 12, fontFamily: 'MulishRegular', letterSpacing: 0.6 }}>{t('points').toUpperCase()}</Text>
                                {teamData.map((team, index) => (
                                    <Text key={index} style={{ fontSize: 16, fontFamily: team.name === 'КАЙРАТ' ? 'MulishBlack' : 'MulishRegular', letterSpacing: 0.6, marginTop: 10 }}>{team.points}</Text>
                                ))}
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', padding: 12 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Table')}>
                            <Text style={{ fontFamily: 'MulishRegular', fontSize: 12, letterSpacing: 0.6 }}>{t('view-all-champions')}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
};

export default Champions;
