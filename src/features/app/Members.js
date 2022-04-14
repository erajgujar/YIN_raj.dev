import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Members() {
    return (
        <View>
            <View style={styles.container}>
                <Image style={styles.left_arrow} source={require('../assets/images/left.png')} />
                <Text style={styles.header_text}>Members</Text>
            </View>
            <View style={{
                display: "flex",
                borderBottomWidth: 2,
                borderColor: "#ebebf2",
                flexDirection: "row"
            }}>
                <View style={{ display: "flex", flexDirection: "row", marginBottom: 15 }}>
                    <Image style={styles.user_img} source={require('../assets/images/Others/member-4.png')} />
                </View>
                <View style={{ marginTop: 10 }}>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <Text style={styles.user_name}>Manisha Deshpande</Text>
                        <Image style={{
                            height: 17,
                            width: 17,
                            marginLeft: 150
                        }} source={require('../assets/images/Others/call.png')} />

                    </View>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <View style={{ display: "flex", flexDirection: "row", marginBottom: 7 }}>
                            <Text style={{ fontSize: 10, color: "black" }}>College Name:</Text>
                            <Text style={{ fontSize: 10, color: "#444445", marginLeft: 2 }}>Modern College</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <Text style={{ fontSize: 10, color: "black", marginLeft: 15 }}>Designation:</Text>
                            <Text style={{ fontSize: 10, color: "#444445", marginLeft: 2 }}>Forum Director</Text>
                        </View>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <Text style={{ fontSize: 10, color: "black" }}>Mobile No:</Text>
                            <Text style={{ fontSize: 10, color: "#444445", marginLeft: 2 }}>9881000985</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <Text style={{ fontSize: 10, color: "black", marginLeft: 45 }}>Email Id:</Text>
                            <Text style={{ fontSize: 10, color: "#444445", marginLeft: 2 }}>manisha@gmail.com</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{
                display: "flex",
                borderBottomWidth: 2,
                borderColor: "#ebebf2",
                flexDirection: "row"
            }}>
                <View style={{ display: "flex", flexDirection: "row", marginBottom: 15 }}>
                    <Image style={styles.user_img} source={require('../assets/images/Others/chat-profile-2.jpg')} />
                </View>
                <View style={{ marginTop: 10 }}>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <Text style={styles.user_name}>Aniket sabnis</Text>
                        <Image style={{
                            height: 17,
                            width: 17,
                            marginLeft: 195
                        }} source={require('../assets/images/Others/call.png')} />

                    </View>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <View style={{ display: "flex", flexDirection: "row", marginBottom: 7 }}>
                            <Text style={{ fontSize: 10, color: "black" }}>College Name:</Text>
                            <Text style={{ fontSize: 10, color: "#444445", marginLeft: 2 }}>Modern College</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <Text style={{ fontSize: 10, color: "black", marginLeft: 15 }}>Designation:</Text>
                            <Text style={{ fontSize: 10, color: "#444445", marginLeft: 2 }}>Boys Representative</Text>
                        </View>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <Text style={{ fontSize: 10, color: "black" }}>Mobile No:</Text>
                            <Text style={{ fontSize: 10, color: "#444445", marginLeft: 2 }}>7881000985</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <Text style={{ fontSize: 10, color: "black", marginLeft: 45 }}>Email Id:</Text>
                            <Text style={{ fontSize: 10, color: "#444445", marginLeft: 2 }}>aniket@gmail.com</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{
                display: "flex",
                borderBottomWidth: 2,
                borderColor: "#ebebf2",
                flexDirection: "row"
            }}>
                <View style={{ display: "flex", flexDirection: "row", marginBottom: 15 }}>
                    <Image style={styles.user_img} source={require('../assets/images/Others/member-3.png')} />
                </View>
                <View style={{ marginTop: 10 }}>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <Text style={styles.user_name}>Priyanka Yadav</Text>
                        {/* <Image style={styles.call_img} source={require('../assets/images/Others/call.png')} /> */}

                    </View>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <View style={{ display: "flex", flexDirection: "row", marginBottom: 7 }}>
                            <Text style={{ fontSize: 10, color: "black" }}>College Name:</Text>
                            <Text style={{ fontSize: 10, color: "#444445", marginLeft: 2 }}>Modern College</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <Text style={{ fontSize: 10, color: "black", marginLeft: 15 }}>Designation:</Text>
                            <Text style={{ fontSize: 10, color: "#444445", marginLeft: 2 }}>Gr Representative</Text>
                        </View>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <Text style={{ fontSize: 10, color: "black" }}>Mobile No:</Text>
                            <Text style={{ fontSize: 10, color: "#444445", marginLeft: 2 }}>6551000985</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <Text style={{ fontSize: 10, color: "black", marginLeft: 45 }}>Email Id:</Text>
                            <Text style={{ fontSize: 10, color: "#444445", marginLeft: 2 }}>priyanka@gmail.com</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{
                display: "flex",
                borderBottomWidth: 2,
                borderColor: "#ebebf2",
                flexDirection: "row"
            }}>
                <View style={{ display: "flex", flexDirection: "row", marginBottom: 15 }}>
                    <Image style={styles.user_img} source={require('../assets/images/Others/member-1.png')} />
                </View>
                <View style={{ marginTop: 10 }}>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <Text style={styles.user_name}>Amruta Walimbe</Text>
                        <Image style={{
                            height: 17,
                            width: 17,
                            marginLeft: 175
                        }} source={require('../assets/images/Others/call.png')} />

                    </View>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <View style={{ display: "flex", flexDirection: "row", marginBottom: 7 }}>
                            <Text style={{ fontSize: 10, color: "black" }}>College Name:</Text>
                            <Text style={{ fontSize: 10, color: "#444445", marginLeft: 2 }}>Modern College</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <Text style={{ fontSize: 10, color: "black", marginLeft: 15 }}>Designation:</Text>
                            <Text style={{ fontSize: 10, color: "#444445", marginLeft: 2 }}>Leader</Text>
                        </View>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <Text style={{ fontSize: 10, color: "black" }}>Mobile No:</Text>
                            <Text style={{ fontSize: 10, color: "#444445", marginLeft: 2 }}>9850000985</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <Text style={{ fontSize: 10, color: "black", marginLeft: 45 }}>Email Id:</Text>
                            <Text style={{ fontSize: 10, color: "#444445", marginLeft: 2 }}>amruta@gmail.com</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{
                display: "flex",
                borderBottomWidth: 2,
                borderColor: "#ebebf2",
                flexDirection: "row"
            }}>
                <View style={{ display: "flex", flexDirection: "row", marginBottom: 15 }}>
                    <Image style={styles.user_img} source={require('../assets/images/Others/member-2.png')} />
                </View>
                <View style={{ marginTop: 10 }}>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <Text style={styles.user_name}>Ashutosh Kulkarni</Text>
                        <Image style={{
                            height: 17,
                            width: 17,
                            marginLeft: 163
                        }} source={require('../assets/images/Others/call.png')} />

                    </View>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <View style={{ display: "flex", flexDirection: "row", marginBottom: 7 }}>
                            <Text style={{ fontSize: 10, color: "black" }}>College Name:</Text>
                            <Text style={{ fontSize: 10, color: "#444445", marginLeft: 2 }}>Modern College</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <Text style={{ fontSize: 10, color: "black", marginLeft: 15 }}>Designation:</Text>
                            <Text style={{ fontSize: 10, color: "#444445", marginLeft: 2 }}>Union Head</Text>
                        </View>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <Text style={{ fontSize: 10, color: "black" }}>Mobile No:</Text>
                            <Text style={{ fontSize: 10, color: "#444445", marginLeft: 2 }}>6523000985</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            {/* <Text style={{ fontSize: 10, color: "black", marginLeft: 45 }}>Email Id:</Text> */}
                            {/* <Text style={{ fontSize: 10, color: "#444445", marginLeft: 2 }}>ashutosh@gmail.com</Text> */}
                        </View>
                    </View>
                </View>
            </View>

            <View style={{
                display: "flex",
                borderBottomWidth: 2,
                borderColor: "#ebebf2",
                flexDirection: "row",
                marginBottom:1
            }}>
                <View style={{ display: "flex", flexDirection: "row", marginBottom: 15 }}>
                    <Image style={styles.user_img} source={require('../assets/images/Others/chat-profile-4.jpg')} />
                </View>
                <View style={{ marginTop: 10 }}>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <Text style={styles.user_name}>Vivek Sharma</Text>
                        <Image style={{
                            height: 17,
                            width: 17,
                            marginLeft: 190
                        }} source={require('../assets/images/Others/call.png')} />

                    </View>
                    <View style={{ display: "flex", flexDirection: "row", marginBottom: 7 }}>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <Text style={{ fontSize: 10, color: "black" }}>College Name:</Text>
                            <Text style={{ fontSize: 10, color: "#444445", marginLeft: 2 }}>Modern College</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <Text style={{ fontSize: 10, color: "black", marginLeft: 15 }}>Designation:</Text>
                            <Text style={{ fontSize: 10, color: "#444445", marginLeft: 2 }}>Group head</Text>
                        </View>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <Text style={{ fontSize: 10, color: "black" }}>Mobile No:</Text>
                            <Text style={{ fontSize: 10, color: "#444445", marginLeft: 2 }}>5256000985</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <Text style={{ fontSize: 10, color: "black", marginLeft: 45 }}>Email Id:</Text>
                            <Text style={{ fontSize: 10, color: "#444445", marginLeft: 2 }}>vivek1@gmail.com</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ display: "flex",
             flexDirection: "row",
              marginTop:15}}>
                <View style={{ display: "flex", flexDirection: "row", marginLeft:7}}>
                    <Image style={styles.activity_img} source={require('../assets/images/Others/think.png')}/>
                    <Text style={styles.activity_text}>Think</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <Image style={styles.activity_img} source={require('../assets/images/Others/chat.png')}/>
                    <Text style={styles.activity_text}>Talk</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <Image style={styles.activity_img} source={require('../assets/images/Others/todo.png')}/>
                    <Text style={styles.activity_text}>Do</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <Image style={styles.activity_img} source={require('../assets/images/Others/amplify.png')}/>
                    <Text style={styles.activity_text}>Amplify</Text>
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
        paddingTop: 30,
        paddingBottom: 15,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        marginBottom: 17
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
        width: 68,
        height: 68,
        borderRadius: 50,
        marginLeft: 10,
        marginTop: 5,
        marginRight: 7


    },
    user_name: {
        color: "black"
    },
    // call_img: {
    //     height: 17,
    //     width: 17,
    //     marginLeft: 150
    // },
    activity_img: {
        width:45,
        height:45,
        borderRadius:50,
        borderColor: "#8cc5e8",
        marginRight:2
        
    },
    activity_text: {
        fontSize: 15,
        color: "black",
        marginRight:15,
        marginTop:10
    }

})