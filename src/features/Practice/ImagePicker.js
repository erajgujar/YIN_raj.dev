import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import {launchImageLibrary} from 'react-native-image-picker';

const options = {
    title: 'Select Image',
    type: 'library',
    options: {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false
    }  
}

const ImagePicker = () => {

   const OpenGallary = async()=>{
    const Images = await launchImageLibrary(options);
    console.log(Images)
   }

  return (
    <View style={styles.container}>
      <Text onPress={OpenGallary}>ImagePicker</Text>
      
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:200,
        borderRadius:20,
        borderWidth:2,
        width:100,
        marginLeft:180
    }
})
export default ImagePicker