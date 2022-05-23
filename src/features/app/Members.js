import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, Modal, Pressable, ScrollView, TextInput, Dimensions, ActivityIndicator } from 'react-native';
import axios from 'axios';
const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;
const { width, height } = Dimensions.get('window');
export default function Members() {

    const memberDetailed_list = async () => {
        setLoading(true)
        const response = await axios.get("https://stg-yin-talk-api.foxberry.link/v1/issue/get/issue/member-details/ISSUECOL_120223_RIVERCLEANINGD")
        setMemberDetails(response.data)
        setLoading(false)
        console.log(response.data)
    }
    const [modVisible, setModVisible] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [memberDetails, setMemberDetails] = useState([])

    const [issue_id, setIssueId] = useState('')
    const [yin_id, setYinId] = useState('')
    const [designation, setDesignation] = useState('')

    const addMember = ()=>{
        axios.post("https://stg-yin-talk-api.foxberry.link/v1/forum/add/forum/member" , {
            issue_id,
             yin_id,
            designation
        }).then(res => console.log("Posting Data ::: 😎", res)).catch(err => console.log(err))
    }

    // add member POST API Not Implemented

    useEffect(() => {
        memberDetailed_list()
    }, [])

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <View style={styles.container}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.left_arrow} source={require('../assets/images/left.png')} />
                            <Text style={styles.header_text}>Members</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Pressable onPress={() => setModVisible(true)}>
                                <Text style={styles.Add_Member}>Add New Member + </Text>
                            </Pressable>
                            <Image style={styles.filter_img} source={require('../assets/images/Others/filter.png')} />
                        </View>
                    </View>
                    {/* Get Members details using issue id */}

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
                                                    <Text style={{marginRight:5}}>Gender:</Text>
                                                    <View style={{ flexDirection: 'row',  marginRight:10}}>
                                                        <Image style={{width:18, height:18, tintColor: '#0f78f8', marginRight:5, alignSelf:'center' }} source={require('../assets/images/Others/radio1.png')} />
                                                        <Text style={{alignSelf:'center'}}>Female</Text>
                                                    </View>
                                                    <View style={{ flexDirection: 'row' , marginRight:10 }}>
                                                        <Image style={{width:18, height:18, tintColor:'gray',  marginRight:5, alignSelf:'center'}} source={require('../assets/images/Others/radio2.png')} />
                                                        <Text style={{alignSelf:'center'}}>Male</Text>
                                                    </View>
                                                    <View style={{ flexDirection: 'row'}}>
                                                        <Image style={{width:18, height:18, tintColor:'gray',  marginRight:5, alignSelf:'center'}} source={require('../assets/images/Others/radio2.png')} />
                                                        <Text style={{alignSelf:'center'}}>Other</Text>
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

                    {
                        isLoading ? <ActivityIndicator style={styles.loader} size='large' color="gray"/> : memberDetails.map((value, i) => {
                            return (<View key={String(i)} style={{
                                display: "flex",
                                width: '100%',
                                borderBottomWidth: 2,
                                borderColor: "#ebebf2",
                                flexDirection: "row"
                            }}>
                                <View style={{ flexDirection: "row", marginBottom: 15 }}>
                                    <Image style={styles.user_img} source={require('../assets/images/Others/user.png')}/>
                                </View>
                                <View style={{ marginTop: 10 }}>
                                    <View style={{ justifyContent: 'space-between', flexDirection: "row" }}>
                                        <Text style={styles.user_name}>{value.name}</Text>
                                        <View style={{ flexDirection: "row" }}>
                                            <Image style={{
                                                height: 17,
                                                width: 15,
                                                alignSelf: 'center',
                                                marginLeft: 160
                                            }} source={require('../assets/images/Others/call.png')} />
                                            <Image style={{
                                                height: 20,
                                                width: 15,
                                                alignSelf: 'center',
                                                marginLeft: 8,
                                                tintColor: "#14a3db"
                                            }} source={require('../assets/images/Others/delete.png')} />
                                        </View>
                                    </View>
                                    <View>
                                        <View style={{ display: "flex", flexDirection: "row", marginBottom: 7 }}>
                                            <Text style={{ fontSize: 10, color: "black" }}>College Name:</Text>
                                            <Text style={{ fontSize: 10, color: "#444445", marginLeft: 2 }}>{value.college_name}</Text>
                                        </View>
                                        <View style={{ display: "flex", flexDirection: "row" }}>
                                            <Text style={{ fontSize: 10, color: "black" }}>Designation:</Text>
                                            <Text style={{ fontSize: 10, color: "#444445", marginLeft: 2 }}>{value.designation}</Text>
                                        </View>
                                    </View>
                                    <View style={{ display: "flex", flexDirection: "row" }}>
                                        <View style={{ display: "flex", flexDirection: "row" }}>
                                            <Text style={{ fontSize: 10, color: "black" }}>Mobile No:</Text>
                                            <Text style={{ fontSize: 10, color: "#444445", marginLeft: 2 }}>{value.mobile}</Text>
                                        </View>
                                        <View style={{ display: "flex", flexDirection: "row" }}>
                                            <Text style={{ fontSize: 10, color: "black", marginLeft: 45 }}>Email Id:</Text>
                                            <Text style={{ fontSize: 10, color: "#444445", marginLeft: 2 }}>{value.email}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            )
                        })
                    }


                    <View style={{
                        justifyContent: 'space-around',
                        flexDirection: "row",
                        maxWidth: '100%',
                        marginTop: 20
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
        flexDirection: "row",
        backgroundColor: "#14a3db",
        paddingTop: 30,
        paddingBottom: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        marginBottom: 9
    },
    left_arrow: {
        width: 20,
        height: 15,
        marginLeft: 15,
        marginRight: 5,
        tintColor: "white",
        marginTop: 2,
        alignSelf: 'center'
    },
    Add_Member: {
        borderWidth: 2,
        borderRadius: 20,
        padding: 3,
        color: '#ffff',
        borderColor: '#ffff',
        fontSize: 14,
        width: 'auto',
        alignSelf: 'center',
        textAlign: 'center',
        marginRight: 17

    },
    filter_img: {
        width: 15,
        height: 17,
        alignSelf: 'center',
        marginRight: 15,
        tintColor: '#ffff',


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
    },
    header_text: {
        fontSize: 19,
        color: "white",
        alignSelf: 'center'
    },
    user_img: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 5,
        marginTop: 15,
        marginRight: 5


    },
    user_name: {
        color: "black"
    },
    activity_img: {
        width: 35,
        height: 35,
        borderRadius: 50,
        borderColor: "#8cc5e8",
        marginRight: 2

    },
    activity_text: {
        fontSize: 15,
        color: "black",
        marginRight: 15,
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
        borderColor: 'black',
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
        height: 30,
        width: 90,
        alignSelf: 'center',
        textAlign: 'center',
        borderRadius: 20,
        padding: 3,
        color: '#ffff'

    },
    cancel: {
        backgroundColor: '#0084ff',
        width: 90,
        alignSelf: 'center',
        textAlign: 'center',
        borderRadius: 20,
        padding: 3,
        height: 30,
        color: '#ffff'
    }
})