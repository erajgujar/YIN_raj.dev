import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator, TextInput, Dimensions, SafeAreaView, ScrollView } from 'react-native';
const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;
export default class Activity extends Component {
    constructor() {
        super()
        this.state = {
            data: ['Mark As Complete', 'Mark As Abondoned', 'As for Help'],
            checked: 0,
            text: "input text",
            activity: [],

        }

        
    }

    onChangeText() {
        this.serState({ text: "Write Your Comments" })
    }

    componentDidMount() {
       
        fetch("https://stg-yin-talk-api.foxberry.link/v1/activity/all/list? ISSUE_12022")
        .then(response=>response.json())
        .then(response=> this.setState({activity:response}))
    
    }

    render() {
        
        //Get activity list using yin id
        return (
            <SafeAreaView>
                <ScrollView>
                    <View>
                        <View style={styles.container}>
                            <Image style={styles.left_arrow} source={require('../assets/images/left.png')} />
                            <Text style={styles.header_text}>Update Activity</Text>
                        </View>


                        <Image style={{
                            width: 3,
                            height: 250,
                            marginLeft: 65,
                            marginTop: 75,
                            zIndex: 0,
                            position: 'absolute',
                            tintColor: "#a7e1cd"
                        }} source={require('../assets/images/Others/line.png')} />

                        { this.state.activity.map((activity) => <View style={{ flexDirection: "row", width: W, marginBottom: 10 }}>
                                    <Image style={styles.radio_img} source={require('../assets/images/Others/Radio_checked.png')} />
                                    <Text style={styles.progress_btn}>1</Text>
                                    <View style={styles.activity_card}>
                                        <Text style={{ fontSize: 14, color: "black", padding: 2 }}>{activity.activity_title}</Text>
                                        <Text style={{ fontSize: 13, padding: 2, textAlign: 'auto' }}>{activity.activity_description}</Text>
                                    </View>
                                </View>
                            )
                        }

                        {/* <View style={{ flexDirection: "row", marginBottom: 10 }}>
                            <Image style={styles.radio_img} source={require('../assets/images/Others/Radio_unchecked.png')} />
                            <Text style={styles.progress_btn}>2</Text>
                            <View style={styles.activity_card}>
                                <Text style={{ fontSize: 14, color: "black", padding: 2 }}>Activity Title</Text>
                                <Text style={{ fontSize: 13, padding: 2, textAlign: 'auto' }}>Lorem Ipsum is simply dummy text of the printing,
                                    this is an dummy text written here </Text>
                            </View>
                        </View> */}

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
                            <Image style={{
                                width: 30,
                                tintColor: 'gray',
                                position: 'relative',
                                top: H * -58,
                                left: 40,
                                height: 25
                            }} source={require('../assets/images/Others/message_des.png')} />
                        </View>
                        <View style={{ margin: 30, marginBottom: H / 7 }}>
                            <Text style={{ fontSize: 15, color: "black", marginBottom: 10 }}>Add Photo</Text>
                            <View style={styles.camera_border}>
                                <Image style={styles.camera} source={require('../assets/images/Others/camera.jpg')} />
                            </View>
                        </View>
                        <View style={styles.button}>
                            <Text style={{
                                width: 130,
                                color: "white",
                                textAlign: "center",
                                alignSelf: 'center',
                                borderRadius: 20,
                                fontSize: 15,
                                marginRight: 20,
                                padding: 8,
                                backgroundColor: "#14a3db"
                            }}>Save & Update</Text>
                            <Text style={{
                                width: 85,
                                borderRadius: 20,
                                fontSize: 15,
                                color: "white",
                                alignSelf: 'center',
                                textAlign: "center",
                                padding: 8,
                                backgroundColor: "#14a3db",
                                marginLeft: 10
                            }}>Cancel</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        flexDirection: "row",
        backgroundColor: "#14a3db",
        paddingTop: 25,
        paddingBottom: 15,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        marginBottom: 20
    },
    left_arrow: {
        width: 20,
        height: 15,
        marginLeft: 16,
        marginRight: 15,
        alignSelf: 'center',
        tintColor: "white"
    },
    header_text: {
        fontSize: 20,
        alignSelf: 'center',
        color: "white"
    },
    radio_img: {
        height: 15,
        width: 15,
        tintColor: "black",
        marginLeft: 20,
        marginTop: 42

    },
    radio_btn: {
        flexDirection: "row",
        alignContent: "space-between",
        marginHorizontal: 10


    },
    activity_card: {
        marginLeft: 10,
        width: '70%',
        borderRadius: 10,
        marginBottom: 7,
        borderRadius: 12,
        padding: 8,
        backgroundColor: "#a7e1cd"

    },
    progress_btn: {
        width: 30,
        alignItems: 'center',
        paddingTop: 1,
        height: 25,
        color: "white",
        backgroundColor: "#14a3db",
        marginLeft: 18,
        textAlign: "center",
        fontSize: 17,
        borderRadius: 5,
        marginTop: 35,
        zIndex: 1



    },
    radio: {
        flexDirection: 'column',
        marginVertical: 150
    },
    input: {
        borderWidth: 1,
        width: '90%',
        padding: 25,
        alignSelf: "center",
        marginTop: 35,
        borderRadius: 10,
        borderColor: "#d3cece",
        paddingLeft: 60
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
        borderColor: "#d3cece",
        borderWidth: 1,
        height: 50,
        width: 60
    },
    button: {
        flexDirection: "row",
        justifyContent: 'center',
        marginBottom: 15


    }

})