import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    content: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF',
        marginTop: 120,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        borderBottomColor: '#FECC01',
        borderBottomWidth: 2,
        paddingVertical: 12,
        marginTop: 6,
        marginHorizontal: 24
    },
    search: {
        fontSize: 16,
        fontFamily: 'MulishMedium',
        color: '#535353',
        width: 200,
        left: 12
    },
    cardContainer: {
        flexDirection: 'row',
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginTop: 16,
        paddingHorizontal: 24
    },
    card: {
        width: '47%',
        borderWidth: 1,
        borderColor: '#FECC01',
        marginTop: 24,
        borderRadius: 12
    },
    image: {
        width: "100%",
        backgroundColor: '#BDBDBD',
        height: 160,
        borderRadius: 11
    },
    contentCard: {
        paddingHorizontal: 14,
        paddingVertical: 16
    },
    name: {
        fontFamily: 'MulishBold',
        letterSpacing: 0.5,
        fontSize: 16
    },
    cost: {
        fontFamily: 'MulishRegular',
        letterSpacing: 0.5,
        fontSize: 16,
        marginTop: 6
    }
});

export default styles;
