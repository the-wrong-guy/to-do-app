import React,{useState} from 'react';
import './App.css';
import BackToTop from './components/main/App Bar/appbar'
import Todo from './components/main/create note/main'
import Tasks from './components/main/note/note'
import { connect,useSelector } from "react-redux"
import {compose } from "redux"
import { firestoreConnect ,isLoaded} from 'react-redux-firebase'
import Pinned from './components/Pinned and Unpinned/pinnedBar';
import Unpinned from './components/Pinned and Unpinned/unpinnedBar'
import TaskSkeleton from './components/main/note/TaskSkeleton'
import './loader.css'


function AuthIsLoaded({children}){
  const auth = useSelector(state=>state.firebase.auth)
  if(!isLoaded(auth))
   return(
    <main>
   <div className="dank-ass-loader">
      <div className="row">
         <div className="arrow up outer outer-18"></div>
         <div className="arrow down outer outer-17"></div>
         <div className="arrow up outer outer-16"></div>
         <div className="arrow down outer outer-15"></div>
         <div className="arrow up outer outer-14"></div>
      </div>
      <div className="row">
         <div className="arrow up outer outer-1"></div>
         <div className="arrow down outer outer-2"></div>
         <div className="arrow up inner inner-6"></div>
         <div className="arrow down inner inner-5"></div>
         <div className="arrow up inner inner-4"></div>
         <div className="arrow down outer outer-13"></div>
         <div className="arrow up outer outer-12"></div>
      </div>
      <div className="row">
         <div className="arrow down outer outer-3"></div>
         <div className="arrow up outer outer-4"></div>
         <div className="arrow down inner inner-1"></div>
         <div className="arrow up inner inner-2"></div>
         <div className="arrow down inner inner-3"></div>
         <div className="arrow up outer outer-11"></div>
         <div className="arrow down outer outer-10"></div>
      </div>
      <div className="row">
         <div className="arrow down outer outer-5"></div>
         <div className="arrow up outer outer-6"></div>
         <div className="arrow down outer outer-7"></div>
         <div className="arrow up outer outer-8"></div>
         <div className="arrow down outer outer-9"></div>
      </div>
   </div>
</main>
   )
   return children
}

function App({tasks}) {
  console.log(tasks)
  return (
    <div className="App">
      <AuthIsLoaded>
          <BackToTop/>
          <Todo/>
          {tasks ? (<Pinned/>):('')}
          {tasks ? (tasks.map((task) => <Tasks task={task} key={task.id} />)) : (<><TaskSkeleton/><TaskSkeleton/><TaskSkeleton/></>)}
          {tasks ? (<Unpinned/>):('')}
      </AuthIsLoaded> 
    </div>
  );
}



// For interating through Task

const mapStateToProps = (state) => {
  console.log(state);
  const tasks = state.firestore.ordered.tasks;
  return {
    tasks: tasks,
    uid : state.firebase.auth.uid
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "tasks",
      where: ["authorId", "==", ownProps.uid],
      orderBy: ["date", "desc"],
    }
  ])
)(App);

