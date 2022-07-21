import React from 'react';
import './projects.css'

import em_breve from '../../assets/breve.jpg'
import cracha from '../../assets/cracha.jpeg'
import devfinance from '../../assets/devfinance.jpeg'

export function Projects() {
    return (
        <section className='projects_container'>
            <a name="projetos"></a>
            <div className='title'>
                <h3>Projects</h3>
            </div>
            <div className='galeri_projects'>

                <div className="project_item">
                    <div className="project_item_image">
                        <img src={cracha} alt="" />
                    </div>
                    <h4>Cracha virtual</h4>
                    <div className="links_project">
                        <a href="https://github.com/GilCar21/crachaNLW" className='btn' target="_blank">Github</a>
                        <a href="https://crachasocialgil.netlify.app/" className='btn btn-primary' target="_blank">Live Demo</a>
                    </div>
                </div>

                <div className="project_item">
                    <div className="project_item_image">
                        <img src={devfinance} alt="" />
                    </div>
                    <h4>Calcuradora de Trabalho</h4>
                    <div className="links_project">
                        <a href="https://github.com/GilCar21/PrimeiraMaratonaDiscoverRocketset" className='btn' target="_blank">Github</a>
                        <a href="https://calculadorafinacegil.netlify.app/" className='btn btn-primary' target="_blank">Live Demo</a>
                    </div>
                </div>

                <div className="project_item">
                    <div className="project_item_image">
                        <img src={em_breve} alt="" />
                    </div>
                    <h4>Titudo do projeto</h4>
                    <div className="links_project">
                        <a href="https://github.com/GilCar21" className='btn' target="_blank">Github</a>
                        <a href="https://github.com/GilCar21" className='btn btn-primary' target="_blank">Live Demo</a>
                    </div>
                </div>

            </div>
        </section>
    );
}