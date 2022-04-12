import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
const UpdateActivity = () => {
    
    return (
        <View>
            <View style={styles.container}>
                <Image style={styles.left_arrow} source={require('../assets/images/left.png')} />
                <Text style={styles.header_text}>Update Activity</Text>
            </View>
            <View>
                
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#14a3db",
        paddingTop: 50,
        paddingBottom: 15,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25

    },
    left_arrow: {
        width: 30,
        height: 30,
        marginLeft: 15,
        marginRight: 15,
        tintColor: "white"
    },
    header_text: {
        fontSize: 20,
        color: "white"
    }
})

export default UpdateActivity