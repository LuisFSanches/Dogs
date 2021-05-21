import React,{useContext} from 'react'
import {UserContext} from '../../UserContext'

import {Route, Redirect} from 'react-router-dom'

export default function ProtectedRoute(props) {
  const {login} = useContext(UserContext)

  if(login===true) return <Route {...props}/>

  else if(login===false) return <Redirect to="/login"/>

  else return null


}
