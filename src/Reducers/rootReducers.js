import {combineReducers}  from 'redux'
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore'
import taskReducer from './taskReducers'
import authReducer from './authReducers'
import { auth } from 'firebase';

const RootReducer = combineReducers({
    firebase : firebaseReducer,
    firestore : firestoreReducer,
    task : taskReducer,
    auth : authReducer
      
})

export default RootReducer;