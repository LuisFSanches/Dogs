import React, {useState} from 'react'
import {api} from '../services/api'


export default function Login() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')

  async function handleSubmit(e){
    e.preventDefault()
    const newSession = await api.post('/jwt-auth/v1/token',{
      username: userName,
      password
    })
    const token = newSession.data.token
    setToken(token)
  }


  return (
    <form onSubmit={handleSubmit}>
      <h1>User Login</h1>
      <input type="text" value={userName} onChange={(e)=> setUserName(e.target.value)} placeholder="Usuario"/>    
      <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder = "password"/>    
      <button>Enviar</button>
    </form >
  )
}
