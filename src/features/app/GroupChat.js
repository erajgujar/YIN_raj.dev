import { View, Text, ScrollView, TextInput, Image, StyleSheet } from 'react-native'
import React from 'react'

const GroupChat = () => {
    return (
        <ScrollView>
            <View>
                <Text>working</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container_wrap: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#1fa6ea',
        paddingTop: 25,
        paddingBottom: 17,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        position: 'absolute',
        zIndex: 1
    },
    pollution_img: {
        position: 'relative',
        zIndex: 0,
        width: '100%',
        marginTop: 25
    },
    menu_img: {
        width: 15,
        height: 17,
        paddingLeft: 15,
        paddingRight: 15,
        tintColor: 'white',
        alignSelf: 'center'
    },
    calender_img: {
        width: 15,
        height: 18,
        alignSelf: 'center',
        tintColor: 'white',
        marginRight: 10,
        marginLeft: 11,
        width: 15,
        height: 17
    },
    header_title: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 17
    },
    meeting: {
        color: 'white',
        borderRadius: 15,
        borderColor: 'white',
        borderWidth: 1,
        padding: 4
    },
    container_meeting: {
        flexDirection: 'row',
        width: 'auto',
        padding: 12,
        margin: 15,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#c8cacc',
        position: 'relative',
        zIndex: 1,
        top: -60,
        backgroundColor: '#ffff'

    },
    activity: {
        marginTop: 20,
        borderRadius: 3,
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 11,
        paddingRight: 11,
        backgroundColor: '#1fa6ea',
        color: 'white'


    },
    meeting_title: {
        fontSize: 15,
        width: 110,
        color: 'black',
        alignSelf: 'center'

    },
    meeting_date_time: {
        fontSize: 12,
        color: 'black',

    },
    view_details_text: {
        textAlign: 'right',
        paddingRight: 5,
        paddingLeft: 3,
        color: 'white'
    },
    meeting_description: {
        textAlign: 'justify',
        fontSize: 12,
        paddingTop: 10,
        paddingBottom: 10,
        width: '96%'
    },
    view_details: {
        flexDirection: 'row',
        padding: 5,
        marginRight: 55,
        alignItems: 'center',
        backgroundColor: '#1fa6ea',
        borderRadius: 25,
        width: 125,
        color: 'white',
        alignSelf: 'flex-end',
        marginTop: 10
    },
    visibility_img: {
        width: 25,
        height: 17,
        alignSelf: 'center',
        tintColor: 'white'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15
    },
    modalView: {
        width: '90%',
        margin: 10,
        borderwidth: 3,
        borderColor: '#626364',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    input_title: {
        width: '90%',
        borderRadius: 25,
        borderColor: '#d9dcde',
        borderWidth: 2,
        padding: 10,
        marginBottom: 5,
        alignSelf: 'center'
    },
    input_field: {
        width: '90%',
        borderRadius: 25,
        borderColor: '#d9dcde',
        borderWidth: 1,
        padding: 4,
        marginBottom: 4,
        alignSelf: 'center',
        justifyContent: "center",
        color: '#8a8c8d'
    },
    input_des: {
        width: '90%',
        borderRadius: 25,
        borderColor: '#d9dcde',
        borderWidth: 2,
        padding: 20,
        paddingTop: 0,
        paddingLeft: 60,
        height: 100,
        alignSelf: 'center',
        marginBottom: 5,
        color: '#8a8c8d'

    },
    icon_des: {
        width: 25,
        height: 20,
        marginTop: 33,
        marginLeft: 20,
        position: 'absolute',
        zIndex: 1,
        tintColor: 'gray'
    },
    schedule: {
        backgroundColor: '#0084ff',
        marginRight: 10,
        width: 90,
        textAlign: 'center',
        borderRadius: 20,
        padding: 4,
        color: '#ffff'

    },
    search: {
        backgroundColor: '#0084ff',
        marginRight: 10,
        width: 90,
        textAlign: 'center',
        borderRadius: 20,
        padding: 4,
        color: '#ffff'

    },
    cancel: {
        backgroundColor: '#0084ff',
        width: 90,
        textAlign: 'center',
        borderRadius: 20,
        padding: 4,
        color: '#ffff'
    },
    icon_img: {
        width: 25,
        height: 25,
        alignSelf: 'center',
        tintColor: 'gray',
        marginLeft: 10,
        marginTop: 2,
        position: 'absolute'

    },
    input_field_member: {
        width: '90%',
        alignSelf: 'center',
        borderRadius: 25,
        borderColor: '#d9dcde',
        borderWidth: 1,
        height: 45,
        padding: 4,
        paddingLeft: 50,
        position: 'relative'

    },
    input_field2: {
        width: '90%',
        alignSelf: 'center',
        borderRadius: 25,
        borderColor: '#d9dcde',
        borderWidth: 1,
        padding: 4,
        height: 45,
        paddingLeft: 10,
        position: 'relative',
        color: '#8a8c8d'

    },
    dropdown_img: {
        width: 30,
        height: 30,
        alignSelf: 'center',
        tintColor: '#0f78f8',
        marginLeft: 260,
        marginTop: 2,
        position: 'absolute'
    },
    calender_icon: {
        width: 20,
        height: 25,
        alignSelf: 'center',
        tintColor: '#0f78f8',
        marginLeft: 240,
        marginTop: 2,
        position: 'absolute'
    },
    time_icon: {
        width: 20,
        height: 25,
        alignSelf: 'center',
        tintColor: '#0f78f8',
        marginLeft: 260,
        marginTop: 2,
        position: 'absolute'
    },
    close_img: {
        width: 25,
        height: 25,
        tintColor: '#1fa6ea',
        position: 'absolute',
        left: 280,
        top: -10
    },
    close_img2: {
        width: 25,
        height: 25,
        tintColor: '#1fa6ea',
        position: 'absolute',
        left: 300,
        top: -10
    }
})
export default GroupChat