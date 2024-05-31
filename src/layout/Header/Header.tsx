import {HeaderStyle } from './Header.style'
import Disclamer from './components/Disclamer/Disclamer'
import SubscriptionForm from './components/SubscriptionForm/SubscriptionForm'

const Header = () => {
  return (
    <HeaderStyle>
        <Disclamer/>
        <SubscriptionForm/>
    </HeaderStyle>
  )
}

export default Header