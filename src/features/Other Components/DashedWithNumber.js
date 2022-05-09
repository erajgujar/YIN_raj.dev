import React  from 'react';
import { View, StyleSheet,Text } from 'react-native';
export default DashedWithNumber= (props) =>{
    return (

            <View style={styles.flexDirection} >
                <View style={styles.verticleLineCss}></View>
                    <View style={styles.indexCss} >
                        <Text style={{ textAlign:'center',color:'white' }} >{props.indexNumber}</Text>
                    </View>
            </View>
    )
}

const styles = StyleSheet.create({
    flexDirection:{
        position:'relative',
        flexDirection: 'column',
        flex:0.3,
    },
    verticleLineCss:{
        position:'absolute',
        height:'100%',
        width:2,
        marginLeft:14,
        backgroundColor: '#1e90ff',
    },
    indexCss:{
        backgroundColor:'#1e90ff',
        borderRadius:6,
        height:26,
        justifyContent:'center',
        marginRight:6,
        marginTop:20,
   },
});