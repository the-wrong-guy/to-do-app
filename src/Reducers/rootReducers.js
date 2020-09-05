import {combineReducers}  from 'redux'
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore'
import taskReducer from './taskReducers'

const RootReducer = combineReducers({
    firebase : firebaseReducer,
    firestore : firestoreReducer,
    task : taskReducer
      
})

export default RootReducer;