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
            <View style={{backgroundColor: "white",
                          position: "relative",
                          top:150,
                          marginLeft: 10,
                          marginRight:10,
                          borderRadius:10,
                          borderColor: "#dfd8d8",
                          borderWidth:2,

            }}>
                <View style={styles.heading_date}>
                    <Text style={{marginLeft:5, fontSize:15, color: "black" }}>Air Pollution</Text>
                    <Text style={{marginLeft:150 }}>1 st Jan to 10 th Jan</Text>
                </View>
                <Text style={{padding:10 }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </Text>
                <View style={styles.pending}>
                <Text style={{marginLeft:5 }}> Status</Text>
                <Text style={{marginLeft:20,
                backgroundColor: "#e44d15",
                paddingLeft: 7,
                paddingRight: 7,
                borderRadius:10,
                color: "white",
                marginBottom: 5
                }}>Pending</Text>
                </View>
            </View>


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
    heading_date:{
        display:"flex",
        flexDirection: "row",
        alignContent:"space-between",
        marginBottom:5,
        marginTop: 5
    },
    pending:{
        display:"flex",
        flexDirection: "row",
        alignContent:"space-between",
    }
})

export default CheckUpdates;