import React, { useState, useEffect } from 'react';

import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
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

        <View>
            <Image style={styles.container} source={require('../assets/images/yin/light-solid-full-header.png')} />
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
    container: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        height: 135,
        width: 350,
        alignSelf: 'center'
    },
    heading: {
        marginTop: 30,
        fontSize: 30,
        textAlign: "center",
        color: "black",
        fontSize: 25
    },
    forum_img: {
        height: 50,
        width: 60,
        marginRight: 30
    },
    forum_container: {
        display: "flex",
        flexDirection: "row",
        width: 300,
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        alignContent: "space-between",
        alignSelf: "center",
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 7,
        borderColor: "#dfd8d8",
        borderWidth: 2,
        shadowRadius: 7
    },
    forum_text: {
        textAlign: "center",
        marginVertical: 10,
        color: "black",
        fontSize: 15
    },
    btn_container: {
        display: "flex",
        flexDirection: "row",
        alignContent: "space-between",
        textAlign: "left",
        marginTop: 110,
        borderRadius: 15,
        marginLeft: 15,
        marginRight: 15,
        padding: 15,
        backgroundColor: "#6ce4e4",
        alignContent: "space-between"

    },
    btn_img: {
        height: 20,
        width: 20,
        padding: 5,
        marginStart: 230,
        tintColor: "white"
    },
    btn_text: {
        fontSize: 17,
        color: "white"
    },
    checked: {
        height: 25,
        width: 25,
        marginLeft: 10
    }

});
export default ForumType;