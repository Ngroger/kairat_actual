import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Svg, Defs, ClipPath, Path } from 'react-native-svg';
import styles from '../../styles/ChampionsStyle';
import Navbar from '../ui/Navbar';
import { StatusBar } from 'expo-status-bar';
import BottomTabs from '../ui/BottomTabs';


function ChampionsTableScreen() {

    const teamData = [
        { number: 1, name: 'ТОБОЛ', games: 3, win: '6-2', draw: '7', lose: '2', goals: '1', points: 0 },
        { number: 2, name: 'КАЙРАТ', games: 3, win: '4-2', draw: '7', lose: '2', goals: '1', points: 0 },
        { number: 3, name: 'АКТОБЕ', games: 2, win: '6-1', draw: '6', lose: '2', goals: '0', points: 0 },
        { number: 4, name: 'АСТАНА', games: 3, win: '4-2', draw: '6', lose: '1', goals: '0', points: 1 },
        { number: 5, name: 'ОРДАБАСЫ', games: 3, win: '7-3', draw: '6', lose: '1', goals: '1', points: 1 },
        { number: 6, name: 'КЫЗЫЛДЖАР', games: 3, win: '4-2', draw: '4', lose: '1', goals: '1', points: 1 },
        { number: 7, name: 'ТУРАН', games: 3, win: '2-2', draw: '4', lose: '1', goals: '1', points: 1 },
        { number: 8, name: 'ЕЛИМАЙ', games: 3, win: '3-4', draw: '4', lose: '1', goals: '1', points: 1 },
        { number: 9, name: 'ЖЕТЫСУ', games: 2, win: '1-2', draw: '3', lose: '1', goals: '0', points: 1 },
        { number: 10, name: 'ЖЕНИС', games: 3, win: '1-5', draw: '3', lose: '1', goals: '0', points: 2 },
        { number: 11, name: 'АТЫРАУ', games: 3, win: '1-2', draw: '2', lose: '0', goals: '2', points: 1 },
        { number: 12, name: 'КАЙСАР', games: 2, win: '1-6', draw: '0', lose: '0', goals: '0', points: 2 },
        { number: 13, name: 'ШАХТЁР', games: 3, win: '0-8', draw: '0', lose: '0', goals: '0', points: 3 },
    ];


    return (
        <View>
            <Navbar title='ФУТБОЛЬНЫЙ КЛУБ «КАЙРАТ»'/>
            <ScrollView style={{ backgroundColor: '#FFF', width: '100%', height: '100%', marginTop: 120, padding: 16 }}>
                <Text style={{ borderBottomWidth: 6, borderBottomColor: '#FECC01', paddingVertical: 16, fontSize: 16, fontFamily: 'MulishBold', marginBottom: 24 }}>ТУРНИРНАЯ ТАБЛИЦА</Text>
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
                        <Text style={styles.championTitle}>ЧЕМПИОНАТ</Text>
                    </View>
                    <View style={styles.content}>
                        <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', display: 'flex' }}>
                                <View>
                                    <Text style={{ fontSize: 16, fontFamily: 'MulishRegular', letterSpacing: 0.6 }}>№</Text>
                                    {teamData.map((team, index) => (
                                        <Text key={index} style={{ fontSize: 12, fontFamily: team.name === 'КАЙРАТ' ? 'MulishBlack' : 'MulishRegular', letterSpacing: 0.6, marginTop: 10 }}>{team.number}</Text>
                                    ))}
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ fontSize: 12, fontFamily: 'MulishRegular', letterSpacing: 0.6 }}>КОМАНДЫ</Text>
                                    {teamData.map((team, index) => (
                                        <Text key={index} style={{ fontSize: 12, fontFamily: team.name === 'КАЙРАТ' ? 'MulishBlack' : 'MulishRegular', letterSpacing: 0.6, marginTop: 10 }}>{team.name}</Text>
                                    ))}
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', display: 'flex' }}>
                                <View style={{ alignItems: 'flex-start' }}>
                                    <Text style={{ fontSize: 12, fontFamily: 'MulishRegular', letterSpacing: 0.6 }}>МАТ</Text>
                                    {teamData.map((team, index) => (
                                        <Text key={index} style={{ fontSize: 12, fontFamily: team.name === 'КАЙРАТ' ? 'MulishBlack' : 'MulishRegular', letterSpacing: 0.6, marginTop: 10 }}>{team.games}</Text>
                                    ))}
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ fontSize: 12, fontFamily: 'MulishRegular', letterSpacing: 0.6 }}>ПОБ</Text>
                                    {teamData.map((team, index) => (
                                        <Text key={index} style={{ fontSize: 12, fontFamily: team.name === 'КАЙРАТ' ? 'MulishBlack' : 'MulishRegular', letterSpacing: 0.6, marginTop: 10 }}>{team.win}</Text>
                                    ))}
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ fontSize: 12, fontFamily: 'MulishRegular', letterSpacing: 0.6 }}>НИЧ</Text>
                                    {teamData.map((team, index) => (
                                        <Text key={index} style={{ fontSize: 12, fontFamily: team.name === 'КАЙРАТ' ? 'MulishBlack' : 'MulishRegular', letterSpacing: 0.6, marginTop: 10 }}>{team.draw}</Text>
                                    ))}
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ fontSize: 12, fontFamily: 'MulishRegular', letterSpacing: 0.6 }}>ПОР</Text>
                                    {teamData.map((team, index) => (
                                        <Text key={index} style={{ fontSize: 12, fontFamily: team.name === 'КАЙРАТ' ? 'MulishBlack' : 'MulishRegular', letterSpacing: 0.6, marginTop: 10 }}>{team.lose}</Text>
                                    ))}
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ fontSize: 12, fontFamily: 'MulishRegular', letterSpacing: 0.6 }}>ГОЛЫ</Text>
                                    {teamData.map((team, index) => (
                                        <Text key={index} style={{ fontSize: 12, fontFamily: team.name === 'КАЙРАТ' ? 'MulishBlack' : 'MulishRegular', letterSpacing: 0.6, marginTop: 10 }}>{team.goals}</Text>
                                    ))}
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ fontSize: 12, fontFamily: 'MulishRegular', letterSpacing: 0.6 }}>ОЧК</Text>
                                    {teamData.map((team, index) => (
                                        <Text key={index} style={{ fontSize: 12, fontFamily: team.name === 'КАЙРАТ' ? 'MulishBlack' : 'MulishRegular', letterSpacing: 0.6, marginTop: 10 }}>{team.points}</Text>
                                    ))}
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[styles.container, { marginTop: 24 }]}>
                    <View style={[styles.header, { backgroundColor: '#231F20' }]}>
                        <Svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                            <Path d="M8.98242 12.3269V13.8794" stroke="#FECC01" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
                            <Path d="M5.28613 16.3929H12.6791V15.6536C12.6791 14.8404 12.0137 14.175 11.2005 14.175H6.76473C5.9515 14.175 5.28613 14.8404 5.28613 15.6536V16.3929V16.3929Z" stroke="#FECC01" strokeWidth={1.5} strokeMiterlimit={10}/>
                            <Path d="M4.54688 16.3931H13.4185" stroke="#FECC01" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
                            <Path d="M8.87138 11.9571C6.01029 11.9571 3.69629 9.64311 3.69629 6.78202V4.56413C3.69629 2.93028 5.01963 1.60693 6.65348 1.60693H11.0893C12.7231 1.60693 14.0465 2.93028 14.0465 4.56413V6.78202C14.0465 9.64311 11.7325 11.9571 8.87138 11.9571Z" stroke="#FECC01" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
                            <Path d="M4.04361 8.74136C3.48913 8.56393 3.0012 8.23864 2.61676 7.8542C1.95139 7.1149 1.50781 6.22775 1.50781 5.19273C1.50781 4.15771 2.32104 3.34448 3.35606 3.34448H3.8366C3.68874 3.68456 3.61481 4.0616 3.61481 4.45343V6.67133C3.61481 7.41062 3.77007 8.10556 4.04361 8.74136Z" stroke="#FECC01" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
                            <Path d="M13.6982 8.74136C14.2527 8.56393 14.7407 8.23864 15.1251 7.8542C15.7905 7.1149 16.234 6.22775 16.234 5.19273C16.234 4.15771 15.4208 3.34448 14.3858 3.34448H13.9052C14.0531 3.68456 14.127 4.0616 14.127 4.45343V6.67133C14.127 7.41062 13.9718 8.10556 13.6982 8.74136Z" stroke="#FECC01" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
                        </Svg>
                        <Text style={[styles.championTitle, { color: '#FECC01' }]}>ПЕРВАЯ ЛИГА</Text>
                    </View>
                    <View style={styles.content}>
                        <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', display: 'flex' }}>
                                <View>
                                    <Text style={{ fontSize: 16, fontFamily: 'MulishRegular', letterSpacing: 0.6 }}>№</Text>
                                    
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ fontSize: 12, fontFamily: 'MulishRegular', letterSpacing: 0.6 }}>КОМАНДЫ</Text>
                                    
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ alignItems: 'flex-start' }}>
                                    <Text style={{ fontSize: 12, fontFamily: 'MulishRegular', letterSpacing: 0.6 }}>МАТ</Text>
                                    
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ fontSize: 12, fontFamily: 'MulishRegular', letterSpacing: 0.6 }}>ПОБ</Text>
                                    
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ fontSize: 12, fontFamily: 'MulishRegular', letterSpacing: 0.6 }}>НИЧ</Text>
                                    
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ fontSize: 12, fontFamily: 'MulishRegular', letterSpacing: 0.6 }}>ПОР</Text>
                                    
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ fontSize: 12, fontFamily: 'MulishRegular', letterSpacing: 0.6 }}>ГОЛЫ</Text>
                                    
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ fontSize: 12, fontFamily: 'MulishRegular', letterSpacing: 0.6 }}>ОЧК</Text>
                                    
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <StatusBar translucent={true} backgroundColor='transparent'/>
            <BottomTabs zIndex={1000} position="absolute"/>
        </View>
    )
}

export default ChampionsTableScreen;