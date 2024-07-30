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
    title: {
        fontSize: 20,
        color: '#231F20',
        fontFamily: 'MulishBlack',
        width: 250,
        letterSpacing: 1
    },
    lines: {
        position: 'absolute',
        zIndex: -100,
        top: 30,
        right: '-30%',
        width: 200,
        height: 280
    },
    playersContent: {
        width: '100%',
        backgroundColor: '#FECC01',
        borderRadius: 12,
        marginTop: 12,
    },
    image: {
        width: '100%',
        borderRadius: 12,
        height: 280,
        backgroundColor: '#BDBDBD'
    },
    list: {
        paddingHorizontal: 82
    },
    year: {
        fontFamily: 'MulishExtraBold',
        letterSpacing: 1,
        fontSize: 36,
        transform: [{ rotate: '-90deg' }],
        position: 'absolute',
        zIndex: 100000,
        left: 0,
        top: 32
    },
    titleOfList: {
        fontFamily: 'MulishBlack',
        letterSpacing: 1,
        fontSize: 16,
    },
    memberOfList: {
        fontFamily: 'MulishMedium',
        letterSpacing: 1,
        fontSize: 16,
        marginVertical: 2
    }
});

export default styles;