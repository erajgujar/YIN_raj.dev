import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
const { width, height } = Dimensions.get('window');
export default function IssueDetails() {
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

            <View style={{
              alignItems: 'center',
              padding: 10,
              flexDirection: 'row',
              height: 'auto',
              justifyContent: 'space-between'
            }}>
              <View>
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
            marginLeft:5,
            marginTop: -5,
            alignItems: 'center'
          }}>
            <Text style={{ color: 'black', fontSize: 17 }}>List of Activities</Text>
            <Text style={{
              backgroundColor: '#0cb0e7',
              borderRadius: 25,
              color: 'white',
              paddingTop: 5,
              paddingBottom: 5,
              paddingLeft: 10,
              marginRight:7,
              paddingRight: 10
            }}>Add Activity +</Text>
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

            <View style={styles.activity_card}>

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
                  <View style={{ flexDirection: 'row', marginBottom: 3 }}>
                    <Text style={{ fontSize: 12, color: 'black', paddingRight: 3 }}>Activity Title</Text>
                    <Text style={{ fontSize: 11, color: 'black', paddingRight: 3 }}>|</Text>
                    <Text style={{ fontSize: 12 }}>5th Jan 2022</Text>
                  </View>
                  <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
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
                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac ipsum et metus vulputate posuere.</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: 11, color: 'black', paddingRight: 3 }}>Activity Owners:</Text>
                  <Text style={{ fontSize: 11 }}>Ashutosh Kulkarni</Text>
                </View>

                <View>

                </View>
              </View>
            </View>


            <View style={styles.activity_card}>

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
                }}>2</Text>
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
                  <View style={{ flexDirection: 'row', marginBottom: 3 }}>
                    <Text style={{ fontSize: 12, color: 'black', paddingRight: 3 }}>Activity Title</Text>
                    <Text style={{ fontSize: 11, color: 'black', paddingRight: 3 }}>|</Text>
                    <Text style={{ fontSize: 12 }}>5th Jan 2022</Text>
                  </View>
                  <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
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
                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac ipsum et metus vulputate posuere.</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: 11, color: 'black', paddingRight: 3 }}>Activity Owners:</Text>
                  <Text style={{ fontSize: 11 }}>Ashutosh Kulkarni</Text>
                </View>

                <View>

                </View>
              </View>
            </View>

            <View style={styles.activity_card}>

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
                }}>3</Text>
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
                  <View style={{ flexDirection: 'row', marginBottom: 3 }}>
                    <Text style={{ fontSize: 12, color: 'black', paddingRight: 3 }}>Activity Title</Text>
                    <Text style={{ fontSize: 11, color: 'black', paddingRight: 3 }}>|</Text>
                    <Text style={{ fontSize: 12 }}>5th Jan 2022</Text>
                  </View>
                  <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
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
                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac ipsum et metus vulputate posuere.</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: 11, color: 'black', paddingRight: 3 }}>Activity Owners:</Text>
                  <Text style={{ fontSize: 11 }}>Ashutosh Kulkarni</Text>
                </View>

                <View>

                </View>
              </View>
            </View>

            <View style={styles.activity_card}>

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
                }}>4</Text>
              </View>

              <View style={{
                height: 'auto',
                padding: 10,
                width: '82%',
                borderwidth: 2,
                marginBottom:15,
                borderRadius: 20,
                backgroundColor: '#afcfed'

              }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ flexDirection: 'row', marginBottom: 3 }}>
                    <Text style={{ fontSize: 12, color: 'black', paddingRight: 3 }}>Activity Title</Text>
                    <Text style={{ fontSize: 11, color: 'black', paddingRight: 3 }}>|</Text>
                    <Text style={{ fontSize: 12 }}>5th Jan 2022</Text>
                  </View>
                  <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
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
                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac ipsum et metus vulputate posuere.</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: 11, color: 'black', paddingRight: 3 }}>Activity Owners:</Text>
                  <Text style={{ fontSize: 11 }}>Ashutosh Kulkarni</Text>
                </View>

                <View>

                </View>
              </View>
            </View>

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
  }


})