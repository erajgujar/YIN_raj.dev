import React, { useState, useEffect } from 'react';
import {useNavigation} from '@react-navigation/native';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ForumDashboardName } from './ForumDashboard';
import LinearGradient from 'react-native-linear-gradient';
const checkedImage = require('../assets/images/Others/checked.png');
const headerImage = require('../assets/images/yin/light--transparent-full-header.png');
const mixedGenderForum = require('../assets/images/Others/mixed-gender-forum-image.png');
const maleForum = require('../assets/images/Others/male-forum-image.png');
const femaleForum = require('../assets/images/Others/female-forum-image.png');
const nextArrow = require('../assets/images/for-next.png');

export const ForumTypeName = "Forum Type";
export const ForumType = () => {
    const [mixed, setMixed] = useState("")
    const [female, setFemale] = useState("")
    const [male, setMale] = useState("")
    const navigation = useNavigation();
    const MixedForum = () => {
        setMixed(<Image style={styles.checked} source={checkedImage} />)
        setFemale("")
        setMale("")
    }
    const FemaleForum = () => {
        setFemale(<Image style={styles.checked} source={checkedImage} />)
        setMixed("")
        setMale("")
    }

    const MaleForum = () => {
        setMale(<Image style={styles.checked} source={checkedImage} />)
        setMixed("")
        setFemale("")
    }

    const NavigateToForumDashboard=()=>{
        navigation.navigate(ForumDashboardName);
    }

    return (<>
        <View style={styles.backgroundColor}>
        <ScrollView>
            <Image style={styles.container} source={headerImage} />
            <Text style={styles.heading}>FORUM TYPES</Text>
            <TouchableOpacity onPress={MixedForum}>
                <View style={styles.forum_container}>
                    <Image style={styles.forum_img} source={mixedGenderForum} />
                    <Text style={styles.forum_text}>Mixed-Gender Forum</Text>
                    <Text>{mixed}</Text>

                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={FemaleForum}>
                <View style={styles.forum_container}>
                    <Image style={styles.forum_img} source={maleForum} />
                    <Text style={styles.forum_text}>Female Forum</Text>
                    <Text>{female}</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={MaleForum}>
                <View style={styles.forum_container}>
                    <Image style={styles.forum_img} source={femaleForum} />
                    <Text style={styles.forum_text}>Male Forum</Text>
                    <Text>{male}</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.btnContainers}>
            <LinearGradient
              style={{borderRadius: 50}}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#5191e5', '#8fcac6']}>
              
            <TouchableOpacity  onPress={NavigateToForumDashboard}>
                <View style={styles.btn_container} >
                    <Text style={styles.btn_text}>Get Started</Text>
                    <Image style={styles.btn_img} source={nextArrow} />
                </View>
            </TouchableOpacity>
            </LinearGradient>
        </View>
            </ScrollView>
        </View>

    </>)
}


const styles = StyleSheet.create({
    backgroundColor:{
        backgroundColor:"#fff"
    },
    container: {
        marginTop: 20,
        padding:16,
        height: 100,
        width: "100%",
        alignSelf: 'center',
        resizeMode: 'contain',
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
    shadowProp: {
        shadowColor: '#ccc',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
    forum_container: {
        display: "flex",
        flexDirection: "row",
        width: 300,
        margin:16,
        alignContent: "space-between",
        alignSelf: "center",
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 7,
        backgroundColor:"#fff",
        borderColor:"#ccc",
        borderWidth: 1,
        shadowRadius: 6,
        
    },
    forum_text: {
        textAlign: "center",
        marginVertical: 10,
        color: "black",
        fontSize: 15
    },
    btnContainers:{
        margin: '7%'
    },
    btn_container: {
        display: "flex",
        flexDirection: "row",
        alignContent: "space-between",
        textAlign: "left",
        padding: 15,
    },
    btn_img: {
        height: 20,
        width: 20,
        padding: 5,
        marginStart: '60%',
        tintColor: "white",
       
    },
    btn_text: {
        fontSize: 17,
        color: "white",
    },
    checked: {
        height: 25,
        width: 25,
        marginLeft: 0,
        borderWidth:2,
        borderColor:"#ff0"
    }

});