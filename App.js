import React from 'react'
import { View, Text, Image } from 'react-native';
import CheckUpdates from './src/features/app/CheckUpdates';
import ForumType from './src/features/app/ForumType';
import UpdateActivity from './src/features/app/UpdateActivity';

const App = () => {
  return (
    <View>
      {/* <ForumType /> */}
      {/* <UpdateActivity /> */}
      <CheckUpdates/>
    </View>

  )
}

export default App
