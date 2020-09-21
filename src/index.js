import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import RootReducer from './Reducers/rootReducers'
import {Provider,useSelector} from 'react-redux'
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import {getFirebase,ReactReduxFirebaseProvider,isLoaded} from 'react-redux-firebase' 
import firebase from './config/firebase'
import {createFirestoreInstance} from 'redux-firestore'
import Routes from './router'

 const store = createStore(RootReducer,applyMiddleware(thunk.withExtraArgument({getFirebase})))

 const rrfProps ={
   firebase,
   config:{},
   dispatch : store.dispatch,
   createFirestoreInstance
 }

//  function AuthIsLoaded({children}){
//    const auth = useSelector(state=>state.firebase.auth)
//    if(!isLoaded(auth))
//     return(
//       <div>
//       loading...
//       </div>
//     )
//     return children
//  }

ReactDOM.render(
  <>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Routes />
      </ReactReduxFirebaseProvider>  
    </Provider>
  </>,
  document.getElementById('root')
);

serviceWorker.unregister();
