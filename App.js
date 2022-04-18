import React from 'react'
import { View } from 'react-native';
import Activity from './src/features/app/Activity';
import CheckUpdates from './src/features/app/CheckUpdates';
import ForumType from './src/features/app/ForumType';
import UpdateActivity from './src/features/app/UpdateActivity';
import Members from './src/features/app/Members';
import AddNewIssue from './src/features/app/AddNewIssue';
import MinutesOfMeeting from './src/features/app/MinutesOfMeeting';
import AddActivity from './src/features/app/AddActivity';

const App = () => {
  return (
    <View>
      {/* <ForumType /> */}
      {/* <UpdateActivity /> */}
      {/* <CheckUpdates/> */}
      {/* <Activity/> */}
      {/* <Members/> */}
      {/* <AddNewIssue/> */}
      {/* <MinutesOfMeeting/> */}
      <AddActivity/>
    </View>

  )
}

export default App
