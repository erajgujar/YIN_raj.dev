import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import axios from 'axios';
export default function Members() {
    const [isLoading, setLoading] = useState(false)
    const [memberDetails, setMemberDetails] = useState([])

    const memberDetailed_list = async () => {
        setLoading(true)
        const response = await axios.get("https://stg-yin-talk-api.foxberry.link/v1/issue/get/issue/member-details/ISSUECOL_120223_RIVERCLEANINGD")
        setMemberDetails(response.data)
        setLoading(false)
        console.log(response.data)
    }

    useEffect(() => {
        memberDetailed_list()
    }, [])

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <View style={styles.container}>
                        <Image style={styles.left_arrow} source={require('../assets/images/left.png')} />
                        <Text style={styles.header_text}>Members</Text>
                    </View>
{/* Get Members details using issue id */}

                    {
                        isLoading ? <Text>Loading please wait</Text> : memberDetails.map((value, i) => {
                            return (<View key={String(i)} style={{
                                display: "flex",
                                width: '100%',
                                borderBottomWidth: 2,
                                borderColor: "#ebebf2",
                                flexDirection: "row"
                            }}>
                                <View style={{ display: "flex", flexDirection: "row", marginBottom: 15 }}>
                                    <Image style={styles.user_img} source={{uri:value.profile_image[0]}} />
                                </View>
                                <View style={{ marginTop: 10 }}>
                                    <View style={{ justifyContent:'space-between', flexDirection: "row" }}>
                                        <Text style={styles.user_name}>{value.first_name} {value.last_name}</Text>
                                        <Image style={{
                                            height: 17,
                                            width: 17,
                                            marginLeft: 150
                                        }} source={require('../assets/images/Others/call.png')} />

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
                        justifyContent:'space-around',
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
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#14a3db",
        paddingTop: 30,
        paddingBottom: 15,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        marginBottom: 9
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
    user_img: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 3,
        marginTop: 15,
        marginRight: 3


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
    }

})