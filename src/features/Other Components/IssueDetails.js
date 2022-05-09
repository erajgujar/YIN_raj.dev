import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import DashedLineWithNumber from './DashedWithNumber';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
//export const IssueDetailsName = "Issue Details";
export const IssueDetails=()=> {

  return (
    <View styles={styles.cover}>
    <ScrollView>
      <View >
          <Image style={{
              width:'100%',
            height: height * 0.25,
            position: 'relative',
            zIndex: 0
          }} source={require('../assets/images/Others/air-pollution.png')} />
      </View>

      <View style={styles.air_pollution}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 'auto' }}>
          <Text style={styles.issueHeader}>Air Pollution</Text>
          <Text style={styles.dateText}>1st Jan to 10th Jan 2022</Text>
        </View>
        <Text style={styles.shortText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac ipsum et metus vulputate posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac ipsum et metus vulputate posuere. Fusce lacinia enim et tellus volutpat consectetur.</Text>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 5,
          height: 'auto',
          paddingBottom: 5
        }}>
          <Text style={{ fontSize:14, color: '#000', paddingRight:4 }}>Members:</Text>
          <Text style={{ fontSize: 12, paddingRight: 4 }}>Total: 15 Members</Text>
          <Text style={{ fontSize: 12, color: '#000', paddingRight: 4 }}>|</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Image style={{ height: 12, width:12, marginRight: 3, borderRadius: 3 }} source={require('../assets/images/Others/chat-profile-2.jpg')} />
            <Image style={{ height: 12, width: 12, marginRight: 3, borderRadius: 3 }} source={require('../assets/images/Others/chat-profile-4.jpg')} />
          </View>

          <Text style={{ fontSize: 12 }}>+12 Members</Text>
        </View>

        <View style={{
          alignItems: 'center',
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <View>
            <Text style={{
              borderRadius: 25,
              backgroundColor: '#0cb0e7',
              color: '#fff',
              fontSize: 12,
              paddingLeft: 12,
              paddingRight:12,
              paddingTop:4,
              paddingBottom: 6
            }}>Add Member +</Text>
          </View>
          
          <View style={{ flexDirection: 'row', borderRadius: 25,
              color: '#fff',
              paddingLeft: 12,
              paddingRight: 22,
              paddingTop: 4,
              paddingBottom: 6,
              fontSize: 12,
              alignSelf: 'center',
              backgroundColor: '#0cb0e7' }}>
            <Text style={{color: '#fff',}}>chat</Text>
            <Image style={{
              width: 12,
              position: 'relative',
              left: 10,
              top: 6,
              tintColor: '#fff',
              height: 12
            }} source={require('../assets/images/Others/chat-forum.png')} />

           
          </View>
        </View>

      </View>

      <View style={{
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Text style={{ color: 'black', fontSize:14 }}>List of Activities</Text>
        <Text style={{
          backgroundColor: '#0cb0e7',
          borderRadius: 25,
          color: 'white',
          padding:8,
        }}>Add Activity +</Text>
      </View>

{/* 
        <View style={styles.activity_card}>

          <View style={{
            padding: 10,
            borderwidth: 2,
            borderRadius: 20,
            backgroundColor: '#afcfed'

          }}>
            <View style={{ flexDirection: 'row', }}>
              <View style={{ flexDirection: 'row', marginBottom: 3 }}>
                <Text style={{ fontSize: 12, color: 'black', paddingRight: 3 }}>Activity Title</Text>
                <Text style={{ fontSize: 12, color: 'black', paddingRight: 3 }}>|</Text>
                <Text style={{ fontSize: 12 }}>5th Jan 2022</Text>
              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center'
              }}>
                <Image style={{width:12,height:12,marginRight: 10, alignSelf: 'center', tintColor: '#3297f5', }} source={require('../../../assets/images/chat_bubble.png')} />
                <Image style={{ width:12,height:12, marginRight: 10, alignSelf: 'center', tintColor: '#3297f5', }} source={require('../../../assets/images/edit.png')} />
                <Image style={{ width:12,height:12, alignSelf: 'center', tintColor: '#3297f5', }} source={require('../../../assets/images/delete.png')} />
              </View>
            </View>

            <Text style={{
              fontSize: 12,
              textAlign: 'justify',
              marginBottom: 5
            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac ipsum et metus vulputate posuere.</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 12, color: 'black', paddingRight: height * 0.003 }}>Activity Owners:</Text>
              <Text style={{ fontSize: 12 }}>Manisha Walimbe, Ashutosh Kulkarni</Text>
            </View>

            <View>

            </View>
          </View>
        </View>  */}

        
        <View style={{ flexDirection:'row',padding:10}}>
            <DashedLineWithNumber indexNumber="5" ></DashedLineWithNumber>
            <View style={styles.update}>
                <Text style={styles.date}>15th April 2022</Text>
                <Text ellipsizeMode='tail' numberOfLines={2} style={styles.text}>River activity of cleaning rivers</Text>
            </View>
        </View>
        

</ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  cover: {
    backgroundColor:'#fff',
    height: 240,
    padding: 5,
    borderRadius:20,
    flex:1,
  },
  air_pollution: {
    height: 'auto',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: 'black',
    margin: 10,
    padding:6,
    position: 'relative',
    top: -60
  },
  issueHeader:{
      fontWeight:'900',
    fontSize:14, 
    color: 'black', 
    paddingLeft: 5
  },
  dateText:{
    fontSize:12, 
    padding:5,
  },
  shortText:{
      fontSize:12,
      padding:5
  },
  activity_card: {
    flexDirection: 'row',
    width: '100%',
    height: 'auto',
    marginTop:20,
    padding:10

  },
  update:{
    flex:2.6,
    backgroundColor:'#c4f0ff',
    height: 80,
    borderRadius:10,
    marginTop:10
},
date:{
    fontWeight:"700",
    paddingLeft:4,
    paddingTop:6
},


})