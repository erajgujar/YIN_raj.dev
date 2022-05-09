import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';

export const MeetingUpdates = () => {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)

    const getUpdates = async () => {
        await fetch("https://stg-yin-talk-api.foxberry.link/v1/meeting/list/meeting_id/MEETFORUM_COL0001234_BOYS_ISSUECOL_120223_RIVERCLEANINGDATADISCUSSEDYINRELATEDDATA")
            .then((response) => {
                response.json().then((result) => {
                    console.log(result)
                    setData(result)
                    setLoading(false)
                })
            })
    }

    useEffect(() => {
        getUpdates()
    }, [])
    return (
        <View style={style.cardCover}>
            <ScrollView nestedScrollEnabled={true}>
                <View style={{ flexDirection: 'column' }}>
                    <View >
                        <View style={{ flexDirection: 'row' }} >

                            <View style={style.index} >
                                <Text style={{ textAlign: 'center', color: 'white' }} >1</Text>
                            </View>

                            <View style={{ flex: 1 }}>
                                {
                                    isLoading ? <ActivityIndicator size="large" /> : data.map((value, i) => {
                                        return (<View key={String(i)}>
                                            <Card style={style.innercard}>
                                                <Text style={style.innertitle} >{value.meeting_title}</Text>
                                                <Text style={style.innersubtitle}>{value.updated_at}</Text>
                                                <View>
                                                    <Text ellipsizeMode='tail' numberOfLines={3} style={style.innertext}>
                                                        {value.meeting_description}
                                                    </Text>
                                                </View>

                                            </Card>
                                        </View>
                                        )
                                    })
                                }

                            </View>

                        </View>
                    </View>

                    {
                        isLoading ? <ActivityIndicator size="large" /> : data.map((value, i) => {
                            return (<View style={{ paddingTop: 4 }}>
                                <Text style={{ padding: 6, margin: 0, }}>
                                    {value.meeting_description}
                                </Text>
                            </View>
                            )
                        })
                    }

                </View>
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    cardCover: {
        backgroundColor: 'white',
        height: 280,
        padding: 5,
        borderRadius: 10,
    },
    index: {
        flex: 0.2,
        backgroundColor: 'dodgerblue',
        borderRadius: 8,
        height: 30,
        justifyContent: 'center',
        marginRight: 10,
        marginTop: 10
    },
    innercard: {
        marginTop: 10,
        height: 90,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: "#ddd",
        padding: 1,
    },
    innertitle: {
        fontSize: 10,
        marginHorizontal: 5,
        fontWeight: 'bold'
    },
    innersubtitle: {
        fontSize: 8,
        paddingLeft: 6,
        paddingTop: 2,
        color: "#777"
    },
    innertext: {
        fontSize: 10,
        paddingLeft: 6,
    },

});
