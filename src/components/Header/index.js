import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
//------ASSETS-------//
import Dogs from '../../assets/dogs.svg'

//-------CONTEXT------//
import {UserContext} from '../../UserContext'

import './style.css'

export default function Header() {
  const {data, userLogout} = useContext(UserContext)
  return (
    <header className="header">
      <nav className="nav container">
        <Link className="logo" to='/' aria-label = "Dogs - Home">
          <img src={Dogs} alt=""/>
          </Link>
        {data ? <Link className="login" to='/login'>{data.username}         
                  <button onClick= {userLogout}>Sair</button>
                </Link> : <Link className="login" to='/login'>
                Login/Criar
                </Link>}
      </nav>
    </header>
  )
}
