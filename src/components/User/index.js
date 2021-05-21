import React from 'react'
import {Switch, Route} from 'react-router-dom'

//import ProtectedRoute from '../Helper/ProtectedRoute'

import UserHeader from './UserHeader'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'

import Feed from '../Feed'

export default function User() {
  return (
    <section className="container">
      <UserHeader/>
        <Switch>
          <Route path="/conta"exact component={Feed}/>
          <Route path="/conta/postar" exact component={UserPhotoPost}/>
          <Route path="/conta/estatisticas" exact component={UserStats}/>

        </Switch>
    </section>
  
  )
}
