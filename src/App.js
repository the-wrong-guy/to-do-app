import React from 'react';
import './App.css';
import BackToTop from './components/main/App Bar/appbar'
import Todo from './components/main/create note/main'
import Tasks from './components/main/note/note'
import {BrowserRouter,Route} from 'react-router-dom'
import { connect } from "react-redux"
import {compose } from "redux"
import { firestoreConnect } from 'react-redux-firebase'
import Pinnned from './components/Pinned and Unpinned/pinnedBar';
import Unpinned from './components/Pinned and Unpinned/unpinnedBar'
import TaskSkeleton from './components/main/note/TaskSkeleton'



function App({tasks}) {
  return (
    <div className="App">
      <BackToTop/>
      <Todo/>
      {tasks ? (<Pinnned/>):('')}
      {tasks ? (tasks.map((task) => <Tasks task={task} key={task.id} />)) : (<TaskSkeleton/>)}
      {tasks ? (<Unpinned/>):('')}
    </div>
  );
}


// For interating through Task

const mapStateToProps = (state) => {
  console.log(state);
  const tasks = state.firestore.ordered.tasks;
  return {
    tasks: tasks,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "tasks",
      orderBy: ["date", "desc"],
    }
  ])
)(App);

// export default App;
