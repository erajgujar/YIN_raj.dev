import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Dimensions, TouchableOpacity, Pressable, ScrollView } from 'react-native';
import DropDown from './DropDown';
//import SelectDropdown from 'react-native-select-dropdown'
const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;
const issues = [{ id: 1, name: 'All' }, { id: 2, name: 'Completed' }, { id: 3, name: 'Live' }, { id: 4, name: 'Droped' }, { id: 4, name: 'External' }]
export default function IssueFilter() {
    const [selectedItem, setSelectedItem] = useState(null)

    const onSelect = (item) => {
        setSelectedItem(item)
    }


    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

            <View style={{ height: H }}>

                <View style={styles.issue_wrap}>
                    <View style={{
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        flexDirection: 'row'
                    }}>
                        <Image style={styles.menu_icon_img} source={require('../assets/images/Others/menu-icon.png')} />
                        <Text style={{
                            textAlign: 'left',
                            fontSize: 18,
                            color: '#ffff',
                            alignSelf: 'flex-start',
                            width: 70,
                            marginRight: 'auto'
                        }}>Issues</Text>
                        <Text style={styles.Add_issue}>Add New Issue + </Text>
                    </View>

                    <View style={{
                        width: '95%',
                        alignSelf: 'flex-start',
                        flexDirection: 'row',
                        marginTop: 5,
                        marginBottom: 155

                    }}>
                        <TextInput style={styles.input_issue} placeholder='Search by Categories of Issues' />
                        <Image style={styles.search_img} source={require('../assets/images/Others/search.png')} />
                    </View>


                </View>




                <View style={{
                    position: 'relative',
                    zIndex: 1,
                    top: 190,
                }}>
                    <View>
                        <Image style={styles.river_cleaning_img} source={require('../assets/images/Others/issues-image-1.png')} />
                        <View style={{ position: 'absolute', top: 10 }}>
                            <Text style={{
                                marginLeft: 30,
                                backgroundColor: '#515254',
                                padding: 3,
                                width: 100,
                                color: 'white',
                                borderRadius: 20,
                                textAlign: 'center',
                                fontSize: 10
                            }}>1st December 2021</Text>
                            <Text style={{
                                marginLeft: 30,
                                backgroundColor: 'green',
                                padding: 1,
                                marginTop: 6,
                                width: 50,
                                color: 'white',
                                borderRadius: 20,
                                textAlign: 'center',
                                fontSize: 10
                            }}>open</Text>
                        </View>
                    </View>

                    <Text style={{ marginLeft: 15, marginTop: 3, color: 'black' }}>River Cleaning</Text>
                </View>

                <View style={{
                    //Top: H * 0.040,
                    position: 'absolute',
                    zIndex: 1,
                    top: 90,
                    marginLeft: 200
                }}>
                    <DropDown
                        value={selectedItem}
                        data={issues}
                        onSelect={onSelect}
                    />
                </View>

                <View style={{
                    position: 'absolute',
                    top: 400,
                    width: '100%',
                }}>
                    <View>
                        <Image style={{
                            width: '95%',
                            height: 170,
                            alignSelf: 'center',
                            borderRadius: 20,
                            position: 'absolute'
                        }} source={require('../assets/images/Others/air-pollution.png')} />
                        <View style={{ position: 'relative', top: 10 }}>
                            <Text style={{
                                marginLeft: 30,
                                backgroundColor: '#515254',
                                padding: 3,
                                width: 90,
                                color: 'white',
                                borderRadius: 20,
                                textAlign: 'center',
                                fontSize: 10
                            }}>1st January 2022</Text>
                            <Text style={{
                                marginLeft: 30,
                                backgroundColor: 'red',
                                padding: 1,
                                marginTop: 6,
                                width: 70,
                                color: 'white',
                                borderRadius: 20,
                                textAlign: 'center',
                                fontSize: 10
                            }}>abondoned</Text>
                        </View>
                    </View>
                    <Text style={{ marginLeft: 15, marginTop: 130, color: 'black' }}>Air Pollution</Text>
                </View>

                <View style={{
                    position: 'relative',
                    top: 410,
                    width: W,

                }}>

                    <View>
                        <Image style={{
                            width: '95%',
                            height: 160,
                            alignSelf: 'center',
                            borderRadius: 20
                        }} source={require('../assets/images/Others/forum-des.png')} />
                        <Text style={{
                            marginLeft: 20,
                            backgroundColor: '#515254',
                            padding: 3,
                            width: 90,
                            color: 'white',
                            position: 'absolute',
                            borderRadius: 20,
                            textAlign: 'center',
                            fontSize: 10,
                            marginTop: 10
                        }}>5th January 2022</Text>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginLeft: 15, marginTop: 15, fontSize: 17, color: 'black' }}>Forum Name:</Text>
                            <Text style={{ marginLeft: 15, marginTop: 15, fontSize: 17 }}>Grievence Corner</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginLeft: 15, marginTop: 5, fontSize: 17, color: 'black' }}>College Name:</Text>
                            <Text style={{ marginLeft: 15, marginTop: 5, fontSize: 17 }}>MIT College</Text>
                        </View>
                    </View>

                </View>


            </View>

        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'

    },
    issue_wrap: {
        width: '100%',
        backgroundColor: '#4083f6',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        justifyContent: 'space-between',
        alignItems: 'stretch',
        position: 'absolute',
        height: 'auto',
        zIndex: 0,
        padding: 7,
        paddingTop: 10,
        paddingBottom: 15

    },
    menu_icon_img: {
        height: 30,
        width: 35,
        marginRight: 7,
        alignSelf: 'flex-start',
        tintColor: '#ffff'
    },
    Add_issue: {
        borderWidth: 2,
        borderRadius: 20,
        padding: 4,
        color: '#ffff',
        borderColor: '#ffff',
        fontSize: 16,
        width: 155,
        alignSelf: 'flex-end',
        textAlign: 'center'

    },
    river_cleaning_img: {
        width: '95%',
        height: 170,
        borderRadius: 20,
        alignSelf: 'center'
    },
    search_img: {
        width: 20,
        height: 20,
        marginLeft: -50,
        marginTop: 25
    },
    input_issue: {
        padding: 15,
        margin: 10,
        borderWidth: 2,
        borderRadius: 20,
        width: W - 30,
        height: 45,
        borderColor: '#ffff',
        alignSelf: 'center',
        color: 'gray',
        backgroundColor: '#ffff',
        fontSize: 15,
        marginBottom: 5

    },
    filter_img: {
        width: 15,
        height: 17,
        alignSelf: 'flex-end',
        marginRight: 15,
        tintColor: '#ffff',
        marginTop: 10,
        marginBottom: 90

    },
    // dropdown_button_text: {
    //     fontSize: 10,

    //     padding: 0
    // },
    // dropdown_button: {
    //     width: 100,
    //     padding: 0
    // },
    // dropdown_row: {
    //     padding: 5
    // },
    // dropdown_row_text: {
    //     fontSize: 13,
    //     padding: 5
    // },
    // dropdown_menu: {
    //     backgroundColor: 'black',
    //     color: 'white',
    //     borderWidth: 2,
    //     padding: 5
    // },
    // text: {
    //     width: H * 0.045,
    //     height: H * 0.107,
    //     alignSelf: 'flex-end',
    //     marginRight: H * 0.015,
    //     marginTop: H * 0.010,
    //     marginBottom: H * 0.090,
    //     zIndex:1

    // }
})

{/* <View>
                <SelectDropdown
                    buttonTextStyle={styles.dropdown_button_text}
                    buttonStyle={styles.dropdown_button}
                    rowStyle={styles.dropdown_row}
                    rowTextStyle={styles.dropdown_row_text}
                    dropdownIconPosition="right"

                    data={Issues}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item
                    }}
                />
            </View> */}





