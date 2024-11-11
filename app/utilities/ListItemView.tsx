import { Image, StyleSheet, Platform, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign, EvilIcons } from '@expo/vector-icons';

export const ListItemView = ({ title, onPress, leftIconName, rightIconName="right", isBottomViewVisible=true}: any) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.listItemViewStyle}>
                    <AntDesign name={leftIconName} size={22} style={{flex:1.2}}/>
                    <Text style={{flex:8.3, fontSize:16}}>{title}</Text>
                    <AntDesign name={rightIconName} size={20} style={{flex:0.5}}/>
                </View>
            </TouchableOpacity>
            <View style={{backgroundColor:'grey', height:1, display: isBottomViewVisible? undefined: 'none'}}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    listItemViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:15
    }
})