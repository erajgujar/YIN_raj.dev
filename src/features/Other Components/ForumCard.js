import React from 'react';
import { View,Text,StyleSheet} from 'react-native';
import { Card , Paragraph } from 'react-native-paper';
export const ForumCard = () => {
  return (
    <View>
        <Card style={{ borderRadius:10 }} >
            <View style={{ flexDirection:'row' }}  >
              <Text style={Styles.title}>Boys Forum</Text>
              <Text style={Styles.subtitle}>12th Jan 2022</Text>
            </View>
            <Card.Content>
                <Text ellipsizeMode='tail' numberOfLines={4} style={{ marginTop:10}} >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution distribution distribution</Text>
                <View style={{ flexDirection:'row',marginTop:10 }}>
                <Text style={{ color:'dodgerblue' }} >Forum Dircetor: </Text>
                <Text>Avinash Meshram</Text>
                </View>
            </Card.Content>
        </Card>
    </View>
  )
}

const Styles = StyleSheet.create({
  title:{ 
    flex:1, 
    marginLeft:10,
    fontSize:20,
    marginTop:10
  },
  subtitle:{ 
    flex:1,
    textAlign:'right',
    marginRight:10,
    fontSize:14,
    marginTop:10
   }
});