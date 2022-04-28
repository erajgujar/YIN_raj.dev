import React from 'react'
import { View } from 'react-native';
import Activity from './src/features/app/Activity';
import CheckUpdates from './src/features/app/CheckUpdates';
import ForumType from './src/features/app/ForumType';
import Members from './src/features/app/Members';
import AddNewIssue from './src/features/app/AddNewIssue';
import MinutesOfMeeting from './src/features/app/MinutesOfMeeting';
import AddActivity from './src/features/app/AddActivity';
import LiveIssues from './src/features/app/LiveIssues';
import ListIssues from './src/features/app/ListIssues';
import IssueFilter from './src/features/app/IssueFilter';
import IssueDetails from './src/features/app/IssueDetails';
// import DropDown from './src/features/app/DropDown';

const App = () => {
  return (
    <View>



      {/* <LiveIssues /> */}
      {/* <ListIssues/> */}
      <IssueFilter/>
      {/* <IssueDetails/> */}
      {/* <ForumType /> */}
      {/* <CheckUpdates/> */}
      {/* <Activity /> */}
      {/* <Members/> */}
      {/* <AddNewIssue/> */}
      {/* <AddActivity/> */}
      {/* <MinutesOfMeeting/> */}
      {/* <DropDown/> */}



    </View>

  )
}

export default App
