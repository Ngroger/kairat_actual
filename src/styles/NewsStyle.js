import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
    background: {
        
    },
    gradient: {
        position: 'absolute',
        bottom: 0,
        zIndex: 10,
        height: 165,
        width: '100%'
    },
    lines: {
        position: 'absolute',
        zIndex: 10000,
        top: -90,
        right: '-60%',
        resizeMode: 'contain',
        width: 300,
        height: 300
    },
    titleContainer: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    title: {
        fontSize: 20,
        fontFamily: 'MulishBlack'
    },
    filter: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
    },
    filterTitle: {
        fontSize: 16,
        fontFamily: 'MulishRegular',
        marginRight: 6
    },
    new: {
        width: 260,
        height: 370,
        margin: 20,
        position: 'relative',
        zIndex: -10
    },
    newImage: {
        width: '100%',
        height: '100%',
        backgroundColor: '#BDBDBD'
    },
    newTitle: {
        position: 'absolute',
        zIndex: 1000,
        margin: 20,
        bottom: 24,
        color: '#FFF',
        fontSize: 20,
        fontFamily: 'MulishBlack'
    },
    dateTimeContainer: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 100,
        margin: 20,
        bottom: 0
    },
    date: {
        color: '#FFF', 
        fontFamily: 'MulishRegular',
        fontSize: 16   
    },
    time: {
        color: '#FFF', 
        fontFamily: 'MulishRegular',
        fontSize: 16
    },
    headerNews: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 1000,
        top: 0,
        left: 0
    },
    titleNews: {
        fontFamily: 'MulishRegular',
        fontSize: '10@ms',
        position: 'absolute',
        zIndex: 100,
        left: 10
    },
    pagination: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        marginTop: 10,
    },
    activePageNumber: {
        fontFamily: 'MulishMedium',
        fontSize: 20,
        marginHorizontal: 6,
        color: '#FECC01'
    },
    pageNumber: {
        fontFamily: 'MulishMedium',
        fontSize: 20,
        marginHorizontal: 6
    },
    errorMessage: {
        fontFamily: 'MulishRegular',
        fontSize: 20,
        color: '#FECC01',
        marginTop: 24,
        textAlign: 'center'
    },
    filterMenu: {
        backgroundColor: '#FFF',
        position: 'absolute',
        zIndex: 100,
        top: 30,
        right: 25
    },
    filterContainer: {
        paddingVertical: 4,
        paddingHorizontal: 16
    },
    filterText: {
        fontSize: 16,
        fontFamily: 'MulishRegular',
        marginRight: 6
    }
});

export default styles;