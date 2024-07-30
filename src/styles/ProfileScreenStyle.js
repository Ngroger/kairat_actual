import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    content: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF',
        marginTop: 120,
    },
    profileCard: {
        borderRadius: 16,
        borderColor: '#FECC01',
        borderWidth: 2,
        padding: 20,
        marginTop: 24,
        marginHorizontal: 16
    },
    profileTitle: {
        fontFamily: 'MulishExtraBold',
        fontSize: 20
    },
    profileCardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between'
    },
    profileInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        borderBottomWidth: 3,
        borderBottomColor: '#FECC01',
        paddingVertical: 12
    },
    imageProfileContainer: {
        width: 65,
        height: 65,
        borderRadius: 1000
    },
    imageProfile: {
        width: '100%',
        height: '100%',
        borderRadius: 1000,
        backgroundColor: '#E2E2E2'
    },
    pickPhoto: {
        position: 'absolute',
        zIndex: 10000,
        width: 25,
        height: 25,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#000',
        backgroundColor: '#FECC01',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: -5,
        right: -5
    },
    name: {
        fontFamily: 'MulishBlack',
        marginLeft: 18,
        fontSize: 16,
        letterSpacing: 1,
        color: '#231F20'
    },
    status: {
        fontFamily: 'MulishMedium',
        marginLeft: 18,
        fontSize: 16,
        letterSpacing: 1,
        color: '#231F20',
        marginTop: 2
    },
    phone: {
        fontFamily: 'MulishMedium',
        marginLeft: 18,
        fontSize: 16,
        letterSpacing: 1,
        color: '#231F20',
        marginTop: 2
    },
    statisticInfo: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    statisticTitle: {
        fontSize: 16,
        letterSpacing: 0.5,
        fontFamily: 'MulishMedium',
        color: '#231F20',
        marginTop: 3
    },
    statisticCount: {
        fontSize: 20,
        letterSpacing: 0.5,
        fontFamily: 'MulishBold',
        color: '#231F20',
        marginTop: 3
    },
    statisticContainer: {
        width: '32%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16
    },
    myOrders: {
        width: '48%',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#FECC01',
        padding: 12
    },
    titleOrders: {
        fontFamily: 'MulishExtraBold',
        letterSpacing: 1,
        fontSize: 16
    },
    noOrdersText: {
        fontFamily: 'MulishMedium',
        fontSize: 12
    },
    ordersButton: {
        textAlign: 'center',
        marginTop: 124,
        color: '#535353',
        fontFamily: 'MulishMedium',
        fontSize: 12,
        marginBottom: 6
    }
});

export default styles;