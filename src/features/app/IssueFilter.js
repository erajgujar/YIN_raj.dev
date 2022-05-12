import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Dimensions, TouchableOpacity, Modal, Pressable, ScrollView } from 'react-native';
import DropDown from './DropDown';
import axios from 'axios';
//import SelectDropdown from 'react-native-select-dropdown'
const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;
const { width, height } = Dimensions.get('window')

const issues = [{ id: 1, name: 'All' }, { id: 2, name: 'Completed' }, { id: 3, name: 'Live' }, { id: 4, name: 'Droped' }, { id: 4, name: 'External' }]

export default function IssueFilter() {
    const [selectedItem, setSelectedItem] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [issue, setIssue] = useState([])

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

    const addIssue = () => {
        axios.post("https://stg-yin-talk-api.foxberry.link/v1/issue/create", {
            college_code, issue_title, issue_description, issue_full_description, issue_images, issue_types, forum_id, issue_member_details,
            is_published, issue_tags
        }).then(res => console.log("Posting Data ::: 😎", res)).catch(err => console.log(err))
    }
    // Add New Issue

    const onSelect = (item) => {
        setSelectedItem(item)
    }


    async function getIssues() {
        setLoading(true)
        const response = await axios.get("https://stg-yin-talk-api.foxberry.link/v1/issue/list/forum/FORUM_COL0001234_BOYS")
        setIssue(response.data)
        setLoading(false)
        //console.log(response.data)
    }

    useEffect(() => {
        getIssues()
    }, [])

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

            <View>

                <View style={styles.issue_wrap}>
                    <View style={{
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        flexDirection: 'row'
                    }}>
                        <Image style={styles.menu_icon_img} source={require('../assets/images/Others/menu-icon.png')} />


                        <Text style={{
                            textAlign: 'left',
                            fontSize: 18,
                            color: '#ffff',
                            alignSelf: 'flex-start',
                            width: 70,
                            marginRight: 'auto'
                        }}>Issues</Text>

                        <Pressable onPress={() => setModVisible(true)}>
                            <Text style={styles.Add_issue}>Add New Issue + </Text>
                        </Pressable>
                    </View>

                    <View style={{
                        width: '95%',
                        alignSelf: 'flex-start',
                        flexDirection: 'row',
                        marginTop: 5,
                        marginBottom: 155

                    }}>
                        <TextInput style={styles.input_issue} placeholder='Search by Categories of Issues' />
                        <Image style={styles.search_img} source={require('../assets/images/Others/search.png')} />
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
                                            <TextInput style={styles.input_des} placeholder='Enter Issue Full Description' onChangeText={fullDescription => setIssueFullDescription(fullDescription)} />
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


                {isLoading ? <Text>Loading please wait</Text> : issue.map((value, i) => {
                    return (<View key={String(i)} style={{
                        position: 'relative',
                        zIndex: 1,
                        top: 190,
                    }}>
                        <View>
                            <Image style={styles.river_cleaning_img} source={{ uri: value.issue_images[0] }} />
                            <View style={{ position: 'absolute', top: 10 }}>
                                <Text style={{
                                    marginLeft: 30,
                                    backgroundColor: '#515254',
                                    padding: 3,
                                    width: 'auto',
                                    color: 'white',
                                    borderRadius: 20,
                                    textAlign: 'center',
                                    fontSize: 10
                                }}>{value.updated_at}</Text>
                                <Text style={{
                                    marginLeft: 30,
                                    backgroundColor: 'green',
                                    padding: 1,
                                    marginTop: 6,
                                    width: 50,
                                    color: 'white',
                                    borderRadius: 20,
                                    textAlign: 'center',
                                    fontSize: 10
                                }}>{value.issue_types}</Text>
                            </View>
                        </View>

                        <Text style={{ marginLeft: 15, marginTop: 3, color: 'black' }}>{value.issue_title}</Text>
                    </View>
                    )
                })
                }

                <View style={{
                    position: 'absolute',
                    zIndex: 1,
                    top: 90,
                    marginLeft: 200
                }}>
                    <DropDown
                        value={selectedItem}
                        data={issues}
                        onSelect={onSelect}
                    />
                </View>



                <View>
                    <Image style={{
                        width: '95%',
                        height: 160,
                        alignSelf: 'center',
                        borderRadius: 20
                    }} source={require('../assets/images/Others/forum-des.png')} />
                    <Text style={{
                        marginLeft: 20,
                        backgroundColor: '#515254',
                        padding: 3,
                        width: 90,
                        color: 'white',
                        position: 'absolute',
                        borderRadius: 20,
                        textAlign: 'center',
                        fontSize: 10,
                        marginTop: 10
                    }}>5th January 2022</Text>
                </View>
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ marginLeft: 15, marginTop: 15, fontSize: 17, color: 'black' }}>Forum Name:</Text>
                        <Text style={{ marginLeft: 15, marginTop: 15, fontSize: 17 }}>Grievence Corner</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ marginLeft: 15, marginTop: 5, fontSize: 17, color: 'black' }}>College Name:</Text>
                        <Text style={{ marginLeft: 15, marginTop: 5, fontSize: 17 }}>MIT College</Text>
                    </View>
                </View>

            </View>




        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'

    },
    issue_wrap: {
        width: '100%',
        backgroundColor: '#4083f6',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        justifyContent: 'space-between',
        alignItems: 'stretch',
        position: 'absolute',
        height: 'auto',
        zIndex: 0,
        padding: 7,
        paddingTop: 10,
        paddingBottom: 15

    },
    menu_icon_img: {
        height: 30,
        width: 35,
        marginRight: 7,
        alignSelf: 'flex-start',
        tintColor: '#ffff'
    },
    Add_issue: {
        borderWidth: 2,
        borderRadius: 20,
        padding: 4,
        color: '#ffff',
        borderColor: '#ffff',
        fontSize: 16,
        width: 155,
        alignSelf: 'flex-end',
        textAlign: 'center'

    },
    river_cleaning_img: {
        width: '95%',
        height: 170,
        borderRadius: 20,
        alignSelf: 'center'
    },
    search_img: {
        width: 20,
        height: 20,
        marginLeft: -50,
        marginTop: 25
    },
    input_issue: {
        padding: 15,
        margin: 10,
        borderWidth: 2,
        borderRadius: 20,
        width: W - 30,
        height: 45,
        borderColor: '#ffff',
        alignSelf: 'center',
        color: 'gray',
        backgroundColor: '#ffff',
        fontSize: 15,
        marginBottom: 5

    },
    filter_img: {
        width: 15,
        height: 17,
        alignSelf: 'flex-end',
        marginRight: 15,
        tintColor: '#ffff',
        marginTop: 10,
        marginBottom: 90

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
    // dropdown_button_text: {
    //     fontSize: 10,

    //     padding: 0
    // },
    // dropdown_button: {
    //     width: 100,
    //     padding: 0
    // },
    // dropdown_row: {
    //     padding: 5
    // },
    // dropdown_row_text: {
    //     fontSize: 13,
    //     padding: 5
    // },
    // dropdown_menu: {
    //     backgroundColor: 'black',
    //     color: 'white',
    //     borderWidth: 2,
    //     padding: 5
    // },
    // text: {
    //     width: H * 0.045,
    //     height: H * 0.107,
    //     alignSelf: 'flex-end',
    //     marginRight: H * 0.015,
    //     marginTop: H * 0.010,
    //     marginBottom: H * 0.090,
    //     zIndex:1

    // }
})

{/* <View>
                <SelectDropdown
                    buttonTextStyle={styles.dropdown_button_text}
                    buttonStyle={styles.dropdown_button}
                    rowStyle={styles.dropdown_row}
                    rowTextStyle={styles.dropdown_row_text}
                    dropdownIconPosition="right"

                    data={Issues}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item
                    }}
                />
            </View> */}





