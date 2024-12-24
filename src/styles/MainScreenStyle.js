import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderWidth: 1,
        borderColor: "#FFF",
        marginTop: 120
    },
    clearCookies: {
        backgroundColor: '#FFF500',
        position: 'absolute',
        zIndex: 100,
        left: 24,
        bottom: 80,
        padding: 12,
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 1,
        borderRadius: 12
    },
    clearCookiesText: {
        fontSize: 16,
        fontFamily: 'MulishBold'
    }
});

export default styles;