import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    content: {
        padding: 16,
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF',
    },
    header: {
        marginTop: 140,
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex'
    },
    buttonBack: {
        borderRadius: 100,
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    title: {
        fontSize: 16,
        color: '#231F20',
        fontFamily: 'MulishRegular',
        width: 200, 
        marginLeft: 12
    },
    lines: {
        position: 'absolute',
        zIndex: -100,
        top: 10,
        right: '-30%',
        width: 200,
        height: 280
    },
    playerContent: {
        width: '100%',
        padding: 12,
        backgroundColor: '#FECC01',
        borderRadius: 12,
        marginTop: 12,
    },
    imageContainer: {
        borderWidth: 1,
        borderRadius: 12,
        borderColor: '#FFF',
        width: '100%',
        height: 500,
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
        backgroundColor: '#BDBDBD',
        borderRadius: 12,
    },
    imageHeader: {
        position: 'absolute',
        zIndex: 1000,
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    numberContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    number: {
        position: 'absolute',
        zIndex: 10000,
        fontSize: 32,
        fontFamily: 'MulishBlack'
    },
    name: {
        fontFamily: 'MulishBold',
        letterSpacing: 1,
        fontSize: 20,
        borderBottomColor: '#000',
        borderBottomWidth: 3,
        paddingVertical: 12
    },
    infoContainer: {
        width: '100%',
        padding: 12,
        paddingHorizontal: 16,
        backgroundColor: '#231F20',
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    infoText: {
        fontSize: 12,
        fontFamily: 'MulishRegular',
        color: '#FFF',
        letterSpacing: 1,
        marginVertical: 6
    },
    statistic: {
        flexDirection: 'row',
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 12
    },
    statisticText: {
        fontFamily: 'MulishBlack',
        letterSpacing: 1,
        fontSize: 12,
        textAlign: 'center',
        position: 'absolute',
        zIndex: 10000,
        top: 10
    },
    achievements: {
        paddingVertical: 24,
        borderBottomColor: '#000',
        borderBottomWidth: 3,
        paddingHorizontal: 24
    },
    achievementsTitle: {
        fontFamily: 'MulishBlack',
        letterSpacing: 1,
        fontSize: 20
    },
    achievementsInfo: {
        fontSize: 16,
        fontFamily: 'MulishRegular',
        lineHeight: 30
    },
    career: {
        paddingHorizontal: 24
    },
    careetTitle: {
        fontFamily: 'MulishBlack',
        letterSpacing: 1,
        fontSize: 20,
        marginTop: 16
    },
    careerInfo: {
        fontFamily: 'MulishMedium',
        letterSpacing: 1,
        fontSize: 16,
        marginTop: 12
    },
    shop: {
        width: '100%',
        alignItems: 'center'
    },
    card: {
        width: 180,
        borderRadius: 12,
        backgroundColor: '#FFF',
        marginTop: 24,
        marginBottom: 24,
        padding: 16
    },
    imageShop: {
        backgroundColor: '#BDBDBD',
        height: 150,
        width: '100%',
        marginTop: 6
    },
    shopTitle: {
        fontFamily: 'MulishBold',
        fontSize: 16,
        letterSpacing: 1,
        marginTop: 6
    },
    cost: {
        fontSize: 12,
        fontFamily: 'MulishRegular',
        letterSpacing: 1, 
        marginTop: 6
    },
    addProduct: {
        width: '100%',
        padding: 6,
        backgroundColor: '#FECC01',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginTop: 6
    },
    addProductText: {
        fontFamily: 'MulishBold',
        fontSize: 16,
        letterSpacing: 1,
        textAlign: 'center'
    }
});

export default styles;