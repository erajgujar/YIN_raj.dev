import React from 'react';
import YouTube from 'react-native-youtube';
import { View, Text, Image, StyleSheet, TextInput, Dimensions } from 'react-native'
const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;
const LiveIssues = () => {

    return (
        <View style={{height:'100%'}}>
            <View style={styles.container}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginLeft: H* 0.010,
                    marginRight: H* 0.010,
                    marginTop: H* 0.010
                }}>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginBottom: H* 0.015

                    }}>
                        <Image style={styles.menu_icon_img} source={require('../assets/images/Others/menu-icon.png')} />
                        <Text style={{
                            textAlign: 'center',
                            marginTop: H* 0.005,
                            fontSize: H* 0.015,
                            color: '#ffff'
                        }}>Live Issues</Text>
                    </View>
                    <View style={{}}>
                        <Text style={styles.Add_issue}>Add New Issue + </Text>
                    </View>
                </View>

                <View style={{
                    display: 'flex',
                    marginLeft: H* 0.010,
                    marginRight: H* 0.010,
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
                top: H* 0.150
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
                        marginBottom: H* 0.007,
                        marginTop: H* 0.007,
                        color: 'black',
                        marginLeft: H* -0.020
                    }}>
                        Lorem Ipsum is simply dummy text of the printing.
                    </Text>
                    <Text style={{
                        width: '100%',
                        fontSize: H* 0.011,
                        marginLeft: H* -0.020
                    }}>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                    </Text>
                    <Text style={{ alignSelf: 'flex-end', fontSize: H* 0.011, marginTop: H* 0.010, marginRight: H* 0.020 }}> 5 Minutes ago</Text>
                </View>
            </View>

            <View style={{}}>
                <YouTube
                    apiKey='AIzaSyD23DuJHCULMajsj7L-SY-Z0W4-sytPU3o'
                    videoId="6oFuwhIibo4" // The YouTube video ID
                    play // control playback of video with true/false
                    fullscreen // control whether the video should play in fullscreen or inline
                    loop // control whether the video should loop when ended
                    onReady={e => this.setState({ isReady: true })}
                    onChangeState={e => this.setState({ status: e.state })}
                    onChangeQuality={e => this.setState({ quality: e.quality })}
                    onError={e => this.setState({ error: e.error })}
                    style={{ alignSelf:'center',
                    width:'90%',
                    marginTop:H* 0.170,
                    borderTopLeftRadius:20,
                     height: H* 0.180 }}
                />
                <Text style={{width:'90%',
                borderBottomLeftRadius:20,
                borderBottomRightRadius:20,
                borderWidth:2,
                borderColor:'#e0e3e8',
                padding:H* 0.010,
                textAlign:'left',
                alignSelf:'center'}}>This video is included using 'react-native-youtube' library in node package manager</Text>
            </View>

            <View style={{
                display: "flex",
                flexDirection: "row",
                marginTop: H* 0.010
            }}>
                <View style={{ display: "flex", flexDirection: "row", marginLeft: H* 0.007 }}>
                    <Image style={styles.activity_img} source={require('../assets/images/Others/think.png')} />
                    <Text style={styles.activity_text}>Think</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <Image style={styles.activity_img} source={require('../assets/images/Others/chat.png')} />
                    <Text style={styles.activity_text}>Talk</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <Image style={styles.activity_img} source={require('../assets/images/Others/todo.png')} />
                    <Text style={styles.activity_text}>Do</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <Image style={styles.activity_img} source={require('../assets/images/Others/amplify.png')} />
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
        height: H* 0.217,
        backgroundColor: "#427bed",
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        position: 'absolute'


    },
    menu_icon_img: {
        height: H* 0.035,
        width: H* 0.030,
        marginRight: H* 0.007,
        tintColor: '#ffff'
    },
    Add_issue: {
        borderWidth: 2,
        borderRadius: 20,
        paddingTop: H* 0.005,
        paddingBottom: H* 0.005,
        paddingRight: H* 0.010,
        paddingLeft: H* 0.010,
        color: '#ffff',
        borderColor: '#ffff'

    },
    search_img: {
        width: H* 0.020,
        height: H* 0.020,
        marginLeft: H* -0.035,
        marginTop: H* 0.009
    },
    input_issue: {
        paddingTop: H* 0.003,
        paddingBottom: H* 0.003,
        paddingRight: H* 0.010,
        paddingLeft: H* 0.015,
        borderWidth: 2,
        borderRadius: 20,
        width: '100%',
        borderColor: '#ffff',
        color: 'gray',
        backgroundColor: '#ffff',
        fontSize: H* 0.015

    }, filter_img: {
        width: H* 0.009,
        height: H* 0.007,
        alignSelf: 'flex-end',
        marginTop: H* 0.013,
        marginRight: H* 0.013,
        tintColor: '#ffff'
    },
    live_issue_img: {
        width: '100%',
        height: H* 0.130,
        borderBottomLeftRadius: 25,
        borderTopLeftRadius: 25
    },
    activity_img: {
        width: H* 0.045,
        height: H* 0.045,
        borderRadius: 50,
        borderColor: "#8cc5e8",
        marginRight: H* 0.002

    },
    activity_text: {
        fontSize: H* 0.015,
        color: "black",
        marginRight: H* 0.007,
        marginTop: H* 0.010
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