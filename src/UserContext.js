import React,{createContext, useState} from 'react'
import {api} from './services/api'

import {useHistory} from 'react-router-dom'

export const UserContext = createContext()

export function UserStorage({children}) {

  const [data, setData] = useState(null)
  const [login, setLogin] = useState(false)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  const history = useHistory()

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
    try{
      setError(null)
      setLoading(true)
      const newSession = await api.post('/jwt-auth/v1/token',{
        username,
        password
        })
        const token = newSession.data.token
        window.localStorage.setItem('token',token)
        await getUser(token)
        history.push('/conta')

    } catch(err){
      setError('Usuário ou senha inválidos');
      //setLogin(false)
    } finally{
      setLoading(false)
    }
 
  }

  async function userLogout(){
    setData(null)
    setError(null)
    setLoading(false)
    setLogin(false)
    window.localStorage.removeItem('token')

  }

  return (
    <UserContext.Provider value={{userLogin, userLogout ,data, error, loading, login}}>
      {children}
    </UserContext.Provider>
  )
}
