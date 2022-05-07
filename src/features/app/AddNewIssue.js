import { Axios } from 'axios';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Alert, Modal, View, Text, StyleSheet, Image, TextInput, SafeAreaView, ScrollView, Pressable, Dimensions } from 'react-native';
const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;
export default function AddNewIssue() {
    const [activity_title, setActivityTitle] = useState('')
    const [activity_description, setActivityDescription] = useState('')
    const [modalVisible, setModalVisible] = useState(false);
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)


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
        const activityDetails = { activity_title, activity_description }
        console.log({ activity_title, activity_description })
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
                //console.log("response", response);
            })
        })
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
                                        <View>
                                            <View>
                                                <Text style={{ textAlign: 'center', color: 'black', marginBottom: 30, fontSize: 20 }}>Add Activity</Text>
                                                <TextInput style={styles.input_title} placeholder="Title" onChangeText={newTitle => setActivityTitle(newTitle)} />
                                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                                    <TextInput style={styles.input_des} placeholder="Write Description" onChangeText={newDescription => setActivityDescription(newDescription)} />
                                                </View>
                                            </View>
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
                            <SafeAreaView>
                                <TextInput placeholder='Title' />
                            </SafeAreaView>
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
                        <SafeAreaView>
                            <TextInput placeholder='Description' />
                        </SafeAreaView>
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
                                        marginBottom: 5,
                                        width: 'auto',
                                        padding: 3,
                                        marginLeft:'auto',
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

                    {/* <View style={{ flexDirection: "row" }}>
                <View>
                    <Text style={styles.progress_stage}>2</Text>
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
                        <Text style={{ fontSize: 14, color: 'black' }}>Activity Title</Text>
                        <Text style={{
                            fontSize: 12,
                            borderRadius: 20,
                            backgroundColor: 'orange',
                            color: 'white',
                            paddingLeft: 7,
                            paddingRight: 7,
                            marginBottom: 5,
                            padding: 2
                        }}>Pending</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 12 }}>Lorem Ipsum is simply dummy text of the printing and showing the text and images.</Text>
                    </View>
                </View>
            </View> */}

                    {/* <View style={{ flexDirection: "row" }}>
                <View>
                    <Text style={styles.progress_stage}>3</Text>
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
                        <Text style={{ fontSize: 14, color: 'black' }}>Activity Title</Text>
                        <Text style={{
                            fontSize: 12,
                            borderRadius: 20,
                            backgroundColor: 'orange',
                            color: 'white',
                            paddingLeft: 7,
                            paddingRight: 7,
                            marginBottom: 5,
                            padding: 2
                        }}>Pending</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 12 }}>Lorem Ipsum is simply dummy text of the printing and showing the text and images.</Text>
                    </View>
                </View>
            </View> */}




                    <View style={styles.button}>
                        <Text style={{
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
        padding: 40,
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
        height: 70,
        borderRadius: 10,
        borderColor: '#d9dcde',
        borderWidth: 2,
        padding: 10,
        marginBottom: 5,
        alignSelf: 'center',
        justifyContent: "center",
    },
    input_des: {
        width: '100%',
        borderRadius: 10,
        borderColor: '#d9dcde',
        borderWidth: 2,
        padding: 35,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: "center",
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
