import BannerImg from "../../assets/banner.png";
import TypeAnimation from 'react-type-animation';
import './description.css'

export const Home = () => {

  return (
    
    <div className='main' >
      <div className='text'>
        <a name="sobre"></a>
      
        <p className="tagline">Bem vindo ao meu Portfólio </p>
        <h1>  Olá! Me chamo <br /> Gilberto <br /> E sou: <br />
          <TypeAnimation
            repeat={Infinity}
            sequence={[
              "Desenvolvedor Web",
              1500,
              "Engenheiro de Software",
              1500,
              
            ]}
          />
        </h1>
        <p className="decription">Tenho 24 anos, sou do Rio Grande do Norte e tive meu primeiro contato com a programação na faculdade. Sou formado em Ciências e Tecnologias pela Universidade Federal do Rio Grande do Norte, onde aprendi lógica, linguagem, computação numérica, programação orientada a objetos entre outras coisas, além também de desenvolver a skill de resolução de problemas. Atualmente estou voltado para área do Desenvolvimento Web onde estou estudando tecnologias como HTML, CSS, JS, React, Node entre outras.</p>
      </div>
      
      <div className='image'>
        <img src={BannerImg} alt="Banner Img" />
      </div>
        
    </div>
  )
}