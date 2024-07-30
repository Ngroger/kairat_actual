import { StyleSheet } from "react-native";

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
        display: 'flex',
    },
    title: {
        fontSize: 20,
        color: '#231F20',
        fontFamily: 'MulishBlack',
        width: 250,
        letterSpacing: 1,
    },
    lines: {
        position: 'absolute',
        zIndex: 0,
        top: 30,
        right: '-30%',
        width: 200,
        height: 280
    },
    cardsContainer: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
        marginTop: 18
    },
    card: {
        width: '48%',
        marginTop: 12,
    },
    image: {
        width: '100%',
        height: 170,
        backgroundColor: '#BDBDBD'
    },
    name: {
        fontFamily: 'MulishExtraBold',
        letterSpacing: 0.5,
        marginTop: 6,
        fontSize: 20
    },
    status: {
        fontFamily: 'MulishMedium',
        letterSpacing: 0.5,
        marginTop: 6,
        fontSize: 16
    },
    age: {
        fontFamily: 'MulishRegular',
        letterSpacing: 0.5,
        marginTop: 6,
        fontSize: 12,
        color: '#535353'
    },
});

export default styles;