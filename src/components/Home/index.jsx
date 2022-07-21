import BannerImg from "../../assets/banner.png";
import TypeAnimation from 'react-type-animation';
import './Home.css'

export const Home = () => {

  return (
    <div className='main' >
      <div className='text'>

        <p className="tagline">Bem vindo ao meu Portfólio</p>
        <h1>  Olá! Sou Gilberto <br /> e sou:
          <TypeAnimation
            wrapper="none"
            repeat={Infinity}
            sequence={[
              "Web Developer",
              1000,
              "Software Engineer",
              1000,

            ]}
          />
        </h1>
        <p className="decription">Atualmento me dedico a area da Programação Web, estudando do front-end ao back-end, em busca de me tronar um otimo programador Full-stack na area. Sou formado em Bacharelado em Ciencias e Tecnologias, curso que me ensiou a resoulves probleme e onde eu tive os primeiros contatos com programção.</p>
      </div>
      <div className='image'>
        <img src={BannerImg} alt="Banner Img" />
      </div>
    </div>
  )
}