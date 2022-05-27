import React, { useState } from 'react';
import { View, Image, Button, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
const { height, width } = Dimensions.get('window')


const ForumType = ({ navigation }) => {
    const [mixed, setMixed] = useState("")
    const [female, setFemale] = useState("")
    const [male, setMale] = useState("")
    const [selectMixed, setSelectMixed] = useState(null)
    const [selectFemale, setSelectFemale] = useState(null)
    const [selectMale, setSelectMale] = useState(null)

    const MixedForum = () => {
        setMixed(<Image style={styles.checked} source={require('../assets/images/Others/checked.png')} />)
        setFemale("")
        setMale("")
        setSelectMixed(true)
        setSelectFemale(false)
        setSelectMale(false)
        console.log("Mixed-Forum Selected")
    }
    const FemaleForum = () => {
        setFemale(<Image style={styles.checked} source={require('../assets/images/Others/checked.png')} />)
        setMixed("")
        setMale("")
        setSelectMixed(false)
        setSelectFemale(true)
        setSelectMale(false)
        console.log("Female-Forum Selected")
    }

    const MaleForum = () => {
        setMale(<Image style={styles.checked} source={require('../assets/images/Others/checked.png')} />)
        setMixed("")
        setFemale("")
        setSelectMixed(false)
        setSelectFemale(false)
        setSelectMale(true)
        console.log("Male-Forum Selected")
    }

    const getForumDetails = () => {
        if (selectMixed === true) {
            console.log("mixed pressed")
            navigation.navigate('Dashboard')
        } else if (selectFemale === true) {
            console.log('female pressed')
            navigation.navigate('Dashboard')
        } else if (selectMale === true) {
            console.log('male pressed')
            navigation.navigate('Dashboard')
        } else {
            console.log("no selection")
        }

        // ( selectMixed===true)? <ForumDashboard/> : <Text>No data found</Text>
    }

    //Get forum info from forum id
    return (

        <ScrollView>
            {/* Get forum info from id */}
            <View style={{ height: height, width: width, justifyContent: 'flex-start' }}>
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

                <TouchableOpacity style={{ activeOpacity: 0.9 }} onPress={getForumDetails}>
                    <View style={styles.btn_container}>
                        <Text style={styles.btn_text}>Get Started</Text>
                        <Image style={styles.btn_img} source={require('../assets/images/for-next.png')} />
                    </View>
                </TouchableOpacity>

               
            </View>
        </ScrollView>


    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        height: 135,
        width: 350,
        alignSelf: 'center'
    },
    heading: {
        marginTop: 20,
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
        marginTop: 20,
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
        flexDirection: "row",
        justifyContent: 'space-between',
        textAlign: "left",
        marginTop: height / 4,
        borderRadius: 15,
        marginLeft: 15,
        marginRight: 15,
        padding: 15,
        backgroundColor: "#20e8e8",


    },
    btn_img: {
        height: 20,
        width: 20,
        padding: 5,
        //marginStart: 210,
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