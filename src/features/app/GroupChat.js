import { View, Text, ScrollView, TextInput, Image, StyleSheet } from 'react-native'
import React from 'react'

const GroupChat = () => {
    return (
        <ScrollView>
            <View>
                <View style={styles.header_container}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Image style={styles.back_img} source={require('../assets/images/left.png')} />
                        </View>
                        <View>
                            <Text style={styles.header_title}>Group - Air Pollution</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Image style={styles.videocam_img} source={require('../assets/images/Others/videocam.png')} />
                            <Image style={styles.android_img} source={require('../assets/images/Others/android.png')} />
                            <Image style={styles.more_vert_img} source={require('../assets/images/Others/more_vert.png')} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'center' }}>
                        <Image style={styles.user_thumbnail} source={require('../assets/images/Others/member-1.png')} />
                        <Image style={styles.user_thumbnail} source={require('../assets/images/Others/member-2.png')} />
                        <Image style={styles.user_thumbnail} source={require('../assets/images/Others/member-3.png')} />
                        <Image style={styles.user_thumbnail} source={require('../assets/images/Others/member-1.png')} />
                        <Image style={styles.user_thumbnail} source={require('../assets/images/Others/chat-profile-4.jpg')} />
                        <Image style={styles.user_thumbnail} source={require('../assets/images/Others/chat-profile-3.jpg')} />
                        <Image style={styles.user_thumbnail} source={require('../assets/images/Others/chat-profile-2.jpg')} />
                    </View>
                </View>
                <View>
                    <Text style={styles.time}>Today, 3:24 pm</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                    <View style={{ width: '25%', padding: 15 }}>
                        <Image style={styles.user_img} source={require('../assets/images/Others/chat-profile-2.jpg')} />
                    </View>
                    <View style={{ width: '75%', backgroundColor: '#f6dff4', marginRight: 25, padding: 12, borderRadius: 25 }}>
                        <Text style={styles.chat_text}>
                            This is dummy chatting text written here for showing chat between group with the different peoples.
                        </Text>
                        <Text style={[styles.chat_text, { marginLeft: 'auto' }]}>3.25 pm </Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15, marginRight: 'auto' }}>
                    <View style={{ width: '25%', padding: 5, marginLeft: -10 }}>
                        <Image style={styles.user_img} source={require('../assets/images/Others/chat-profile-3.jpg')} />
                    </View>
                    <View style={{ width: 'auto', backgroundColor: '#efd4ac', marginRight: 25, padding: 12, borderRadius: 25 }}>
                        <Text style={styles.chat_text}>
                            This is dummy chatting text.
                        </Text>
                        <Text style={[styles.chat_text, { marginLeft: 'auto' }]}>3.28 pm </Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15, marginRight: 'auto' }}>
                    <View style={{ width: '25%', padding: 5, marginLeft: -10 }}>
                        <Image style={styles.user_img} source={require('../assets/images/Others/member-1.png')} />
                    </View>
                    <View style={{ width: 'auto', backgroundColor: '#abfae8', marginRight: 25, padding: 12, borderRadius: 25 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.chat_text, { marginRight: 7 }]}>
                                Yes
                            </Text>
                            <Image style={styles.thumb_img} source={require('../assets/images/Others/thumb.png')} />
                        </View>
                        <View>
                            <Text style={[styles.chat_text, { marginLeft: 50 }]}>4.00 pm </Text>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                    <View style={{ width: '25%', padding: 15 }}>
                        <Image style={styles.user_img} source={require('../assets/images/Others/member-2.png')} />
                    </View>
                    <View style={{ width: '75%', backgroundColor: '#f0ac97', marginRight: 25, padding: 12, borderRadius: 25 }}>
                        <Text style={styles.chat_text}>
                            This is dummy chatting text written here for showing chat between group with the different peoples.
                        </Text>
                        <Text style={[styles.chat_text, { marginLeft: 'auto' }]}>4.02 pm </Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                    <View style={{ width: '75%', backgroundColor: '#2da9f1', marginRight: 6, padding: 9, borderRadius: 25 }}>
                        <Text style={[styles.chat_text, { color: 'white' }]}>
                            This is dummy chatting text written here for showing chat between group
                        </Text>
                        <Text style={[styles.chat_text, { marginLeft: 'auto', color: 'white' }]}>4.10 pm </Text>
                    </View>
                    <View style={{ width: '20%', marginRight:-10 }}>
                        <Image style={styles.user_img} source={require('../assets/images/Others/member-3.png')} />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15, marginLeft: 'auto' }}>
                    <View style={{ width: '55%', backgroundColor: '#2da9f1', marginRight: 6, padding: 9, borderRadius: 25 }}>
                        <Image style={styles.chat_img} source={require('../assets/images/Others/chat-message-img.jpg')} />
                        <Text style={[styles.chat_text, { color: 'white' }]}>This is dummy image sent in group chat one of the member</Text>
                        <Text style={[styles.chat_text, { marginLeft: 'auto', color: 'white' }]}>4.11 pm </Text>
                    </View>
                    <View style={{ width: '20%', padding: 10}}>
                        <Image style={styles.user_img} source={require('../assets/images/Others/member-3.png')} />
                    </View>
                </View>

                <View style={{ marginTop: 10, marginBottom: 10, flexDirection: 'row', padding: 7 }} >
                    <View style={styles.container_chat}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.smilly_img} source={require('../assets/images/Others/smilly.png')} />
                            <TextInput style={{ alignSelf: 'center' }} placeholder='Type message' />
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                            <Image style={styles.keyboard_img} source={require('../assets/images/Others/attachment.png')} />
                            <Image style={styles.keyboard_img} source={require('../assets/images/Others/mic.png')} />
                            <Image style={styles.keyboard_img} source={require('../assets/images/Others/android_camera.png')} />
                        </View>
                    </View>

                    <View style={{marginLeft:'auto', backgroundColor: '#64bfed',
                     borderRadius:50, justifyContent:'center', alignItems:'center', marginRight:7,marginLeft:5, width:45, height:45}}>
                        <Image style={styles.sent_img} source={require('../assets/images/Others/send.png')} />
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header_container: {
        width: '100%',
        backgroundColor: '#1fa6ea',
        paddingTop: 20,
        paddingBottom: 17,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,

    },
    back_img: {
        width: 25,
        height: 20,
        marginLeft: 15,
        marginRight: 15,
        tintColor: 'white',
        alignSelf: 'center'
        

    },
    header_title: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 17,
        fontWeight: 'bold',
       
    },
    android_img: {
        height: 22,
        width: 17,
        tintColor: 'white',
        alignSelf: 'center',
        marginRight: 15
    },
    videocam_img: {
        height: 17,
        width: 25,
        tintColor: 'white',
        alignSelf: 'center',
        marginRight: 13
    },
    more_vert_img: {
        height: 18,
        width: 10,
        tintColor: 'white',
        alignSelf: 'center',
        marginRight: 15
    },
    user_thumbnail: {
        width: 30,
        height: 30,
        marginRight: 8,
        borderRadius: 5,
        borderColor: 'white',
        borderwidth: 2
    },
    time: {
        color: 'black',
        alignSelf: 'center',
        fontSize: 13,
        marginTop: 5
    },
    user_img: {
        width: 50,
        height: 50,
        borderRadius: 5,
        alignSelf: 'center'
    },
    chat_text: {
        borderRadius: 20,
        fontSize: 12,
        textAlign: 'justify'

    },
    thumb_img: {
        width: 22,
        height: 22,
        alignSelf: 'center',
        marginTop: -5,
        tintColor: '#1fa6ea'
    },
    chat_img: {
        width: 195,
        height: 90,
        borderRadius: 15,
        margin: 2
    },
    container_chat: {
        flexDirection: 'row',
        padding: 1,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#d0d0d6',
        width: '83%',
        height:45,
        marginLeft:7,
        marginRight:5
    },
    smilly_img: {
        width: 30,
        height: 30,
        marginLeft: 5,
        marginRight: 5,
        alignSelf: 'center',
        tintColor:'#2da9f1'

    },
    keyboard_img: {
        width: 25,
        height: 25,
        marginRight: 9,
        alignSelf: 'center',
        tintColor:'#767879'
    },
    sent_img: {
        width: 27,
        height: 27,
        alignSelf: 'center',
        tintColor:'white',
        alignSelf:'center'
    }
})
export default GroupChat