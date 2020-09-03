import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import RootReducer from './Reducers/rootReducers'
import {Provider} from 'react-redux'
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import {getFirebase,ReactReduxFirebaseProvider} from 'react-redux-firebase' 
import firebase from './config/firebase'
import {createFirestoreInstance} from 'redux-firestore'

 const store = createStore(RootReducer,applyMiddleware(thunk.withExtraArgument({getFirebase})))

 const rrfProps ={
   firebase,
   config:{},
   dispatch : store.dispatch(),
   createFirestoreInstance
 }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>  
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
