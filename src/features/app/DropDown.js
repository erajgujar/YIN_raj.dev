import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions} from 'react-native'
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
        <View>
            <TouchableOpacity onPress={() => setShowOption(!showOption)}>
                <Image style={styles.filter_img} source={require('../assets/images/Others/filter.png')} />
                <Text style={{
                    backgroundColor: '#4083f6',
                    padding: H*0.003,
                    marginLeft: H* 0.080,
                    textAlign: 'center',
                    marginBottom: H* 0.010,
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
                                marginLeft:H* 0.135,         
                                borderColor: 'white',
                                backgroundColor: 'gray',
                                maxWidth:H* 0.135   
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
    )
}

const styles = StyleSheet.create({
    filter_img: {
        width: H* 0.018,
        height: H* 0.022,
        marginTop: H* 0.045,
        marginLeft: H* 0.260,
        tintColor: '#ffff',
        //backgroundColor: 'white',


    },
    text: {
        fontSize: H* 0.017,
        width: H* 0.100,
        marginLeft:H* 0.010,
        color: 'white',
        textAlign: 'left'
    },
    radio: {
        width: H* 0.013,
        height: H* 0.013,
        marginRight: 'auto',
        marginBottom:H* 0.005,
        marginLeft:H* 0.010,
        alignSelf:'flex-end',
        padding:'auto',
        tintColor: '#ffff',

    }
})
export default DropDown


