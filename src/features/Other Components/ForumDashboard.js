import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, ActivityIndicator, Text, Dimensions, Image, TextInput } from 'react-native';
import { Calender } from './Calender';
import { ImageForumCard } from './ImageForumCard';
import { MeetingUpdates } from './MeetingUpdates';
import Members from './Members';
import axios from 'axios';
import Events from '../Other Components/Events'
// import { SliderComponent } from './SliderComponent';
import Updates from './Updates';
import LiveIssuesDashboard from './LiveIssuesDashboard';
export const ForumDashboardName = "Forum Dashboard";
const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;
const { width, height } = Dimensions.get('window')

export const ForumDashboard = () => {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)

  const getFotumType = async () => {
    setLoading(true)
    const response = await axios.get('https://stg-yin-talk-api.foxberry.link/v1/forum/all/forum/list?display_name=BOYS FORUM')
    setData(response.data)
    setLoading(false)
  }

  useEffect(() => {
    getFotumType()
  }, [])
  return (
    <ScrollView>
      <View>
        <View style={styles.issue_wrap}>
          <View style={{
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexDirection: 'row'
          }}>
            <Image style={styles.menu_icon_img} source={require('../assets/images/Others/menu-icon.png')} />
            <Text style={{
              textAlign: 'left',
              fontSize: 18,
              color: '#ffff',
              alignSelf: 'flex-start',
              width: 'auto',
              marginRight: 'auto'
            }}>Hi, Forum Director</Text>

          </View>

          <View style={{
            width: '95%',
            alignSelf: 'flex-start',
            flexDirection: 'row',
            marginTop: 5,
            marginBottom: 155

          }}>
            <TextInput style={styles.input_issue} placeholder='Search' />
            <Image style={styles.search_img} source={require('../assets/images/Others/search.png')} />
          </View>

        </View>
        <View style={{ position: 'relative', top: 110 }}>
          <Text style={{ marginLeft: 15, fontSize: 15, color: 'white' }}>Active Forums</Text>
        </View>


        {
          isLoading ? <ActivityIndicator size="large" color='green' /> : data.map((value, i) => {
            return (<View key={String(i)} style={{
              position: 'relative',
              zIndex: 1,
              top: 125
            }}>
              <Image style={{
                width: '95%',
                height: 160,
                marginTop: 1,
                alignSelf: 'center',
                borderRadius: 20,
                marginBottom: 40
              }} source={{uri: value.forum_images[0]}} />
              <Text style={{
                marginLeft: 20,
                backgroundColor: 'white',
                padding: 3,
                width: 'auto',
                color: 'black',
                position: 'absolute',
                borderRadius: 20,
                textAlign: 'center',
                fontSize: 10,
                marginTop: 10
              }}> {value.diaplay_name} </Text>
              <Text style={{
                marginLeft: 240,
                backgroundColor: '#515254',
                padding: 3,
                width: 'auto',
                color: 'white',
                position: 'absolute',
                borderRadius: 20,
                textAlign: 'center',
                fontSize: 10,
                marginTop: 130
              }}> {value.forum_created_date} </Text>
            </View>

            )
          })
        }


        {/* <View style={{ flex: 1 }}>
          <ImageForumCard />
        </View> */}

        <View style={{ flexDirection: 'row' }}>
          <View style={styles.container_issue}>
            <Text style={styles.issueText}>Live Issues:</Text>
            {/* <SliderComponent /> */}
            <LiveIssuesDashboard />
          </View>


          <View style={styles.meeting}>
            <Text style={styles.issueText}>Meeting Updates:</Text>
            <MeetingUpdates />
          </View>
        </View>

        <View>
          <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', marginLeft: 15, marginBottom: 10 }}>Ongoing Events</Text>
        </View>
        <Events />

        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <View style={styles.update}>
            <Text style={styles.issueText}>Forum Updates:</Text>
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
    paddingTop: 100,
    backgroundColor: 'transparent',
    paddingLeft: 20,
    paddingBottom: 10,
    flex: 1
  },
  issueText: {
    fontSize: 14,
    marginLeft: 10,
    marginBottom: 10,
    fontWeight: "700",
  },
  meeting: {
    paddingTop: 100,
    backgroundColor: 'transparent',
    paddingRight: 20,
    paddingLeft: 10,
    paddingBottom: 20,
    flex: 1,
    textAlign: 'right'
  },
  update: {
    paddingLeft: 20,
    paddingRight: 10,
    paddingBottom: 20,
    flex: 1
  },
  member: {
    flex: 1,
    paddingRight: 20,
    paddingBottom: 20
  },
  forumrep: {
    fontSize: 14,
    marginBottom: 10,
    fontWeight: '700'
  },
  issue_wrap: {
    width: '100%',
    backgroundColor: '#4083f6',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    position: 'absolute',
    height: 190,
    zIndex: 0,
    padding: 7,
    paddingTop: 10,
    paddingBottom: 5

  },
  menu_icon_img: {
    height: 26,
    width: 32,
    marginRight: 7,
    alignSelf: 'flex-start',
    tintColor: '#ffff'
  },
  input_issue: {
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 20,
    width: W - 30,
    height: 40,
    borderColor: '#ffff',
    alignSelf: 'center',
    color: 'gray',
    backgroundColor: '#ffff',
    fontSize: 15,
    marginBottom: 5

  },
  search_img: {
    width: 20,
    height: 20,
    marginLeft: -50,
    marginTop: 21
  },

});
