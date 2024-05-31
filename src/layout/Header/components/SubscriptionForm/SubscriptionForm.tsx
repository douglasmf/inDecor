import { SubscriptionFormStyle } from './SubscriptionForm.style'
import Formulario from './Formulario/Formulario'

const SubscriptionForm = () => {
  return (
    <SubscriptionFormStyle>
        <p>Preencha o formulário para receber os detalhes do evento</p>
        <Formulario/>
    </SubscriptionFormStyle>
  )
}

export default SubscriptionForm