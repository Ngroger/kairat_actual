import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from '../../../styles/TrainerModalStyle';
import { AntDesign } from '@expo/vector-icons';

function TrainerModal() {
    return (
        <View style={styles.background}>
            <View style={styles.closeContainer}>
                <TouchableOpacity style={styles.closeButton}>
                    <AntDesign name='close' color='#FFF' size={16}/>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.content}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image}/>
                    <Image style={{ width: 50, height: 50, position: 'absolute', zIndex: 20000000000000, right: 10, top: 20 }} source={require('../../../img/HG.png')}/>
                </View>
                <View style={styles.mainInfo}>
                    <Text style={styles.name}>Илья Юров</Text>
                    <Text style={styles.status}>Тренер вратарей</Text>
                </View>
                <View style={styles.additionalInfo}>
                    <Text style={styles.additionalInfoText}>Гражданство - <Text style={{ fontFamily: 'MulishBlack' }}>Казахстан</Text></Text>
                    <Text style={styles.additionalInfoText}>Возраст - <Text style={{ fontFamily: 'MulishBlack' }}>42 г.</Text> / 10.09.1986</Text>
                    <Text style={styles.additionalInfoText}>В клубе - <Text style={{ fontFamily: 'MulishBlack' }}>28 лет</Text></Text>
                </View>
                <Text style={styles.desctiption}>
                    Илья Юров начал карьеру игрока в 1998-м году за ЦСКА-«Кайрат». После воссоединения двух «Кайратов», Юров стал вратарем «желто-черных» на следующие 8 лет и провел в составе алматинцев 93 матча.{'\n'}{'\n'}

                    В чемпионский сезон 2004 года, ему удается выиграть конкуренцию у Сергея Бойченко и Евгения Найбоченко за место основного стража ворот «Кайрата», и внести весомый вклад в завоевание титула.{'\n'}{'\n'}

                    К сожалению, сезон 2008-го года голкипер был вынужден пропустить из-за травмы спины.{'\n'}{'\n'}
                </Text>
                <Text style={[styles.desctiption, { marginTop: 0 }]}>
                    Восстановившись, в 2009-м году возобновляет карьеру в составе талдыкорганского «Жетысу».{'\n'}{'\n'} 

                    Через год возвращается в родной «Кайрат», но злосчастная травма вновь дала о себе знать и не позволила заиграть в полную силу, после чего игрок был вынужден завершить карьеру в 29 лет.{'\n'}{'\n'}

                    В 2019-м году стал тренером вратарей «Кайрат-Жастар» и уже на следующий сезон перешел в основную команду.{'\n'}{'\n'}
                </Text>
            </ScrollView>
        </View>
    )
};

export default TrainerModal;