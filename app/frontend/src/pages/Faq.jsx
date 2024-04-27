import Footer from "../components/Footer"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import "../css/faq.css"

function Faq() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="faq-main">
        <h1 className="pink-text">Perguntas Frequentes</h1>
        <p>Tem uma questão? Veja nossas perguntas frequentes para ver se podemos responder para você!</p>
        <h2 className="pink-text">Quanto tempo de antecedência você precisa para pedidos de bolo?</h2>
        <p>Gateaus com Creme Fresco – 24 horas de antecedência. Encomende antes das 12h para entrega ou coleta no dia
          seguinte.</p>
        <p>Bolos gelados de aniversário e novidades – aviso prévio de 10 dias necessário</p>

        <h2 className="pink-text">Quanto tempo dura um Fresh Cream Gateau e como devo conservá-lo?</h2>
        <p>Para um sabor ideal, o seu Bolo de Creme Fresco deve ser consumido no dia da compra. Porém, será guardado na
          geladeira e deverá ser consumido em até 3 dias após a compra. Seus bolos devem ser retirados da geladeira 15 a 20
          minutos antes de serem consumidos para que você possa desfrutar plenamente de seu sabor.</p>

        <h2 className="pink-text">Você vende bolos sem ovo?</h2>
        <p>Sim, fazemos deliciosos bolos sem ovos sob encomenda. Disponível em todas as categorias, ou seja, bolos de creme
          fresco sem ovos, bolos de aniversário sem ovos, bolos de festa sem ovos e bolos de casamento sem ovos.</p>

        <h2 className="pink-text">Quais são os alérgenos incluídos em seus produtos?</h2>
        <p>Poderá encontrar no nosso site os ingredientes e alergénios utilizados nos nossos produtos, na descrição
          detalhada.</p>

        <h2 className="pink-text">Seus produtos contêm álcool?</h2>
        <p>Não, não usamos álcool em nossos produtos.</p>

        <h2 className="pink-text">Seus produtos são adequados para consumo?</h2>
        <p>Sim, todos os nossos produtos são adequados para consumo.</p>
      </main>
      <Footer />
    </>
  )
}

export default Faq
