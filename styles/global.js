import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#000",
    },
    menu: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        fontFamily: "Kalam-Regular",
        color: '#f4952f',
        marginTop: 10
    },
    text: {
        fontSize: 20,
        color: '#f4952f',
    },
    touch: {
        padding: 10
    },
    button: {
        marginBottom: 30,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 60,
        paddingRight: 60,
        borderColor: '#f4952f',
        borderWidth: 1,
    }
});