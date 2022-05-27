import { View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native'
import React from 'react'
import YouTube from 'react-native-youtube';
const { width, height } = Dimensions.get('window')

const LiveIssuesDashboard = () => {

    return (
        <View style={{height:280}}>
            <ScrollView nestedScrollEnabled={true}>    
                    <View style={{padding:5, marginTop:25}}>
                    <View>
                        <Text style={{color:'black', fontSize:15, marginBottom:5}}>Issue Title</Text>
                        <Text style={{marginBottom:10}}>5 Minutes ago</Text>
                    </View>
                        <YouTube
                            apiKey='AIzaSyD23DuJHCULMajsj7L-SY-Z0W4-sytPU3o'
                            videoId="6oFuwhIibo4" // The YouTube video ID
                            play // control playback of video with true/false
                            fullscreen // control whether the video should play in fullscreen or inline
                            loop // control whether the video should loop when ended
                            onReady={e => this.setState({ isReady: true })}
                            onChangeState={e => this.setState({ status: e.state })}
                            onChangeQuality={e => this.setState({ quality: e.quality })}
                            //onError={e => this.setState({ error: e.error })}
                            style={{
                                alignSelf: 'center',
                                width: '100%',
                                marginTop: 5,
                                borderRadius: 20,
                                height: 100,
                            }}
                        />
                        <Text style={{
                            width: '100%',
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            borderWidth: 2,
                            borderColor: '#e0e3e8',
                            padding: 10,
                            textAlign: 'left',
                            alignSelf: 'center'
                        }}>Youtube Video</Text>
                        
                    </View>
                    <View>
                    <Text style={{width:'auto',
                    borderRadius:20,
                    padding:6,
                    marginRight:'auto',
                    color:'white',
                    alignSelf:'center',
                    marginBottom:10,
                    backgroundColor:'#0b84ee',
                     marginTop:20}}>View Details</Text>
                    </View>

            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    river_cleaning_img: {
        width: '90%',
        height: 70,
        borderRadius: 20,
        alignSelf: 'center'
    },
    live_issue_img: {
        width: '100%',
        height: 130,
        borderBottomLeftRadius: 25,
        borderTopLeftRadius: 25
    }
})

export default LiveIssuesDashboard