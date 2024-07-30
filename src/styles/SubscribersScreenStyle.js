import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    content: {
        width: '100%',
        height: '100%',
        marginTop: 120,
        backgroundColor: "#FFF",
        paddingHorizontal: 16
    },
    subscribe: {
        borderWidth: 1,
        borderRadius: 12,
        borderColor: '#FECC01',
        marginTop: 24,
        padding: 16
    },
    subscribeHeader: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex'
    },
    subscribeTitle: {
        fontFamily: 'MulishExtraBold',
        letterSpacing: 1,
        fontSize: 20,
        color: '#231F20'
    },
    subscribeContent: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        marginTop: 12
    },
    qr: {
        height: 150,
        width: 150
    },
    blur: {
        width: 150,
        height: 150,
        backgroundColor: 'rgba(255, 255, 255, 0.25 )'
    },
    season: {
        fontFamily: 'MulishExtraBold',
        letterSpacing: 1,
        fontSize: 20
    },
    date: {
        fontFamily: 'MulishMedium',
        letterSpacing: 1,
        fontSize: 12,
        marginTop: 3
    },
    description: {
        width: 150,
        fontSize: 12,
        letterSpacing: 0.5,
        fontFamily: 'MulishMedium',
        marginTop: 3,
        color: '#535353'
    },
    place: {
        marginTop: 6,
        color: '#535353',
        fontFamily: 'MulishMedium',
        fontSize: 16
    },
    noActive: {
        fontFamily: 'MulishExtraBold',
        position: 'absolute',
        zIndex: 100000,
        textAlign: 'center',
        fontSize: 28,
        letterSpacing: 0.5,
        color: '#535353'
    }
});

export default styles;