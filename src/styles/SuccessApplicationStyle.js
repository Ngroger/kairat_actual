import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        zIndex: 100000,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: '70%',
        backgroundColor: '#FFF',
        borderRadius: 12,
        padding: 12,
        position: 'relative', // Make the container relative for absolute positioning of closeButton
    },
    closeButton: {
        width: 24,
        height: 24,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    title: {
        textAlign: 'center',
        fontFamily: 'MulishBold',
        letterSpacing: 0.6,
        fontSize: 20
    },
    subtitle: {
        textAlign: 'center',
        fontFamily: 'MulishRegular',
        letterSpacing: 0.6,
        fontSize: 16,
        marginTop: 12,
        marginBottom: 32
    }
});

export default styles;

