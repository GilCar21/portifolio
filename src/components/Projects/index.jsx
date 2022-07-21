import React from 'react';
import './projects.css'

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
                        <img src="../../../assets/cracha.jpeg" alt="" />
                    </div>
                    <h4>Cracha virtual</h4>
                    <div className="links_project">
                        <a href="https://github.com/GilCar21/crachaNLW" className='btn' target="_blank">Github</a>
                        <a href="https://crachasocialgil.netlify.app/" className='btn btn-primary' target="_blank">Live Demo</a>
                    </div>
                </div>

                <div className="project_item">
                    <div className="project_item_image">
                        <img src="../../../assets/devfinance.jpeg" alt="" />
                    </div>
                    <h4>Calcuradora de Trabalho</h4>
                    <div className="links_project">
                        <a href="https://github.com/GilCar21/PrimeiraMaratonaDiscoverRocketset" className='btn' target="_blank">Github</a>
                        <a href="https://calculadorafinacegil.netlify.app/" className='btn btn-primary' target="_blank">Live Demo</a>
                    </div>
                </div>

                <div className="project_item">
                    <div className="project_item_image">
                        <img src="../../../assets/breve.jpg" alt="" />
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