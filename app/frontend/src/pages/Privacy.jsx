import Footer from "../components/Footer"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import "../css/privacy.css"


function Privacy() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="privacy-main">
        <section>
          <h1 className="pink-text">Política de Privacidade</h1>
          <p>Última atualização: 21/03/2024</p>
          <p>
            Esta Política de Privacidade descreve como a Petit Four (nós, nosso ou nossos) coleta,
            usa e compartilha informações pessoais de usuários (usuários ou você) do site www.petitour.com. Esta
            política se aplica ao site e a todos os produtos e serviços oferecidos pela Petit Four.
          </p>
        </section>

        <section>
          <h2 className="pink-text">Informações que coletamos</h2>
          <p>
            Podemos coletar informações pessoais dos usuários de diversas maneiras, incluindo, mas não se limitando a,
            quando os usuários visitam nosso site, se inscrevem no boletim informativo, respondem a uma pesquisa, preenchem
            um formulário ou realizam uma compra. As informações pessoais podem incluir, entre outras coisas, o nome,
            endereço de e-mail, endereço físico, número de telefone e informações de cartão de crédito.
          </p>
        </section>

        <section>
          <h2 className="pink-text">Como usamos as informações coletadas</h2>
          <p>
            Podemos usar as informações coletadas dos usuários para os seguintes fins:
          </p>

          <ul>
            <li>Personalizar a experiência do usuário e responder às necessidades individuais dos usuários;</li>
            <li>Melhorar nosso site;</li>
            <li>Processar transações;</li>
            <li>Enviar e-mails periódicos sobre informações e atualizações relacionadas aos pedidos;</li>
            <li>Enviar e-mails promocionais e de marketing.</li>
          </ul>
        </section>

        <section>
          <h2 className="pink-text">Proteção das informações do usuário</h2>
          <p>
            Adotamos práticas apropriadas de coleta, armazenamento e processamento de dados e medidas de segurança para
            proteger contra acesso não autorizado, alteração, divulgação ou destruição das informações pessoais dos
            usuários, incluindo, entre outras coisas, a revisão de nossas práticas de coleta, armazenamento e processamento
            de dados e medidas de segurança.
          </p>
        </section>

        <section>
          <h2 className="pink-text">Compartilhamento de informações pessoais</h2>
          <p>
            Não vendemos, negociamos ou alugamos informações pessoais dos usuários para terceiros. Podemos compartilhar
            informações demográficas agregadas não vinculadas a qualquer informação de identificação pessoal sobre os
            visitantes e usuários com nossos parceiros de negócios, afiliados confiáveis e anunciantes para os fins
            descritos acima.
          </p>
        </section>

        <section>
          <h2 className="pink-text">Consentimento</h2>
          <p>
            Ao usar este site, você concorda com os termos desta política de privacidade.
          </p>
        </section>

        <section>
          <h2 className="pink-text">Alterações nesta política de privacidade</h2>
          <p>
            A Petit Four tem o poder de atualizar esta política de privacidade a qualquer momento.
            Recomendamos que os usuários verifiquem com frequência esta página para se manterem informados sobre como
            estamos ajudando a proteger as informações pessoais que coletamos. Você reconhece e concorda que é sua
            responsabilidade revisar periodicamente esta política de privacidade e tomar conhecimento de suas modificações.
          </p>
        </section>

        <section>
          <h2 className="pink-text">Entrando em contato conosco</h2>
          <p>
            Se você tiver alguma dúvida sobre esta política de privacidade, as práticas deste site ou suas interações com
            este site, entre em contato conosco.
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Privacy
