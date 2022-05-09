import React from 'react';
import { View,StyleSheet,Image } from 'react-native';
import { ForumCard } from './ForumCard';
const BackgroundImage = require('../assets/images/Others/air-pollution.png');
export const ImageForumCard = () => {
  return (
    <View>
        <Image style={styles.image}  source={BackgroundImage} />
        <View style={ styles.card }>
            <ForumCard />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    image : {
        height: 200,
    },
    card : {
        position:'absolute',
        alignItems:'center',
        paddingTop:100,
        margin:10
    }
});