import React, { useState } from 'react'
import { Alert, Modal, View, Text, StyleSheet, Image, TextInput, SafeAreaView, Pressable } from 'react-native';
export default function AddActivity() {
    const [text, onChangeText] = useState('Give a Title to the Issue');
    const [text1, onChangeText1] = useState('Give a description to the Issue');
    const [modalVisible, setModalVisible] = useState(false);
    return (<View>
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
                                    <Text style={{ textAlign: 'center', color: 'black', marginBottom: 30, fontSize:20    }}>Add Activity</Text>
                                   <TextInput style={styles.input_title} placeholder="Title" />
                                   <View style={{display:'flex', flexDirection:'row'}}>
                                   <Image style={styles.placeholder_icon} source={require('../assets/images/Others/message_des.png')}/>
                                   <TextInput style={styles.input_des} placeholder="Write Description" />
                                   </View>
                                </View>
                            </View>

                            <Pressable
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <View style={{ display: 'flex', flexDirection: 'row', width: '100%', marginTop: 50 }}>
                                    <Text style={styles.save}>Save</Text>
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
                borderRadius: 20,
                paddingLeft: 30,
                width: "85%",
                height: 40,
                alignSelf: 'center'

            }}>
                <SafeAreaView>
                    <TextInput onChangeText={onChangeText} value={text} />
                </SafeAreaView>
            </View>
        </View>
        <View style={{
            borderWidth: 1,
            borderColor: "#dfe2e4",
            borderRadius: 20,
            padding: 10,
            paddingLeft: 25,
            width: "85%",
            height: 70,
            alignSelf: 'center',
            marginTop: 10

        }}>
            <SafeAreaView>
                <TextInput onChangeText={onChangeText1} value={text1} />
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
                width: "63%", borderWidth: 1,
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
            display: "flex",
            flexDirection: "row",
            marginTop: 10,
            width: '100%',
            alignContent: 'space-between',
            marginBottom: 20
        }}>
            <View style={{ width: '60%', alignSelf: "flex-start", marginLeft: 10, marginTop: 5 }}>
                <Text style={{ color: "black", fontSize: 16 }}>Activities You will Perform</Text>
            </View>
            <View style={{
                width: '40%',
                backgroundColor: "#0080ff",
                padding: 7,
                marginLeft: -20,
                borderRadius: 15,
                alignSelf: "flex-end"
            }}>
                <Pressable
                    style={[styles.button_modal, styles.buttonOpen]}
                    onPress={() => setModalVisible(true)}>
                    <Text style={{ textAlign: 'center', color: "white" }}>Add New Activity +</Text>
                </Pressable>


            </View>
        </View>
        <View style={{ position: "absolute", zIndex: 0, marginTop: 380 }}>
            <Image style={styles.progress_line} source={require('../assets/images/Others/line.png')} />
        </View>
        <View style={{ display: "flex", flexDirection: "row", width: '100%' }}>
            <Text style={styles.progress_stage}>1</Text>
            <View style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "#a7e1cd",
                width: -40,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                marginBottom: 9,
                width: '70%'

            }}>
                <Text style={styles.progress_title}>Activity Title</Text>
                <Text style={styles.progress_status_completed}>Completed</Text>
            </View>
        </View>
        <Text style={styles.progress_text}>Lorem Ipsum is simply dummy text of the printing and showing</Text>

        <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.progress_stage}>2</Text>
            <View style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "#a7e1cd",
                width: -40,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                marginBottom: 20,
                width: '70%'

            }}>
                <Text style={styles.progress_title}>Activity Title</Text>
                <Text style={styles.progress_status_pending}>Pending</Text>
            </View>
        </View>
        <Text style={styles.progress_text}>Lorem Ipsum is simply dummy text of the printing and showing</Text>

        <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.progress_stage}>3</Text>
            <View style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "#a7e1cd",
                width: -40,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                marginBottom: 9,
                width: '70%'

            }}>
                <Text style={styles.progress_title}>Activity Title</Text>
                <Text style={styles.progress_status_pending}>Pending</Text>
            </View>
        </View>
        <Text style={styles.progress_text}>Lorem Ipsum is simply dummy text of the printing and showing</Text>

        <View style={styles.button}>
            <Text style={{
                width: '30%',
                color: "white",
                textAlign: "center",
                borderRadius: 15,
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
                borderRadius: 15,
                fontSize: 15,
                color: "white",
                textAlign: "center",
                backgroundColor: "#14a3db",
                marginRight: 10,
                paddingTop: 7,
                paddingBottom: 7
            }}>Cancel</Text>
        </View>
    </View>)



}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#14a3db",
        paddingTop: 30,
        paddingBottom: 15,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        marginBottom: 17,
        width: '100%'
    },
    left_arrow: {
        width: 25,
        height: 25,
        marginLeft: 15,
        marginRight: 15,
        tintColor: "white",
        marginTop: 2
    },
    header_text: {
        fontSize: 20,
        color: "white"
    },
    camera: {
        width: 35,
        height: 30,
        marginLeft: 5,
        marginTop: 10,
        alignSelf: "center"

    },
    camera_border: {
        borderRadius: 7,
        borderColor: "#eae5e5",
        borderWidth: 1,
        height: 60,
        width: 70
    },
    progress_line: {
        width: 5,
        height: 325,
        marginLeft: 50,
        tintColor: "#a7e1cd",
        marginTop: -25
    },
    progress_stage: {
        color: "white",
        backgroundColor: "#0a7ff3",
        height: 25,
        width: 35,
        marginLeft: 35,
        borderRadius: 5,
        paddingLeft: 14,
        paddingTop: 2,
        marginRight: 30,
        marginTop: 25,
        marginBottom: 20
    },
    progress_title: {
        color: "black",
        marginLeft: 10,
        fontSize: 12.5,
        marginTop: 7,


    },
    progress_status_completed: {
        borderRadius: 10,
        color: "white",
        backgroundColor: "green",
        paddingLeft: 10,
        paddingRight: 10,
        height: 22,
        marginLeft: 90,
        marginTop: 6,
        width: '35%',
        textAlign: 'center'

    },
    progress_status_pending: {
        borderRadius: 10,
        color: "white",
        backgroundColor: "#ff4500",
        paddingLeft: 10,
        paddingRight: 10,
        height: 22,
        marginLeft: 90,
        marginTop: 6,
        width: '35%',
        textAlign: 'center'

    },
    progress_text: {
        marginLeft: 100,
        backgroundColor: "#a7e1cd",
        marginRight: 17.5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingLeft: 5,
        paddingBottom: 5,
        marginTop: -35,
        marginBottom: 9
    },
    button: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        marginLeft: 50,
        width: '100%',
        marginTop: 20


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
        width: '90%',
        height: 35,
        borderRadius: 10,
        borderColor: '#d9dcde',
        borderWidth: 2,
        padding: 10,
        marginBottom: 5,
        alignSelf: 'center',
        alignContent: "center",
        justifyContent: "center",
    },
    input_des: {
        width: '100%',
        borderRadius: 10,
        borderColor: '#d9dcde',
        borderWidth: 2,
        padding: 35,
        alignItems:'center',
        alignSelf: 'center',
        justifyContent: "center",
        marginLeft:25
    },
    save: {
        backgroundColor: '#0084ff',
        marginRight: 10,
        width: 60,
        textAlign: 'center',
        borderRadius: 10,
        padding: 3,
        color: '#ffff'

    },
    cancel: {
        backgroundColor: '#0084ff',
        width: 60,
        textAlign: 'center',
        borderRadius: 10,
        padding: 3,
        color: '#ffff'
    },
    placeholder_icon:{
        padding: 10,
        marginRight:-52,
        marginTop:43,
        height: 20,
        width: 20,
        tintColor:'gray',
        resizeMode: 'stretch',
        alignItems: 'center'
    }
    
})
