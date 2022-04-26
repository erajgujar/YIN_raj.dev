import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Dimensions } from 'react-native';
const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;
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


                <Image style={{
                    width: H * 0.003,
                    height: H * 0.320,
                    marginLeft: H * 0.085,
                    marginTop: H * 0.100,
                    marginRight: H * 0.022,
                    zIndex: 0,
                    position: 'absolute',
                    tintColor: "#a7e1cd"
                }} source={require('../assets/images/Others/line.png')} />

                <View style={{ flexDirection: "row", width: W, marginBottom: H * 0.020 }}>
                    <Image style={styles.radio_img} source={require('../assets/images/Others/Radio_checked.png')} />
                    <Text style={styles.progress_btn}>1</Text>
                    <View style={styles.activity_card}>
                        <Text style={{ fontSize: H * 0.016, color: "black", padding: H * 0.004 }}>Activity Title</Text>
                        <Text style={{ fontSize: H * 0.015, padding: H * 0.004 }}>Lorem Ipsum is simply dummy text of the printing,
                            this is an dummy text written here </Text>
                    </View>
                </View>

                <View style={{ flexDirection: "row", marginBottom: H * 0.025 }}>
                    <Image style={styles.radio_img} source={require('../assets/images/Others/Radio_unchecked.png')} />
                    <Text style={styles.progress_btn}>2</Text>
                    <View style={styles.activity_card}>
                        <Text style={{ fontSize: H * 0.016, color: "black", padding: H * 0.004 }}>Activity Title</Text>
                        <Text style={{ fontSize: H * 0.015, padding: H * 0.004 }}>Lorem Ipsum is simply dummy text of the printing,
                            this is an dummy text written here </Text>
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
                                            <Text style={{ marginRight: H * 0.010 }}>{data}</Text>
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity onPress={() => this.setState({ checked: key })} key={key}>
                                            <Image style={styles.radio_img} source={require('../assets/images/Others/Radio_unchecked.png')} />
                                            <Text style={{ marginRight: H * 0.010 }}>{data}</Text>
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
                    <Image style={{width:H* 0.030,
                    tintColor:'gray',
                    position:'relative',
                    top: H* -0.058,
                    left: H* 0.040,
                     height: H* 0.025}} source={require('../assets/images/Others/message_des.png')}/>
                </View>
                <View style={{ margin: H * 0.030, marginBottom: H/7}}>
                    <Text style={{ fontSize: H * 0.015, color: "black", marginBottom: H * 0.010 }}>Add Photo</Text>
                    <View style={styles.camera_border}>
                        <Image style={styles.camera} source={require('../assets/images/Others/camera.jpg')} />
                    </View>
                </View>
                <View style={styles.button}>
                    <Text style={{
                        width: H * 0.150,
                        color: "white",
                        textAlign: "center",
                        alignSelf:'center',
                        borderRadius: 20,
                        fontSize: H * 0.017,
                        marginRight: H * 0.020,
                        padding: H * 0.008,
                        backgroundColor: "#14a3db"
                    }}>Save & Update</Text>
                    <Text style={{
                        width: H * 0.100,
                        borderRadius: 20,
                        fontSize: H * 0.017,
                        color: "white",
                        alignSelf:'center',
                        textAlign: "center",
                        padding: H * 0.008,
                        backgroundColor: "#14a3db",
                        marginLeft: H * 0.010
                    }}>Cancel</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
       justifyContent: 'flex-start',
        flexDirection: "row",
        backgroundColor: "#14a3db",
        paddingTop: H * 0.040,
        paddingBottom: H * 0.015,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        marginBottom: H * 0.030


    },
    left_arrow: {
        width: H * 0.025,
        height: H * 0.020,
        marginLeft: H * 0.016,
        marginRight: H * 0.015,
        alignSelf:'center',
        tintColor: "white"
    },
    header_text: {
        fontSize: H * 0.025,
        alignSelf:'center',
        color: "white"
    },
    radio_img: {
        height: H * 0.017,
        width: H * 0.017,
        tintColor: "black",
        marginLeft: H * 0.020,
        marginTop: H * 0.042

    },
    radio_btn: {
        flexDirection: "row",
        alignContent: "space-between",
        marginHorizontal: H * 0.030


    },
    activity_card: {
        marginLeft: H * 0.020,
        width: '70%',
        borderRadius: 10,
        marginBottom: H * 0.010,
        borderRadius: 12,
        padding: H * 0.015,
        backgroundColor: "#a7e1cd"

    },
    progress_btn: {
        width: H * 0.040,
        height: H * 0.030,
        color: "white",
        backgroundColor: "#14a3db",
        marginLeft: H * 0.030,
        textAlign: "center",
        fontSize: H * 0.020,
        borderRadius: 5,
        marginTop: H * 0.035,
        zIndex: 1



    },
    radio: {
        flexDirection: 'column',
        marginVertical: H * 0.150
    },
    input: {
        borderWidth: 1,
        width: '90%',
        padding: H * 0.030,
        alignSelf: "center",
        marginTop: H * 0.035,
        borderRadius: 10,
        borderColor: "#d3cece",
        paddingLeft: H*0.060
    },
    camera: {
        width: H * 0.035,
        height: H * 0.030,
        marginLeft: H * 0.005,
        marginTop: H * 0.01,
        alignSelf: "center"

    },
    camera_border: {
        borderRadius: 7,
        borderColor: "#d3cece",
        borderWidth: 1,
        height: H * 0.060,
        width: H * 0.070
    },
    button: {
        flexDirection: "row",
        justifyContent: 'center'


    }

})