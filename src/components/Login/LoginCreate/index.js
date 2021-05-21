import React from 'react'
import Input from '../../Forms/Input'
import Button from '../../Forms/Button'
import useForm from '../../../Hooks/useForm'

import {api} from '../../../services/api'


export default function LoginCreate() {
  const username = useForm();
  const email = useForm('email')
  const password = useForm()


 async function handleSubmit(event){
    event.preventDefault()
  
      const response = await api.post('/api/user',{
        username:username.value,
        email:email.value,
        password:password.value,    
    })


    console.log(response.data)
       
  }
  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username}/>
        <Input label="Email" type="email" name="email" {...email}/>
        <Input label="Senha" type="password" name="password" {...password}/>

        <Button>Cadastrar</Button>
      </form>
    </section >
  )
}
