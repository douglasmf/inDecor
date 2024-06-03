import {DisclamerStyle} from "./Disclamer.style"

const Disclamer = () => {
  return (
    <DisclamerStyle>
        <h2>InDecor</h2>
        <p className="aboutEvent">
          Um evento para revolucionar a sua criatividade
        </p>
        <p id="dateTitle">Data do evento:</p>
        <p className="eventDate">Domingo, 28 de Maio, a partir das 14h</p>
    </DisclamerStyle>
  )
}

export default Disclamer