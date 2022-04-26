import React, { useState } from 'react';

import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
// const {height, width} = Dimensions.get('window')
const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;

const ForumType = () => {
    const [mixed, setMixed] = useState("")
    const [female, setFemale] = useState("")
    const [male, setMale] = useState("")

    const MixedForum = () => {
        setMixed(<Image style={styles.checked} source={require('../assets/images/Others/checked.png')} />)
        setFemale("")
        setMale("")
    }
    const FemaleForum = () => {
        setFemale(<Image style={styles.checked} source={require('../assets/images/Others/checked.png')} />)
        setMixed("")
        setMale("")
    }

    const MaleForum = () => {
        setMale(<Image style={styles.checked} source={require('../assets/images/Others/checked.png')} />)
        setMixed("")
        setFemale("")
    }


    return (<>

        <View style={{height:H, width:W, justifyContent:'flex-start' }}>
            <Image style={styles.heading_img} source={require('../assets/images/yin/light-solid-full-header.png')} />
            <Text style={styles.heading}>FORUM TYPES</Text>
            <TouchableOpacity onPress={MixedForum}>
                <View style={styles.forum_container}>
                    <Image style={styles.forum_img} source={require('../assets/images/Others/mixed-gender-forum-image.png')} />
                    <Text style={styles.forum_text}>Mixed-Gender-Forum</Text>
                    <Text>{mixed}</Text>

                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={FemaleForum}>
                <View style={styles.forum_container}>
                    <Image style={styles.forum_img} source={require('../assets/images/Others/female-forum-image.png')} />
                    <Text style={styles.forum_text}>Female-Forum</Text>
                    <Text>{female}</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={MaleForum}>
                <View style={styles.forum_container}>
                    <Image style={styles.forum_img} source={require('../assets/images/Others/male-forum-image.png')} />
                    <Text style={styles.forum_text}>Male-Forum</Text>
                    <Text>{male}</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.btn_container}>
                    <Text style={styles.btn_text}>Get Started</Text>
                    <Image style={styles.btn_img} source={require('../assets/images/for-next.png')} />
                </View>
            </TouchableOpacity>

        </View>

    </>)
}


const styles = StyleSheet.create({
    heading_img: {
        marginTop: H*0.010,
        marginLeft: H*0.010,
        marginRight: H*0.010,
        height: H*0.175,
        width: W-45,
        alignSelf: 'center'
    },
    heading: {
        marginTop: H*0.030,
        fontSize: H*0.030,
        marginBottom:H*0.030,
        textAlign: "center",
        color: "black",
        fontSize: H*0.035
    },
    forum_img: {
        height: H*0.060,
        width: H*0.070,
        marginRight:H*0.030,
        alignSelf:'flex-start'
    },
    forum_container: {
        display: "flex",
        flexDirection: "row",
        width: H*0.420,
        marginTop: H*0.020,
        marginLeft: H*0.020,
        marginRight: H*0.020,
        alignContent: "space-between",
        alignSelf: "center",
        paddingTop: H*0.020,
        paddingBottom: H*0.020,
        paddingLeft: H*0.030,
        paddingRight: H*0.030,
        borderRadius: H*0.007,
        borderColor: "#dfd8d8",
        borderWidth: H*0.002,
        shadowRadius: H*0.007
    },
    forum_text: {
        textAlign: "center",
        marginVertical: H*0.005,
        color: "black",
        fontSize: H*0.025,
        alignSelf:'center',
        marginRight: H* 0.010
    },
    btn_container: {
        flexDirection: "row",
        justifyContent:'space-between',
        textAlign: "left",
        marginTop: H*0.230,
        borderRadius: H*0.015,
        marginLeft: H*0.015,
        marginRight: H*0.015,
        padding: H*0.015,
        backgroundColor: "#1d81e5",

    },
    btn_img: {
        height: H*0.020,
        width: H*0.020,
        padding: H*0.005,
        //marginStart: H*0.300,
        alignSelf:'center',
        tintColor: "white"
    },
    btn_text: {
        fontSize: H*0.022,
        color: "white"
    },
    checked: {
        height: H*0.035,
        width: H*0.035,
        alignSelf:'center',
    }

});
export default ForumType;