import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'

const Events = () => {
    return (
        <ScrollView horizontal={true}>
            <View style={{marginBottom:10}}>
                <View style={styles.events_container}>
                    <View style={{ lex: 0.15 }}>
                        <Image style={styles.events_img} source={require('../assets/images/Others/ongoing-event-1.png')} />
                        <Text style={{ fontSize: 13, color: 'black', alignSelf: 'center' }}>Event Name</Text>
                        <Text style={{ fontSize: 12, alignSelf: 'center' }}>20 members</Text>
                    </View>

                    <View style={{ lex: 0.15 }}>
                        <Image style={styles.events_img} source={require('../assets/images/Others/ongoing-event-2.png')} />
                        <Text style={{ fontSize: 13, color: 'black', alignSelf: 'center' }}>Event Name</Text>
                        <Text style={{ fontSize: 12, alignSelf: 'center' }}>20 members</Text>
                    </View>

                    <View style={{ lex: 0.15 }}>
                        <Image style={styles.events_img} source={require('../assets/images/Others/ongoing-event-3.png')} />
                        <Text style={{ fontSize: 13, color: 'black', alignSelf: 'center' }}>Event Name</Text>
                        <Text style={{ fontSize: 12, alignSelf: 'center' }}>20 members</Text>
                    </View>

                    <View style={{ lex: 0.15 }}>
                        <Image style={styles.events_img} source={require('../assets/images/Others/ongoing-event-4.png')} />
                        <Text style={{ fontSize: 13, color: 'black', alignSelf: 'center' }}>Event Name</Text>
                        <Text style={{ fontSize: 12, alignSelf: 'center' }}>20 members</Text>
                    </View>

                    <View style={{ lex: 0.15 }}>
                        <Image style={styles.events_img} source={require('../assets/images/Others/ongoing-event-5.png')} />
                        <Text style={{ fontSize: 13, color: 'black', alignSelf: 'center' }}>Event Name</Text>
                        <Text style={{ fontSize: 12, alignSelf: 'center' }}>20 members</Text>
                    </View>

                    <View style={{ lex: 0.15 }}>
                        <Image style={styles.events_img} source={require('../assets/images/Others/ongoing-event-1.png')} />
                        <Text style={{ fontSize: 13, color: 'black', alignSelf: 'center' }}>Event Name</Text>
                        <Text style={{ fontSize: 12, alignSelf: 'center' }}>20 members</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    events_container:{
        flex:1,
        flexDirection:'row',
        padding:7
      },
      events_img:{
        width:75,
        height:70,
        alignSelf:'center',
        borderRadius:15,
        borderWidth:5,
        margin:3,
        borderColor: '#e5e8ec'
      }
})
export default Events