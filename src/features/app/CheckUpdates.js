import React from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'
const CheckUpdates = () => {

    return (
        <View>

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
                top: 150,
                marginLeft: 10,
                marginRight: 10,
                borderRadius: 10,
                borderColor: "#dfd8d8",
                borderWidth: 2,
                marginTop:-10

            }}>
                <View style={styles.heading_date}>
                    <Text style={{ marginLeft: 5, fontSize: 15, color: "black" }}>Air Pollution</Text>
                    <Text style={{ marginLeft: 150, color: "black", fontSize: 12.5 }}>1st Jan to 10th Jan</Text>
                </View>
                <Text style={{ padding: 10, marginTop:-10 }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </Text>
                <View style={styles.pending}>
                    <Text style={{ marginLeft: 5, color: "black" }}> Status</Text>
                    <Text style={{
                        marginLeft: 20,
                        backgroundColor: "#e44d15",
                        paddingLeft: 7,
                        paddingRight: 7,
                        borderRadius: 10,
                        color: "white",
                        marginBottom: 9
                    }}>Pending</Text>
                </View>
            </View>
            <Text style={{
                fontSize: 15,
                marginTop: 155,
                marginLeft: 10,
                color: "black"
            }}>Updates</Text>
            <View style={{ position: "absolute", zIndex: 0, marginTop: 380 }}>
                <Image style={styles.progress_line} source={require('../assets/images/Others/line.png')} />
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
                <Text style={styles.progress_stage}>4</Text>

                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    backgroundColor: "#a7e1cd",
                    width: -40,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    marginBottom:9

                }}>
                    <Text style={styles.progress_date}>31st October 2021</Text>
                    <Text style={styles.progress_status}>Completed</Text>
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
                    marginBottom:9

                }}>
                    <Text style={styles.progress_date}>27th October 2021</Text>
                    <Text style={styles.progress_status}>Completed</Text>
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
                    marginBottom:9

                }}>
                    <Text style={styles.progress_date}>25th October 2021</Text>
                    <Text style={styles.progress_status}>Completed</Text>
                </View>
            </View>
            <Text style={styles.progress_text}>Lorem Ipsum is simply dummy text of the printing and showing</Text>

            <View style={{ display: "flex", flexDirection: "row" }}>
                <Text style={styles.progress_stage}>1</Text>

                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    backgroundColor: "#a7e1cd",
                    width: -40,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10
                    

                }}>
                    <Text style={styles.progress_date}>15th October 2021</Text>
                    <Text style={styles.progress_status}>Completed</Text>
                </View>
            </View>
            <Text style={styles.progress_text}>Lorem Ipsum is simply dummy text of the printing and showing</Text>


        </View>
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
        height: 300
    },
    heading_date: {
        display: "flex",
        flexDirection: "row",
        alignContent: "space-between",
        marginBottom: 5,
        marginTop: 5
    },
    pending: {
        display: "flex",
        flexDirection: "row",
        alignContent: "space-between",
    },
    progress_line: {
        width: 5,
        height: 400,
        marginLeft: 50,
        tintColor:"#a7e1cd",
        marginTop:-35
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
        marginTop: 30,
        marginBottom: 20
    },
    progress_date: {
        color: "black",
        marginLeft: 10,
        fontSize: 12.5,
        marginTop: 5,


    },
    progress_status: {
        borderRadius: 10,
        color: "white",
        backgroundColor: "green",
        paddingLeft: 10,
        paddingRight: 10,
        height: 22,
        marginLeft: 60,
        marginTop: 4,
        marginRight: 10
    },
    progress_text: {
        marginLeft: 100,
        backgroundColor: "#a7e1cd",
        marginRight: 17.5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingLeft: 5,
        paddingBottom: 5,
        marginTop: -50,
        marginBottom:9
    }
})

export default CheckUpdates;