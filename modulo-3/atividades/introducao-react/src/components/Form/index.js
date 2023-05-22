import React from 'react'
import { useState } from 'react';
import Cartao from '../Cartao'
import './styles.css'

const Form = () => {
  const [data, setData] = useState([''])
  const [nome, setNome] = useState([''])
  const [mensagem, setMensagem] = useState([''])

  const handleChange = () => {
    setData(document.getElementById('date').value)
    setNome(document.getElementById('name').value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setMensagem(('Feliz ' + data + ', ' + nome + '!'))
  }

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div className='date'>
          <label htmlFor='date'>Que dia você está comemorando?</label>
          <select id='date' onChange={handleChange}>
            <option value="Select">Selecione uma data especial</option>
            <option value="Dia dos Namorados">Dia dos Namorados</option>
            <option value="Dia das Mães">Dia das Mães</option>
            <option value="Dia dos Pais">Dia dos Pais</option>
            <option value="Aniversário">Aniversário</option>
            <option value="Natal">Natal</option>
          </select>
        </div>
        <div className='name'>
          <label htmlFor='name'>Qual o nome da pessoa homenageada?</label>
          <input type="text" id='name' onChange={handleChange}/>
        </div>
        <button type='submit'>GERAR CARTÃO</button>
      </form>
      <Cartao mensagem={mensagem}>
        blue
      </Cartao>
    </>
  )
}

export default Form