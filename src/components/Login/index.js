import React,{useContext} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import './style.css'

//-------COMPONENTS--------//
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginPasswordLost from './LoginPasswordLost'
import LoginPasswordReset from './LoginPasswordReset'

//--------PRIVATE ROUTE--------//
//import PrivateRoute from '../../PrivateRoute'

import {UserContext} from '../../UserContext'


export default function Login() {

  const {login}  = useContext(UserContext)

    if(login === true) return <Redirect to="/conta"/>
    return (
      <section className="loginForms">
        <div className="forms">
        <Switch>
          <Route path="/login" exact component={LoginForm}/>
          <Route path="/login/criar" component={LoginCreate}/>
          <Route path="/login/perdeu" component={LoginPasswordLost}/>
          <Route path="/login/resetar" component={LoginPasswordReset}/>
        </Switch>
      </div>
      </section>

    )



}
