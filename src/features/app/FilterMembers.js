import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;

const FilterMembers = () => {
    return (
        <ScrollView>
            <View style={{ height: 'auto', width: 'auto' }}>
                <View style={styles.container}>
                    <Image style={styles.left_arrow} source={require('../assets/images/left.png')} />
                    <Text style={styles.header_text}>Filter</Text>
                </View>
                <View style={[styles.sub_container, { flexDirection: 'row' }]}>
                    <Text style={styles.main_btn}>All</Text>
                    <Text style={styles.sub_btn}>Recently Added</Text>
                </View>
                <View style={styles.sub_container}>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={{ color: 'black' }}>Search by Forum</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.main_btn}>Forum Title</Text>
                        <Text style={styles.sub_btn}>Forum Title</Text>
                        <Text style={styles.sub_btn}>Forum Title</Text>
                    </View>
                </View>
                <View style={styles.sub_container}>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={{ color: 'black' }}>Search by College</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <Text style={styles.main_btn}>College Name</Text>
                        <Text style={styles.sub_btn}>College Name</Text>
                        <Text style={styles.sub_btn}>College Name</Text>
                    </View>
                </View>
                <View style={styles.sub_container}>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={{ color: 'black' }}>Search by Group</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <Text style={styles.main_btn}>Group Name</Text>
                        <Text style={styles.sub_btn}>Group Name</Text>
                        <Text style={styles.sub_btn}>Group Name</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 150}}>
                    <View style={styles.apply}>
                        <Text style={{color:'white', fontSize:15}}>Apply</Text>
                    </View>
                    <View style={styles.clear}>
                        <Text style={{color:'black', fontSize:15}}>Clear</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#14a3db",
        paddingTop: 25,
        paddingBottom: 15,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        marginTop: 0,
        position: "relative",
        zIndex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'


    },
    left_arrow: {
        width: 25,
        height: 20,
        marginLeft: 15,
        marginRight: 10,
        tintColor: "white",
        alignSelf:'center'
    },
    header_text: {
        fontSize: 18,
        color: "white",
        marginRight: 'auto',
        alignSelf:'center'
    },
    sub_container: {
        width: 'auto',
        height: 'auto',
        margin: 10,
        marginRight: 14,
        marginLeft: 14,
        padding: 18,
        borderRadius: 15,
        borderColor: '#e7ecee',
        borderWidth: 2,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'

    },
    main_btn: {
        backgroundColor: '#0f98e7',
        padding: 3,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 7,
        marginRight: 10,
        color: 'white',
        fontSize: 12,
        alignSelf: 'center'

    },
    sub_btn: {
        backgroundColor: '#d7d7d7',
        padding: 3,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 7,
        marginRight: 10,
        color: 'black',
        fontSize: 12,
        alignSelf: 'center'
    },
    apply: {
        backgroundColor: '#0f98e7',
        alignSelf:'center',
       width:'50%',
       height:50,
       justifyContent:'center',
       alignItems:'center'
       
    },
    clear: {
        backgroundColor: '#d7d7d7',
        alignSelf:'center',
        width:'50%',
        height:50,
        justifyContent:'center',
       alignItems:'center'
       
       
    }
})

export default FilterMembers