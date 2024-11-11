import { StyleSheet, View, ScrollView , Button, Text, Pressable, Alert} from 'react-native';
import React, {useState} from 'react';
import { Colors } from '@/constants/Colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FormTextInput } from '../utilities/FormTextInput';
import { FormDateInput } from '../utilities/FormDateInput';
import { ButtonPrimary } from '../utilities/ButtonPrimary';

export default function HomeScreen() {

  const [isToggleEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaProvider>
      <ScrollView 
        style={{ backgroundColor: 'white'}} 
        showsVerticalScrollIndicator={false} 
        bounces={false}>
        <View style={styles.topViewStyle}>
          <View style={styles.secoundTopViewStyle}>
            <View style={styles.switchViewStyle}>
                <View style={isToggleEnabled? styles.toggleViewEnableStyle : styles.toggleViewDisableStyle}>
                  <Button
                    onPress={toggleSwitch} 
                    title='One Way'
                    color={isToggleEnabled? 'white': 'black'} />
                </View>
                <View style={isToggleEnabled? styles.toggleViewDisableStyle : styles.toggleViewEnableStyle}>
                  <Button
                    onPress={toggleSwitch} 
                    title='Round Trip' 
                    color={isToggleEnabled? 'black': 'white'}/>
                </View>
            </View>
          </View>
        </View>
        <View style={styles.bottomViewStyle}>
          <View style={styles.formViewStyle}>
            <FormTextInput placeHolder={'Select from city'} label="From"/>
            <FormTextInput placeHolder={'Select to city'} label="To"/>
            <FormDateInput placeHolder={'Date'} label="Departure Date" />
            <FormDateInput placeHolder={'Date'} label="Return Date" isVisible={!isToggleEnabled} />
            <View style={styles.quickDateParentViewStyle}>
              <View style={styles.quickDateViewStyle}>
                <Text style={styles.quickDateTextStyle}>Today</Text>
              </View>
              <View style={styles.quickDateViewStyle}>
                <Text style={styles.quickDateTextStyle}>Tomorrow</Text>
              </View>
            </View>
            <ButtonPrimary text="Search" onPress={() => {
              Alert.alert('Search button clicked')
            }} />
          </View>
        </View>
        <View style={{marginHorizontal:20, marginTop:20}}>
          <Text>Your Recent Searches</Text>
          <View style={styles.quickDateParentViewStyle}>
            <View style={styles.quickDateViewStyle}>
              <Text style={styles.quickDateTextStyle}>Pune - Hyderabad</Text>
            </View>
            <View style={styles.quickDateViewStyle}>
              <Text style={styles.quickDateTextStyle}>Hyderabad - Pune</Text>
            </View>
          </View>
        </View>
        <Text style={{marginHorizontal:20, marginTop:20, textAlign:'center'}}>Our Populat Destinations</Text>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  topViewStyle: {
    height: 200,
    backgroundColor: Colors.darkorange,
    justifyContent: 'flex-end',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  secoundTopViewStyle: {
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: Colors.lightGrey,
    height: 70,
    borderTopLeftRadius: 20,
    borderTopEndRadius: 20,
    justifyContent: 'center'
  },
  bottomViewStyle: {
    backgroundColor: 'white'
  },
  formViewStyle: {
    marginHorizontal:30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: 'gainsboro',
    flex: 1
  },
  switchViewStyle:{
    backgroundColor: Colors.lightGrey,
    borderRadius:20,
    height: 40,
    borderColor: 'black',
    borderWidth:1,
    marginTop:20,
    marginLeft:50,
    marginRight:50,
    flexDirection: 'row',
    alignContent:'center',
    justifyContent:'center'
  },
  toggleViewEnableStyle:{
    flex: 1,
    alignContent:'center',
    justifyContent:'center',
    backgroundColor:'black',
    borderRadius:20
  },
  toggleViewDisableStyle:{
    flex: 1,
    alignContent:'center',
    justifyContent:'center',
    backgroundColor:Colors.lightGrey,
    borderRadius:20
  },
  quickDateParentViewStyle:{
    flexDirection:'row', 
    marginLeft:16, 
    marginRight:16,
    marginTop:10
  },
  quickDateViewStyle:{
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    height:35,
    borderWidth:1,
    borderRadius:20,
    borderColor:'black',
    margin:10
  },
  quickDateTextStyle:{
    textAlign:'center'
  },
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
});