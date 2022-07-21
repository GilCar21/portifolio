import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'


import './fooder.css'

export function Fooder() {
    return (
        <div className="fooder">
            <div className='containerFooder'>
                <p>Gilberto</p>
                <p> 2022</p>
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