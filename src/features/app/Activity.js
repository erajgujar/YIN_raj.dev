import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';
export default class Activity extends Component {
    constructor() {
        super()
        this.state = {
            data: ['Mark As Complete', 'Mark As Abondoned', 'As for Help'],
            checked: 0,
            text: "input text"
        }
    }

    onChangeText() {
        this.serState({ text: "Write Your Comments" })
    }
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Image style={styles.left_arrow} source={require('../assets/images/left.png')} />
                    <Text style={styles.header_text}>Update Activity</Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.radio_img} source={require('../assets/images/Others/Radio_checked.png')} />
                    <Text style={styles.progress_btn}>1</Text>
                    <View style={styles.activity_card}>
                        <Text style={{ fontSize: 12, color: "black", padding: 4 }}>Activity Title</Text>
                        <Text style={{ fontSize: 12, padding: 4 }}>Lorem Ipsum is simply dummy text of the printing </Text>
                    </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.radio_img} source={require('../assets/images/Others/Radio_unchecked.png')} />
                    <Text style={styles.progress_btn}>2</Text>
                    <Image style={{width:3, height: 210,
                     marginLeft:-27,
                      marginTop:-100,
                      marginRight:22,
                      zIndex:0,
                      tintColor:"#11abe9"
                      }} source={require('../assets/images/Others/line.png')}/>
                    <View style={styles.activity_card}>
                        <Text style={{ fontSize: 12, color: "black", padding: 4 }}>Activity Title</Text>
                        <Text style={{ fontSize: 12, padding: 4}}>Lorem Ipsum is simply dummy text of the printing </Text>
                    </View>
                </View>
           
                <View style={styles.radio_btn}>
                    {
                        this.state.data.map((data, key) => {
                            return (
                                <View>
                                    {this.state.checked == key ?
                                        <TouchableOpacity onPress={() => this.setState({ checked: key })} key={key}>
                                            <Image style={styles.radio_img} source={require('../assets/images/Others/Radio_checked.png')} />
                                            <Text style={{ marginRight: 10 }}>{data}</Text>
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity onPress={() => this.setState({ checked: key })} key={key}>
                                            <Image style={styles.radio_img} source={require('../assets/images/Others/Radio_unchecked.png')} />
                                            <Text style={{ marginRight: 10 }}>{data}</Text>
                                        </TouchableOpacity>
                                    }
                                </View>
                            )
                        })
                    }
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Write Your Comments"
                    />
                </View>
                <View style={{ margin: 30 }}>
                    <Text style={{ fontSize: 15, color: "black", marginBottom: 10 }}>Add Photo</Text>
                    <View style={styles.camera_border}>
                        <Image style={styles.camera} source={require('../assets/images/Others/camera.jpg')} />
                    </View>
                </View>
                <View style={styles.button}>
                    <Text style={{
                        width: 150,
                        color: "white",
                        textAlign: "center",
                        borderRadius: 15,
                        fontSize: 15,
                        marginRight: 20,
                        padding: 10,
                        marginLeft:35,
                        backgroundColor: "#5cbbe8"
                    }}>Save & Update</Text>
                    <Text style={{
                        width: 100,
                        borderRadius: 15,
                        fontSize: 15,
                        color: "white",
                        textAlign: "center",
                        padding: 10,
                        backgroundColor: "#5cbbe8",
                        marginLeft: 10
                    }}>Cancel</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#14a3db",
        paddingTop: 50,
        paddingBottom: 15,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        marginBottom: 30


    },
    left_arrow: {
        width: 30,
        height: 30,
        marginLeft: 15,
        marginRight: 15,
        tintColor: "white"
    },
    header_text: {
        fontSize: 20,
        color: "white"
    },
    radio_img: {
        height: 17,
        width: 17,
        tintColor: "black",
        marginLeft: 15,
        marginTop: 20

    },
    radio_btn: {
        flexDirection: "row",
        alignContent: "space-between",
        marginHorizontal: 30


    },
    activity_card: {
        marginLeft: 20,
        width: 250,
        borderRadius: 10,
        height: 70,
        marginBottom: 10,
        borderRadius: 12,
        backgroundColor: "#a7e1cd"

    },
    progress_btn: {
        width: 40,
        height: 30,
        color: "white",
        backgroundColor: "#14a3db",
        marginLeft: 30,
        textAlign: "center",
        fontSize: 20,
        borderRadius: 5,
        marginTop: 18,
        zIndex:1
        
        
        
    },
    radio: {
        flexDirection: 'column',
        marginVertical: 150
    },
    input: {
        borderWidth: 1,
        width: 320,
        height: 80,
        alignSelf: "center",
        marginTop: 35,
        borderRadius: 10,
        borderColor: "#eae5e5",
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
    button: {
        display: 'flex',
        flexDirection: "row",
        alignContent: "space-between",
        alignItems: "stretch",
        marginLeft: 20,


    }

})