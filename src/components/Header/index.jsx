import React, { useState } from 'react';
import './Header.css'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
// import { MdOutlineMenu } from 'react-icons/md'


export function Header() {
    // const [sidebar, setSidebar]= useState(false)
    // const showSidebar = ()=>setSidebar(!sidebar)
    return (
        <div id='fixed'>
            <div className='header'>
                <h2>Portfólio</h2>
                {/* <div className="menu" onClick={showSidebar}>
                    <MdOutlineMenu className='icon_menu'/>
                </div> */}
                <div className='links_header'>
                    <div className='nav'>
                        <a href="#sobre" rel="noopener noreferrer">Sobre</a>
                        <a href="#skills" rel="noopener noreferrer">Skills</a>
                        <a href="#projetos" rel="noopener noreferrer">Projetos</a>
                        <a href="#contato" rel="noopener noreferrer">Contato</a>
                    </div>
                    <div className='redes'>
                        
                        <a href="https://github.com/GilCar21">
                            <FaGithub className='icon' />
                        </a>
                        <a href="https://www.linkedin.com/in/gilbertojcneto/">
                            <FaLinkedin className='icon' />
                        </a>
                        <a href="https://www.instagram.com/gilberto_carvalho21/">
                            <FaInstagram className='icon' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}