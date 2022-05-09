import React from 'react';
//import { useNavigation } from '@react-navigation/native';
import {View, StyleSheet, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Text, TouchableRipple,Card} from 'react-native-paper';
import { IssueDetailsName } from './IssueDetails';
export const SliderComponentName = "Slider Dashboard";

export const SliderComponent = () => {
  // const navigation = useNavigation();

  // const NavigateToIssueDetails=()=>{
  //     navigation.navigate(IssueDetailsName);
  // }

  return( <ScrollView nestedScrollEnabled = {true}>
        <View>
          <TouchableOpacity>
          <Card style={styles.cardCover} >
              <View >
                <Text style={styles.title}>Garbage Collection</Text>
                <Text style={styles.subtitle}>12th Jan 2022</Text>
              </View>
          <Card.Cover source={ require('../assets/images/Others/air-pollution.png') } style={styles.imagess} />
          
          <Text ellipsizeMode='tail' numberOfLines={4} style={{padding:6,margin:0}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Text>

            <Card.Actions>
              <View style={ styles.buttonBar }>
                <TouchableRipple style={ styles.button } onPress={NavigateToIssueDetails}>
                  <Text style={ styles.buttonText }>
                    View Details
                  </Text>
               </TouchableRipple>
              </View>
            </Card.Actions>

          </Card>
        </TouchableOpacity>
        </View>
        </ScrollView>
  )
}

const styles = StyleSheet.create({

      cardCover: {
        height: 280,
        padding: 5,
        borderRadius:10,
      },
      buttonText: {
        fontSize: 12,
        textAlign:'center',
      },
    
      button: {
        padding: 5,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderWidth: 0.8,
        borderColor: 'dodgerblue',
        borderRadius: 50,
      },
      buttonBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      description: {
        flexShrink:1,
        textAlign: 'justify',
        marginTop:5,
        width:'100%',
      },
  
      imagess: {
        height: 80,
        marginVertical: 6,
        borderRadius: 10,
        width: '100%',
        marginTop:10
      },
      header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      
      title:{ 
        marginLeft:10,
        fontSize:14,
        marginTop:10,
        fontWeight:'bold'
      },
    
      subtitle:{ 
        fontSize:12,
        color:"#777",
        marginTop:5,
        marginLeft:10,
       },
});

