import * as S from './Localizacao.style'
import { IoMdPin } from "react-icons/io";


const Localizacao = () => {
  return (
    <S.LocalizacaoStyle>
        <S.Adress>
        <IoMdPin />
            <div id="adressDetails">
                <p>Rua do evento, 1333</p>
                <p>Bairro do evento</p>
                <p>Abertura: 14h</p>
            </div>
        </S.Adress>
        <S.aboutLocation>
            <h3>Local de destaque</h3>
            <p>
                o evento será realizado em um local prestigiado pelos amantes de Design de Interiores, onde teremos exemplos de varios ambientes, tanto internos como externos.
            </p>
        </S.aboutLocation>
    </S.LocalizacaoStyle>
  )
}

export default Localizacao