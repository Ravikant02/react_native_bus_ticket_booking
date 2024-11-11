import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

export const FormDateInput = ({ label, placeHolder, isVisible=true }: any) => {
    return (
        <View style={{...styles.formViewStyle, display: isVisible? undefined : 'none'}}>
            <View style={{flex:9}}>
                <Text style={styles.labelTextStyle}>{label}</Text>
                <TextInput placeholder={placeHolder}
                    style={styles.textInputStyle} />
            </View>
            <Icon name="calendar" size={28} color={'black'} style={{flex:1, justifyContent:'center'}}/>
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
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center'
        //display: isVisible? 'none': undefined
    },
    labelTextStyle: {
        fontSize: 12
    },
    textInputStyle: {
        marginTop: 5,
    }
})