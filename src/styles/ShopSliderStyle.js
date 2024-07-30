import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 32,
        borderRadius: 12,
        backgroundColor: '#FECC01',
        height: 177
    },
    slide: {
        flexDirection: 'row',
        display: 'flex',
        padding: 24
    },
    image: {
        width: 135,
        height: 135,
        backgroundColor: '#BDBDBD'
    },
    title: {
        fontFamily: 'MulishExtraBold',
        letterSpacing: 1,
        color: '#231F20',
        fontSize: 20,
        lineHeight: 30,
        marginLeft: 10
    },
    subtitle: {
        color: '#FFF',
        fontFamily: 'MulishExtraBold',
        fontSize: 12, 
        letterSpacing: 1,
        lineHeight: 20,
        left: 10
    },
    moreDetailText: {
        position: 'absolute',
        zIndex: 100,
        color: '#FFF',
        fontFamily: 'MulishBold',
        letterSpacing: 1,
        fontSize: 12
    },
    navigation: {
        width: '100%',
        position: 'absolute',
        zIndex: 10000,
    },
    arrowContainer: {
        flexDirection: 'row',
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: 70
    },
    pagination: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        top: '34%'
    },
    activeSlide: {
        height: 5,
        backgroundColor: '#fff',
        width: 24,
        borderRadius: 100
    },
    nextSlide: {
        height: 5,
        backgroundColor: '#000',
        width: 10,
        borderRadius: 100,
        marginLeft: 6
    },
});

export default styles;