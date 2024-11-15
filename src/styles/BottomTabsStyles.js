import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#FFF',
        justifyContent: 'space-around',
        flexDirection: 'row',
        display: 'flex',
        padding: '12@msr',
        paddingHorizontal: '20@msr',
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
        fontSize: '14@s'
    }
});

export default styles;