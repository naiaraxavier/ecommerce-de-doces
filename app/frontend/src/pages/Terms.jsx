import Footer from "../components/Footer"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import "../css/terms.css"

function Terms() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="terms-main">
        <h1 className="pink-text">Contrato de Termos de Uso</h1>
        <p>Bem-vindo a <a href="http://www.petitfour.com">www.petitfour.com</a>, este site pertence
          e é operado pela Petit Four.</p>

        <p>Por favor, leia atentamente os seguintes termos e condições (os “Termos” ou “Termos de Uso”), pois constituem um
          acordo vinculativo entre você e a Petits Fours Patisserie Limited. Ao acessar o Site ou utilizar qualquer um de
          seus serviços, você indica sua aceitação destes Termos. Caso não concorde com algum ou todos os Termos de Uso,
          você não poderá acessar o site ou utilizar qualquer um de seus serviços. Sinta-se à vontade para enviar qualquer
          dúvida que possa ter sobre os Termos para: <a href="mailto:help@petitfour.com">help@petitfour.com</a>.</p>

        <h2 className="pink-text">O Serviço</h2>
        <p>Ao usar o Site, você pode avaliar alimentos e fazer um pedido de alimentos e mercadorias. Ao concluir seu pedido
          on-line, a Petit Four analisará seu pedido e confirmará o recebimento com uma mensagem de
          e-mail que será enviada para seu endereço de e-mail. Observe que a notificação por e-mail da Petit Four não
          constitui uma aceitação do seu pedido. A execução do seu pedido e a cobrança no seu cartão
          de crédito serão consideradas como uma aceitação do seu pedido.</p>

        <p>A Petit Four reserva-se o direito de, a qualquer momento e a seu exclusivo critério, alterar as
          tarifas e a disponibilidade de qualquer item do seu menu. Todas as taxas são cotadas em libras esterlinas, salvo
          indicação expressa em contrário. Quaisquer alterações nas taxas entrarão em vigor imediatamente após serem
          publicadas no Site.</p>

        <p>Você declara e garante que pagará todas as taxas e impostos em tempo hábil e em conformidade com cada tabela de
          taxas de alimentação. O não pagamento dos seus pagamentos poderá impedi-lo de continuar a utilizar o Site, não
          obstante quaisquer outras soluções disponíveis à Petit Four ao abrigo da lei aplicável.</p>

        <h2 className="pink-text">Cotações de preços</h2>
        <p>Todas as cotações de preços, escritas ou verbais, são válidas por 30 dias a partir da data das cotações.</p>

        <h2 className="pink-text">Decoração</h2>
        <p>A Petit Four se esforçará para criar o estilo de bolo de sua escolha. Itens decorativos não
          comestíveis e itens decorativos com acabamento em chocolate estão sujeitos à disponibilidade e podem variar. As
          decorações de frutas da estação estão sujeitas à disponibilidade no dia e podem ser substituídas.</p>

        <h2 className="pink-text">Cancelamento e Alterações</h2>
        <p>Se você tiver alguma dúvida ou precisar fazer alguma alteração em um pedido, entre em contato conosco
          imediatamente. Avaliaremos o seu pedido de alteração e informaremos o seu efeito no preço e no calendário
          acordado. A aceitação de quaisquer alterações fica a critério da Petit Four. As alterações
          solicitadas menos de 2 semanas antes da conclusão podem estar sujeitas a uma sobretaxa. Não podemos reembolsar
          nenhum custo de quaisquer pedidos de bolo (excluindo bolos de creme fresco) cancelados com menos de 5 dias de
          antecedência. Encomendas pagas integralmente e canceladas com mais de 5 dias de antecedência (excluindo bolos de
          casamento) receberão um reembolso parcial de 50% do valor total pago. No caso improvável de termos de cancelar a
          sua encomenda por qualquer motivo, iremos avisá-lo com a maior antecedência possível e reembolsaremos o preço na
          totalidade.</p>
      </main>
      <Footer />
    </>
  )
}

export default Terms
