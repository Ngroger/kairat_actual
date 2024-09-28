import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#FFF',
        justifyContent: 'space-between',
        flexDirection: 'row',
        display: 'flex',
        padding: 12,
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
        fontSize: 16
    }
});

export default styles;