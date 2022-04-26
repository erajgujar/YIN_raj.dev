import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;

export default function Members() {
    return (
        <View style={{ width: W, height: H }}>
            <View style={styles.container}>
                <Image style={styles.left_arrow} source={require('../assets/images/left.png')} />
                <Text style={styles.header_text}>Members</Text>
            </View>


            <View style={{
                borderBottomWidth: 2,
                borderColor: "#ebebf2",
                flexDirection: "row",
                padding:H* 0.005
            }}>
                <View style={{ flexDirection: "row", marginBottom: H * 0.015 }}>
                    <Image style={styles.user_img} source={require('../assets/images/Others/member-4.png')} />
                </View>
                <View style={{ marginTop: H * 0.010 }}>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Text style={styles.user_name}>Manisha Deshpande</Text>
                        <Image style={{
                            height: H * 0.020,
                            width: H * 0.020,
                            marginRight: H * -0.030,
                            alignSelf: 'flex-end'
                        }} source={require('../assets/images/Others/call.png')} />

                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: "row", marginBottom: H * 0.007 }}>
                            <Text style={{ fontSize: H * 0.012, color: "black" }}>College Name:</Text>
                            <Text style={{ fontSize: H * 0.012, color: "#444445", marginLeft: H * 0.002 }}>Modern College</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: H * 0.012, color: "black" }}>Designation:</Text>
                            <Text style={{ fontSize: H * 0.012, color: "#444445", marginLeft: H * 0.002 }}>Forum Director</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: H * 0.012, color: "black" }}>Mobile No:</Text>
                            <Text style={{ fontSize: H * 0.012, color: "#444445", marginLeft: H * 0.002 }}>9881000985</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: H * 0.012, color: "black", marginLeft: H * 0.052 }}>Email Id:</Text>
                            <Text style={{ fontSize: H * 0.012, color: "#444445", marginLeft: H * 0.002 }}>manisha@gmail.com</Text>
                        </View>
                    </View>
                </View>
            </View>

            
            <View style={{
                borderBottomWidth: 2,
                borderColor: "#ebebf2",
                flexDirection: "row",
                padding:H* 0.005

            }}>
                <View style={{ flexDirection: "row", marginBottom: H * 0.015 }}>
                    <Image style={styles.user_img} source={require('../assets/images/Others/member-4.png')} />
                </View>
                <View style={{ marginTop: H * 0.010 }}>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Text style={styles.user_name}>Manisha Deshpande</Text>
                        <Image style={{
                            height: H * 0.020,
                            width: H * 0.020,
                            marginRight: H * -0.030,
                            alignSelf: 'flex-end'
                        }} source={require('../assets/images/Others/call.png')} />

                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: "row", marginBottom: H * 0.007 }}>
                            <Text style={{ fontSize: H * 0.012, color: "black" }}>College Name:</Text>
                            <Text style={{ fontSize: H * 0.012, color: "#444445", marginLeft: H * 0.002 }}>Modern College</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: H * 0.012, color: "black" }}>Designation:</Text>
                            <Text style={{ fontSize: H * 0.012, color: "#444445", marginLeft: H * 0.002 }}>Forum Director</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: H * 0.012, color: "black" }}>Mobile No:</Text>
                            <Text style={{ fontSize: H * 0.012, color: "#444445", marginLeft: H * 0.002 }}>9881000985</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: H * 0.012, color: "black", marginLeft: H * 0.052 }}>Email Id:</Text>
                            <Text style={{ fontSize: H * 0.012, color: "#444445", marginLeft: H * 0.002 }}>manisha@gmail.com</Text>
                        </View>
                    </View>
                </View>
            </View>

            
            <View style={{
                borderBottomWidth: 2,
                borderColor: "#ebebf2",
                flexDirection: "row",
                padding:H* 0.005
            }}>
                <View style={{ flexDirection: "row", marginBottom: H * 0.015 }}>
                    <Image style={styles.user_img} source={require('../assets/images/Others/member-4.png')} />
                </View>
                <View style={{ marginTop: H * 0.010 }}>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Text style={styles.user_name}>Manisha Deshpande</Text>
                        <Image style={{
                            height: H * 0.020,
                            width: H * 0.020,
                            marginRight: H * -0.030,
                            alignSelf: 'flex-end'
                        }} source={require('../assets/images/Others/call.png')} />

                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: "row", marginBottom: H * 0.007 }}>
                            <Text style={{ fontSize: H * 0.012, color: "black" }}>College Name:</Text>
                            <Text style={{ fontSize: H * 0.012, color: "#444445", marginLeft: H * 0.002 }}>Modern College</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: H * 0.012, color: "black" }}>Designation:</Text>
                            <Text style={{ fontSize: H * 0.012, color: "#444445", marginLeft: H * 0.002 }}>Forum Director</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: H * 0.012, color: "black" }}>Mobile No:</Text>
                            <Text style={{ fontSize: H * 0.012, color: "#444445", marginLeft: H * 0.002 }}>9881000985</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: H * 0.012, color: "black", marginLeft: H * 0.052 }}>Email Id:</Text>
                            <Text style={{ fontSize: H * 0.012, color: "#444445", marginLeft: H * 0.002 }}>manisha@gmail.com</Text>
                        </View>
                    </View>
                </View>
            </View>

            
            <View style={{
                borderBottomWidth: 2,
                borderColor: "#ebebf2",
                flexDirection: "row",
                padding:H* 0.005
            }}>
                <View style={{ flexDirection: "row", marginBottom: H * 0.015 }}>
                    <Image style={styles.user_img} source={require('../assets/images/Others/member-4.png')} />
                </View>
                <View style={{ marginTop: H * 0.010 }}>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Text style={styles.user_name}>Manisha Deshpande</Text>
                        <Image style={{
                            height: H * 0.020,
                            width: H * 0.020,
                            marginRight: H * -0.030,
                            alignSelf: 'flex-end'
                        }} source={require('../assets/images/Others/call.png')} />

                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: "row", marginBottom: H * 0.007 }}>
                            <Text style={{ fontSize: H * 0.012, color: "black" }}>College Name:</Text>
                            <Text style={{ fontSize: H * 0.012, color: "#444445", marginLeft: H * 0.002 }}>Modern College</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: H * 0.012, color: "black" }}>Designation:</Text>
                            <Text style={{ fontSize: H * 0.012, color: "#444445", marginLeft: H * 0.002 }}>Forum Director</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: H * 0.012, color: "black" }}>Mobile No:</Text>
                            <Text style={{ fontSize: H * 0.012, color: "#444445", marginLeft: H * 0.002 }}>9881000985</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: H * 0.012, color: "black", marginLeft: H * 0.052 }}>Email Id:</Text>
                            <Text style={{ fontSize: H * 0.012, color: "#444445", marginLeft: H * 0.002 }}>manisha@gmail.com</Text>
                        </View>
                    </View>
                </View>
            </View>

            
            <View style={{
                borderBottomWidth: 2,
                borderColor: "#ebebf2",
                flexDirection: "row",
                padding:H* 0.005

            }}>
                <View style={{ flexDirection: "row", marginBottom: H * 0.015 }}>
                    <Image style={styles.user_img} source={require('../assets/images/Others/member-4.png')} />
                </View>
                <View style={{ marginTop: H * 0.010 }}>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Text style={styles.user_name}>Manisha Deshpande</Text>
                        <Image style={{
                            height: H * 0.020,
                            width: H * 0.020,
                            marginRight: H * -0.030,
                            alignSelf: 'flex-end'
                        }} source={require('../assets/images/Others/call.png')} />

                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: "row", marginBottom: H * 0.007 }}>
                            <Text style={{ fontSize: H * 0.012, color: "black" }}>College Name:</Text>
                            <Text style={{ fontSize: H * 0.012, color: "#444445", marginLeft: H * 0.002 }}>Modern College</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: H * 0.012, color: "black" }}>Designation:</Text>
                            <Text style={{ fontSize: H * 0.012, color: "#444445", marginLeft: H * 0.002 }}>Forum Director</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: H * 0.012, color: "black" }}>Mobile No:</Text>
                            <Text style={{ fontSize: H * 0.012, color: "#444445", marginLeft: H * 0.002 }}>9881000985</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: H * 0.012, color: "black", marginLeft: H * 0.052 }}>Email Id:</Text>
                            <Text style={{ fontSize: H * 0.012, color: "#444445", marginLeft: H * 0.002 }}>manisha@gmail.com</Text>
                        </View>
                    </View>
                </View>
            </View>

            
            <View style={{
                borderBottomWidth: 2,
                borderColor: "#ebebf2",
                flexDirection: "row",
                padding:H* 0.005
            }}>
                <View style={{ flexDirection: "row", marginBottom: H * 0.015 }}>
                    <Image style={styles.user_img} source={require('../assets/images/Others/member-4.png')} />
                </View>
                <View style={{ marginTop: H * 0.010 }}>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Text style={styles.user_name}>Manisha Deshpande</Text>
                        <Image style={{
                            height: H * 0.020,
                            width: H * 0.020,
                            marginRight: H * -0.030,
                            alignSelf: 'flex-end'
                        }} source={require('../assets/images/Others/call.png')} />

                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: "row", marginBottom: H * 0.007 }}>
                            <Text style={{ fontSize: H * 0.012, color: "black" }}>College Name:</Text>
                            <Text style={{ fontSize: H * 0.012, color: "#444445", marginLeft: H * 0.002 }}>Modern College</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: H * 0.012, color: "black" }}>Designation:</Text>
                            <Text style={{ fontSize: H * 0.012, color: "#444445", marginLeft: H * 0.002 }}>Forum Director</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: H * 0.012, color: "black" }}>Mobile No:</Text>
                            <Text style={{ fontSize: H * 0.012, color: "#444445", marginLeft: H * 0.002 }}>9881000985</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: H * 0.012, color: "black", marginLeft: H * 0.052 }}>Email Id:</Text>
                            <Text style={{ fontSize: H * 0.012, color: "#444445", marginLeft: H * 0.002 }}>manisha@gmail.com</Text>
                        </View>
                    </View>
                </View>
            </View>





            <View style={{
                display: "flex",
                flexDirection: "row",
                marginTop: H * 0.015
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
        marginBottom: 17,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    left_arrow: {
        width: H * 0.025,
        height: H * 0.025,
        marginLeft: H * 0.015,
        marginRight: H * 0.015,
        alignSelf: 'center',
        tintColor: "white",
        marginTop: H * 0.002
    },
    header_text: {
        fontSize: H * 0.025,
        color: "white",
        alignSelf: 'center'
    },
    user_img: {
        width: H * 0.090,
        height: H * 0.090,
        borderRadius: 50,
        marginLeft: H * 0.013,
        marginTop: H * 0.005,
        marginRight: H * 0.013
    },
    user_name: {
        color: "black"
    },

    activity_img: {
        width: H * 0.060,
        height: H * 0.060,
        borderRadius: 50,
        borderColor: "#8cc5e8",
        marginRight: H * 0.011

    },
    activity_text: {
        fontSize: H * 0.017,
        color: "black",
        marginRight: H * 0.015,
        marginTop: H * 0.017
    }

})