import React, { useState } from 'react'
import { Alert, Modal, View, Text, StyleSheet, Image, TextInput, SafeAreaView, Pressable, Dimensions } from 'react-native';
const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;
export default function AddNewIssue() {
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
                                    <Text style={{ textAlign: 'center', color: 'black', marginBottom: H * 0.030, fontSize: H * 0.020 }}>Add Activity</Text>
                                    <TextInput style={styles.input_title} placeholder="Title" />
                                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                                        <TextInput style={styles.input_des} placeholder="Write Description" />
                                    </View>
                                </View>
                            </View>

                            <Pressable
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <View style={{ flexDirection: 'row', width: '100%', marginTop: H * 0.050 }}>
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
                borderRadius: 25,
                paddingLeft: H * 0.030,
                width: "85%",
                //height: H * 0.040,
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
            borderRadius: 25,
            padding: H * 0.005,
            paddingLeft: H * 0.025,
            width: "85%",
            color: 'gray',
            //height: H * 0.070,
            alignSelf: 'center',
            marginTop: H * 0.010,
            marginBottom: H * 0.010

        }}>
            <SafeAreaView>
                <TextInput onChangeText={onChangeText1} value={text1} />
            </SafeAreaView>
        </View>

        <View style={{ flexDirection: "row" }}>
            <View style={{ margin: H * 0.010, marginLeft: H * 0.030 }}>
                <Text style={{ fontSize: H * 0.015, color: "black", marginBottom: H * 0.010 }}>Add Photo</Text>
                <View style={styles.camera_border}>
                    <Image style={styles.camera} source={require('../assets/images/Others/camera.jpg')} />
                </View>
            </View>
            <View style={{
                width: "75%", borderWidth: 1,
                borderColor: "#dfe2e4",
                height: H * 0.090,
                marginTop: H * 0.010,
                borderRadius: 20,
                padding: H * 0.030,
                alignSelf: "center"
            }}>
                <Text>Preview of the Photo</Text>
            </View>
        </View>
        <View style={{
            flexDirection: "row",
            marginTop: H * 0.010,
            width: '100%',
            alignContent: 'space-between',
            marginBottom: H * 0.020
        }}>
            <View style={{ width: '60%', alignSelf: "flex-start", marginLeft: H * 0.010, marginTop: H * 0.005 }}>
                <Text style={{ color: "black", fontSize: H * 0.020 }}>Activities You will Perform</Text>
            </View>
            <View style={{
                width: '40%',
                backgroundColor: "#0080ff",
                padding: H * 0.007,
                marginLeft: H * -0.020,
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

        <View style={{ position: "absolute", zIndex: 0, marginTop: H * 0.460 }}>
            <Image style={styles.progress_line} source={require('../assets/images/Others/line.png')} />
        </View>

        <View style={{ flexDirection: "row" }}>
            <View>
                <Text style={styles.progress_stage}>1</Text>
            </View>

            <View style={{
                backgroundColor: "#a7e1cd",
                width: '78%',
                borderRadius:25,
                marginBottom: H*0.015,
                padding: H* 0.013,
                marginBottom: H * 0.009,
            }}>
                <View style={{
                flexDirection: "row",
                justifyContent:'space-between'}}>
                    <Text style={{fontSize:H* 0.017, color:'black'}}>Activity Title</Text>
                    <Text style={{fontSize:H* 0.014,
                     borderRadius:20,
                      backgroundColor:'green',
                       color:'white',
                       paddingLeft: H*0.007,
                       paddingRight:H*0.007,
                       marginBottom: H*0.005,
                        padding:H*0.002}}>Completed</Text>
                </View>
                <View>
                    <Text style={{fontSize: H*0.014}}>Lorem Ipsum is simply dummy text of the printing and showing the text and images.</Text>
                </View>
            </View>
        </View>

        <View style={{ flexDirection: "row" }}>
            <View>
                <Text style={styles.progress_stage}>2</Text>
            </View>

            <View style={{
                backgroundColor: "#a7e1cd",
                width: '78%',
                borderRadius:25,
                marginBottom: H*0.015,
                padding: H* 0.013,
                marginBottom: H * 0.009,
            }}>
                <View style={{
                flexDirection: "row",
                justifyContent:'space-between'}}>
                    <Text style={{fontSize:H* 0.017, color:'black'}}>Activity Title</Text>
                    <Text style={{fontSize:H* 0.014,
                     borderRadius:20,
                      backgroundColor:'orange',
                       color:'white',
                       paddingLeft: H*0.007,
                       paddingRight:H*0.007,
                       marginBottom: H*0.005,
                        padding:H*0.002}}>Pending</Text>
                </View>
                <View>
                    <Text style={{fontSize: H*0.014}}>Lorem Ipsum is simply dummy text of the printing and showing the text and images.</Text>
                </View>
            </View>
        </View>

        <View style={{ flexDirection: "row" }}>
            <View>
                <Text style={styles.progress_stage}>3</Text>
            </View>

            <View style={{
                backgroundColor: "#a7e1cd",
                width: '78%',
                borderRadius:25,
                marginBottom: H*0.015,
                padding: H* 0.013,
                marginBottom: H * 0.009,
            }}>
                <View style={{
                flexDirection: "row",
                justifyContent:'space-between'}}>
                    <Text style={{fontSize:H* 0.017, color:'black'}}>Activity Title</Text>
                    <Text style={{fontSize:H* 0.014,
                     borderRadius:20,
                      backgroundColor:'orange',
                       color:'white',
                       paddingLeft: H*0.007,
                       paddingRight:H*0.007,
                       marginBottom: H*0.005,
                        padding:H*0.002}}>Pending</Text>
                </View>
                <View>
                    <Text style={{fontSize: H*0.014}}>Lorem Ipsum is simply dummy text of the printing and showing the text and images.</Text>
                </View>
            </View>
        </View>

        


        <View style={styles.button}>
            <Text style={{
                width: '30%',
                color: "white",
                textAlign: "center",
                borderRadius: 15,
                fontSize: H * 0.017,
                marginRight: H * 0.040,
                padding: H * 0.010,
                marginLeft: H * 0.001,
                backgroundColor: "#14a3db",
                paddingTop: H * 0.007,
                paddingBottom: H * 0.007
            }}>Save Issue</Text>
            <Text style={{
                width: '30%',
                borderRadius: 15,
                fontSize: H * 0.017,
                color: "white",
                textAlign: "center",
                backgroundColor: "#14a3db",
                marginRight: H * 0.010,
                paddingTop: H * 0.007,
                paddingBottom: H * 0.007
            }}>Cancel</Text>
        </View>

    </View>)



}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#14a3db",
        paddingTop: H * 0.040,
        paddingBottom: H * 0.015,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        marginBottom: H * 0.010,
        width: '100%',
        justifyContent: 'flex-start'
    },
    left_arrow: {
        width: H * 0.025,
        height: H * 0.025,
        marginLeft: H * 0.015,
        marginRight: H * 0.015,
        alignSelf: 'center',
        tintColor: "white",
        marginTop: H * 0.002
    },
    header_text: {
        fontSize: H * 0.023,
        color: "white",
        alignSelf: 'center'
    },
    camera: {
        width: H * 0.035,
        height: H * 0.030,
        marginLeft: H * 0.005,
        marginTop: H * 0.010,
        alignSelf: "center"

    },
    camera_border: {
        borderRadius: 7,
        borderColor: "#eae5e5",
        borderWidth: 1,
        height: H * 0.060,
        width: H * 0.070
    },
    progress_line: {
        width: H * 0.005,
        height: H * 0.400,
        marginLeft: H * 0.050,
        tintColor: "#a7e1cd",
        marginTop: H * -0.025
    },
    progress_stage: {
        color: "white",
        backgroundColor: "#0a7ff3",
        height: H * 0.035,
        width: H * 0.035,
        marginLeft: H * 0.035,
        borderRadius: 5,
        paddingLeft: H * 0.014,
        paddingTop: H * 0.005,
        marginRight: H * 0.030,
        marginTop: H * 0.025,
        marginBottom: H * 0.020
    },
    button: {
        justifyContent:'center',
        alignItems:'center',
        flexDirection: "row",
        alignItems: 'center',
        //marginLeft: H * 0.050,
        width: '100%',
        marginTop: H * 0.080


    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: H * 0.015
    },
    modalView: {
        margin: H * 0.010,
        backgroundColor: "white",
        borderRadius: 20,
        padding: H * 0.040,
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
        marginBottom: H * 0.015,
        textAlign: "center"
    },
    input_title: {
        width: '100%',
        height: H * 0.075,
        borderRadius: 10,
        borderColor: '#d9dcde',
        borderWidth: 2,
        padding: H * 0.010,
        marginBottom: H * 0.005,
        alignSelf: 'center',
        justifyContent: "center",
    },
    input_des: {
        width: '100%',
        borderRadius: 10,
        borderColor: '#d9dcde',
        borderWidth: 2,
        padding: H * 0.035,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: "center",
    },
    save: {
        backgroundColor: '#0084ff',
        marginRight: H * 0.010,
        width: H * 0.090,
        textAlign: 'center',
        borderRadius: 10,
        padding: H * 0.003,
        color: '#ffff'

    },
    cancel: {
        backgroundColor: '#0084ff',
        width: H * 0.090,
        textAlign: 'center',
        borderRadius: 10,
        padding: H * 0.003,
        color: '#ffff'
    },
    

})
