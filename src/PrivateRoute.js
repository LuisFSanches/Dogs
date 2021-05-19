import React,{useContext} from 'react'
import {Route, Redirect} from 'react-router-dom'

import {UserContext} from './UserContext'

export default function PrivateRoute({isAuthenticated, component: Component,...rest}) {
  let {login} = useContext(UserContext)
  console.log(login)
  return (
    <Route {...rest} component={(props)=>(
      login ? (
        <Redirect to="/home"/>
      ) :(
        <Component {...props}/>

      )
    )}/>
  )
}
