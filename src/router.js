import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from './components/auth/Sign In/SignIn'
import SignUp from './components/auth/Sign Up/SignUp'
import Main from './App'

const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact  path='/' component={SignIn}/>
            <Route exact  path='/home' component={Main}/>
            <Route exact  path='/sign-up' component={SignUp}/>
        </Switch>
    </BrowserRouter>
)

export default Routes