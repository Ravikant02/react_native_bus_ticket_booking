import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';

export const NavBar = ({ title }: any) => {
    return(
        <View style={styles.topViewStype}>
            <Text style={styles.titleTextStyle}>{title}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    topViewStype:{
        backgroundColor: Colors.darkorange,
        height:100,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        justifyContent:'flex-end'
    },
    titleTextStyle:{
        textAlign:'center',
        justifyContent:'center',
        fontSize:18,
        marginBottom:15
    }
})