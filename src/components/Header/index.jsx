import React from 'react';
import './Header.css'

export function Header() {
    return (
        <div id='header'>
            <h2>Portifolio</h2>

            <div className='links_header'>
                <div className='nav'>
                    <a href="#sobre" onclick="event.preventDefault();">Sobre</a>
                    <a href="#skills" rel="noopener noreferrer">Skills</a>
                    <a href="#projetos"rel="noopener noreferrer">Projetos</a>
                    <a href="#contato" rel="noopener noreferrer">Contato</a>
                </div>
                <div className='redes'>
                <a name="sobre"></a>
                    <a href="https://github.com/GilCar21">
                        <img src="../../../assets/github.png" alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/gilbertojcneto/">
                        <img src="../../../assets/linkedin.png" alt="linkedin" />
                    </a>
                    <a href="https://www.instagram.com/gilberto_carvalho21/">
                        <img src="../../../assets/instagram.png" alt="Instagram" />
                    </a>
                </div>
            </div>
        </div>
    );
}