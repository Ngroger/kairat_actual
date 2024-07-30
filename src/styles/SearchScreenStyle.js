import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    content: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF',
        marginTop: 120,
        paddingHorizontal: 16
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        marginTop: 24
    },
    headerTitle: {
        fontFamily: 'MulishExtraBold',
        fontSize: 20,
        letterSpacing: 1
    },
    category: {
        marginLeft: 8
    },
    categoryText: {
        fontFamily: 'MulishBold',
        letterSpacing: 0.5,
        fontSize: 12
    },
    searchContainer: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: '#FECC01',
        borderBottomWidth: 3,
        paddingVertical: 20
    },
    field: {
        width: '47%',
        padding: 8,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#FECC01',
        paddingHorizontal: 16
    },
    search: {
        fontFamily: 'MulishMedium',
        fontSize: 16,
        color: '#000',
        width: 100
    },
    buttonFind: {
        backgroundColor: '#FECC01',
        width: '47%',
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12
    },
    buttonFindText: {
        fontFamily: 'MulishExtraBold',
        fontSize: 20,
        color: '#000',
    },
    resultOfSearch: {
        paddingHorizontal: 16,
        marginTop: 24
    },
    title: {
        fontFamily: 'MulishBold',
        fontSize: 16,
        letterSpacing: 1
    },
    description: {
        color: '#535353',
        fontFamily: 'MulishRegular',
        fontSize: 16,
        letterSpacing: 1,
        marginVertical: 6
    },
    topicTitle: {
        color: '#535353',
        fontFamily: 'MulishRegular',
        fontSize: 16,
        letterSpacing: 1,
    },
    topicItem: {
        color: '#231F20',
        fontFamily: 'MulishMedium',
        fontSize: 16,
        letterSpacing: 1,
        textDecorationLine: 'underline',
        marginLeft: 6
    },
});

export default styles;