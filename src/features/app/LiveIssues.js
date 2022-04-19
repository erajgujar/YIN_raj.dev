import React from 'react';
// import Video from 'react-native-video';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
const LiveIssues = () => {

    return (
        <View>
            <View style={styles.container}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 10
                }}>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginBottom: 15

                    }}>
                        <Image style={styles.menu_icon_img} source={require('../assets/images/Others/menu-icon.png')} />
                        <Text style={{
                            textAlign: 'center',
                            marginTop: 5,
                            fontSize: 15,
                            color: '#ffff'
                        }}>Live Issues</Text>
                    </View>
                    <View style={{}}>
                        <Text style={styles.Add_issue}>Add New Issue + </Text>
                    </View>
                </View>

                <View style={{
                    display: 'flex',
                    marginLeft: 10,
                    marginRight: 10,
                    flexDirection: 'row'
                }}>
                    <TextInput style={styles.input_issue} placeholder='Search by Categories of Issues' />
                    <Image style={styles.search_img} source={require('../assets/images/Others/search.png')} />
                </View>

                <View>
                    <Image style={styles.filter_img} source={require('../assets/images/Others/filter.png')} />
                </View>
            </View>
            <View style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'row',
                width: '90%',
                borderWidth: 1,
                backgroundColor: '#ffff',
                alignSelf: 'center',
                borderRadius: 25,
                justifyContent: 'space-between',
                borderColor: '#adb1b4',
                top: 150
            }}>
                <View style={{ width: '30%', borderColor: '#ffff', }}>
                    <Image style={styles.live_issue_img} source={require('../assets/images/Others/live-issue-image.png')} />
                </View>
                <View style={{
                    width: '60%',
                    borderColor: '#adb1b4'
                }}>
                    <Text style={{
                        width: '100%',
                        marginBottom: 7,
                        marginTop: 7,
                        color: 'black',
                        marginLeft: -20
                    }}>
                        Lorem Ipsum is simply dummy text of the printing.
                    </Text>
                    <Text style={{
                        width: '100%',
                        fontSize: 11,
                        marginLeft: -20
                    }}>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                    </Text>
                    <Text style={{ alignSelf: 'flex-end', fontSize: 11, marginTop: 10, marginRight: 20 }}> 5 Minutes ago</Text>
                </View>
            </View>

            {/* <View>
                <Video source={{ uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1' }}   // Can be a URL or a local file.
                    ref={(ref) => {
                        this.player = ref
                    }}                                      // Store reference
                    onBuffer={this.onBuffer}                // Callback when remote video is buffering
                    onError={this.videoError}               // Callback when video cannot be loaded
                    style={styles.backgroundVideo} />
            </View> */}
            
            <View style={{ display: "flex",
             flexDirection: "row",
              marginTop:530}}>
                <View style={{ display: "flex", flexDirection: "row", marginLeft:7}}>
                    <Image style={styles.activity_img} source={require('../assets/images/Others/think.png')}/>
                    <Text style={styles.activity_text}>Think</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <Image style={styles.activity_img} source={require('../assets/images/Others/chat.png')}/>
                    <Text style={styles.activity_text}>Talk</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <Image style={styles.activity_img} source={require('../assets/images/Others/todo.png')}/>
                    <Text style={styles.activity_text}>Do</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <Image style={styles.activity_img} source={require('../assets/images/Others/amplify.png')}/>
                    <Text style={styles.activity_text}>Amplify</Text>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignSelf: 'center',
        height: 215,
        backgroundColor: "#427bed",
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        position: 'absolute'


    },
    menu_icon_img: {
        height: 35,
        width: 30,
        marginRight: 7,
        tintColor: '#ffff'
    },
    Add_issue: {
        borderWidth: 2,
        borderRadius: 20,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 10,
        paddingLeft: 10,
        color: '#ffff',
        borderColor: '#ffff'

    },
    search_img: {
        width: 20,
        height: 20,
        marginLeft: -35,
        marginTop: 9
    },
    input_issue: {
        paddingTop: 3,
        paddingBottom: 3,
        paddingRight: 10,
        paddingLeft: 15,
        borderWidth: 2,
        borderRadius: 20,
        width: '100%',
        borderColor: '#ffff',
        color: 'gray',
        backgroundColor: '#ffff',
        fontSize: 15

    }, filter_img: {
        width: 18,
        height: 22,
        alignSelf: 'flex-end',
        marginTop: 13,
        marginRight: 13,
        tintColor: '#ffff'
    },
    live_issue_img: {
        width: '100%',
        height: 130,
        borderBottomLeftRadius: 25,
        borderTopLeftRadius: 25
    },
    activity_img: {
        width:45,
        height:45,
        borderRadius:50,
        borderColor: "#8cc5e8",
        marginRight:2
        
    },
    activity_text: {
        fontSize: 15,
        color: "black",
        marginRight:15,
        marginTop:10
    }
    // backgroundVideo: {
    //     position: 'absolute',
    //     top: 0,
    //     left: 0,
    //     bottom: 0,
    //     right: 0,
    //   }
})

export default LiveIssues;