import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    content: {
        width: '100%',
        height: '100%',
        marginTop: 120
    },
    gradient: {
        position: 'absolute',
        bottom: 0,
        zIndex: 1000,
        height: 100,
        width: '100%',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    skewedShape: {
        width: 200,
        height: 100,
        backgroundColor: 'blue',
        borderBottomWidth: 50,
        borderBottomColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 100,
        borderRightColor: 'blue',
    },
    header: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        display: 'flex',
        padding: 12,
        borderWidth: 1,
        position: 'relative',
        zIndex: -1000
    },
    dataSelector: {
        width: '20%',
        height: '100%',
        backgroundColor: '#FFF',
        position: 'absolute',
        zIndex: 2, // Установка zIndex для dataSelector
        top: 50,
        borderWidth: 1,
        right: 16
    },
    title: {
        fontFamily: 'MulishBlack',
        fontSize: 20,
        letterSpacing: 0.6,
    },
    pickData: {
        borderWidth: 2,
        borderColor: '#FECC01',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
    },
    data: {
        fontFamily: 'MulishMedium',
        fontSize: 12
    },
    filtersContainer: {
        width: '100%',
        flexWrap: 'wrap',
        borderBottomWidth: 5,
        borderBottomColor: '#FECC01',
        flexDirection: 'row',
        display: 'flex',
        marginTop: -10,
    },
    filterText: {
        marginVertical: 6,
        fontFamily: 'MulishBold',
        fontSize: 16,
        color: '#231F20'
    },
    filter: {
        marginHorizontal: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardsContainer: {
        position: 'relative',
        paddingVertical: 1, 
        paddingHorizontal: 24
    },
    cardsTitle: {
        fontFamily: 'MulishBold',
        letterSpacing: 1,
        fontSize: 20,
        color: '#535353',
        marginTop: 12
    },
    cards: {
        width: '100%',
        flexDirection: 'row',
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: -36
    },
    card: {
        width: 152,
        height: 200,
        marginTop: 40,
    },
    cardImage: {
        width: '100%',
        height: '100%',
        backgroundColor: '#BDBDBD',
        position: 'absolute',
        zIndex: 100,
    },
    cardNumber: {
        position: 'absolute',
        zIndex: 10000,
        top: 10,
        left: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    number: {
        fontSize: 20,
        fontFamily: 'MulishBlack',
        position: 'absolute',
        zIndex: 1000000
    },
    cardName: {
        fontFamily: 'MulishBlack',
        fontSize: 16,
        color: '#FFF',
        position: 'absolute',
        bottom: 20,
        left: 20,
        letterSpacing: 1,
        lineHeight: 30,
        zIndex: 10000000,
    },
    additionalInfo: {
        backgroundColor: '#FECC01',
        position: 'absolute',
        zIndex: 100000000,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 16,
        width: '115%', // Попробуйте использовать относительные значения, например 'width: '115%''.
        height: '180%', // Попробуйте использовать относительные значения, например 'height: '180%''.
        alignItems: 'center',
        left: -12
    }
    ,
    additionalInfoText: {
        fontFamily: 'MulishMedium',
        fontSize: 12
    },
    buttonMoreDetails: {
        position: 'absolute',
        zIndex: 1000,
        bottom: 0,
        right: -1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    moreDetailsText: {
        fontSize: 12,
        color: '#FECC01',
        fontFamily: 'MulishRegular',
        letterSpacing: 1,
        position: 'absolute',
        zIndex: 10000
    },
    background: {
        // paddingHorizontal: 16  
    },
    contentTeam: {
        backgroundColor: '#FCFAF7',
        width: '100%',
    },
    image: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // paddingVertical: 64
    },
    playersList: {
        padding: 12,
        backgroundColor: '#FECC01',
        borderRadius: 16,
        top: 10,
        // paddingHorizontal: 100
    },
    parallelogram: {
        width: 150,
        height: 100,
      },
      parallelogramInner: {
        position: "absolute",
        left: 0,
        top: 0,
        backgroundColor: "red",
        width: 150,
        height: 100,
      },
      parallelogramRight: {
        top: 0,
        right: -50,
        position: "absolute",
      },
      parallelogramLeft: {
        top: 0,
        left: -50,
        position: "absolute",
      },
});

export default styles;