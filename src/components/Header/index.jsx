import React, { useEffect, useState } from 'react';
import './Header.css'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { MdOutlineMenu } from 'react-icons/md'


export function Header() {
    const [active, setActive]= useState(false)
    const [sidebar, setSidebar] = useState({})
    const handleActive = ()=>{
        setActive(!active)
        
        if(!active){
            setSidebar({ visibility: 'visible' })
        }else{
            setSidebar({ visibility: 'hidden' })
        }
    }

    return (
        <div id='fixed' className={active ? 'active' : ''}>
            <div className='header' >
                <h2>Portfólio</h2>
                    <div className='menu'>
                        <MdOutlineMenu size={32} onClick={handleActive}/>
                    </div>
                <div className='links_header' >
                    <div className='nav' style={sidebar}>
                        <a href="#sobre" rel="noopener noreferrer">Sobre</a>
                        <a href="#skills" rel="noopener noreferrer">Habilidades</a>
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