import React from 'react'
import {api} from '../services/api'

export default function PhotoGet() {

  async function handleSubmit(e){
    e.preventDefault()
    const photos = await api.get('/api/photo/239')
    console.log(photos.data)
  }
  return (
    <form onSubmit = {handleSubmit}>
      <h2>PHOTO GET</h2>
      <input type="text"/>
      <button>Enviar</button>
    </form>
  )
}
