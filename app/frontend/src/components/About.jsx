import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import popular from "../images/popular-products.png";
import { IoPersonSharp } from "react-icons/io5";
import photo from "../images/photo-about.png";
import "../css/about.css";

function About() {
  return (
    <>
    <section id="about" className="about-section">
      <div className="container-about">
        <div className="container-photo">
          <img src={ photo } alt="foto profissional" />
        </div>

        <div className="content-about">
          <h2>
            <IoPersonSharp id="icon-person"/>
            Sobre <span>Mim</span> e <span>Meu Trabalho</span>
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatum nam magni voluptates culpa recusandae cum magnam
            accusantium dolorum, odio alias saepe. Officiis ut quas 
            adipisci illum sed id suscipit veniam.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatum nam magni voluptates culpa recusandae cum magnam
            accusantium dolorum, odio alias saepe. Officiis ut quas 
            adipisci illum sed id suscipit veniam.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatum nam magni voluptates culpa recusandae cum magnam
            accusantium dolorum, odio alias saepe. Officiis ut quas 
            adipisci illum sed id suscipit veniam.
          </p>
          <a href="#popular">
            <MdOutlineKeyboardDoubleArrowDown id="icon-arrow"/>
          </a>
          
        </div>
      </div>
    </section>
    
    <section id="popular" className="popular-section">
      <div className="container-popular">
        <div className="container-photo">
          <h2>Produtos <span> Mais Populares</span></h2>
          <img src={ popular } alt="produtos populares" />
        </div>

        <div className="content-popular-products">
          <h2>Faça <span>Seu Pedido!</span></h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatum nam magni voluptates culpa recusandae cum magnam
            ccusantium dolorum, odio alias saepe. Officiis ut quas 
            adipisci illum sed id suscipit veniam.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatum nam magni voluptates culpa recusandae cum magnam
            ccusantium dolorum, odio alias saepe. Officiis ut quas 
            adipisci illum sed id suscipit veniam.
          </p>
          <div className="container-btn">
            <a href="#" target="_blank" className="btn-menu">
              <span>Cardápio completo</span>
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default About;
