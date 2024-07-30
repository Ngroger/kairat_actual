import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import styles from '../../styles/SayYourStoryStyle';

function SayYourStory() {
    return (
        <View styles={styles.container}>
            <Image style={styles.image} source={require('../../img/SayYourStory.png')}/>
            <View style={styles.content}>
                <Text style={styles.title}>АКЦИЯ</Text>
                <Text style={styles.subtitle}>РАССКАЖИ СВОЮ ИСТОРИЮ</Text>
                <Text style={styles.description}>Напишите нам свою эмоциональную, 
                    запоминающуюся историю, связанную с родным клубом.{'\n'}{'\n'} 

                    <Text style={{ fontFamily: 'MulishExtraBold', fontSize: 20 }}>Лучшие истории услышит весь стадион.</Text>
                </Text>
                <Text style={styles.sale}>Акция продлится{'\n'}до конца сезона</Text>
            </View>
        </View>
    )
};

export default SayYourStory;
