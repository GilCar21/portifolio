import React from 'react';

import './fooder.css'

export function Fooder() {
    return (
        <div className="fooder">
            <div className='containerFooder'>
                <div className='Autor'>
                    <p>Gilberto 2022</p>
                </div>
                <div className='redes'>
                    <a href="https://github.com/GilCar21">
                        <img src="../../../assets/github.png" alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/gilbertojcneto/">
                        <img src="../../../assets/linkedin.png" alt="" />
                    </a>
                    <a href="https://www.instagram.com/gilberto_carvalho21/">
                        <img src="../../../assets/instagram.png" alt="" />
                    </a>
                </div>
            </div>
        </div>

    );
}