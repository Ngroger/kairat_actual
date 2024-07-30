import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 450,
        marginTop: 24
    },
    image: {
        width: '100%',
        borderRadius: 12,
    },
    content: {
        width: '100%',
        height: '100%',
        padding: 12,
        position: 'absolute',
        zIndex: 1000
    },
    title: {
        fontFamily: 'MulishMedium',
        fontSize: 20,
        letterSpacing: 1
    },
    subtitle: {
        fontFamily: 'MulishExtraBold',
        fontSize: 20,
        letterSpacing: 1,
        marginTop: 12
    },
    description: {
        fontFamily: 'MulishMedium',
        fontSize: 16,
        letterSpacing: 0.5,
        marginTop: 12
    },
    sale: {
        position: 'absolute',
        zIndex: 100000,
        bottom: 20,
        right: 20,
        color: '#FECC01',
        fontSize: 16,
        fontFamily: 'MulishBold',
        letterSpacing: 0.5
    }
});

export default styles;