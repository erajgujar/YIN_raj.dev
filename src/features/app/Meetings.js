import {
  View, Text, Image, StyleSheet, Dimensions, ScrollView, ActivityIndicator,
  Modal, Pressable, TouchableOpacity, TextInput
} from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
const { width, height } = Dimensions.get('window')
const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;


const Meetings = () => {
  const [meetingData, setMeetingData] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [modVisible, setModVisible] = useState(false)

  const [modalVisible, setModalVisible] = useState(false);
  const [meeting_images, setMeetingImages] = useState("https://foxberry-images.s3.amazonaws.com/yin/user/b9e48060-6eec-11ec-8654-8dcc468c140a_checkBook.jpeg")
  const [meeting_types, setMeetingTypes] = useState("LIVE")
  const [issue_id, setIssueId] = useState("ISSUECOL_120223_RIVERCLEANINGDATA")
  const [forum_id, setForumId] = useState("FORUM_COL0001234_BOYS")
  const [activity_id, setActivityId] = useState("NO")
  const [meeting_title, setMeetingTitle] = useState('')
  const [meeting_description, setMeetingDescription] = useState('')
  const [meeting_full_description, setMeetingFullDescription] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.')
  const [status, setStatus] = useState(true)
  const [meeting_member_details, setMeetingMemberDetails] = useState([{ "designation": "Director", "yin_id": "MHPC000012" }, { "designation": "member", "yin_id": "MHPC0000123" }, { "designation": "member", "yin_id": "MHPC00001234" }])
  const [is_published, setIsPublished] = useState(true)
  const [meeting_via, setMeetingVia] = useState("Zoom link")
  const [meeting_link, setMeetingLink] = useState("http://localhost:4005/v1/meeting/create")
  const [meeting_date, setMeetingDate] = useState('')
  const [meeting_start_time, setMeetingStartTime] = useState('')
  const [meeting_end_time, setMeetingEndTime] = useState("13:20PM")
  const [meeting_created_by, setMeetingCreatedBy] = ("Raj Gujar")

  const getMeetingData = async () => {
    setLoading(true)
    const response = await axios.get('https://stg-yin-talk-api.foxberry.link/v1/meeting/all/list')
    console.log(response.data)
    setMeetingData(response.data)
    setLoading(false)
  }

  useEffect(() => {
    getMeetingData()
  }, [])

  const scheduleMeeting = () => {
    axios.post("https://stg-yin-talk-api.foxberry.link/v1/meeting/create", {
      meeting_images, meeting_types, issue_id, forum_id, activity_id, meeting_title, meeting_description, meeting_full_description,
      status, meeting_member_details, is_published, meeting_via, meeting_link, meeting_date, meeting_start_time,
      meeting_end_time, meeting_created_by
    }).then(res => console.log("Posting Data ::: 😎", res)).catch(err => console.log(err))
  }
  return (
    <ScrollView>
      <View>
        <View style={styles.container_wrap}>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Image style={styles.menu_img} source={require('../assets/images/Others/menu-icon.png')} />
            <Text style={styles.header_title}>Meetings</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginLeft: 'auto' }}>
            <Pressable onPress={() => setModalVisible(true)}>
              <Text style={styles.meeting}> Schedule Meeting + </Text>
            </Pressable>

            <Pressable onPress={() => setModVisible(true)}>
            <Image style={styles.calender_img} source={require('../assets/images/Others/calender.png')} />
            </Pressable>
          </View>
        </View>
        <View>
          <Image style={styles.pollution_img} source={require('../assets/images/Others/air-pollution.png')} />
        </View>


        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{ width: W - 50 }}>
                  <Text style={{ textAlign: 'center', color: 'black', marginBottom: 30, fontSize: 20 }}>Schedule Meeting</Text>
                  <Image style={styles.close_img2} source={require('../assets/images/Others/close.png')}/>
                  <TextInput style={styles.input_title} placeholder="Meeting Title" onChangeText={newTitle => setMeetingTitle(newTitle)} />
                  <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <Image style={styles.icon_des} source={require('../assets/images/Others/message_des.png')} />
                    <TextInput style={styles.input_des} placeholder="Write Description" onChangeText={newDescription => setMeetingDescription(newDescription)} />
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 5 }}>
                    <Image style={styles.icon_img} source={require('../assets/images/Others/person.png')} />
                    <TextInput style={styles.input_field_member} placeholder="Add Members" />
                    <Image style={styles.dropdown_img} source={require('../assets/images/Others/expand_more.png')} />
                  </View>
                  <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <TextInput style={styles.input_field2} placeholder="Select Date" onChangeText={activityTags => setMeetingDate(activityTags)} />
                    <Image style={styles.calender_icon} source={require('../assets/images/Others/calender.png')} />
                  </View>
                  <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 5 }}>
                    <TextInput style={styles.input_field2} placeholder="Select Time" onChangeText={startTime => setMeetingStartTime(startTime)} />
                    <Image style={styles.time_icon} source={require('../assets/images/Others/time.png')} />
                  </View>
                </View>

                <Pressable
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <View style={{ flexDirection: 'row', width: '100%', marginTop: 50 }}>

                    <Text onPress={scheduleMeeting} style={styles.schedule}>Schedule</Text>

                    <Text style={styles.cancel}>Cancel</Text>
                  </View>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>



        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModVisible(!modVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View>
                  <Text style={{ textAlign: 'center', color: 'black', marginBottom: 30, fontSize: 20 }} >Meeting History</Text>
                  <Image style={styles.close_img} source={require('../assets/images/Others/close.png')}/>
                  <View style={{ flexDirection: 'row', alignSelf: 'center', width:'100%' }}>
                    <TextInput style={styles.input_field2} placeholder="Select From Date" onChangeText={activityTags => setMeetingDate(activityTags)} />
                    <Image style={styles.calender_icon} source={require('../assets/images/Others/calender.png')} />
                  </View>
                  <View style={{ flexDirection: 'row', alignSelf: 'center', width:'100%', marginTop:9 }}>
                    <TextInput style={styles.input_field2} placeholder="Select To Date" onChangeText={activityTags => setMeetingDate(activityTags)} />
                    <Image style={styles.calender_icon} source={require('../assets/images/Others/calender.png')} />
                  </View>
                </View>

                <Pressable
                  onPress={() => setModVisible(!modVisible)}
                >
                  <View style={{ flexDirection: 'row', width: '100%', marginTop: 50 }}>

                    <Text style={styles.search}>Search</Text>

                    <Text style={styles.cancel}>Cancel</Text>
                  </View>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>

        {
          isLoading ? <ActivityIndicator size="large" color="green" /> : meetingData.map((value, i) => {
            return (<View key={String(i)} style={styles.container_meeting}>
              <View style={{ marginRight: 25 }}>
                <Text style={styles.activity}>1</Text>
              </View>
              <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '80%' }}>
                  <View>
                    <Text style={styles.meeting_title}>{value.meeting_title}</Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.meeting_date_time}>{value.meeting_date} | </Text>
                    <Text style={styles.meeting_date_time}>{value.meeting_start_time}</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', width: '85%' }}>
                  <Text style={styles.meeting_description}>{value.meeting_description}</Text>
                </View>
                <View style={styles.view_details}>
                  <Text style={styles.view_details_text}>View Details</Text>
                  <Image style={styles.visibility_img} source={require('../assets/images/Others/visibility.png')} />
                </View>
              </View>
            </View>

            )
          })
        }


      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container_wrap: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#1fa6ea',
    paddingTop: 25,
    paddingBottom: 17,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    position: 'absolute',
    zIndex: 1
  },
  pollution_img: {
    position: 'relative',
    zIndex: 0,
    width: '100%',
    marginTop: 25
  },
  menu_img: {
    width: 15,
    height: 17,
    paddingLeft: 15,
    paddingRight: 15,
    tintColor: 'white',
    alignSelf: 'center'
  },
  calender_img: {
    width: 15,
    height: 18,
    alignSelf: 'center',
    tintColor: 'white',
    marginRight: 10,
    marginLeft: 11,
    width: 15,
    height: 17
  },
  header_title: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 17
  },
  meeting: {
    color: 'white',
    borderRadius: 15,
    borderColor: 'white',
    borderWidth: 1,
    padding: 4
  },
  container_meeting: {
    flexDirection: 'row',
    width: 'auto',
    padding: 12,
    margin: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#c8cacc',
    position: 'relative',
    zIndex: 1,
    top: -60,
    backgroundColor: '#ffff'

  },
  activity: {
    marginTop: 20,
    borderRadius: 3,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 11,
    paddingRight: 11,
    backgroundColor: '#1fa6ea',
    color: 'white'


  },
  meeting_title: {
    fontSize: 15,
    width: 110,
    color: 'black',
    alignSelf: 'center'

  },
  meeting_date_time: {
    fontSize: 12,
    color: 'black',

  },
  view_details_text: {
    textAlign: 'right',
    paddingRight: 3,
    paddingLeft: 2,
    color: 'white'
  },
  meeting_description: {
    textAlign: 'justify',
    fontSize: 12,
    paddingTop: 10,
    paddingBottom: 10,
    width: '96%'
  },
  view_details: {
    flexDirection: 'row',
    padding: 3,
    marginRight: 55,
    alignItems: 'center',
    backgroundColor: '#1fa6ea',
    borderRadius: 25,
    width: 115,
    color: 'white',
    alignSelf: 'flex-end',
    marginTop: 10
  },
  visibility_img: {
    width: 20,
    height: 12,
    alignSelf: 'center',
    tintColor: 'white'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15
  },
  modalView: {
    width: '90%',
    margin: 10,
    borderwidth: 3,
    borderColor:'#626364',
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  input_title: {
    width: '90%',
    borderRadius: 25,
    borderColor: '#d9dcde',
    borderWidth: 2,
    padding: 10,
    marginBottom: 5,
    alignSelf: 'center'
  },
  input_field: {
    width: '90%',
    borderRadius: 25,
    borderColor: '#d9dcde',
    borderWidth: 1,
    padding: 4,
    marginBottom: 4,
    alignSelf: 'center',
    justifyContent: "center",
    color: '#8a8c8d'
  },
  input_des: {
    width: '90%',
    borderRadius: 25,
    borderColor: '#d9dcde',
    borderWidth: 2,
    padding: 20,
    paddingTop: 0,
    paddingLeft: 60,
    height: 100,
    alignSelf: 'center',
    marginBottom: 5,
    color: '#8a8c8d'

  },
  icon_des: {
    width: 25,
    height: 20,
    marginTop: 33,
    marginLeft: 20,
    position: 'absolute',
    zIndex: 1,
    tintColor: 'gray'
  },
  schedule: {
    backgroundColor: '#0084ff',
    marginRight: 10,
    width: 90,
    textAlign: 'center',
    borderRadius: 20,
    padding: 4,
    color: '#ffff'

  },
  search: {
    backgroundColor: '#0084ff',
    marginRight: 10,
    width: 90,
    textAlign: 'center',
    borderRadius: 20,
    padding: 4,
    color: '#ffff'

  },
  cancel: {
    backgroundColor: '#0084ff',
    width: 90,
    textAlign: 'center',
    borderRadius: 20,
    padding: 4,
    color: '#ffff'
  },
  icon_img: {
    width: 25,
    height: 25,
    alignSelf: 'center',
    tintColor: 'gray',
    marginLeft: 10,
    marginTop: 2,
    position: 'absolute'

  },
  input_field_member: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 25,
    borderColor: '#d9dcde',
    borderWidth: 1,
    height: 45,
    padding: 4,
    paddingLeft: 50,
    position: 'relative'

  },
  input_field2: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 25,
    borderColor: '#d9dcde',
    borderWidth: 1,
    padding: 4,
    height: 45,
    paddingLeft: 10,
    position: 'relative',
    color: '#8a8c8d'

  },
  dropdown_img: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    tintColor: '#0f78f8',
    marginLeft: 260,
    marginTop: 2,
    position: 'absolute'
  },
  calender_icon: {
    width: 20,
    height: 25,
    alignSelf: 'center',
    tintColor: '#0f78f8',
    marginLeft: 240,
    marginTop: 2,
    position: 'absolute'
  },
  time_icon: {
    width: 20,
    height: 25,
    alignSelf: 'center',
    tintColor: '#0f78f8',
    marginLeft: 240,
    marginTop: 2,
    position: 'absolute'
  },
  close_img:{
    width:25,
    height:25,
    tintColor:'#1fa6ea',
    position:'absolute',
    left:280,
    top:-10
  },
  close_img2:{
    width:25,
    height:25,
    tintColor:'#1fa6ea',
    position:'absolute',
    left:300,
    top:-10
  }
})
export default Meetings