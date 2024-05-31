import Beneficios from "./components/Beneficios/Beneficios"
import Cta from "./components/Cta/Cta"
import Detalhes from "./components/Detalhes/Detalhes"
import Localizacao from "./components/Localizacao/Localizacao"

const Home = () => {
  return (
    <>
        <Beneficios/>
        <Localizacao/>
        <Detalhes/>
        <Cta/>
    </>
  )
}

export default Home