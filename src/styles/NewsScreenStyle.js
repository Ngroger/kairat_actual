import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#FFF',
        width: '100%',
        height: '100%'
    },
    container: {
        width: '100%',
        borderWidth: 1,
        borderColor: "#FFF",
        marginTop: 120
    },
    previewImage: {
        width: '100%',
        height: 460,
        backgroundColor: '#BDBDBD',
        marginTop: 120,
    },
    lines: {
        position: 'absolute',
        zIndex: 10000,
        top: 320,
        right: '-50%'
    },
    header: {
        width: '100%',
        paddingVertical: 24,
        borderBottomWidth: 10,
        borderBottomColor: '#FECC01',
    },
    content: {
        width: '100%',
        padding: 16,
        top: -25
    },
    title: {
        fontFamily: 'MulishBlack',
        letterSpacing: 1,
        fontSize: 20,
        marginTop: 10
    },
    headerNew: {
        fontFamily: 'MulishRegular',
        flexWrap: 'nowrap',
        fontSize: 10,
        position: 'absolute',
        zIndex: 10
    },
    time: {
        fontFamily: 'MulishRegular',
        fontSize: 16,
        textAlign: 'right'
    },
    secondTitle: {
        fontFamily: 'MulishBlack',
        fontSize: 16,
        letterSpacing: 1,
        lineHeight: 30,
        marginTop: 10,
        width: '80%'
    },
    shareContainer: {
        position: 'absolute',
        zIndex: 10000000,
        right: -55,
        transform: [{ rotate: '90deg' }],
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        top: 290
    },
    share: {
        fontFamily: 'MulishRegular',
        fontSize: 16,
        transform: [{ rotate: '180deg' }]
    },
    text: {
        fontFamily: 'MulishLight',
        color: '#000',
        width: 300,
        fontSize: 12,
        letterSpacing: 1,
        lineHeight: 30,
        marginTop: 30
    },
    image: {
        width: '100%',
        height: 300,
        backgroundColor: '#BDBDBD',
        marginTop: 30
    },
    subtitlePhoto: {
        fontSize: 16,
        fontFamily: 'MulishRegular',
        textAlign: 'right',
        marginTop: 10,
        color: '#535353'
    }
});

export default styles;