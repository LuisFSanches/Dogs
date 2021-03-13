import React,{useState} from 'react'
import {api} from '../services/api'

export default function PhotoPost() {
  const [nome, setNome] = useState('');
  const [peso, setPeso] = useState('')
  const [idade, setIdade] = useState('')
  const [img, setImg] = useState('')

  const token = localStorage.getItem('token')
  
  
  async function handleSubmit(e){
    e.preventDefault();
    const formData = new FormData()
    formData.append('img',img)
    formData.append('nome',nome)
    formData.append('peso',peso)
    formData.append('idade',idade)

    const newPhoto = await api.post('/api/photo',formData,{
        headers:{
          'Authorization': `Bearer ${token}`
        }
   })
   console.log(newPhoto)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>New Photo</h1>
      <input type="text" value={nome} onChange={(e)=> setNome(e.target.value)} placeholder="Nome"/>    
      <input type="password" value={peso} onChange={(e)=> setPeso(e.target.value)} placeholder = "Peso"/>    
      <input type="password" value={idade} onChange={(e)=> setIdade(e.target.value)} placeholder = "Idade"/>    
      <input type="file" onChange={(e)=> setImg(e.target.files[0])}/>    

      <button>Enviar</button>
    </form >
  )
}
