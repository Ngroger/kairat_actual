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
        display: 'flex',
        borderBottomWidth: 6,
        borderBottomColor: '#FECC01',
        paddingBottom: 16
    },
    title: {
        fontSize: 20,
        color: '#231F20',
        fontFamily: 'MulishBlack',
        letterSpacing: 1,
        width: 180
    },
    lines: {
        position: 'absolute',
        zIndex: -10000,
        top: 30,
        right: '-40%',
        width: 200,
        height: 280
    },
    match: {
        // padding: 16,
        paddingHorizontal: 16,
        width: '100%',
        borderWidth: 1,
        marginTop: 16,
        borderColor: '#FECC01',
        borderRadius: 12,
    },
    matchHeader: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    kaz: {
        height: 23.48,
        width: 23.48
    },
    matchTitle: {
        marginLeft: 12,
        color: '#535353',
        fontFamily: 'MulishBold',
        fontSize: 12,
        letterSpacing: 0.7,
        lineHeight: 20,
        width: 130,
        
    },
    date: {
        textAlign: 'right',
        color: '#231F20',
        fontSize: 12,
        letterSpacing: 0.7,
        lineHeight: 20,
        fontFamily: 'MulishExtraBold'
    },
    matchInfo: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',
    },
    teamInfo: {
        alignItems: 'center'
    },
    matchStat: {
        width: 146.5,
        alignItems: 'center',
    },
    score: {
        fontSize: 32,
        fontFamily: 'MulishExtraBold',
        color: '#535353',
        letterSpacing: 1,
    },
    scores: {
        fontSize: 40,
        fontFamily: 'MulishExtraBold',
        color: '#535353',
        letterSpacing: 10.06,
    },
    address: {
        textAlign: 'center',
        color: '#535353',
        marginTop: 2,
        width: 200,
        fontSize: 12,
        fontFamily: 'MulishRegular',
        marginTop: 10
    },
    matchTeam: {
        textAlign: 'center',
        fontFamily: 'MulishExtraBold',
        fontSize: 12,
        marginTop: 12
    },
    teamImage: {
        resizeMode: 'contain',
        width: 65,
        height: 80,
        borderWidth: 1,
        marginTop: 24
    },
    versus: {
        fontFamily: 'MulishBlack',
        fontSize: 32,
        color: '#FECC01',
    },
    start: {
        fontFamily: 'MulishRegular',
        fontSize: 16,
        textAlign: 'center',
        color: '#535353',
        letterSpacing: 0.6
    },
    sliderProgress: {
        width: '100%',
        position: 'absolute',
        zIndex: 1000,
        flexDirection: 'row',
        display: 'flex',
        bottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeSlide: {
        width: 40,
        padding: 4,
        borderRadius: 100,
        backgroundColor: '#000',
    },
    nextSlide: {
        width: 18,
        padding: 4,
        borderRadius: 100,
        backgroundColor: '#FECC01',
        marginLeft: 12
    },
    dot: {
        height: 6,
        width: 25,
        backgroundColor: '#FECC01',
        borderRadius: 1000,
        margin: 6
    },
    activeDot: {
        height: 6,
        width: 70,
        backgroundColor: '#000',
        borderRadius: 1000,
        margin: 6
    }
});

export default styles;