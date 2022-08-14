import React, { useEffect, useState } from 'react';
import './Header.css'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { MdOutlineMenu } from 'react-icons/md'


export function Header() {
    const [sidebar, setSidebar]= useState(false)
    const [active, setActive] = useState({})
    useEffect(()=>{
        if(sidebar){
            setActive({ visibility: 'visible' })
        }else{
            setActive({ visibility: 'hidden' })
        }
    },[sidebar])
    return (
        <div id='fixed' className={sidebar ? 'active' : ''}>
            <div className='header' >
                <h2>Portfólio</h2>
                {/* <div className="menu" onClick={showSidebar}>
                    <MdOutlineMenu className='icon_menu'/>
                </div> */}
                    <div className='menu'>
                        <MdOutlineMenu size={32} onClick={()=>setSidebar(!sidebar)}/>
                    </div>
                <div className='links_header' >
                    <div className='nav' style={active}>
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