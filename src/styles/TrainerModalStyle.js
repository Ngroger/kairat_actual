import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        zIndex: 1000000,
        alignItems: 'center',
        paddingHorizontal: 32
    },
    closeContainer: {
        width: '100%',
        position: 'absolute',
        zIndex: 1000001,
        marginTop: 52,
        padding: 3
    },
    closeButton: {
        height: 25,
        width: 25,
        borderWidth: 2,
        borderColor: '#FFF',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 100000002,
        right: 4
    },
    content: {
        width: '100%',
        height: '80%',
        padding: 24,
        borderRadius: 24,
        backgroundColor: '#FECC01',
        marginTop: 102,
        position: 'absolute',
        zIndex: 10000000000000
    },
    imageContainer: {
        width: '100%',
        borderRadius: 12,
        height: 400,
        borderWidth: 2,
        borderColor: '#FFF'
    },
    image: {
        width: '100%',
        height: '100%',
        backgroundColor: '#BDBDBD',
        borderRadius: 12
    },
    mainInfo: {
        borderBottomWidth: 3,
        borderBottomColor: '#000',
        paddingVertical: 16
    },
    name: {
        fontSize: 20,
        fontFamily: 'MulishBlack',
        letterSpacing: 1
    },
    status: {
        fontSize: 16,
        fontFamily: 'MulishBold',
        letterSpacing: 1,
        marginTop: 4
    },
    additionalInfo: {
        paddingVertical: 10
    },
    additionalInfoText: {
        fontSize: 16,
        fontFamily: 'MulishRegular',
        letterSpacing: 1
    },
    desctiption: {
        fontFamily: 'MulishMedium',
        letterSpacing: 1,
        fontSize: 16,
        marginTop: 16
    },
});

export default styles;