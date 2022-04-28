import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Dimensions, TouchableOpacity } from 'react-native';
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
        <View>

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
                        marginTop: H * 0.005,
                        fontSize: H * 0.023,
                        color: '#ffff',
                        alignSelf: 'flex-start',
                        flexBasis: H * 0.070,
                        marginRight: 'auto'
                    }}>Issues</Text>
                    <Text style={styles.Add_issue}>Add New Issue + </Text>
                </View>

                <View style={{
                    flex: 1,
                    width: '95%',
                    alignSelf: 'flex-start',
                    flexDirection: 'row',
                    marginTop: H * 0.005,
                    marginBottom: H * 0.155

                }}>
                    <TextInput style={styles.input_issue} placeholder='Search by Categories of Issues' />
                    <Image style={styles.search_img} source={require('../assets/images/Others/search.png')} />
                </View>


            </View>

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










            <View style={{
                position: 'relative',
                zIndex: 1,
                top: H * 0.190,
            }}>
                <View>
                    <Image style={styles.river_cleaning_img} source={require('../assets/images/Others/issues-image-1.png')} />
                    <View style={{ position: 'absolute', top: H * 0.010 }}>
                        <Text style={{
                            marginLeft: H * 0.030,
                            backgroundColor: '#515254',
                            padding: H * 0.003,
                            width: H * 0.100,
                            color: 'white',
                            borderRadius: H * 0.020,
                            textAlign: 'center',
                            fontSize: H * 0.010
                        }}>1st December 2021</Text>
                        <Text style={{
                            marginLeft: H * 0.030,
                            backgroundColor: 'green',
                            padding: H * 0.001,
                            marginTop: H * 0.006,
                            width: H * 0.050,
                            color: 'white',
                            borderRadius: H * 0.020,
                            textAlign: 'center',
                            fontSize: H * 0.010
                        }}>open</Text>
                    </View>
                </View>

                <Text style={{ marginLeft: H * 0.015, marginTop: H * 0.003, color: 'black' }}>River Cleaning</Text>
            </View>

            <View style={{
                    //Top: H * 0.040,
                    position: 'absolute',
                    zIndex: 1,
                    top:H* 0.090,
                    marginLeft: H* 0.200
                }}>
                    <DropDown
                        value={selectedItem}
                        data={issues}
                        onSelect={onSelect}
                    />
                </View>

            <View style={{
                position: 'absolute',
                top: H * 0.400,
                width: W,
            }}>
                <View>
                    <Image style={{
                        width: '95%',
                        height: H * 0.170,
                        alignSelf: 'center',
                        borderRadius: H * 0.020,
                        position: 'absolute'
                    }} source={require('../assets/images/Others/air-pollution.png')} />
                    <View style={{ position: 'relative', top: H * 0.010 }}>
                        <Text style={{
                            marginLeft: H * 0.030,
                            backgroundColor: '#515254',
                            padding: H * 0.003,
                            width: H * 0.090,
                            color: 'white',
                            borderRadius: H * 0.020,
                            textAlign: 'center',
                            fontSize: H * 0.010
                        }}>1st January 2022</Text>
                        <Text style={{
                            marginLeft: H * 0.030,
                            backgroundColor: 'red',
                            padding: H * 0.001,
                            marginTop: H * 0.006,
                            width: H * 0.070,
                            color: 'white',
                            borderRadius: H * 0.020,
                            textAlign: 'center',
                            fontSize: H * 0.010
                        }}>abondoned</Text>
                    </View>
                </View>
                <Text style={{ marginLeft: H * 0.015, marginTop: H * 0.130, color: 'black' }}>Air Pollution</Text>
            </View>

            <View style={{
                position: 'relative',
                top: H * 0.410,
                width: W,
            }}>

                <View>
                    <Image style={{
                        width: '95%',
                        height: H * 0.170,
                        alignSelf: 'center',
                        borderRadius: H * 0.020
                    }} source={require('../assets/images/Others/forum-des.png')} />
                    <Text style={{
                        marginLeft: H * 0.020,
                        backgroundColor: '#515254',
                        padding: H * 0.003,
                        width: H * 0.090,
                        color: 'white',
                        position: 'absolute',
                        borderRadius: H * 0.020,
                        textAlign: 'center',
                        fontSize: H * 0.010,
                        marginTop: H * 0.010
                    }}>5th January 2022</Text>
                </View>

                <View >
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ marginLeft: H * 0.015, marginTop: H * 0.015, fontSize: H * 0.017, color: 'black' }}>Forum Name:</Text>
                        <Text style={{ marginLeft: H * 0.015, marginTop: H * 0.015, fontSize: H * 0.017 }}>Grievence Corner</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ marginLeft: H * 0.015, marginTop: H * 0.005, fontSize: H * 0.017, color: 'black' }}>College Name:</Text>
                        <Text style={{ marginLeft: H * 0.015, marginTop: H * 0.005, fontSize: H * 0.017 }}>MIT College</Text>
                    </View>
                </View>
            </View>

        </View>



    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        padding: H * 0.007,
        paddingBottom: H * 0.015

    },
    menu_icon_img: {
        height: H * 0.045,
        width: H * 0.044,
        marginRight: H * 0.007,
        alignSelf: 'flex-start',
        tintColor: '#ffff'
    },
    Add_issue: {
        borderWidth: 2,
        borderRadius: 20,
        padding: H * 0.010,
        color: '#ffff',
        borderColor: '#ffff',
        fontSize: H * 0.017,
        height: H * 0.045,
        flexBasis: H * 0.155,
        marginTop: H * 0.005,
        alignSelf: 'flex-end',
        textAlign: 'center'

    },
    river_cleaning_img: {
        width: '95%',
        height: H * 0.170,
        borderRadius: 20,
        alignSelf: 'center'
    },
    search_img: {
        width: H * 0.020,
        height: H * 0.020,
        marginLeft: H * -0.050,
        marginTop: H * 0.025
    },
    input_issue: {
        padding: H * 0.015,
        margin: H * 0.010,
        borderWidth: 2,
        borderRadius: 20,
        width: W - 20,
        height: H * 0.050,
        borderColor: '#ffff',
        alignSelf: 'center',
        color: 'gray',
        backgroundColor: '#ffff',
        fontSize: H * 0.015,
        marginBottom: H * 0.005

    },
    filter_img: {
        width: H * 0.015,
        height: H * 0.017,
        alignSelf: 'flex-end',
        marginRight: H * 0.015,
        tintColor: '#ffff',
        marginTop: H * 0.010,
        marginBottom: H * 0.090

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



    



