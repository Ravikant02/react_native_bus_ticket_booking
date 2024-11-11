import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

export const FormTextInput = ({ label, placeHolder }: any) => {
    return (
        <View style={styles.formViewStyle}>
            <View style={{flex:9}}>
                <Text style={styles.labelTextStyle}>{label}</Text>
                <TextInput placeholder={placeHolder}
                    style={styles.textInputStyle} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    formViewStyle: {
        borderRadius: 10,
        padding: 10,
        marginRight: 16,
        marginLeft:16,
        marginTop: 16,
        backgroundColor: 'white',
        flexDirection:'row'
    },
    labelTextStyle: {
        fontSize: 12
    },
    textInputStyle: {
        marginTop: 5,
    }
})