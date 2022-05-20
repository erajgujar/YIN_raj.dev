import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Alert, Modal, View, Text, StyleSheet, Image, TextInput, ActivityIndicator, SafeAreaView, ScrollView, Pressable, Dimensions, TouchableOpacity } from 'react-native';
const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;
const { width, height } = Dimensions.get('window');

export default function CreateIssue() {
    const [issue_id, setIssueId] = useState('')
    const [forum_id, setForumId] = useState('FORUM_COL0001234_BOYS')
    const [activity_title, setActivityTitle] = useState('')
    const [activity_description, setActivityDescription] = useState('')
    const [activity_images, setActivityImages] = useState('')
    const [activity_status, setActivityStatus] = useState('')
    const [activity_member_details, setActivityMemberDetails] = useState([{ "designation": "member", "yin_id": "MHPC000012" }, { "designation": "member", "yin_id": "MHPC0000123" }, { "designation": "member", "yin_id": "MHPC00001234" }])
    const [is_published, setIsPublished] = useState(true)
    const [activity_tags, setActivityTags] = useState('')
    const [activity_start_time, setActivityStartTime] = useState('')
    const [activity_end_time, setActivityEndTime] = useState('')

    const [yin_id, setYinId] = useState('')
    const [designation, setDesignation] = useState('')

    const [modVisible, setModVisible] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)

    const [memberDetails, setMemberDetails] = useState([])

    const [college_code, setCollegeCode] = useState('COL_120223')
    const [issue_title, setIssueTitle] = useState('')
    const [issue_description, setIssueDescription] = useState('')
    const [issue_full_description, setIssueFullDescription] = useState('This section describes the issue full details')
    const [issue_images, setIssueImages] = useState("https://foxberry-images.s3.amazonaws.com/yin/college_id_cards/issues-image-1.png")
    const [issue_types, setIssueTypes] = useState('LIVE')
    const [issue_member_details, setIssueMemberDetails] = useState([{ "designation": "member", "yin_id": "MHPC000012" }, { "designation": "member", "yin_id": "MHPC0000123" }, { "designation": "member", "yin_id": "MHPC00001234" }])
    const [issue_tags, setIssueTags] = useState(["dfgdfg", "gfdgdfg", "fgdfgdfgdfg"])

    const addMember = () => {
        axios.post("https://stg-yin-talk-api.foxberry.link/v1/forum/add/forum/member", {
            issue_id,
            yin_id,
            designation
        }).then(res => console.log("Posting Data ::: 😎", res)).catch(err => console.log(err))
    }

    // add member POST API Not Implemented

    const memberDetailed_list = async () => {
        setLoading(true)
        const response = await axios.get("https://stg-yin-talk-api.foxberry.link/v1/issue/get/issue/member-details/ISSUECOL_120223_RIVERCLEANINGD")
        setMemberDetails(response.data)
        setLoading(false)
        console.log(response.data)
    }

    useEffect(() => {
        getActivity()
        memberDetailed_list()
    }, [])

    async function getActivity() {
        setLoading(true)
        const response = await axios.get('https://stg-yin-talk-api.foxberry.link/v1/activity/all/list? ISSUE_12022')
        setData(response.data)
        setLoading(false)
        //console.log(response.data)
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

    const addIssue = () => {
        axios.post("https://stg-yin-talk-api.foxberry.link/v1/issue/create", {
            college_code, issue_title, issue_description, issue_full_description, issue_images, issue_types, forum_id, issue_member_details,
            is_published, issue_tags
        }).then(res => console.log("Posting Data ::: 😎", res)).catch(err => console.log(err))
    }
    // Add New Issue



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
                            borderWidth: 1,
                            borderColor: "#dfe2e4",
                            borderRadius: 25,
                            paddingLeft: 30,
                            width: "85%",
                            alignSelf: 'center'

                        }}>
                            <TextInput placeholder='Give a Title to the Issue' onChangeText={addTitle => setIssueTitle(addTitle)} />
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
                        <TextInput placeholder='Give a Description to the Issue' onChangeText={addDescription => setIssueDescription(addDescription)} />
                    </View>

                    <View style={{ flexDirection: "row" }}>

                        <View style={{ margin: 10, marginLeft: 30 }}>
                            <Text style={{ fontSize: 12, marginBottom: 10 }}>Add Photo</Text>
                            <TouchableOpacity activeOpacity={0.7}>
                                <View style={styles.camera_border}>
                                    <Image style={styles.camera} source={require('../assets/images/Others/camera.jpg')} />
                                </View>
                            </TouchableOpacity>
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
                        marginBottom: 2
                    }}>
                        <View style={{ width: '70%', alignSelf: "flex-start", marginLeft: 10, marginTop: 5 }}>
                                <Text style={{ color: "black", fontSize: 14 }}>Add Members</Text>
                        </View>
                        <View style={{
                            width: '30%',
                            backgroundColor: "#0080ff",
                            padding: 5,
                            marginLeft: -25,
                            borderRadius: 25,
                            alignSelf: "flex-end"
                        }}>
                        <Pressable onPress={() => setModVisible(true)}>
                            <Text style={{ textAlign: 'center', color: "white" }}>Add Member +</Text>
                        </Pressable>

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
                                            <Text style={{ textAlign: 'center', color: 'black', marginBottom: 30, fontSize: 20 }}>Add Member</Text>
                                            <View style={{ borderRadius: 19 }}>
                                                <View style={{ flexDirection: 'row', marginBottom: 7 }} >
                                                    <Image style={styles.icon_img} source={require('../assets/images/Others/person.png')} />
                                                    <TextInput style={styles.input_field_member} placeholder="First Name" />
                                                </View>
                                                <View style={{ flexDirection: 'row', marginBottom: 7 }}>
                                                    <Image style={styles.icon_img} source={require('../assets/images/Others/person.png')} />
                                                    <TextInput style={styles.input_field_member} placeholder="Last Name" />
                                                </View>
                                                <View style={{ flexDirection: 'row', marginBottom: 7 }}>
                                                    <Image style={styles.icon_img} source={require('../assets/images/Others/mobile.png')} />
                                                    <TextInput style={styles.input_field_member} placeholder="Mobile Number" />
                                                </View>
                                                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                                    <Text style={{ marginRight: 5 }}>Gender:</Text>
                                                    <View style={{ flexDirection: 'row', marginRight: 10 }}>
                                                        <Image style={{ width: 18, height: 18, tintColor: '#0f78f8', marginRight: 5, alignSelf: 'center' }} source={require('../assets/images/Others/radio1.png')} />
                                                        <Text style={{ alignSelf: 'center' }}>Female</Text>
                                                    </View>
                                                    <View style={{ flexDirection: 'row', marginRight: 10 }}>
                                                        <Image style={{ width: 18, height: 18, tintColor: 'gray', marginRight: 5, alignSelf: 'center' }} source={require('../assets/images/Others/radio2.png')} />
                                                        <Text style={{ alignSelf: 'center' }}>Male</Text>
                                                    </View>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <Image style={{ width: 18, height: 18, tintColor: 'gray', marginRight: 5, alignSelf: 'center' }} source={require('../assets/images/Others/radio2.png')} />
                                                        <Text style={{ alignSelf: 'center' }}>Other</Text>
                                                    </View>
                                                </View>
                                                <View style={{ flexDirection: 'row', marginBottom: 7 }}>
                                                    <TextInput style={styles.input_field2} placeholder="State" />
                                                    <Image style={styles.dropdown_img} source={require('../assets/images/Others/expand_more.png')} />
                                                </View>
                                                <View style={{ flexDirection: 'row', marginBottom: 7 }}>
                                                    <Image style={styles.icon_img} source={require('../assets/images/Others/college.png')} />
                                                    <TextInput style={styles.input_field_member} placeholder="College Name" />
                                                    <Image style={styles.dropdown_img} source={require('../assets/images/Others/expand_more.png')} />
                                                </View>
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



                    <View style={{
                        borderRadius: 20, borderWidth: 2, margin: 10, borderColor: '#e1e4e5'
                    }}>
                        {
                            isLoading ? <ActivityIndicator style={styles.loader} size='large' color="gray" /> : memberDetails.map((value, i) => {
                                return (<View style={{
                                    flexDirection: 'row', padding: 10
                                }}>
                                    <View style={{
                                        flexDirection: 'row', marginRight: 5, width: '50%',
                                        borderBottomWidth: 2, borderBottomColor: '#e1e4e5'
                                    }}>
                                        <View style={{ marginBottom: 15 }}>
                                            <Image style={styles.user_img} source={{ uri: value.profile_image[0] }} />
                                        </View>
                                        <View>
                                            <View style={{ justifyContent: 'space-between', flexDirection: "row" }}>
                                                <Text style={styles.user_name}>{value.first_name} {value.last_name}</Text>
                                            </View>
                                            <View>
                                                <View style={{ display: "flex", flexDirection: "row", marginBottom: 2 }}>
                                                    <Text style={{ fontSize: 9, color: "black" }}>College Name:</Text>
                                                    <Text style={{ fontSize: 9, color: "#444445", marginLeft: 2 }}>{value.college_name}</Text>
                                                </View>
                                                <View style={{ display: "flex", flexDirection: "row" }}>
                                                    <Text style={{ fontSize: 9, color: "black" }}>Designation:</Text>
                                                    <Text style={{ fontSize: 9, color: "#444445", marginLeft: 1 }}>{value.designation}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: 'row', width: '50%', borderBottomWidth: 2, borderBottomColor: '#e1e4e5' }}>
                                        <View style={{ marginBottom: 15 }}>
                                            <Image style={styles.user_img} source={{ uri: value.profile_image[0] }} />
                                        </View>
                                        <View>
                                            <View style={{ justifyContent: 'space-between', flexDirection: "row" }}>
                                                <Text style={styles.user_name}>{value.first_name} {value.last_name}</Text>
                                            </View>
                                            <View>
                                                <View style={{ display: "flex", flexDirection: "row", marginBottom: 1 }}>
                                                    <Text style={{ fontSize: 10, color: "black" }}>College Name:</Text>
                                                    <Text style={{ fontSize: 10, color: "#444445", marginLeft: 2 }}>{value.college_name}</Text>
                                                </View>
                                                <View style={{ display: "flex", flexDirection: "row" }}>
                                                    <Text style={{ fontSize: 10, color: "black" }}>Designation:</Text>
                                                    <Text style={{ fontSize: 10, color: "#444445", marginLeft: 2 }}>{value.designation}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                )
                            })
                        }
                    </View>
                    <View style={{
                        flexDirection: "row",
                        marginTop: 10,
                        width: '100%',
                        alignContent: 'space-between',
                        marginBottom: 20
                    }}>
                        <View style={{ width: '70%', alignSelf: "flex-start", marginLeft: 10, marginTop: 5 }}>
                            <Text style={{ color: "black", fontSize: 14 }}>Activities to Perform</Text>
                        </View>
                        <View style={{
                            width: '30%',
                            backgroundColor: "#0080ff",
                            padding: 5,
                            marginLeft: -25,
                            borderRadius: 25,
                            alignSelf: "flex-end"
                        }}>
                            <Pressable
                                //style={[styles.button_modal, styles.buttonOpen]}
                                onPress={() => setModalVisible(true)}>
                                <Text style={{ textAlign: 'center', color: "white" }}>Add Activity +</Text>
                            </Pressable>
                        </View>
                    </View>

                    {/* <View style={{ position: "absolute", zIndex: 0, marginTop: 450 }}>
                        <Image style={styles.progress_line} source={require('../assets/images/Others/line.png')} />
                    </View> */}

                    {isLoading ? <ActivityIndicator style={styles.loader} size='large' color="gray" /> : data.map((value, i) => {
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
                                        marginBottom: 5,
                                        width: 'auto',
                                        padding: 3,
                                        marginLeft: 'auto',
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
        fontSize: 16,
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
        //marginLeft: H * 0.050,
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
        padding: 10,
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
    },
    user_img: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginTop: 7,
        marginRight: 5


    },
    user_name: {
        color: "black",
        fontSize: 12
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
        width: width - 100,
        alignSelf: 'center',
        borderRadius: 10,
        borderColor: '#d9dcde',
        borderWidth: 1,
        padding: 4,
        paddingLeft: 50,
        position: 'relative'

    },
    input_field2: {
        width: width - 100,
        alignSelf: 'center',
        borderRadius: 10,
        borderColor: '#d9dcde',
        borderWidth: 1,
        padding: 4,
        paddingLeft: 10,
        position: 'relative',
        color: 'gray'

    },
    dropdown_img: {
        width: 30,
        height: 30,
        alignSelf: 'center',
        tintColor: '#0f78f8',
        marginLeft: 250,
        marginTop: 2,
        position: 'absolute'
    }


})
