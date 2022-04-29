import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
const MinutesOfMeeting = () => {

    return (

        <SafeAreaView>
            <ScrollView>
                <View>

                    <View>
                        <Image style={styles.pollution_img} source={require('../assets/images/Others/issue-details-image.png')} />
                    </View>
                    <View style={styles.container}>
                        <Image style={styles.left_arrow} source={require('../assets/images/left.png')} />
                        <Text style={styles.header_text}>Minutes of Meeting</Text>
                    </View>
                    <View style={{
                        width: '95%',
                        backgroundColor: "white",
                        position: "relative",
                        top: 150,
                        marginLeft: 10,
                        borderRadius: 10,
                        borderColor: "#dfd8d8",
                        borderWidth: 2,
                        alignItems: 'center'

                    }}>
                        <View style={{ display: 'flex', flexDirection: 'row', }}>
                            <View style={[styles.progress_stage, { marginTop: 25, marginLeft: 10 }]}>
                                <Text style={{ color: 'white' }}>4</Text>
                            </View>
                            <View style={styles.heading_date_status}>
                                <Text style={{ marginLeft: 0, fontSize: 13, color: "black", marginTop: 10 }}>31st October 2021</Text>
                                <Text style={{
                                    marginLeft: 170,
                                    borderRadius: 20,
                                    width: '30%',
                                    backgroundColor: 'green',
                                    color: "white",
                                    fontSize: 12,
                                    paddingLeft: 5,
                                    paddingRight: 5,
                                    marginTop: -15
                                }}>Completed</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: -40 }}>
                            <Text style={{ padding: 10, marginLeft: 80, fontSize: 11 }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                            </Text>
                        </View>
                    </View>


                    <Text style={{
                        fontSize: 15,
                        marginTop: 155,
                        marginLeft: 10,
                        color: "black"
                    }}>Details</Text>

                    <View style={{ width: '100%' }}>
                        <View style={{ display: "flex", flexDirection: "row", width: "30%" }}>
                            <Text style={styles.progress_stage}>1</Text>
                        </View>
                        <Text style={styles.progress_text}>Lorem Ipsum is simply dummy text of the printing and showing the text and print the text accordingly</Text>
                    </View>

                    <View style={{ width: '100%' }}>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <Text style={styles.progress_stage}>2</Text>
                        </View>
                        <Text style={styles.progress_text}>Lorem Ipsum is simply dummy text of the printing and showing the text and print the text accordingly</Text>
                    </View>

                    <View style={{ width: '100%' }}>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <Text style={styles.progress_stage}>3</Text>
                        </View>
                        <Text style={styles.progress_text}>Lorem Ipsum is simply dummy text of the printing and showing the text and print the text accordingly</Text>
                    </View>

                    <View style={{ width: '100%' }}>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <Text style={styles.progress_stage}>4</Text>
                        </View>
                        <Text style={styles.progress_text}>Lorem Ipsum is simply dummy text of the printing and showing the text and print the text accordingly</Text>
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
        paddingTop: 40,
        paddingBottom: 15,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        marginTop: 0,
        position: "relative",
        zIndex: 1


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
    pollution_img: {
        marginTop: 0,
        position: "absolute",
        zIndex: 0,
        height: 300,
        width: '100%'
    },
    heading_date_status: {
        alignContent: "space-between",
        marginBottom: 5

    },
    pending: {
        display: "flex",
        flexDirection: "row",
        alignContent: "space-between",
    },
    progress_stage: {
        color: "white",
        backgroundColor: "#0a7ff3",
        height: 25,
        width: 35,
        marginLeft: 25,
        borderRadius: 5,
        paddingLeft: 14,
        paddingTop: 2,
        marginRight: 40,
        marginTop: 30,
        marginBottom: 20
    },
    progress_text: {
        width: '70%',
        marginLeft: 85,
        backgroundColor: "#a7e1cd",
        borderRadius: 10,
        paddingLeft: 5,
        paddingBottom: 1,
        marginTop: -60,
        marginBottom: 2
    }
})

export default MinutesOfMeeting;