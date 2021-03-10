import React, {useState} from 'react'

import {api} from '../services/api'


export default function NewUser() {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e){
    e.preventDefault()
    const newUser = await api.post('/api/user',{
      username: userName,
      email,
      password
    })
    console.log(newUser)
  }


  return (
    <form onSubmit={handleSubmit}>
      <h1>User Post</h1>
      <input type="text" value={userName} onChange={(e)=> setUserName(e.target.value)} placeholder="Usuario"/>    
      <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="E-mail"/>    
      <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder = "password"/>    
      <button>Enviar</button>
    </form >
  )
}
