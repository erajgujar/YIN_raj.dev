import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;
const MinutesOfMeeting = () => {

    return (
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
                top: H* 0.150,
                marginLeft: H* 0.010,
                borderRadius: 10,
                borderColor: "#dfd8d8",
                borderWidth: 2,
                padding: H* 0.010,
                alignItems: 'center'

            }}>
                <View style={{ display: 'flex', flexDirection: 'row', }}>
                    <View style={[styles.progress_stage, { marginTop: H* 0.025, marginLeft: H* -0.030 }]}>
                        <Text style={{ color: 'white' }}>4</Text>
                    </View>
                    <View style={styles.heading_date_status}>
                        <Text style={{ fontSize: 11, color: "black", marginTop: 10 }}>31st October 2021</Text>
                        <Text style={{
                            marginLeft: 180,
                            borderRadius: 20,
                            width: '25%',
                            backgroundColor: 'green',
                            color: "white",
                            fontSize: H* 0.012,
                            paddingLeft:H* 0.005,
                            paddingRight:H* 0.005,
                            marginTop: H* -0.015
                        }}>Completed</Text>
                    </View>
                </View>
                <View style={{ marginTop: H* -0.040 }}>
                    <Text style={{ padding: H* 0.010, marginLeft: H* 0.080, fontSize: H* 0.016, textAlign:'justify' }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                    </Text>
                </View>
            </View>


            <Text style={{
                fontSize: H* 0.022,
                marginTop: H* 0.155,
                marginLeft: H* 0.010,
                color: "black"
            }}>Details</Text>

            <View style={{ width: '100%' }}>
                <View style={{ flexDirection: "row", width: "30%" }}>
                    <Text style={styles.progress_stage}>1</Text>
                </View>
                <Text style={styles.progress_text}>Lorem Ipsum is simply dummy text of the printing and showing the text and print the text accordingly</Text>
            </View>

            <View style={{ width: '100%' }}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.progress_stage}>2</Text>
                </View>
                <Text style={styles.progress_text}>Lorem Ipsum is simply dummy text of the printing and showing the text and print the text accordingly</Text>
            </View>

            <View style={{ width: '100%' }}>
                <View style={{ flexDirection: "row" }}>
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
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#14a3db",
        paddingTop: H* 0.040,
        paddingBottom: H* 0.015,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        marginTop: 0,
        position: "relative",
        zIndex: 1


    },
    left_arrow: {
        width: H* 0.030,
        height: H* 0.030,
        marginLeft: H* 0.015,
        marginRight: H* 0.015,
        tintColor: "white"
    },
    header_text: {
        fontSize: H* 0.022,
        color: "white"
    },
    pollution_img: {
        position: "absolute",
        zIndex: 0,
        width:W,
        height: H* 0.300
    },
    heading_date_status: {
        alignContent: "space-between",
        marginBottom: H* 0.035

    },
    pending: {
        flexDirection: "row",
        alignContent: "space-between",
    },
    progress_stage: {
        color: "white",
        backgroundColor: "#0a7ff3",
        height: H* 0.035,
        width: H* 0.040,
        marginLeft: H* 0.025,
        borderRadius: 5,
        paddingLeft: H* 0.014,
        paddingTop: H* 0.002,
        marginRight: H* 0.040,
        marginTop: H* 0.030,
        marginBottom: H* 0.005
    },
    progress_text: {
        width: '80%',
        marginLeft: H* 0.085,
        backgroundColor: "#a7e1cd",
        borderRadius: 10,
        padding: H* 0.015,
        paddingLeft: H* 0.005,
        paddingBottom: H* 0.005,
        marginTop: H* -0.060,
        marginBottom: H* 0.009,
        fontSize: H* 0.017
    }
})

export default MinutesOfMeeting;