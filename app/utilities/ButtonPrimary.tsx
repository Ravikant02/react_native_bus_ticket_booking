import { Pressable, StyleSheet, Text } from "react-native";

export const ButtonPrimary = ({ text, onPress }: any) => {
    return (
    <Pressable onPress={onPress} style={styles.buttonStyle}>
        <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        //paddingHorizontal: 32,
        borderRadius: 25,
        elevation: 3,
        backgroundColor: 'black',
        marginHorizontal:16,
        marginVertical:20
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white'
    },
})