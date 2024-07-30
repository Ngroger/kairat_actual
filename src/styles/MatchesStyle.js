import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: {
        padding: 16,
        width: '100%',
    },
    container: {
        borderWidth: 1,
        borderColor: '#FECC01',
        borderRadius: 12,
    },
    header: {
        backgroundColor: '#FECC01',
        width: '100%',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    title: {
        fontFamily: 'MulishBlack',
        fontSize: 20,
    },
    match: {
        // padding: 16,
        paddingHorizontal: 16,
        width: 359
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