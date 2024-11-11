import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { EvilIcons } from '@expo/vector-icons';
import { ListItemView } from '../utilities/ListItemView';
import { NavBar } from '../utilities/NavBar';

export default function Profile() {
    return (
        <SafeAreaProvider>
            <ScrollView style={styles.scrollViewStyle} showsVerticalScrollIndicator={false}>
                <View style={styles.userNameViewStyle}>
                    <EvilIcons name='user' size={60}/>
                    <Text style={styles.userNameTextStyle}>Hi Guest</Text>
                </View>
                <View style={styles.listViewStyle}>
                    <ListItemView title="My booking" leftIconName="book" onPress={() => {}} />
                    <ListItemView title="Track My Bus" leftIconName="enviromento" onPress={() => {}} />
                    <ListItemView title="Cancellation" leftIconName="closecircleo" onPress={() => {}} />
                    <ListItemView title="Re-Schedule" leftIconName="calendar" onPress={() => {}} />
                    <ListItemView title="Help & FAQ's" leftIconName="customerservice" onPress={() => {}} />
                    <ListItemView title="Feedback" leftIconName="form" onPress={() => {}} />
                    <ListItemView title="Blogs" leftIconName="filetext1" onPress={() => {}} />
                    <ListItemView title="About Us" leftIconName="infocirlceo" onPress={() => {}} isBottomViewVisible={false}/>
                </View>
            </ScrollView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    scrollViewStyle:{
        backgroundColor:'white', 
        paddingHorizontal:16
    },
    userNameViewStyle:{
        flexDirection:'row', 
        marginVertical:20, 
        alignItems:'center'
    },
    userNameTextStyle:{
        fontSize:16, 
        marginLeft:8
    },
    listViewStyle:{
        backgroundColor:Colors.lightGrey,
        borderRadius:20,
        padding:20
    }
})