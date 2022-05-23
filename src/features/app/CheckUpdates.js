import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { View, Text, Image, StyleSheet, Dimensions, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;
const CheckUpdates = () => {
    const [isLoading, setLoading] = useState(false)
    const [data, setData] = useState([])
    //Get Activity list using yin id

    const getUpdates = async () => {
        setLoading(true)
        const response = await axios.get("https://stg-yin-talk-api.foxberry.link/v1/activity/all/list? ISSUE_12022")
        setData(response.data)
        setLoading(false)
    }

    useEffect(() => {
        getUpdates()
    }, [])

    return (
            <ScrollView>
                <View style={{ height: 'auto', width: 'auto' }}>

                    <View>
                        <Image style={styles.pollution_img} source={require('../assets/images/Others/issue-details-image.png')} />
                    </View>
                    <View style={styles.container}>
                        <Image style={styles.left_arrow} source={require('../assets/images/left.png')} />
                        <Text style={styles.header_text}>Updates</Text>
                    </View>
                    <View style={{
                        backgroundColor: "white",
                        position: "relative",
                        top: 140,
                        marginLeft: 10,
                        marginRight: 10,
                        borderRadius: 20,
                        padding: 5,
                        borderColor: "#dfd8d8",
                        borderWidth: 2,

                        marginBottom: 20,

                    }}>
                        <View style={styles.heading_date}>
                            <Text style={{ marginLeft: 7, fontSize: 14, color: "black" }}>Air Pollution</Text>
                            <Text style={{ marginRight: 10, color: "black", fontSize: 12 }}>1st Jan to 10th Jan</Text>
                        </View>
                        <Text style={{ fontSize: 12, textAlign: 'justify', padding: 5, marginTop: 5 }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s. This is dummy text
                        </Text>
                        <View style={styles.pending}>
                            <Text style={{ marginLeft: 5, color: "black", marginTop: -9 }}> Status</Text>
                            <Text style={{
                                marginLeft: 15,
                                backgroundColor: "#e44d15",
                                paddingLeft: 13,
                                paddingRight: 13,
                                paddingTop: 3,
                                paddingBottom: 3,
                                alignSelf: 'center',
                                borderRadius: 15,
                                color: "white",
                                fontSize: 13,
                                marginBottom: 9
                            }}>Pending</Text>
                            <Image style={{
                                width: 25,
                                height: 25,
                                alignSelf: 'center',
                                marginRight: 'auto',
                                tintColor: '#0b7dee'
                            }} source={require('../assets/images/Others/more_vert.png')} />
                        </View>
                    </View>

                    <View>
                        <Text style={{
                            fontSize: 17,
                            marginTop: 127,
                            marginLeft: 15,
                            color: "black",
                            marginBottom: 10,
                        }}>Updates</Text>
                    </View>

                    <View style={{ position: "absolute", zIndex: 0, marginTop: 300 }}>
                        <Image style={styles.progress_line} source={require('../assets/images/Others/line.png')} />
                    </View>

                    {
                        isLoading ? <ActivityIndicator size='large' color="gray"/> : data.map((value, i) => {
                            return (<View style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}>
                                <View>
                                    <Text style={styles.progress_stage}>4</Text>
                                </View>
                                <View style={{
                                    width: '72%',
                                    backgroundColor: "#a7e1cd",
                                    borderRadius: 15,
                                    padding: 9
                                }}>
                                    <View style={{
                                        flexDirection: "row",
                                        justifyContent: 'space-between',

                                    }}>
                                        <Text style={styles.progress_date}>{value.updated_at}</Text>
                                        <Text style={styles.progress_status}>{value.activity_status}</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.progress_text}>{value.activity_description}</Text>
                                    </View>
                                </View>
                            </View>

                            )
                        })
                    }

                </View>

            </ScrollView>
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
        marginTop: 0,
        position: "relative",
        zIndex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'


    },
    left_arrow: {
        width: 15,
        height: 10,
        marginLeft: 15,
        marginRight: 15,
        tintColor: "white"
    },
    header_text: {
        fontSize: 20,
        color: "white",
        marginRight: 'auto'
    },
    pollution_img: {
        position: "absolute",
        zIndex: 0,
        height: 320,
        width: W
    },
    heading_date: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 5
    },
    pending: {
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center'
        //marginBottom: H * 0.005
    },
    progress_line: {
        width: 2.5,
        height: 510,
        marginLeft: 42,
        tintColor: "#91f1d0",
        marginTop: 50
    },
    progress_stage: {
        color: "white",
        backgroundColor: "#0a7ff3",
        height: 30,
        width: 35,
        textAlign: 'center',
        marginLeft: 25,
        borderRadius: 5,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 3,
        paddingTop: 5,
        marginRight: 30,
        marginTop: 40,
        marginBottom: 20
    },
    progress_date: {
        color: "black",
        fontSize: 12,
        alignSelf: 'center'
    },
    progress_status: {
        borderRadius: 15,
        color: "white",
        alignSelf: 'center',
        fontSize: 12,
        paddingTop: 2,
        paddingBottom: 2,
        backgroundColor: "green",
        paddingLeft: 10,
        paddingRight: 10
    },
    progress_text: {
        fontSize: 12,
        textAlign: 'justify'

    }
})

export default CheckUpdates;