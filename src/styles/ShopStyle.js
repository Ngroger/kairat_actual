import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#FECC01',
        width: '100%',
        paddingVertical: 12,
        marginTop: 24
    },
    titleContainer: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    title: {
        fontSize: 28,
        fontFamily: 'MulishBlack'
    },
    card: {
        width: 260,
        margin: 20,
        backgroundColor: '#FFF',
        borderRadius: 12
    },
    cardImage: {
        width: 180,
        height: 180,
        backgroundColor: '#BDBDBD',
    },
    titleCard: {
        fontFamily: 'MulishBold',
        fontSize: 16
    },
    cost: {
        fontFamily: 'MulishRegular',
        fontSize: 16
    },
    addCart: {
        backgroundColor: '#FECC01',
        paddingHorizontal: 14,
        paddingVertical: 7.5,
        borderRadius: 6
    },
    addCartText: {
        fontFamily: 'MulishBold',
        fontSize: 16
    }
});

export default styles;