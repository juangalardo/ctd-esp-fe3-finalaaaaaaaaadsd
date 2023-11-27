import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div>
      <h2>Formulario de contacto</h2>
      <p>Si tenés alguna consulta, te contactaremos a la brevedad</p>
      <Form/>
    </div>
  )
}

export default Contact