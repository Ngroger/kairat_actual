import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../../styles/NewsStyle';
import { MaterialIcons } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';

function LastNews() {
    return (
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>ПОСЛЕДНИЕ НОВОСТИ</Text>
                <TouchableOpacity style={styles.filter}>
                    <Text style={styles.filterTitle}>Все</Text>
                    <MaterialIcons  name="keyboard-arrow-down" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} style={{ width: '100%'}}>
                <View style={styles.new}>
                    <Image style={styles.newImage}/>
                    <Text style={styles.newTitle}>Кирилл Кекер: «Казахстан навсегда остаётся в сердце у людей, которые сюда попадают»</Text>
                    <View style={styles.dateTimeContainer}>
                        <Text style={styles.date}>14 октября <Text style={{ color: '#FECC01' }}>/</Text> 13:26</Text>
                    </View>
                    <View style={styles.headerNews}>
                        <Svg width={104} height={29} viewBox="0 0 104 29" fill="none">
                            <Path
                                opacity="0.7"
                                d="M0 0.000174461L103.295 0L86.3147 28.1438L0 28.144V0.000174461Z"
                                fill="#FECC01"
                            />
                        </Svg>
                        <Text style={styles.titleNews}>КАЙРАТ</Text>
                    </View>
                </View>
                <View style={styles.new}>
                    <Image style={styles.newImage}/>
                    <Text style={styles.newTitle}>Кирилл Кекер: «Казахстан навсегда остаётся в сердце у людей, которые сюда попадают»</Text>
                    <View style={styles.dateTimeContainer}>
                        <Text style={styles.date}>14 октября <Text style={{ color: '#FECC01' }}>/</Text> 13:26</Text>
                    </View>
                    <View style={styles.headerNews}>
                        <Svg width={104} height={29} viewBox="0 0 104 29" fill="none">
                            <Path
                                opacity="0.7"
                                d="M0 0.000174461L103.295 0L86.3147 28.1438L0 28.144V0.000174461Z"
                                fill="#FECC01"
                            />
                        </Svg>
                        <Text style={styles.titleNews}>КАЙРАТ</Text>
                    </View>
                </View>
                <View style={styles.new}>
                    <Image style={styles.newImage}/>
                    <Text style={styles.newTitle}>Кирилл Кекер: «Казахстан навсегда остаётся в сердце у людей, которые сюда попадают»</Text>
                    <View style={styles.dateTimeContainer}>
                        <Text style={styles.date}>14 октября <Text style={{ color: '#FECC01' }}>/</Text> 13:26</Text>
                    </View>
                    <View style={styles.headerNews}>
                        <Svg width={104} height={29} viewBox="0 0 104 29" fill="none">
                            <Path
                                opacity="0.7"
                                d="M0 0.000174461L103.295 0L86.3147 28.1438L0 28.144V0.000174461Z"
                                fill="#FECC01"
                            />
                        </Svg>
                        <Text style={styles.titleNews}>КАЙРАТ</Text>
                    </View>
                </View>
                <View style={styles.new}>
                    <Image style={styles.newImage}/>
                    <Text style={styles.newTitle}>Кирилл Кекер: «Казахстан навсегда остаётся в сердце у людей, которые сюда попадают»</Text>
                    <View style={styles.dateTimeContainer}>
                        <Text style={styles.date}>14 октября <Text style={{ color: '#FECC01' }}>/</Text> 13:26</Text>
                    </View>
                    <View style={styles.headerNews}>
                        <Svg width={104} height={29} viewBox="0 0 104 29" fill="none">
                            <Path
                                opacity="0.7"
                                d="M0 0.000174461L103.295 0L86.3147 28.1438L0 28.144V0.000174461Z"
                                fill="#FECC01"
                            />
                        </Svg>
                        <Text style={styles.titleNews}>КАЙРАТ</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
};

export default LastNews;