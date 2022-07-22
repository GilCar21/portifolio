import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import { SiWhatsapp } from 'react-icons/si'

import './fooder.css'

export function Fooder() {
    return (
        <div className="fooder">
            <div className='containerFooder'>
                <div>
                    <a href="mailto:gilbertocarvalho1997" target="_blank">
                        <MdOutlineMail className='contact_icon' />
                    </a>
                    <a href="https://wa.me/5584987969544" target="_blank">
                        <SiWhatsapp className='contact_icon' />
                    </a>

                </div>
                <p>Gilberto <br /> 2022</p>
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

    );
}