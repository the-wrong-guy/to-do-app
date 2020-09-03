import React from 'react';
import './App.css';
import BackToTop from './components/main/App Bar/appbar'
import Todo from './components/main/create note/main'
import Note from './components/main/note/note'
import {BrowserRouter,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BackToTop/>
      <Todo/>
      <Note/>
    </div>
  );
}

export default App;
