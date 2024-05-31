import React from 'react'
import * as S from './Beneficios.style'

const Beneficios = () => {
  return (
    <S.BeneficiosStyle>
        <h2>O que você vai aprender:</h2>
        <S.BeneficiosList>

            <S.Beneficio>
                <div className='beneficioImgContainer'>
                    <div id='beneficio-1' className='beneficioImg'> </div>
                </div>
                <p>Alguma coisa muito legal, que vai fazer a diferença na vida do participante</p>
            </S.Beneficio>
            <S.Beneficio>
                <div className='beneficioImgContainer'>
                    <div id='beneficio-2' className='beneficioImg'> </div>
                </div>    
                <p>Alguma coisa muito legal, que vai fazer a diferença na vida do participante</p>
            </S.Beneficio>
            <S.Beneficio>
                <div className='beneficioImgContainer'>
                    <div id='beneficio-3' className='beneficioImg'> </div>
                </div> 
                <p>Alguma coisa muito legal, que vai fazer a diferença na vida do participante</p>
            </S.Beneficio>
        </S.BeneficiosList>
    </S.BeneficiosStyle>
  )
}

export default Beneficios