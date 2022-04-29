import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;

const DropDown = ({
    data = [],
    value = {},
    onSelect = () => { }
}) => {
    console.log(value)
    const [showOption, setShowOption] = useState(false)

    const onSelectedItem = (val) => {
        setShowOption(false)
        onSelect(val)
    }




    return (
        <ScrollView>
        
            <View>
                <TouchableOpacity onPress={() => setShowOption(!showOption)}>
                    <Image style={styles.filter_img} source={require('../assets/images/Others/filter.png')} />
                    <Text style={{
                        backgroundColor: '#4083f6',
                        padding: 3,
                        marginLeft: 30,
                        textAlign: 'center',
                        marginBottom: 10,
                        color: 'white'
                    }}>{!!value ? value?.name : "Select Issue"}</Text>
                </TouchableOpacity>
                {showOption && <View>
                    {
                        data.map((val, i) => {
                            return (
                                <TouchableOpacity style={{
                                    flexDirection: 'row',
                                    justifyContent: 'flex-end',
                                    borderWidth: 1,
                                    marginLeft: 20,
                                    borderColor: 'white',
                                    backgroundColor: 'gray',
                                    maxWidth: 130
                                }} key={String(i)}>
                                    <Image style={styles.radio} source={require('../assets/images/Others/radio_button.png')} />
                                    <Text onPress={() => onSelectedItem(val)} style={styles.text} >{val.name}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
                }

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    filter_img: {
        width: 16,
        height: 18,
        marginTop: 35,
        marginLeft: 115,
        tintColor: '#ffff',
        //backgroundColor: 'white',


    },
    text: {
        fontSize: 15,
        width: 80,
        marginLeft: 10,
        color: 'white',
        textAlign: 'left'
    },
    radio: {
        width: 13,
        height: 13,
        marginRight: 'auto',
        marginBottom: 5,
        marginLeft: 10,
        alignSelf: 'flex-end',
        padding: 'auto',
        tintColor: '#ffff',

    }
})
export default DropDown


