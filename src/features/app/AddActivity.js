import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Alert, Modal, View, Text, StyleSheet, Image, TextInput, SafeAreaView, ScrollView, Pressable, Dimensions, TouchableOpacity } from 'react-native';
const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;
export default function AddActivity() {
    const [modalVisible, setModalVisible] = useState(false);
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [issue_id, setIssueId] = useState('')
    const [forum_id, setForumId] = useState('FORUM_COL0001234_BOYS')
    const [activity_title, setActivityTitle] = useState('')
    const [activity_description, setActivityDescription] = useState('')
    const [activity_images, setActivityImages] = useState('')
    const [activity_status, setActivityStatus] = useState('')
    const [activity_member_details, setActivityMemberDetails] = useState([{"designation":"member","yin_id":"MHPC000012"},{"designation":"member","yin_id":"MHPC0000123"},{"designation":"member","yin_id":"MHPC00001234"}])
    const [is_published, setIsPublished] = useState(true)
    const [activity_tags, setActivityTags] = useState('')
    const [activity_start_time, setActivityStartTime] = useState('')
    const [activity_end_time, setActivityEndTime] = useState('')


    const [college_code, setCollegeCode] = useState('COL_120223')
    const [issue_title, setIssueTitle] = useState('')
    const [issue_description, setIssueDescription] = useState('')
    const [issue_full_description, setIssueFullDescription] = useState('This section describes the issue full details')
    const [issue_images, setIssueImages] = useState("https://foxberry-images.s3.amazonaws.com/yin/college_id_cards/issues-image-1.png")
    const [issue_types, setIssueTypes] = useState('LIVE')
    const [issue_member_details, setIssueMemberDetails] = useState([{ "designation": "member", "yin_id": "MHPC000012" }, { "designation": "member", "yin_id": "MHPC0000123" }, { "designation": "member", "yin_id": "MHPC00001234" }])
    const [issue_tags, setIssueTags] = useState(["dfgdfg", "gfdgdfg", "fgdfgdfgdfg"])

    useEffect(() => {
        getActivity()
    }, [])

    async function getActivity() {
        setLoading(true)
        const response = await axios.get('https://stg-yin-talk-api.foxberry.link/v1/activity/all/list? ISSUE_12022')
        setData(response.data)
        setLoading(false)
        //console.log(response.data)
    }


    function addNewActivity() {
        const activityDetails = {issue_id,forum_id, activity_title, activity_description, activity_images, activity_status, activity_member_details, is_published, activity_tags,activity_start_time,activity_end_time }
        console.log({issue_id,forum_id, activity_title, activity_description, activity_images, activity_status, activity_member_details, is_published, activity_tags,activity_start_time,activity_end_time })
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

    const addIssue = () => {
        axios.post("https://stg-yin-talk-api.foxberry.link/v1/issue/create", {
            college_code, issue_title, issue_description, issue_full_description, issue_images, issue_types, forum_id, issue_member_details,
            is_published, issue_tags
        }).then(res => console.log("Posting Data ::: 😎", res)).catch(err => console.log(err))
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <View>
                        <View style={styles.container}>
                            <Image style={styles.left_arrow} source={require('../assets/images/left.png')} />
                            <Text style={styles.header_text}>Add New Issue</Text>
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
                                            <View style={{width:W-50}}>
                                                <Text style={{ textAlign: 'center', color: 'black', marginBottom: 30, fontSize: 20 }}>Add Activity</Text>
                                                <TextInput style={styles.input_field} placeholder="Enter Issue Id" onChangeText={issueId => setIssueId(issueId)} />
                                                <TextInput style={styles.input_field} placeholder="Enter Forum Id" onChangeText={forumId => setForumId(forumId)} />
                                                <TextInput style={styles.input_title} placeholder="Title" onChangeText={newTitle => setActivityTitle(newTitle)} />
                                                <TextInput style={styles.input_des} placeholder="Write Description" onChangeText={newDescription => setActivityDescription(newDescription)} />
                                                <TextInput style={styles.input_field} placeholder="Add Activity Images" onChangeText={activityImages => setActivityImages(activityImages)} />
                                                <TextInput style={styles.input_field} placeholder="Add Activity Status" onChangeText={activityStatus => setActivityStatus (activityStatus)} />
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
                            borderWidth: 1,
                            borderColor: "#dfe2e4",
                            borderRadius: 25,
                            paddingLeft: 30,
                            width: "85%",
                            alignSelf: 'center'

                        }}>
                                <TextInput placeholder='Give a Title to the Issue' onChangeText={addTitle=> setIssueTitle(addTitle)} />
                        </View>
                    </View>
                    <View style={{
                        borderWidth: 1,
                        borderColor: "#dfe2e4",
                        borderRadius: 25,
                        padding: 5,
                        paddingLeft: 25,
                        width: "85%",
                        color: 'gray',
                        alignSelf: 'center',
                        marginTop: 10,
                        marginBottom: 10

                    }}>
                            <TextInput placeholder='Give a description to the Issue' onChangeText={addDescription=> setIssueDescription(addDescription)} />
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <View style={{ margin: 10, marginLeft: 30 }}>
                            <Text style={{ fontSize: 15, color: "black", marginBottom: 10 }}>Add Photo</Text>
                            <View style={styles.camera_border}>
                                <Image style={styles.camera} source={require('../assets/images/Others/camera.jpg')} />
                            </View>
                        </View>
                        <View style={{
                            width: "65%", borderWidth: 1,
                            borderColor: "#dfe2e4",
                            height: 90,
                            marginTop: 10,
                            borderRadius: 20,
                            padding: 30,
                            alignSelf: "center"
                        }}>
                            <Text>Preview of the Photo</Text>
                        </View>
                    </View>

                    <View style={{
                        flexDirection: "row",
                        marginTop: 10,
                        width: '100%',
                        alignContent: 'space-between',
                        marginBottom: 20
                    }}>
                        <View style={{ width: '60%', alignSelf: "flex-start", marginLeft: 10, marginTop: 5 }}>
                            <Text style={{ color: "black", fontSize: 14 }}>Activities You will Perform</Text>
                        </View>
                        <View style={{
                            width: '40%',
                            backgroundColor: "#0080ff",
                            padding: 5,
                            marginLeft: -25,
                            borderRadius: 25,
                            alignSelf: "flex-end"
                        }}>
                            <Pressable
                                //style={[styles.button_modal, styles.buttonOpen]}
                                onPress={() => setModalVisible(true)}>
                                <Text style={{ textAlign: 'center', color: "white" }}>Add New Activity +</Text>
                            </Pressable>
                        </View>
                    </View>

                    <View style={{ position: "absolute", zIndex: 0, marginTop: 450 }}>
                        <Image style={styles.progress_line} source={require('../assets/images/Others/line.png')} />
                    </View>


                    {isLoading ? <Text>Loading please wait</Text> : data.map((value, i) => {
                        return (<View key={String(i)} style={{ flexDirection: "row" }}>
                            <View>
                                <Text style={styles.progress_stage}>1</Text>
                            </View>

                            <View style={{
                                backgroundColor: "#a7e1cd",
                                width: '70%',
                                borderRadius: 25,
                                marginBottom: 15,
                                padding: 13,
                                marginBottom: 9,
                            }}>
                                <View style={{
                                    flexDirection: "row",
                                    justifyContent: 'space-between'
                                }}>
                                    <Text style={{ fontSize: 14, color: 'black' }}>{value.activity_title}</Text>
                                    <Text style={{
                                        fontSize: 12,
                                        borderRadius: 20,
                                        backgroundColor: 'green',
                                        color: 'white',
                                        width:'auto',
                                        marginLeft:'auto',
                                        marginBottom: 5,
                                        padding: 3,
                                    }}>{value.activity_status}</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 12 }}>{value.activity_description}</Text>
                                </View>
                            </View>
                        </View>

                        )
                    })
                    }

                    <View style={styles.button}>
                        <Text onPress={addIssue} style={{
                            width: '30%',
                            color: "white",
                            textAlign: "center",
                            borderRadius: 20,
                            fontSize: 15,
                            marginRight: 40,
                            padding: 10,
                            marginLeft: 1,
                            backgroundColor: "#14a3db",
                            paddingTop: 7,
                            paddingBottom: 7
                        }}>Save Issue</Text>
                        <Text style={{
                            width: '30%',
                            borderRadius: 20,
                            fontSize: 15,
                            color: "white",
                            textAlign: "center",
                            backgroundColor: "#14a3db",
                            marginRight: 10,
                            paddingTop: 7,
                            paddingBottom: 7
                        }}>Cancel</Text>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )



}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#14a3db",
        paddingTop: 20,
        paddingBottom: 10,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        marginBottom: 10,
        width: '100%',
        justifyContent: 'flex-start'
    },
    left_arrow: {
        width: 20,
        height: 20,
        marginLeft: 15,
        marginRight: 15,
        alignSelf: 'center',
        tintColor: "white",
        marginTop: 2
    },
    header_text: {
        fontSize: 20,
        color: "white",
        alignSelf: 'center'
    },
    camera: {
        width: 30,
        height: 25,
        marginLeft: 5,
        marginTop: 10,
        alignSelf: "center"

    },
    camera_border: {
        borderRadius: 7,
        borderColor: "#eae5e5",
        borderWidth: 1,
        height: 50,
        width: 60
    },
    progress_line: {
        width: 5,
        height: 350,
        marginLeft: 50,
        tintColor: "#a7e1cd",
        marginTop: -110
    },
    progress_stage: {
        color: "white",
        backgroundColor: "#0a7ff3",
        height: 30,
        width: 35,
        marginLeft: 33,
        borderRadius: 5,
        paddingLeft: 14,
        paddingTop: 5,
        marginRight: 30,
        marginTop: 25,
        marginBottom: 20,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        alignItems: 'center',
        width: '100%',
        marginTop: 30,
        marginBottom: 10


    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15
    },
    modalView: {
        margin: 10,
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        padding:10
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
        width: '100%',
        borderRadius: 10,
        borderColor: '#d9dcde',
        borderWidth: 2,
        padding: 3,
        marginBottom: 5,
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
        marginBottom:5
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
    },


})
