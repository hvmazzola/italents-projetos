import React from 'react'
import './styles.css'

const Cartao = ({ mensagem, children }) => {
  const style = {
    cartao: {
      backgroundColor: children
    }
  }

  return (
  <div className='cartao' style={style.cartao}>
    <span>{mensagem}</span>
  </div>
  )
}

export default Cartao