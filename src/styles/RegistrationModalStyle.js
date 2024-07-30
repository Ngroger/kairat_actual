import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        zIndex: 100000000000000,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 12,
    },
    container: {
        backgroundColor: '#FFF',
        padding: 16,
        width: '100%',
        borderRadius: 12,
        paddingHorizontal: 24,
        marginTop: -25
    },
    header: {
        width: '100%',
        padding: 16,
        alignItems: 'flex-end',
    },
    closeButton: {
        width: 24,
        height: 24,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -50,
        right: -20
    },
    headerContainer: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',

    },
    title: {
        fontSize: 20,
        fontFamily: 'MulishExtraBold',
        lineHeight: 26,
        marginLeft: 12
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
    buttonContainer: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 4
    },
    registrationButton: {
        fontFamily: 'MulishMedium',
        color: '#231F20',
        fontSize: 16    
    },
    recoveryButton: {
        fontFamily: 'MulishMedium',
        color: '#231F20',
        fontSize: 16
    },
    login: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FECC01',
        borderRadius: 8,
        marginTop: 20,
        marginBottom: 20
    },
    loginText: {
        fontSize: 20,
        color: '#231F20',
        fontFamily: 'MulishExtraBold'
    },
    anotherWay: {
        fontSize: 16,
        textAlign: 'center',
        color: '#231F20',
        fontFamily: 'MulishMedium'
    },
    wayContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    accountContainer: {
        borderWidth: 1,
        borderColor: '#535353',
        padding: 8,
        borderRadius: 1000
    },
    agree: {
        textAlign: 'center',
        marginTop: 24,
        marginBottom: 32,
        fontSize: 12,
        fontFamily: 'MulishMedium',
        color: '#535353',
    },
    checkboxContainer: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        marginTop: 10,
    },
    checkbox: {
        width: 25,
        height: 25,
        borderWidth: 1.5,
        borderRadius: 4,
        justifyContent: 'center',
        alignContent: 'center',
        borderColor: '#231F20'
    },
    checkboxTitle: {
        marginLeft: 8,
        fontSize: 12,
        fontFamily: 'MulishMedium',
        color: '#535353'
    }
});

export default styles;