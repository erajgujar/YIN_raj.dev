import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export default function Members() {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)

  const getMembers = async () => {
    await fetch("https://stg-yin-talk-api.foxberry.link/v1/issue/get/issue/member-details/ISSUECOL_120223_RIVERCLEANINGD")
      .then((response) => {
        response.json().then((result) => {
          console.log(result)
          setData(result)
        })
      })
  }

  useEffect(() => {
    getMembers()
  },[])
  return (
    <View style={style.cover}>
      <ScrollView nestedScrollEnabled={true}>
        {
          isLoading ? <ActivityIndicator size="large" color='green' /> : data.map((value, i) => {
            return (<View key={String(i)} style={{ flexDirection: 'row' }}>
              <View style={{ flex: 0.4 }}>
                <Image source={{uri:value.profile_image[0]}} style={style.profile} />
              </View>

              <View style={{ flex: 1 }}>
                <Text style={style.name}>Name: {value.first_name} {value.last_name}</Text>
                <Text ellipsizeMode='tail' numberOfLines={2} style={style.college}>College Name:{value.college_name}</Text>
                <Text style={style.mobile}>Mobile: {value.mobile}</Text>
              </View>
            </View>

            )
          })
        }

        {/* <View style={{ flexDirection:'row',borderTopColor:"#eee",borderTopWidth:1  }}>
              <View style={{ flex:0.4 }}>
                <Image source={require('../assets/images/Others/air-pollution.png')} style={style.profile} />
              </View>
              
              <View style={{ flex:1 }}>
                <Text style={style.name}>Lorem Ipsum</Text>
                <Text ellipsizeMode='tail' numberOfLines={2} style={style.college}>College Name: Lorem Ipsum</Text>
                <Text style={style.mobile}>Mobile:9527840033</Text>
              </View>
        </View> */}

        {/* <View style={{ flexDirection:'row',borderTopColor:"#eee",borderTopWidth:1  }}>
              <View style={{ flex:0.4 }}>
                <Image source={require('../assets/images/Others/air-pollution.png')} style={style.profile} />
              </View>
              
              <View style={{ flex:1 }}>
                <Text style={style.name}>Lorem Ipsum</Text>
                <Text ellipsizeMode='tail' numberOfLines={2} style={style.college}>College Name: Lorem Ipsum</Text>
                <Text style={style.mobile}>Mobile:9527840033</Text>
              </View>
        </View> */}

        {/* <View style={{ flexDirection:'row',borderTopColor:"#eee",borderTopWidth:1  }}>
              <View style={{ flex:0.4 }}>
                <Image source={require('../assets/images/Others/air-pollution.png')} style={style.profile} />
              </View>

              
              <View style={{ flex:1 }}>
                <Text style={style.name}>Lorem Ipsum</Text>
                <Text ellipsizeMode='tail' numberOfLines={2} style={style.college} >College Name: Lorem Ipsum</Text>
                <Text style={style.mobile}>Mobile:9527840033</Text>
              </View>
        </View> */}
        {/* <View style={{ flexDirection:'row',borderTopColor:"#eee",borderTopWidth:1  }}>
              <View style={{ flex:0.4 }}>
                <Image source={require('../assets/images/Others/air-pollution.png')} style={style.profile} />
              </View>
              
              <View style={{ flex:1 }}>
                <Text style={style.name}>Lorem Ipsum</Text>
                <Text ellipsizeMode='tail' numberOfLines={2} style={style.college} >College Name: Lorem Ipsum</Text>
                <Text style={style.mobile}>Mobile:9527840033</Text>
              </View>
        </View> */}
        {/* <View style={{ flexDirection:'row',borderTopColor:"#eee",borderTopWidth:1  }}>
              <View style={{ flex:0.4 }}>
                <Image source={require('../assets/images/Others/air-pollution.png')} style={style.profile} />
              </View>
              
              <View style={{ flex:1 }}>
                <Text style={style.name}>Lorem Ipsum</Text>
                <Text ellipsizeMode='tail' numberOfLines={2} style={style.college} >College Name: Lorem Ipsum</Text>
                <Text style={style.mobile}>Mobile:9527840033</Text>
              </View>
        </View> */}
      </ScrollView>
    </View>

  )
}

const style = StyleSheet.create({
  cover: {
    backgroundColor: 'white',
    height: 250,
    borderRadius: 10,
  },
  profile: {
    height: 30,
    width: 30,
    borderRadius: 50,
    marginLeft: 5,
    marginTop: 20
  },
  mobile: {
    fontSize: 10,
  },
  college: {
    fontSize: 10,
  },
  name: {
    fontSize: 12,
    paddingTop: 10,
    color: '#001a3f'
  }
}); 