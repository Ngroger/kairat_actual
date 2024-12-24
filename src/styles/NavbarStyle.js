import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#FFF',
        display: 'flex',
        paddingTop: '34@msr',
    },
    selectLanguage: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginLeft: 30
    },
    language: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center'
    },
    titleContainer: {
        position: 'relative', // Добавьте эту строку
        flexDirection: 'row',
        display: 'flex',
        width: '100%',
        backgroundColor: '#FECC01',
        padding: 11,
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,

    },
    title: {
        fontSize: 12,
        fontWeight: '900',
        fontFamily: "MulishBold",
    },
    logo: {
        width: 100,
        height: 85,
    },
    background: {
        position: 'absolute',
        zIndex: 10000,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 12
    },
    container: {
        width: '100%',
        padding: 12,
        backgroundColor: '#FECC01',
        marginTop: 36,
        borderRadius: 12,
        position: 'relative', // Make the container relative for absolute positioning of closeButton
    },
    closeButton: {
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 6,
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '93%'
    },
    navigationButtons: {
        alignItems: 'flex-start',
        borderBottomWidth: 3,
        borderBottomColor: '#000',
        paddingBottom: 16,
        paddingHorizontal: 12
    },
    button: {
        fontSize: '14@s',
        fontFamily: 'MulishBlack',
        letterSpacing: 1
    },
    media: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        flexDirection: 'row',
        display: 'flex',
    },
    additionalMenu: {
        marginLeft: 25
    },
    additionalButton: {
        fontFamily: 'MulishMedium',
        fontSize: 16,
        paddingVertical: 10
    }
});

export default styles;