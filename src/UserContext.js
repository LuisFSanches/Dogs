import React,{createContext, useState} from 'react'
import {api} from './services/api'

export const UserContext = createContext()

export function UserStorage({children}) {

  const [data, setData] = useState(null)
  const [login, setLogin] = useState(null)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  async function getUser(token){
    const response = await api.get('/api/user', {
      headers:{
        'Authorization': `Bearer ${token}`
      }
    })
    setData(response.data)
    setLogin(true)
    console.log(response.data)
  }


  async function userLogin(username, password){
    const newSession = await api.post('/jwt-auth/v1/token',{
      username,
      password
      })
      const token = newSession.data.token
      window.localStorage.setItem('token',token)
      getUser(token)
  }

  return (
    <UserContext.Provider value={{userLogin, data}}>
      {children}
    </UserContext.Provider>
  )
}
