import React from 'react'

import {Switch, Route} from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginPasswordLost from './LoginPasswordLost'
import LoginPasswordReset from './LoginPasswordReset'

export default function Login() {
  return (
    <div>
      <Switch>
        <Route path="/login" exact component={LoginForm}/>
        <Route path="/login/criar" component={LoginCreate}/>
        <Route path="perdeu" component={LoginPasswordLost}/>
        <Route path="resetar" component={LoginPasswordReset}/>
      </Switch>
    </div>
  )
}
