import React, { useState } from 'react';
import YouTube from 'react-native-youtube';
import axios from 'axios';
import { View, Text, Image, StyleSheet, TextInput, ScrollView, SafeAreaView, Modal, Pressable, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
const LiveIssues = () => {
    const [modVisible, setModVisible] = useState(false)
    const [college_code, setCollegeCode] = useState('')
    const [issue_title, setIssueTitle] = useState('')
    const [issue_description, setIssueDescription] = useState('')
    const [issue_full_description, setIssueFullDescription] = useState('')
    const [issue_images, setIssueImages] = useState("https://foxberry-images.s3.amazonaws.com/yin/college_id_cards/issues-image-1.png")
    const [issue_types, setIssueTypes] = useState('')
    const [forum_id, setForumId] = useState('')
    const [issue_member_details, setIssueMemberDetails] = useState([{ "designation": "member", "yin_id": "MHPC000012" }, { "designation": "member", "yin_id": "MHPC0000123" }, { "designation": "member", "yin_id": "MHPC00001234" }])
    const [is_published, setPublished] = useState(true)
    const [issue_tags, setIssueTags] = useState(["dfgdfg", "gfdgdfg", "fgdfgdfgdfg"])


    const addIssue = ()=>{
        axios.post("https://stg-yin-talk-api.foxberry.link/v1/issue/create", {
            college_code, issue_title,issue_description,issue_full_description,issue_images,issue_types,forum_id, issue_member_details,
            is_published, issue_tags
        }).then(res=> console.log("Posting Data ::: 😎", res)).catch(err=> console.log(err))
    }
    // Add New Issue
    return (
        <SafeAreaView >
            <ScrollView>

                <View style={{ height: '100%' }}>
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

                            <View>
                                <Pressable onPress={() => setModVisible(true)}>
                                    <Text style={styles.Add_issue}>Add New Issue + </Text>
                                </Pressable>
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
                                            <Text style={{ textAlign: 'center', color: 'black', marginBottom: 30, fontSize: 20 }}>Add New Issue</Text>
                                            <View style={{ borderRadius: 1 }}>
                                                <TextInput style={styles.input_field} placeholder="Enter College Code" onChangeText={collgeCode => setCollegeCode(collgeCode)} />
                                                <TextInput style={styles.input_title} placeholder='Enter Issue Title' onChangeText={issueTitle => setIssueTitle(issueTitle)} />
                                                <TextInput style={styles.input_des} placeholder='Enter Issue Description' onChangeText={description => setIssueDescription(description)} />
                                                <TextInput style={styles.input_des} placeholder='Enter Issue Full Description' onChangeText={fullDescription => setIssueFullDescription(fullDescription)}/>
                                                <TextInput style={styles.input_field} placeholder='Enter Issue Types' onChangeText={issueType => setIssueTypes(issueType)} />
                                                <TextInput style={styles.input_field} placeholder='Enter Forum Id' onChangeText={forumId => setForumId(forumId)} />
                                            </View>
                                        </View>
                                    </View>

                                    <Pressable
                                        onPress={() => setModVisible(!modVisible)}
                                    >
                                        <View style={{ flexDirection: 'row', width: '100%', marginTop: 50 }}>

                                            <Text onPress={addIssue} style={styles.save}>Save</Text>

                                            <Text style={styles.cancel}>Cancel</Text>
                                        </View>
                                    </Pressable>
                                </View>
                            </View>
                        </Modal>
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
                            //onError={e => this.setState({ error: e.error })}
                            style={{
                                alignSelf: 'center',
                                width: '90%',
                                marginTop: 170,
                                borderTopLeftRadius: 20,
                                height: 180,
                            }}
                        />
                        <Text style={{
                            width: '90%',
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            borderWidth: 2,
                            borderColor: '#e0e3e8',
                            padding: 10,
                            textAlign: 'left',
                            alignSelf: 'center'
                        }}>This video is included using 'react-native-youtube' library in node package manager</Text>
                    </View>

                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: 40,
                        width: width
                    }}>
                        <View style={{ display: "flex", flexDirection: "row", marginLeft: 7 }}>
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
            </ScrollView>
        </SafeAreaView>
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
        width: 40,
        height: 45,
        borderRadius: 50,
        borderColor: "#8cc5e8",
        marginRight: 2

    },
    activity_text: {
        fontSize: 15,
        color: "black",
        marginRight: 10,
        marginTop: 10
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
    // backgroundVideo: {
    //     position: 'absolute',
    //     top: 0,
    //     left: 0,
    //     bottom: 0,
    //     right: 0,
    //   }
})

export default LiveIssues;