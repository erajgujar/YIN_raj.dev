import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, TextInput, SafeAreaView, ScrollView } from 'react-native';
const { width, height } = Dimensions.get('window')

export default function ListIssues() {
    const [isLoading, setLoading] = useState(false)
    const [issues, setIssues] = useState([])

    async function getIssues() {
        setLoading(true)
        const response = await axios.get("https://stg-yin-talk-api.foxberry.link/v1/issue/all/list?FORUM_COL0001234_BOYS")
        setIssues(response.data)
        setLoading(false)
        console.log(response.data)
    }

    useEffect(() => {
        getIssues()
    }, [])

    return (
        <SafeAreaView>
            <ScrollView>

                <View style={{ width: width, height: height, justifyContent: 'flex-start' }}>

                    <View style={styles.issue_wrap}>
                        <View style={{
                            flex: 1,
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            flexDirection: 'row'
                        }}>
                            <Image style={styles.menu_icon_img} source={require('../assets/images/Others/menu-icon.png')} />
                            <Text style={{
                                textAlign: 'left',
                                marginTop: 5,
                                fontSize: 15,
                                color: '#ffff',
                                flexBasis: 70,
                                marginRight: 'auto'
                            }}>Issues</Text>
                            <Text style={styles.Add_issue}>Add New Issue + </Text>
                        </View>

                        <View style={{
                            flex: 1,
                            width: '95%',
                            alignSelf: 'center',
                            flexDirection: 'row',
                            marginTop: -50

                        }}>
                            <TextInput style={styles.input_issue} placeholder='Search by Categories of Issues' />
                            <Image style={styles.search_img} source={require('../assets/images/Others/search.png')} />
                        </View>

                        <View>
                            <Image style={styles.filter_img} source={require('../assets/images/Others/filter.png')} />
                        </View>
                    </View>


                    <View>

                        { isLoading? <Text>Loading please wait</Text> : issues.map((value,i)=>{
                            return( <View key={String(i)} style={{
                                position: 'relative',
                                zIndex: 1,
                                top: 145,
                                height: height / 5
                            }}>
                                <View>
                                    <Image style={styles.river_cleaning_img} source={{uri:value.issue_images[0]}} />
                                    <View style={{ position: 'absolute', top: 10 }}>
                                        <Text style={{
                                            marginLeft: 20,
                                            backgroundColor: '#515254',
                                            padding: 3,
                                            width: 100,
                                            color: 'white',
                                            borderRadius: 20,
                                            textAlign: 'center',
                                            fontSize: 10
                                        }}>{value.updated_at}</Text>
                                        <Text style={{
                                            marginLeft: 20,
                                            backgroundColor: 'red',
                                            padding: 1,
                                            marginTop: 6,
                                            width: 50,
                                            color: 'white',
                                            borderRadius: 20,
                                            textAlign: 'center',
                                            fontSize: 10
                                        }}>{value.issue_types}</Text>
                                    </View>
                                </View>

                                <Text style={{ marginLeft: 15, marginTop: 5, color: 'black' }}>{value.issue_title}</Text>
                            </View>
                        )})}
                    </View>

                    <View >
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginLeft: 15, marginTop: 15, fontSize: 15, color: 'black' }}>Forum Name:</Text>
                            <Text style={{ marginLeft: 15, marginTop: 15 }}>Grievence Corner</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginLeft: 15, marginTop: 5, fontSize: 15, color: 'black' }}>College Name:</Text>
                            <Text style={{ marginLeft: 15, marginTop: 5 }}>MIT College</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    issue_wrap: {
        width: '100%',
        height: height / 4,
        backgroundColor: '#4083f6',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        position: 'absolute',
        zIndex: 0,
        padding: 7

    },
    menu_icon_img: {
        height: 35,
        width: 30,
        // marginRight: 7,
        tintColor: '#ffff'


    },
    Add_issue: {
        borderWidth: 2,
        borderRadius: 20,
        padding: 5,
        color: '#ffff',
        borderColor: '#ffff',
        height: 35,
        flexBasis: 135,
        marginTop: 5,
        textAlign: 'center'

    },
    river_cleaning_img: {
        width: '95%',
        height: 115,
        borderRadius: 30,
        alignSelf: 'center'
    },
    search_img: {
        width: 20,
        height: 20,
        marginLeft: -35,
        marginTop: 9
    },
    input_issue: {
        padding: 7,
        borderWidth: 2,
        borderRadius: 20,
        width: '100%',
        height: 35,
        borderColor: '#ffff',
        color: 'gray',
        backgroundColor: '#ffff',
        fontSize: 15,
        marginBottom: 10

    },
    filter_img: {
        width: 13,
        height: 15,
        alignSelf: 'flex-end',
        marginRight: 13,
        tintColor: '#ffff',
        marginTop: -60
    }
})
