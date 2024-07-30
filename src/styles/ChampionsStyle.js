import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: {
        padding: 16,
        width: '100%',
    },
    container: {
        borderRadius: 12,
    },
    header: {
        flexDirection: 'row',
        backgroundColor: '#FECC01',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        alignItems: 'center',
        padding: 12,
        paddingHorizontal: 16
    },
    league: {
        color: '#FECC01',
        fontFamily: 'MulishExtraBold',
        fontSize: 16,
        marginLeft: 36
    },
    championTitle:{
        color: '#000',
        fontFamily: 'MulishExtraBold',
        fontSize: 20,
        marginLeft: 6
    },
    champions: {
        width: '50%',
        backgroundColor: '#FECC01', 
        borderTopLeftRadius: 12,
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        padding: 16,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        borderColor: '#FECC01',
    },
    tableContainer: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    tableItemContainer: {
        color: '#535353',
        fontFamily: 'MulishRegular',
        fontSize: 16
    }
});

export default styles;