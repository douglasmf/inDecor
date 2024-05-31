import * as S from './Detalhes.style'

const Detalhes = () => {
  return (
    <S.DetalhesStyle>
        <S.Detail01>
            <div className="detailImgContainer">
                <img src="/img/hrz-3.jpg" alt="Sala decorada em tons claros" />
            </div>
            <S.DetailDescription>
                <h3>Conheça os ambientes que você vai aprender a decorar</h3>
            </S.DetailDescription>
        </S.Detail01>
        <S.Detail>
            <S.DetailDescription>
                <h3>Detalhes</h3>
                <ul>
                    <li>Posicionamento</li>
                    <li>Aproveitamento de espaço</li>
                    <li>Combinação de cores</li>
                    <li>Organização</li>
                    <li>E muito mais...</li> 
                </ul>
            </S.DetailDescription>
            <div className="detailImgContainer">
                <img src="/img/hrz-4.jpg" alt="Sala de jantar decorada" />
            </div>
        </S.Detail>
        <S.Detail03>
            <div className="detailImgContainer">
                <img src="/img/hrz-5.jpg" alt="Sala decorada em tons escuros" />
            </div>
            <S.DetailDescription03>
            <h3>Objetos</h3>
            <ul>
                <li>Cadeiras</li>
                <li>Mesas</li>
                <li>Espelhos</li>
                <li>Plantas</li>
                <li>Cortinas</li>
                <li>E muito mais...</li>
            </ul>
            </S.DetailDescription03>
        </S.Detail03>
    </S.DetalhesStyle>
  )
}

export default Detalhes