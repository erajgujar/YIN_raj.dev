import React, { useState, useEffect, useMemo } from 'react'
import { ScrollView, View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import DashedLine from './DashedLine'
import DashedLineWithNumber from './DashedWithNumber';
export default function Updates() {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)

    const getUpdates = async () => {
        await fetch("https://stg-yin-talk-api.foxberry.link/v1/activity/list/activity/issue-id/ISSUECOL_120223_RIVERCLEANING")
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
    },[])


    return (
        // Get Activity list using issue id
        <View style={styles.cover}>
            <ScrollView nestedScrollEnabled={true}>


                {
                    isLoading ? <ActivityIndicator size="large" color="green" /> : data.map((value, i) => {
                        return (<View key={String(i)} style={{ flexDirection: 'row' }} >
                            <DashedLineWithNumber indexNumber="1" leftmargin="14" ></DashedLineWithNumber>
                            <View style={styles.update}>
                                <Text style={styles.date}>{value.updated_at}</Text>
                                <Text ellipsizeMode='tail' numberOfLines={2} style={styles.text}>{value.activity_description}</Text>
                            </View>
                        </View>

                        )
                    })
                }

                {/* <View style={{ flexDirection:'row' }}>

                    <DashedLineWithNumber indexNumber="2" leftmargin="14" ></DashedLineWithNumber>

                    <View style={styles.update}>
                        <Text style={styles.date}>15th April 2022</Text>
                        <Text ellipsizeMode='tail' numberOfLines={2} style={styles.text}>River activity of cleaning rivers</Text>
                    </View>
                    
                </View> */}

                {/* <View style={{ flexDirection:'row' }}>

                    <DashedLineWithNumber indexNumber="3" leftmargin="14"></DashedLineWithNumber>

                    <View style={styles.update}>
                        <Text style={styles.date}>15th April 2022</Text>
                        <Text ellipsizeMode='tail' numberOfLines={2} style={styles.text}>River activity of cleaning rivers</Text>
                    </View>
                    
                </View> */}

                {/* <View style={{ flexDirection:'row' }}>

                    <DashedLineWithNumber indexNumber="4" leftmargin="14"></DashedLineWithNumber>

                    <View style={styles.update}>
                        <Text style={styles.date}>15th April 2022</Text>
                        <Text ellipsizeMode='tail' numberOfLines={2} style={styles.text}>River activity of cleaning rivers</Text>
                    </View>
                    
                </View> */}

                {/* <View style={{ flexDirection:'row' }}>

                    <DashedLineWithNumber indexNumber="5" leftmargin="14"></DashedLineWithNumber>

                    <View style={styles.update}>
                        <Text style={styles.date}>15th April 2022</Text>
                        <Text ellipsizeMode='tail' numberOfLines={2} style={styles.text}>River activity of cleaning rivers</Text>
                    </View> 
                    
                </View>*/}
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    cover: {
        backgroundColor: '#fff',
        height: 240,
        padding: 5,
        borderRadius: 20,
        flex: 1,
    },
    update: {
        flex: 1,
        backgroundColor: '#c4f0ff',
        height: 80,
        borderRadius: 10,
        marginTop: 10
    },
    date: {
        fontWeight: "700",
        paddingLeft: 4,
        paddingTop: 6
    },
    text: {
        paddingLeft: 4,
        paddingTop: 2
    }
});
