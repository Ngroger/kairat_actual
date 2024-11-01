import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#FFF',
        justifyContent: 'space-between',
        flexDirection: 'row',
        display: 'flex',
        padding: 16,
        paddingHorizontal: 24,
        position: 'absolute',
        zIndex: 100000,
        bottom: 0,
        alignItems: 'flex-end',
    },
    tab: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabText: {
        fontSize: '16@s'
    }
});

export default styles;