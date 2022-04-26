import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;
const CheckUpdates = () => {

    return (
        <View style={{ width: W, height: H }}>

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
                top: H * 0.170,
                marginLeft: H * 0.010,
                marginRight: H * 0.010,
                borderRadius: 20,
                padding: H * 0.005,
                borderColor: "#dfd8d8",
                borderWidth: 2,
                marginTop: H * -0.010,
                marginBottom: H * 0.020

            }}>
                <View style={styles.heading_date}>
                    <Text style={{ marginLeft: H * 0.007, fontSize: H * 0.017, color: "black" }}>Air Pollution</Text>
                    <Text style={{ marginRight: H * 0.010, color: "black", fontSize: H * 0.013 }}>1st Jan to 10th Jan</Text>
                </View>
                <Text style={{ fontSize: H * 0.014, textAlign: 'justify', padding: H * 0.010, marginTop: H * -0.010 }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s. This is dummy text
                </Text>
                <View style={styles.pending}>
                    <Text style={{ marginLeft: H * 0.005, color: "black", marginTop: H * -0.009 }}> Status</Text>
                    <Text style={{
                        marginLeft: H * 0.015,
                        backgroundColor: "#e44d15",
                        paddingLeft: H * 0.013,
                        paddingRight: H * 0.013,
                        paddingTop: H * 0.003,
                        paddingBottom: H * 0.003,
                        alignSelf: 'center',
                        borderRadius: H * 0.015,
                        color: "white",
                        fontSize: H * 0.015,
                        marginBottom: H * 0.009
                    }}>Pending</Text>
                    <Image style={{
                        width: H * 0.025,
                        height: H * 0.025,
                        alignSelf: 'center',
                        marginRight: 'auto',
                        tintColor: '#0b7dee'
                    }} source={require('../assets/images/Others/more_vert.png')} />
                </View>
            </View>

            <View>
                <Text style={{
                    fontSize: H * 0.020,
                    marginTop: H * 0.160,
                    marginLeft: H * 0.015,
                    color: "black"
                }}>Updates</Text>
            </View>

            <View style={{ position: "absolute", zIndex: 0, marginTop: H * 0.380 }}>
                <Image style={styles.progress_line} source={require('../assets/images/Others/line.png')} />
            </View>


            <View style={{ display: "flex", flexDirection: "row", marginBottom: H * 0.020 }}>
                <View>
                    <Text style={styles.progress_stage}>4</Text>
                </View>
                <View style={{
                    width: '75%',
                    backgroundColor: "#a7e1cd",
                    borderRadius: 15,
                    padding: H * 0.015
                }}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: 'space-between',

                    }}>
                        <Text style={styles.progress_date}>15th October 2021</Text>
                        <Text style={styles.progress_status}>Completed</Text>
                    </View>
                    <View>
                        <Text style={styles.progress_text}>Lorem Ipsum is simply dummy text of the printing and showing.
                            This is a dummy text written here for the purpose of design only.
                        </Text>
                    </View>
                </View>
            </View>

            <View style={{ display: "flex", flexDirection: "row", marginBottom: H * 0.020 }}>
                <View>
                    <Text style={styles.progress_stage}>3</Text>
                </View>
                <View style={{
                    width: '75%',
                    backgroundColor: "#a7e1cd",
                    borderRadius: 15,
                    padding: H * 0.015
                }}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: 'space-between',

                    }}>
                        <Text style={styles.progress_date}>21st October 2021</Text>
                        <Text style={styles.progress_status}>Completed</Text>
                    </View>
                    <View>
                        <Text style={styles.progress_text}>Lorem Ipsum is simply dummy text of the printing and showing.
                            This is a dummy text written here for the purpose of design only.
                        </Text>
                    </View>
                </View>
            </View>

            <View style={{ display: "flex", flexDirection: "row", marginBottom: H * 0.020 }}>
                <View>
                    <Text style={styles.progress_stage}>2</Text>
                </View>
                <View style={{
                    width: '75%',
                    backgroundColor: "#a7e1cd",
                    borderRadius: 15,
                    padding: H * 0.015
                }}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: 'space-between',

                    }}>
                        <Text style={styles.progress_date}>25th October 2021</Text>
                        <Text style={styles.progress_status}>Completed</Text>
                    </View>
                    <View>
                        <Text style={styles.progress_text}>Lorem Ipsum is simply dummy text of the printing and showing.
                            This is a dummy text written here for the purpose of design only.
                        </Text>
                    </View>
                </View>
            </View>

            <View style={{ display: "flex", flexDirection: "row" }}>
                <View>
                    <Text style={styles.progress_stage}>1</Text>
                </View>
                <View style={{
                    width: '75%',
                    backgroundColor: "#a7e1cd",
                    borderRadius: 15,
                    padding: H * 0.015
                }}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: 'space-between',

                    }}>
                        <Text style={styles.progress_date}>31st October 2021</Text>
                        <Text style={styles.progress_status}>Completed</Text>
                    </View>
                    <View>
                        <Text style={styles.progress_text}>Lorem Ipsum is simply dummy text of the printing and showing.
                            This is a dummy text written here for the purpose of design only.
                        </Text>
                    </View>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#14a3db",
        paddingTop: H * 0.040,
        paddingBottom: H * 0.015,
        borderBottomLeftRadius: H * 0.025,
        borderBottomRightRadius: H * 0.025,
        marginTop: 0,
        position: "relative",
        zIndex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'


    },
    left_arrow: {
        width: H * 0.025,
        height: H * 0.020,
        marginLeft: H * 0.015,
        marginRight: H * 0.015,
        tintColor: "white"
    },
    header_text: {
        fontSize: H * 0.025,
        color: "white",
        marginRight: 'auto'
    },
    pollution_img: {
        position: "absolute",
        zIndex: 0,
        height: H * 0.320,
        width: W
    },
    heading_date: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginBottom: H * 0.005,
        marginTop: H * 0.005
    },
    pending: {
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center'
        //marginBottom: H * 0.005
    },
    progress_line: {
        width: H * 0.005,
        height: H * 0.630,
        marginLeft: H * 0.055,
        tintColor: "#91f1d0",
        marginTop: H * 0.025
    },
    progress_stage: {
        color: "white",
        backgroundColor: "#0a7ff3",
        height: H * 0.040,
        width: H * 0.045,
        textAlign: 'center',
        marginLeft: H * 0.035,
        borderRadius: 5,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: H * 0.003,
        paddingTop: H * 0.005,
        marginRight: H * 0.030,
        marginTop: H * 0.040,
        marginBottom: H * 0.020
    },
    progress_date: {
        color: "black",
        fontSize: H * 0.015,
        alignSelf: 'center'
    },
    progress_status: {
        borderRadius: 15,
        color: "white",
        alignSelf: 'center',
        fontSize: H * 0.013,
        paddingTop: H * 0.002,
        paddingBottom: H * 0.002,
        backgroundColor: "green",
        paddingLeft: H * 0.010,
        paddingRight: H * 0.010,
    },
    progress_text: {
        fontSize: H * 0.015
    }
})

export default CheckUpdates;