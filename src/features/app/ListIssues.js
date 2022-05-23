import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet, TextInput, Modal, Pressable, ActivityIndicator, SafeAreaView, ScrollView } from 'react-native';
const { width, height } = Dimensions.get('window')


export default function ListIssues() {
    const [isLoading, setLoading] = useState(false)
    const [issues, setIssues] = useState([])

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

    const [dropdownVisible, setDropdownVisible] = useState(true);
    const [All, setAll] = useState('All')
    const [Live, setLive] = useState('Live')
    const [Completed, setCompleted] = useState('Completed')
    const [External, setExternal] = useState('External')
    const [Dropped, setDroped] = useState('Dropped')

    const addIssue = () => {
        axios.post("https://stg-yin-talk-api.foxberry.link/v1/issue/create", {
            college_code, issue_title, issue_description, issue_full_description, issue_images, issue_types, forum_id, issue_member_details,
            is_published, issue_tags
        }).then(res => console.log("Posting Data ::: 😎", res)).catch(err => console.log(err))
    }
    // Add New Issue
    async function getIssues() {  
        setLoading(true)
        const response = await axios.get("https://stg-yin-talk-api.foxberry.link/v1/issue/list/forum/FORUM_COL0001234_BOYS")
        setIssues(response.data)
        setLoading(false)
        console.log(response.data)
        setDropdownVisible(!dropdownVisible)
    }
    async function getIssuesAll() {   
        setLoading(true)
        const response = await axios.get("https://stg-yin-talk-api.foxberry.link/v1/issue/list/forum/FORUM_COL0001234_BOYS")
        setIssues(response.data)
        setLoading(false)
        console.log(response.data)
        setDropdownVisible(!dropdownVisible)
    }

    async function getIssuesLive() {      
        setLoading(true)
        const response = await axios.get("https://stg-yin-talk-api.foxberry.link/v1/issue/list/forum/FORUM_COL0001234_BOYS?issue_type=LIVE")
        setIssues(response.data)
        setLoading(false)
        console.log(response.data)
        setDropdownVisible(!dropdownVisible)
    }

    async function getIssuesCompleted() {    
        setLoading(true)
        const response = await axios.get("https://stg-yin-talk-api.foxberry.link/v1/issue/list/forum/FORUM_COL0001234_BOYS?issue_type=COMPLETED")
        setIssues(response.data)
        setLoading(false)
        console.log(response.data)
        setDropdownVisible(!dropdownVisible)
    }

    async function getIssuesDropped() {     
        setLoading(true)
        const response = await axios.get("https://stg-yin-talk-api.foxberry.link/v1/issue/list/forum/FORUM_COL0001234_BOYS?issue_type=DROPPED")
        setIssues(response.data)
        setLoading(false)
        console.log(response.data)
        setDropdownVisible(!dropdownVisible)
    }

    async function getIssuesExternal() { 
        setLoading(true)
        const response = await axios.get("https://stg-yin-talk-api.foxberry.link/v1/issue/list/forum/FORUM_COL0001234_BOYS?issue_type=EXTERNAL")
        setIssues(response.data)
        setLoading(false)
        console.log(response.data)
        setDropdownVisible(!dropdownVisible)
    }
    
    useEffect(() => {
        
        getIssues()
        if(All){
            getIssuesAll()
        }else if(Live){
            getIssuesLive()
        }else if(Completed){
            getIssuesCompleted()
        }else if(Dropped){
            getIssuesDropped()
        }else if(External){
            getIssuesExternal()
        }else{
            console.log('No Selection')
        }
          
    }, [])

    return (
        <SafeAreaView>
            <ScrollView>

                <View style={{ width: width, justifyContent: 'flex-start' }}>

                    <View style={styles.issue_wrap}>
                        <View style={{
                            flex: 1,
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            flexDirection: 'row'
                        }}>
                            <Image style={styles.menu_icon_img} source={require('../assets/images/Others/menu-icon.png')} />
                            <Text style={{
                                textAlign: 'left',
                                marginTop: 5,
                                fontSize: 15,
                                color: '#ffff',
                                flexBasis: 70,
                                marginRight: 'auto'
                            }}>Issues</Text>
                            <Pressable onPress={() => setModVisible(true)}>
                                <Text style={styles.Add_issue}>Create New Issue + </Text>
                            </Pressable>

                        </View>

                        <View style={{
                            flex: 1,
                            width: '95%',
                            alignSelf: 'center',
                            flexDirection: 'row',
                            marginTop: -50

                        }}>
                            <TextInput style={styles.input_issue} placeholder='Search by Categories of Issues' />
                            <Image style={styles.search_img} source={require('../assets/images/Others/search.png')} />
                        </View>

                        <View>
                            <Pressable onPress={() => setDropdownVisible(!dropdownVisible)}>
                                <Image style={styles.filter_img} source={require('../assets/images/Others/filter.png')} />
                            </Pressable>
                        </View>
                    </View>

                    {/* modal for filter options */}


                    <View style={styles.centeredViewDropdown}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={dropdownVisible}                          
                        >
                            <View style={styles.centeredViewDropdown}>
                                <View style={styles.modalViewDropdown}> 
                                {/* <Pressable onPress={() => setModalVisible(!modalVisible)}>
                                <Image  source={require('../assets/images/Others/close.png')}/>                            
                                </Pressable>                             */}
                                    
                                    <View style={{backgroundColor:'gray'}}>
                                    <TouchableOpacity onPress={getIssuesAll}>
                                    <Text style={styles.dropdown_text}>{All}</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={getIssuesLive}>
                                    <Text style={styles.dropdown_text}>{Live}</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={getIssuesCompleted}>
                                    <Text style={styles.dropdown_text}>{Completed}</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={getIssuesExternal}>
                                    <Text style={styles.dropdown_text}>{External}</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={getIssuesDropped}>
                                    <Text style={styles.dropdown_text}>{Dropped}</Text>
                                    </TouchableOpacity>                                                                                                                                              
                                    </View>
                                </View>
                            </View>
                        </Modal>
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
                                            <Text style={{ textAlign: 'center', color: 'black', marginBottom: 30, fontSize: 20 }}>Create New Issue</Text>
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

                    <View>
                        {isLoading ? <ActivityIndicator size='large' color="gray" /> : issues.map((value, i) => {
                            return (<View key={String(i)} style={{
                                position: 'relative',
                                zIndex: 1,
                                top: 145,
                                height: height / 5
                            }}>
                                <View>
                                    <Image style={styles.river_cleaning_img} source={{ uri: value.issue_images[0] }} />
                                    <View style={{ position: 'absolute', top: 10 }}>
                                        <Text style={{
                                            marginLeft: 20,
                                            backgroundColor: '#515254',
                                            padding: 3,
                                            width: 'auto',
                                            color: 'white',
                                            borderRadius: 20,
                                            textAlign: 'center',
                                            fontSize: 10
                                        }}>{value.updated_at}</Text>
                                        <Text style={{
                                            marginLeft: 20,
                                            backgroundColor: 'red',
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

                                <Text style={{ marginLeft: 15, marginTop: 5, color: 'black' }}>{value.issue_title}</Text>
                            </View>
                            )
                        })}

                    </View>

                    <View >
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginLeft: 15, marginTop: 15, fontSize: 15, color: 'black' }}>Forum Name:</Text>
                            <Text style={{ marginLeft: 15, marginTop: 15 }}>Grievence Corner</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginLeft: 15, marginTop: 5, fontSize: 15, color: 'black' }}>College Name:</Text>
                            <Text style={{ marginLeft: 15, marginTop: 5 }}>MIT College</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    issue_wrap: {
        width: '100%',
        height: 150,
        backgroundColor: '#4083f6',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        position: 'absolute',
        zIndex: 0,
        padding: 7

    },
    menu_icon_img: {
        height: 35,
        width: 30,
        // marginRight: 7,
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
    river_cleaning_img: {
        width: '95%',
        height: 115,
        borderRadius: 30,
        alignSelf: 'center'
    },
    search_img: {
        width: 20,
        height: 20,
        marginLeft: -35,
        marginTop: 9
    },
    input_issue: {
        padding: 7,
        borderWidth: 2,
        borderRadius: 20,
        width: '100%',
        height: 35,
        borderColor: '#ffff',
        color: 'gray',
        backgroundColor: '#ffff',
        fontSize: 15,
        marginBottom: 15

    },
    filter_img: {
        width: 15,
        height: 17,
        alignSelf: 'flex-end',
        marginRight: 15,
        tintColor: '#ffff',
        marginTop: -40
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
    },
    centeredViewDropdown: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        marginTop: 10,
        
        
    },
    modalViewDropdown: {
        position:'relative',
        top:90,
        left:115,
        width: '20%',
        margin: 10,
        borderwidth: 2,
        backgroundColor: "gray",
        borderRadius: 5,
        padding: 4,
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
    dropdown_text:{
        fontSize:12,
        color:'white',
        padding:2
    }
})
