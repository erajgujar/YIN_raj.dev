import React from 'react';
import { View, StyleSheet,ScrollView,Text } from 'react-native';
import { Calender } from './Calender';
import { ImageForumCard } from './ImageForumCard';
import { MeetingUpdates } from './MeetingUpdates';
import Members from './Members';
// import { SliderComponent } from './SliderComponent';
import Updates from './Updates';

export const ForumDashboardName = "Forum Dashboard";
export const ForumDashboard = () => {
  return (
    <ScrollView>
      <View>

      <View style={{ flex:1 }}>
        <ImageForumCard />
      </View> 

      <View style={{ flexDirection:'row' }}> 
      <View style={ styles.container_issue }>
          <Text style={ styles.issueText }>Live Issues:</Text>
          {/* <SliderComponent /> */}
        </View>

      <View style={styles.meeting}>
        <Text style={ styles.issueText }>Meeting Updates:</Text>
        <MeetingUpdates />
      </View>
      </View>
      
      <View style={{ flexDirection:'row' }}>
        <View style={ styles.update }>
          <Text style={ styles.issueText }>Forum Updates:</Text>
          <Updates />
        </View>

        <View style={styles.member}>
            <Text style={styles.forumrep}>Forum Representative(3)</Text>
            <Members />
        </View>
      </View>

      <View>
        <Calender />
      </View>



      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container_issue: {
    paddingTop:100,
    backgroundColor: 'transparent',
    paddingLeft:20,
    paddingBottom:10,
    flex:1
  },
  issueText : {
    fontSize:14,
    marginLeft:10,
    marginBottom:10,
    fontWeight:"700",
  },
  meeting:{
    paddingTop:100,
    backgroundColor: 'transparent',
    paddingRight:20,
    paddingLeft:10,
    paddingBottom:20,
    flex:1,
    textAlign:'right'
  },
  update:{
    paddingLeft:20,
    paddingRight:10,
    paddingBottom:20,
    flex:1
  },
  member:{
    flex:1,
    paddingRight:20,
    paddingBottom:20
  },
  forumrep:{
    fontSize:14,
    marginBottom:10,
    fontWeight:'700'
  }
});
