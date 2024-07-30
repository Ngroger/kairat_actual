import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: '#FFF',
        width: '100%',
        paddingHorizontal: 18,
        paddingVertical: 12,
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        position: 'absolute',
        zIndex: 1000
    },
    title: {
        fontFamily: 'MulishExtraBold',
        letterSpacing: 0.5,
        fontSize: 20
    },
    removeFiltersButton: {
        fontFamily: 'MulishRegular',
        fontSize: 16,
        color: '#777777',
        borderBottomWidth: 1,
        borderBottomColor: '#777777',
        borderStyle: 'dashed',
        paddingBottom: 1
    },
    closeButton: {
        width: 24,
        height: 24,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 16
    },
    filterHeader: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        marginTop: 24
    },
    filterHeaderText: {
        fontSize: 20,
        letterSpacing: 1,
        color: '#231F20',
        fontFamily: 'MulishBold',
        marginLeft: 6
    },
    InputContainer: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        marginTop: 16
    },
    field: {
        backgroundColor: '#F3F3F3',
        width: 160,
        borderRadius: 6,
        padding: 12
    },
    input: {
        width: 100,
        fontSize: 12,
        fontFamily: 'MulishRegular',
        color: '#777777',
        letterSpacing: 1
    },
    filterSelectorContainer: {
        width: '100%',
        paddingVertical: 16,
        flexDirection: 'row',
        display: 'flex'
    },
    activefilterSelect: {
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#000',
        paddingHorizontal: 6,
        paddingVertical: 4,
        backgroundColor: '#FECC01',
        justifyContent: 'center',
        alignItems: 'center'
    },
    filterSelect: {
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#000',
        paddingHorizontal: 6,
        paddingVertical: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    filterSelectText: {
        fontSize: 16,
        fontFamily: 'MulishBold',
        letterSpacing: 0.5
    },
    acceptFilters: {
        width: '100%',
        backgroundColor: '#FECC01',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 6,
        marginTop: 24,
        marginBottom: 100
    },
    acceptFiltersText: {
        fontFamily: 'MulishBold',
        letterSpacing: 1,
        fontSize: 16
    },
    accordion: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        marginTop: 32
    },
    accordionItemsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        marginTop: 6
    },
    activeCheckbox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 6,
        backgroundColor: '#FECC01'
    },
    checkbox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 6
    },
    titleAccordion: {
        fontFamily: 'MulishExtraBold',
        letterSpacing: 1,
        fontSize: 20,
        marginLeft: 10
    },
    accordionItem: {
        fontFamily: 'MulishMedium',
        letterSpacing: 0.5,
        fontSize: 20,
        marginLeft: 10
    },
    openAccordion: {
        marginLeft: 42
    },
    countOfItems: {
        fontSize: 16,
        color: '#535353',
        fontFamily: 'MulishRegular',
        marginLeft: 6
    }
});

export default styles;