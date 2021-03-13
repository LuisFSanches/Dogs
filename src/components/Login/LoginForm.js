import React, {useContext} from 'react'
import {Link} from 'react-router-dom'

//--------MY HOOKS -------//
import useForm from '../../Hooks/useForm'

//-------Components-------//
import Input from '../Forms/Input'
import Button from '../Forms/Button'

//-------CONTEXT--------//
import {UserContext} from '../../UserContext'

export default function LoginForm() {

  const username= useForm()
  const password = useForm()

  const {userLogin} = useContext(UserContext)
  

  async function handleSubmit(e){
    e.preventDefault()
  if(username.validate() || password.validate()){
    userLogin(username.value, password.value)
  }
   
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit = {handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username}/>
        <Input label="Senha" type="password" name="password" {...password}/>
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}