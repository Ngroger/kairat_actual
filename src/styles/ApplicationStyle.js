import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        zIndex: 100000,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 12,
    },
    container: {
        width: '100%',
        backgroundColor: '#FFF',
        borderRadius: 12,
        position: 'relative', // Make the container relative for absolute positioning of closeButton
    },
    closeButton: {
        width: 24,
        height: 24,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        padding: 12,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    field: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#FECC01',
        width: '100%',
        marginTop: 16,
        padding: 14
    },
    fieldTitle: {
        backgroundColor: '#FFF',
        paddingHorizontal: 8,
        paddingVertical: 1,
        position: 'absolute',
        zIndex: 100,
        color: '#535353',
        fontFamily: 'MulishMedium',
        fontSize: 16,
        top: -10,
        left: 10
    },
    input: {
        fontFamily: 'MulishMedium',
        fontSize: 16,
        width: 300,
        marginLeft: 6,
    },
    title: {
        fontSize: 20,
        color: '#231F20',
        fontFamily: 'MulishBold',
        letterSpacing: 0.6
    },
    sendButton: {
        backgroundColor: '#',
        width: '100%',
        padding: 14,
        marginTop: 14,
        marginBottom: 36,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FECC01',
        borderRadius: 8
    },
    sendButtonText: {
        fontSize: 20,
        color: '#231F20',
        fontFamily: 'MulishExtraBold',
        letterSpacing: 0.6
    }
});

export default styles;