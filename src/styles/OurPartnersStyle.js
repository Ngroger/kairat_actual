import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: {
        width: '100%',
        backgroundColor: '#F3F3F3',
        resizeMode: 'cover',
    },
    header: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 1000,
        top: -20
    },
    title: {
        fontSize: 20,
        color: '#000',
        fontFamily: 'MulishBlack',
        position: 'absolute',
        zIndex: 1000,
        letterSpacing: 1
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 24,
    }
});

export default styles;