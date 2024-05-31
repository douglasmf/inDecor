import React from 'react'
import { ButtonSubmit, FormGroup, FormularioStyle } from './Formulario.style'

const Formulario = () => {
  return (
    <FormularioStyle>
        <FormGroup>
            <label htmlFor="name">Nome</label>
            <input type="text" name='name' placeholder='Digite seu nome'/>
        </FormGroup>
        <FormGroup>
            <label htmlFor="email">E-mail</label>
            <input type="email" name='email' placeholder='Digite seu e-mail'/>
        </FormGroup>
        <FormGroup>
            <label htmlFor="phone">Telefone</label>
            <input type="text" name='phone' placeholder='Número de Whatsapp'/>
        </FormGroup>
        <FormGroup>
            <label htmlFor="interest">Principal Interesse</label>
            <select name='interest'>
              <option value="" disabled selected>Selecione</option>
              <option value="apartment">Apartamentos</option>
              <option value="house">Casas</option>
              <option value="garden">jardins</option>
              <option value="other">Outros</option>
            </select>
        </FormGroup>
        <ButtonSubmit type='submit'>Quero me inscrever</ButtonSubmit>
    </FormularioStyle>
  )
}

export default Formulario