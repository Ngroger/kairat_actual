import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    slide: {
        height: 460,
        width: '100%'
    },
    imageSlide: {
        width: '100%',
        height: '100%',
        backgroundColor: '#BDBDBD',
        objectFit: 'cover'
    },
    description: {
        color: '#FFF',
        fontSize: 19,
        fontFamily: 'MulishBlack',
        marginTop: 10,
        width: '90%',
        letterSpacing: 1,

    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '25%'
    },
    headerTitle: {
        fontFamily: 'MulishBold',
        fontSize: 12,
        position: 'absolute',
        zIndex: 100
    },
    sliderProgress: {
        width: '100%',
        position: 'absolute',
        zIndex: 1000,
        flexDirection: 'row',
        display: 'flex',
        bottom: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    activeSlide: {
        width: 40,
        padding: 4,
        borderRadius: 100,
        backgroundColor: '#FFF',
    },
    nextSlide: {
        width: 18,
        padding: 4,
        borderRadius: 100,
        backgroundColor: '#FECC01',
        marginLeft: 24
    },
    gradient: {
        position: 'absolute',
        bottom: 0,
        zIndex: 10,
        height: 165,
        width: '100%'
    },
});

export default styles;