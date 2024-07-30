import { Text, Image, View, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../../styles/ShopStyle';
import Svg, { Path } from 'react-native-svg';

function Shop() {
    return (
        <View style={styles.background}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>МАГАЗИН</Text>
            </View>
            <ScrollView horizontal={true} style={{ width: '100%'}}>
                <View style={styles.card}>
                    <View style={{ width: '100%', alignItems: 'center', padding: 20}}>
                        <Image style={styles.cardImage}/>
                    </View>
                    <View style={{ paddingHorizontal: 20 }}>
                        <Text style={styles.titleCard}>Футболка Nike LS Striker IV JSY S - X - L - XL</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', paddingVertical: 16, justifyContent: 'space-between' }}>
                            <Text style={styles.cost}>10 140Т</Text>
                            <TouchableOpacity style={styles.addCart}>
                                <Text style={styles.addCartText}>В корзину</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={{ width: '100%', alignItems: 'center', padding: 20}}>
                        <Image style={styles.cardImage}/>
                    </View>
                    <View style={{ paddingHorizontal: 20 }}>
                        <Text style={styles.titleCard}>Футболка Nike LS Striker IV JSY S - X - L - XL</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', paddingVertical: 16, justifyContent: 'space-between' }}>
                            <Text style={styles.cost}>10 140Т</Text>
                            <TouchableOpacity style={styles.addCart}>
                                <Text style={styles.addCartText}>В корзину</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={{ width: '100%', alignItems: 'center', padding: 20}}>
                        <Image style={styles.cardImage}/>
                    </View>
                    <View style={{ paddingHorizontal: 20 }}>
                        <Text style={styles.titleCard}>Футболка Nike LS Striker IV JSY S - X - L - XL</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', paddingVertical: 16, justifyContent: 'space-between' }}>
                            <Text style={styles.cost}>10 140Т</Text>
                            <TouchableOpacity style={styles.addCart}>
                                <Text style={styles.addCartText}>В корзину</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={{ width: '100%', alignItems: 'center', padding: 20}}>
                        <Image style={styles.cardImage}/>
                    </View>
                    <View style={{ paddingHorizontal: 20 }}>
                        <Text style={styles.titleCard}>Футболка Nike LS Striker IV JSY S - X - L - XL</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', paddingVertical: 16, justifyContent: 'space-between' }}>
                            <Text style={styles.cost}>10 140Т</Text>
                            <TouchableOpacity style={styles.addCart}>
                                <Text style={styles.addCartText}>В корзину</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={{ width: '100%', alignItems: 'center', padding: 20}}>
                        <Image style={styles.cardImage}/>
                    </View>
                    <View style={{ paddingHorizontal: 20 }}>
                        <Text style={styles.titleCard}>Футболка Nike LS Striker IV JSY S - X - L - XL</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', paddingVertical: 16, justifyContent: 'space-between' }}>
                            <Text style={styles.cost}>10 140Т</Text>
                            <TouchableOpacity style={styles.addCart}>
                                <Text style={styles.addCartText}>В корзину</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
};

export default Shop;