import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
// const { width, height } = Dimensions.get('window');
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
export default function IssueDetails() {
  return (
    <View styles={styles.main_container}>

      <View style={styles.header}>

        <View style={styles.header_title}>
          <Image style={{ width: height * 0.020, height: height * 0.015, tintColor: 'white' }} source={require('../assets/images/left.png')} />
          <Text style={{ marginRight: 'auto', paddingLeft: height * 0.01, color: '#fff', fontSize: height* 0.02 }}>Issue Details</Text>
          <Text style={{
            borderWidth: 1,
            borderColor: '#fff',
            borderRadius: 25,
            paddingLeft: height * 0.005,
            paddingRight: height * 0.005,
            paddingTop: height * 0.003,
            paddingBottom: height * 0.003,
            fontSize: height * 0.017,
            color: 'white'
          }}>Check Updates</Text>
        </View>

        <View style={styles.header_img_container}>
          <Image style={{
            height: height * 0.25,
            position: 'relative',
            top: height * 0.035,
            width: width,
            zIndex: 0
          }} source={require('../assets/images/Others/issue-details-image.png')} />
        </View>

      </View>

      <View style={styles.air_pollution}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 'auto' }}>
          <Text style={{ fontSize:height * 0.017, color: 'black', paddingLeft: height * 0.015 }}>Air Pollution</Text>
          <Text style={{ fontSize: height * 0.013, paddingRight: height * 0.015, color: 'black' }}>1st Jan to 10th Jan 2022</Text>
        </View>
        <Text style={{ fontSize:height * 0.013, padding: height * 0.010, textAlign: 'justify', height: 'auto' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac ipsum et metus vulputate posuere.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac ipsum et metus vulputate posuere. Fusce lacinia enim et tellus
          volutpat consectetur.</Text>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingLeft: height * 0.010,
          paddingRight: height * 0.010,
          paddingTop: height * 0.005,
          height: 'auto',
          paddingBottom: height * 0.005
        }}>
          <Text style={{ fontSize:height * 0.014, color: 'black', paddingRight: height * 0.003 }}>Members:</Text>
          <Text style={{ fontSize: height * 0.013, paddingRight: height * 0.003 }}>Total: 15 Members</Text>
          <Text style={{ fontSize: height * 0.013, color: 'black', paddingRight: height * 0.003 }}>|</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Image style={{ height: height * 0.015, width:height * 0.015, aspectRatio: 1 / 1, alignSelf: 'center', marginRight: 3, borderRadius: 3 }} source={require('../assets/images/Others/chat-profile-2.jpg')} />
            <Image style={{ height: height * 0.015, width: height * 0.015, aspectRatio: 1 / 1, alignSelf: 'center', marginRight: 3, borderRadius: 3 }} source={require('../assets/images/Others/chat-profile-4.jpg')} />
            <Image style={{ height: height * 0.015, width: height * 0.015, aspectRatio: 1 / 1, alignSelf: 'center', marginRight: 3, borderRadius: 3 }} source={require('../assets/images/Others/member-3.png')} />
          </View>

          <Text style={{ fontSize: height * 0.013 }}>+12 Members</Text>
        </View>

        <View style={{
          alignItems: 'center',
          padding: height * 0.010,
          flexDirection: 'row',
          height: 'auto',
          justifyContent: 'space-between'
        }}>
          <View>
            <Text style={{
              borderRadius: 25,
              backgroundColor: '#0cb0e7',
              color: 'white',
              fontSize: height * 0.015,
              paddingLeft: height * 0.010,
              paddingRight: height * 0.010,
              paddingTop: height * 0.005,
              paddingBottom: height * 0.005
            }}>Add Member +</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{
              borderRadius: 25,
              color: 'white',
              paddingLeft: height * 0.010,
              paddingRight: height * 0.030,
              paddingTop: height * 0.005,
              paddingBottom: height * 0.005,
              fontSize: height * 0.015,
              alignSelf: 'center',
              backgroundColor: '#0cb0e7'
            }}>chat</Text>
            <Image style={{
              width: height * 0.010,
              position: 'relative',
              left: height * -0.020,
              top: height * 0.013,
              tintColor: 'white',
              height: height * 0.013
            }} source={require('../assets/images/Others/chat-forum.png')} />
          </View>
        </View>

      </View>

      <View style={{
        flexDirection: 'row',
        paddingLeft: height * 0.010,
        paddingRight: height * 0.010,
        justifyContent: 'space-between',
        width: width,
        height: 'auto',
        marginTop:height * -0.010,
        marginBottom: height * 0.020,
        alignItems: 'center'
      }}>
        <Text style={{ color: 'black', fontSize:height * 0.015 }}>List of Activities</Text>
        <Text style={{
          backgroundColor: '#0cb0e7',
          borderRadius: 25,
          color: 'white',
          paddingTop: height * 0.005,
          paddingBottom: height * 0.005,
          paddingLeft: height * 0.010,
          paddingRight: height * 0.010,
          fontSize: height * 0.014
        }}>Add Activity +</Text>
      </View>

      <View style={{width:width, height:'auto'}}>
        <View style={{ flexDirection: 'column' }}>
          <Image style={{
            height: height * 0.550,
            position: 'absolute',
            zIndex: 0,
            left: height * 0.040,
            width: height * 0.003,
            top:height* -0.040
          }} source={require('../assets/images/Others/line.png')} />
        </View>

        <View style={styles.activity_card}>

          <View>
            <Text style={{
              borderRadius: height * 0.005,
              paddingLeft: height * 0.012,
              paddingRight: height * 0.012,
              paddingTop: height * 0.005,
              color: 'white',
              marginTop: height * 0.025,
              paddingBottom: height * 0.005,
              position: 'relative',
              zIndex: 1,
              fontSize:height * 0.014,
              marginLeft:height * 0.025,
              backgroundColor: '#0cb0e7'
            }}>1</Text>
          </View>

          <View style={{
            height: 'auto',
            padding: height * 0.010,
            width: '82%',
            borderwidth: 2,
            borderRadius: 20,
            backgroundColor: '#afcfed'

          }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', marginBottom: 3 }}>
                <Text style={{ fontSize: height * 0.013, color: 'black', paddingRight: 3 }}>Activity Title</Text>
                <Text style={{ fontSize: height * 0.013, color: 'black', paddingRight: 3 }}>|</Text>
                <Text style={{ fontSize: height * 0.013 }}>5th Jan 2022</Text>
              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center'
              }}>
                <Image style={{ aspectRatio: 1 / 1, width: height * 0.015, marginRight: height * 0.005, alignSelf: 'center', tintColor: '#3297f5', }} source={require('../assets/images/Others/chat_bubble.png')} />
                <Image style={{ aspectRatio: 1 / 1, width: height * 0.015, marginRight: height * 0.005, alignSelf: 'center', tintColor: '#3297f5', }} source={require('../assets/images/Others/edit.png')} />
                <Image style={{ aspectRatio: 1 / 1, width: height * 0.015, alignSelf: 'center', tintColor: '#3297f5', }} source={require('../assets/images/Others/delete.png')} />
              </View>
            </View>
            <Text style={{
              fontSize: height * 0.011,
              textAlign: 'justify',
              marginBottom: 5
            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac ipsum et metus vulputate posuere.</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: height * 0.013, color: 'black', paddingRight: height * 0.003 }}>Activity Owners:</Text>
              <Text style={{ fontSize: height * 0.013 }}>Manisha Walimbe, Ashutosh Kulkarni</Text>
            </View>

            <View>

            </View>
          </View>
        </View>


        <View style={styles.activity_card}>

          <View>
            <Text style={{
              borderRadius: 5,
              paddingLeft: height * 0.012,
              paddingRight: height * 0.012,
              paddingTop: height * 0.005,
              color: 'white',
              marginTop: height * 0.025,
              paddingBottom: height * 0.005,
              fontSize: height * 0.014,
              position: 'relative',
              zIndex: 1,
              marginLeft:height * 0.025,
              backgroundColor: '#0cb0e7'
            }}>2</Text>
          </View>

          <View style={{
            height: 'auto',
            padding: height * 0.010,
            width: '82%',
            borderwidth: 2,
            borderRadius: 20,
            backgroundColor: '#afcfed'

          }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', marginBottom: height * 0.003 }}>
                <Text style={{ fontSize: height * 0.013, color: 'black', paddingRight: height * 0.003 }}>Activity Title</Text>
                <Text style={{ fontSize: height * 0.013, color: 'black', paddingRight: height * 0.003 }}>|</Text>
                <Text style={{ fontSize: height * 0.013 }}>5th Jan 2022</Text>
              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center'
              }}>
                <Image style={{ aspectRatio: 1 / 1, width: height * 0.015, marginRight: height * 0.005, alignSelf: 'center', tintColor: '#3297f5', }} source={require('../assets/images/Others/chat_bubble.png')} />
                <Image style={{ aspectRatio: 1 / 1, width: height * 0.015, marginRight: height * 0.005, alignSelf: 'center', tintColor: '#3297f5', }} source={require('../assets/images/Others/edit.png')} />
                <Image style={{ aspectRatio: 1 / 1, width: height * 0.015, alignSelf: 'center', tintColor: '#3297f5', }} source={require('../assets/images/Others/delete.png')} />
              </View>
            </View>
            <Text style={{
              fontSize: height * 0.011,
              textAlign: 'justify',
              marginBottom: height * 0.005
            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac ipsum et metus vulputate posuere.</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: height * 0.013, color: 'black', paddingRight: height * 0.003 }}>Activity Owners:</Text>
              <Text style={{ fontSize: height * 0.013 }}>Manisha Walimbe, Ashutosh Kulkarni</Text>
            </View>

            <View>

            </View>
          </View>
        </View>

        <View style={styles.activity_card}>

          <View>
            <Text style={{
              borderRadius: 5,
              paddingLeft: height * 0.012,
              paddingRight: height * 0.012,
              paddingTop: height * 0.005,
              color: 'white',
              marginTop: height * 0.025,
              fontSize: height * 0.014,
              paddingBottom: height * 0.005,
              position: 'relative',
              zIndex: 1,
              marginLeft:height * 0.025,
              backgroundColor: '#0cb0e7'
            }}>3</Text>
          </View>

          <View style={{
            height: 'auto',
            padding: height * 0.010,
            width: '82%',
            borderwidth: 2,
            borderRadius: 20,
            backgroundColor: '#afcfed'

          }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', marginBottom: height * 0.003 }}>
                <Text style={{ fontSize: height * 0.013, color: 'black', paddingRight: height * 0.003 }}>Activity Title</Text>
                <Text style={{ fontSize: height * 0.013, color: 'black', paddingRight: height * 0.003 }}>|</Text>
                <Text style={{ fontSize: height * 0.013 }}>5th Jan 2022</Text>
              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center'
              }}>
                <Image style={{ aspectRatio: 1 / 1, width: height * 0.015, marginRight: height * 0.005, alignSelf: 'center', tintColor: '#3297f5', }} source={require('../assets/images/Others/chat_bubble.png')} />
                <Image style={{ aspectRatio: 1 / 1, width: height * 0.015, marginRight: height * 0.005, alignSelf: 'center', tintColor: '#3297f5', }} source={require('../assets/images/Others/edit.png')} />
                <Image style={{ aspectRatio: 1 / 1, width: height * 0.015, alignSelf: 'center', tintColor: '#3297f5', }} source={require('../assets/images/Others/delete.png')} />
              </View>
            </View>
            <Text style={{
              fontSize: height * 0.011,
              textAlign: 'justify',
              marginBottom: height * 0.005
            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac ipsum et metus vulputate posuere.</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: height * 0.013, color: 'black', paddingRight: height * 0.003 }}>Activity Owners:</Text>
              <Text style={{ fontSize: height * 0.013 }}>Manisha Walimbe, Ashutosh Kulkarni</Text>
            </View>

            <View>

            </View>
          </View>
        </View>

        <View style={styles.activity_card}>

          <View>
            <Text style={{
              borderRadius: height * 0.005,
              paddingLeft: height * 0.012,
              paddingRight: height * 0.012,
              paddingTop: height * 0.005,
              color: 'white',
              marginTop: height * 0.025,
              fontSize: height * 0.014,
              paddingBottom: height * 0.005,
              marginLeft:height * 0.025,
              position: 'relative',
              zIndex: 1,
              backgroundColor: '#0cb0e7'
            }}>4</Text>
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
                <Text style={{ fontSize: height * 0.013, color: 'black', paddingRight: height * 0.003 }}>Activity Title</Text>
                <Text style={{ fontSize: height * 0.013, color: 'black', paddingRight: height * 0.003 }}>|</Text>
                <Text style={{ fontSize: height * 0.013 }}>5th Jan 2022</Text>
              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center'
              }}>
                <Image style={{ aspectRatio: 1 / 1, width: height * 0.015, marginRight: 5, alignSelf: 'center', tintColor: '#3297f5', }} source={require('../assets/images/Others/chat_bubble.png')} />
                <Image style={{ aspectRatio: 1 / 1, width: height * 0.015, marginRight: 5, alignSelf: 'center', tintColor: '#3297f5', }} source={require('../assets/images/Others/edit.png')} />
                <Image style={{ aspectRatio: 1 / 1, width: height * 0.015, alignSelf: 'center', tintColor: '#3297f5', }} source={require('../assets/images/Others/delete.png')} />
              </View>
            </View>
            <Text style={{
              fontSize: height * 0.011,
              textAlign: 'justify'
              // marginBottom: height * 0.005
            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac ipsum et metus vulputate posuere.</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: height * 0.013, color: 'black', paddingRight: height * 0.003 }}>Activity Owners:</Text>
              <Text style={{ fontSize: height * 0.013 }}>Manisha Walimbe, Ashutosh Kulkarni</Text>
            </View>

            <View>

            </View>
          </View>
        </View>

      </View>

    </View>
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
    paddingTop: height * 0.025,
    paddingLeft: height * 0.010,
    paddingRight: height * 0.010,
    paddingBottom: height * 0.015,
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
    backgroundColor: '#dbe1e7',
    borderwidth: 2,
    borderRadius: 25,
    borderColor: 'black',
    marginLeft: height * 0.010,
    marginRight: height * 0.010,
    marginBottom: height * 0.010,
    paddingTop: height * 0.005,
    position: 'relative',
    top: height * -0.015
  },
  activity_card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: height * 0.004,
    paddingTop: height * 0.007,
    paddingRight: height * 0.015,
    width: width,
    height: 'auto'
  }


})