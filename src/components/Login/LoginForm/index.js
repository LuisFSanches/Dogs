import React, {useContext} from 'react'
import {Link} from 'react-router-dom'

import './style.css'

//--------MY HOOKS -------//
import useForm from '../../../Hooks/useForm'

//-------Components-------//
import Input from '../../Forms/Input'
import Button from '../../Forms/Button'
import Error from '../../Helper/Error'

//-------CONTEXT--------//
import {UserContext} from '../../../UserContext'

export default function LoginForm() {

  const username= useForm()
  const password = useForm()

  const {userLogin,error, loading} = useContext(UserContext)
  

  async function handleSubmit(e){
    e.preventDefault()
  if(username.validate() || password.validate()){
    userLogin(username.value, password.value)
  }
   
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form onSubmit = {handleSubmit} className="form">
        <Input label="Usuário" type="text" name="username" {...username}/>
        <Input label="Senha" type="password" name="password" {...password}/>
        {loading ? <Button disabled>Carregando...</Button> : 
        <Button>Entrar</Button>}
    
        {error && <Error error={error}/>}
      </form>
      <Link className="perdeu" to="login/perdeu">Perdeu a senha?</Link>
      <div className="cadastro">
        <h2 className="subtitle">Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
      </div>
      <Link className="button" to="/login/criar">Cadastro</Link>
    </section>
  )
}
