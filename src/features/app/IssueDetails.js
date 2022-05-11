import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, ActivityIndicator, TextInput, Text, Image, Dimensions, StyleSheet, ScrollView, SafeAreaView, Alert, Modal, Pressable } from 'react-native';
const { width, height } = Dimensions.get('window');
const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;
export default function IssueDetails() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modVisible, setModVisible] = useState(false)

  const [profile_image, setProfileImage] = useState(["https://foxberry-images.s3.amazonaws.com/yin/users/b5d4c940-4362-11ec-8d3f-8fa32b52bc04_blob.blob"])
  const [yin_id, setYinId] = useState('')
  // const [first_name, setFirstName] = useState('')
  // const [last_name, setLastName] = useState('')
  // const [college_name, setCollegeName] = useState('')
  const [designation, setDesignation] = useState('')

  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)

  const [issue_id, setIssueId] = useState('')
  const [forum_id, setForumId] = useState('')
  const [activity_title, setActivityTitle] = useState('')
  const [activity_description, setActivityDescription] = useState('')
  const [activity_images, setActivityImages] = useState('')
  const [activity_status, setActivityStatus] = useState('')
  const [activity_member_details, setActivityMemberDetails] = useState([{ "designation": "member", "yin_id": "MHPC000012" }, { "designation": "member", "yin_id": "MHPC0000123" }, { "designation": "member", "yin_id": "MHPC00001234" }])
  const [is_published, setIsPublished] = useState(true)
  const [activity_tags, setActivityTags] = useState('')
  const [activity_start_time, setActivityStartTime] = useState('')
  const [activity_end_time, setActivityEndTime] = useState('')

  function addMember() {
    const memberDetails = { issue_id, yin_id, designation }
    console.log({ issue_id, yin_id, designation })
    fetch("https://stg-yin-talk-api.foxberry.link/v1/forum/add/forum/member", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(memberDetails)
    }).then((result) => {
      //console.log('result', result);
      result.json().then((response) => {
        console.log("response", response);
      })
    })
  }

  function addNewActivity() {
    const activityDetails = { issue_id, forum_id, activity_title, activity_description, activity_images, activity_status, activity_member_details, is_published, activity_tags, activity_start_time, activity_end_time }
    console.log({ issue_id, forum_id, activity_title, activity_description, activity_images, activity_status, activity_member_details, is_published, activity_tags, activity_start_time, activity_end_time })
    fetch("https://stg-yin-talk-api.foxberry.link/v1/activity/create", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(activityDetails)
    }).then((result) => {
      //console.log('result', result);
      result.json().then((response) => {
        console.log("response", response);
      })
    })
  }

  useEffect(() => {
    const getActivity = async () => {
      setLoading(true)
      const response = await axios.get("https://stg-yin-talk-api.foxberry.link/v1/activity/list/yin-id/MHPC000012")
      setData(response.data)
      setLoading(false)
      console.log(response.data)
    }
    getActivity()
  }, [])


  return (

    <SafeAreaView>
      <ScrollView>

        <View styles={styles.main_container}>

          <View style={styles.header}>

            <View style={styles.header_title}>
              <Image style={{ width: 20, height: 15, tintColor: 'white' }} source={require('../assets/images/left.png')} />
              <Text style={{ marginRight: 'auto', paddingLeft: 10, color: '#fff', padding: 10, fontSize: 18 }}>Issue Details</Text>
              <Text style={{
                borderWidth: 1,
                borderColor: '#fff',
                borderRadius: 25,
                paddingLeft: 5,
                paddingRight: 5,
                paddingTop: 4,
                paddingBottom: 4,
                fontSize: 14,
                color: 'white'
              }}>Check Updates</Text>
            </View>

            <View style={styles.header_img_container}>
              <Image style={{
                height: 180,
                position: 'relative',
                top: 25,
                width: width,
                zIndex: 0
              }} source={require('../assets/images/Others/issue-details-image.png')} />
            </View>

          </View>

          <View style={styles.air_pollution}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 'auto' }}>
              <Text style={{ fontSize: 15, color: 'black', paddingLeft: 15 }}>Air Pollution</Text>
              <Text style={{ fontSize: 12, paddingRight: 15, color: 'black' }}>1st Jan to 10th Jan 2022</Text>
            </View>
            <Text style={{ fontSize: 12, padding: 8, textAlign: 'justify', height: 'auto' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac ipsum et metus vulputate posuere.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac ipsum et metus vulputate posuere. Fusce lacinia enim et tellus
              volutpat consectetur.</Text>

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
              <Text style={{ fontSize: 12, color: 'black', paddingRight: 3 }}>Members:</Text>
              <Text style={{ fontSize: 11, paddingRight: 3 }}>Total: 15 Members</Text>
              <Text style={{ fontSize: 13, color: 'black', paddingRight: 3 }}>|</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Image style={{ height: 20, width: 20, aspectRatio: 1 / 1, alignSelf: 'center', marginRight: 3, borderRadius: 3 }} source={require('../assets/images/Others/chat-profile-2.jpg')} />
                <Image style={{ height: 20, width: 20, aspectRatio: 1 / 1, alignSelf: 'center', marginRight: 3, borderRadius: 3 }} source={require('../assets/images/Others/chat-profile-4.jpg')} />
                <Image style={{ height: 20, width: 20, aspectRatio: 1 / 1, alignSelf: 'center', marginRight: 3, borderRadius: 3 }} source={require('../assets/images/Others/member-3.png')} />
              </View>

              <Text style={{ fontSize: 11 }}>+12 Members</Text>
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
                      <View>
                        <Text style={{ textAlign: 'center', color: 'black', marginBottom: 30, fontSize: 20 }}>Add Member</Text>
                        <View style={{ borderRadius: 1 }}>
                          <TextInput style={styles.input_field} placeholder="Enter Issue Id" onChangeText={issueId => setIssueId(issueId)} />
                          <TextInput onChangeText={yinId => setYinId(yinId)} style={styles.input_field} placeholder='Enter YIN_Id' />
                          {/* <TextInput onChangeText={firstName => setFirstName(firstName)} style={styles.input_field} placeholder='Enter First Name' />
                          <TextInput onChangeText={lastName => setLastName(lastName)} style={styles.input_field} placeholder='Enter Last Name' />
                          <TextInput onChangeText={collegeName => setCollegeName(collegeName)} style={styles.input_field} placeholder='Enter College Name' /> */}
                          <TextInput onChangeText={designation => setDesignation(designation)} style={styles.input_field} placeholder='Enter Designation' />
                        </View>
                      </View>
                    </View>

                    <Pressable
                      onPress={() => setModVisible(!modVisible)}
                    >
                      <View style={{ flexDirection: 'row', width: '100%', marginTop: 50 }}>

                        <Text onPress={addMember} style={styles.save}>Save</Text>

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
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <View style={{ width: W - 50 }}>
                      <Text style={{ textAlign: 'center', color: 'black', marginBottom: 30, fontSize: 20 }}>Add Activity</Text>
                      <TextInput style={styles.input_field} placeholder="Enter Issue Id" onChangeText={issueId => setIssueId(issueId)} />
                      <TextInput style={styles.input_field} placeholder="Enter Forum Id" onChangeText={forumId => setForumId(forumId)} />
                      <TextInput style={styles.input_title} placeholder="Title" onChangeText={newTitle => setActivityTitle(newTitle)} />
                      <TextInput style={styles.input_des} placeholder="Write Description" onChangeText={newDescription => setActivityDescription(newDescription)} />
                      <TextInput style={styles.input_field} placeholder="Add Activity Images" onChangeText={activityImages => setActivityImages(activityImages)} />
                      <TextInput style={styles.input_field} placeholder="Add Activity Status" onChangeText={activityStatus => setActivityStatus(activityStatus)} />
                      {/* <TextInput style={styles.input_field} placeholder="Enter Activity Member Details" onChangeText={activityMember => setActivityMemberDetails(activityMember)} /> */}

                      <TextInput style={styles.input_field} placeholder="Enter Activity Tags" onChangeText={activityTags => setActivityTags(activityTags)} />
                      <TextInput style={styles.input_field} placeholder="Activity Start Time" onChangeText={startTime => setActivityStartTime(startTime)} />
                      <TextInput style={styles.input_field} placeholder="Activity End Time" onChangeText={endTime => setActivityEndTime(endTime)} />
                    </View>

                    <Pressable
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <View style={{ flexDirection: 'row', width: '100%', marginTop: 50 }}>

                        <Text onPress={addNewActivity} style={styles.save}>Save</Text>

                        <Text style={styles.cancel}>Cancel</Text>
                      </View>
                    </Pressable>
                  </View>
                </View>
              </Modal>
            </View>


            <View style={{
              alignItems: 'center',
              padding: 10,
              flexDirection: 'row',
              height: 'auto',
              justifyContent: 'space-between'
            }}>
              <View>
                <Pressable onPress={() => setModVisible(true)}>
                  <Text style={{
                    borderRadius: 25,
                    backgroundColor: '#0cb0e7',
                    color: 'white',
                    fontSize: 15,
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 5,
                    paddingBottom: 5
                  }}>Add Member +</Text>
                </Pressable>

              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{
                  borderRadius: 25,
                  color: 'white',
                  paddingLeft: 10,
                  paddingRight: 30,
                  paddingTop: 5,
                  paddingBottom: 5,
                  fontSize: 15,
                  alignSelf: 'center',
                  backgroundColor: '#0cb0e7'
                }}>chat</Text>
                <Image style={{
                  width: 15,
                  position: 'relative',
                  left: -25,
                  top: 10,
                  tintColor: 'white',
                  height: 15
                }} source={require('../assets/images/Others/chat-forum.png')} />
              </View>
            </View>

          </View>

          <View style={{
            flexDirection: 'row',
            paddingLeft: 10,
            paddingRight: 10,
            justifyContent: 'space-between',
            width: width,
            height: 'auto',
            marginLeft: 5,
            marginTop: -5,
            alignItems: 'center'
          }}>
            <Text style={{ color: 'black', fontSize: 17 }}>List of Activities</Text>

            <Pressable
              //style={[styles.button_modal, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}>
              <Text style={{
                backgroundColor: '#0cb0e7',
                borderRadius: 25,
                color: 'white',
                paddingTop: 5,
                paddingBottom: 5,
                paddingLeft: 10,
                marginRight: 7,
                paddingRight: 10
              }}>Add Activity +</Text>
            </Pressable>
          </View>

          <View style={{ width: width, height: 'auto' }}>
            <View style={{ flexDirection: 'column' }}>
              <Image style={{
                height: 540,
                position: 'absolute',
                zIndex: 0,
                left: 25,
                width: 3,
                top: -30
              }} source={require('../assets/images/Others/line.png')} />
            </View>


            {
              isLoading ? <ActivityIndicator size="large" color="gray" /> : data.map((value, i) => {
                return (<View key={String(i)} style={styles.activity_card}>
                  <View>
                    <Text style={{
                      borderRadius: 5,
                      paddingLeft: 12,
                      paddingRight: 12,
                      paddingTop: 5,
                      color: 'white',
                      marginTop: 25,
                      paddingBottom: 5,
                      position: 'relative',
                      zIndex: 1,
                      marginLeft: 10,
                      backgroundColor: '#0cb0e7'
                    }}>1</Text>
                  </View>

                  <View style={{
                    height: 'auto',
                    padding: 10,
                    width: '82%',
                    borderwidth: 2,
                    borderRadius: 20,
                    backgroundColor: '#afcfed'

                  }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <View style={{ flexDirection: 'row', marginBottom: 3, justifyContent: 'flex-start' }}>
                        <Text style={{ fontSize: 12, color: 'black', paddingRight: 3 }}>{value.activity_title}</Text>
                        <Text style={{ fontSize: 11, color: 'black', paddingRight: 3 }}>|</Text>
                        <Text style={{ fontSize: 12 }}>{value.updated_at}</Text>
                      </View>
                      <View style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        marginLeft: 'auto'
                      }}>
                        <Image style={{ aspectRatio: 1 / 1, width: 20, marginRight: 5, alignSelf: 'center', tintColor: '#3297f5', }} source={require('../assets/images/Others/chat_bubble.png')} />
                        <Image style={{ aspectRatio: 1 / 1, width: 20, marginRight: 5, alignSelf: 'center', tintColor: '#3297f5', }} source={require('../assets/images/Others/edit.png')} />
                        <Image style={{ aspectRatio: 1 / 1, width: 20, alignSelf: 'center', tintColor: '#3297f5', }} source={require('../assets/images/Others/delete.png')} />
                      </View>
                    </View>

                    <Text style={{
                      fontSize: 12,
                      textAlign: 'justify',
                      marginBottom: 5
                    }}>{value.activity_description}</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontSize: 11, color: 'black', paddingRight: 3 }}>Activity Owners:</Text>
                      <Text style={{ fontSize: 11 }}>Ashutosh Kulkarni</Text>
                    </View>

                    <View>

                    </View>
                  </View>
                </View>
                )
              })
            }

          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    height: 'auto',
    justifyContent: 'center'

  },
  header: {
    width: width,
    backgroundColor: "red"
  },
  header_title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 13,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    width: width,
    height: 'auto',
    backgroundColor: '#0f9bec',
    alignItems: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    position: 'absolute',
    zIndex: 1
  },
  header_img_container: {
    height: 'auto',
    width: width

  },
  air_pollution: {
    height: 'auto',
    backgroundColor: '#ece3e3',
    borderwidth: 2,
    borderRadius: 25,
    borderColor: 'black',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 5,
    position: 'relative',
    top: -20
  },
  activity_card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 4,
    paddingTop: 7,
    paddingRight: 15,
    width: width,
    height: 'auto'
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
    borderwidth: 2,
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
    width: '100%',
    borderRadius: 5,
    borderColor: '#d9dcde',
    borderWidth: 2,
    padding: 10,
    marginBottom: 5,
    alignSelf: 'center',
    justifyContent: "center",
  },
  input_field: {
    width: width - 60,
    borderRadius: 10,
    borderColor: '#d9dcde',
    borderWidth: 1,
    padding: 4,
    marginBottom: 4,
    alignSelf: 'center',
    justifyContent: "center",
  },
  input_des: {
    width: '100%',
    borderRadius: 10,
    borderColor: '#d9dcde',
    borderWidth: 2,
    padding: 20,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: "center",
    marginBottom: 5
  },
  save: {
    backgroundColor: '#0084ff',
    marginRight: 10,
    width: 90,
    textAlign: 'center',
    borderRadius: 20,
    padding: 3,
    color: '#ffff'

  },
  cancel: {
    backgroundColor: '#0084ff',
    width: 90,
    textAlign: 'center',
    borderRadius: 20,
    padding: 3,
    color: '#ffff'
  }


})