import React from 'react';
import './projects.css'

import em_breve from '../../assets/breve.jpg'
import cracha from '../../assets/cracha2.jpeg'
import devfinance from '../../assets/devfinance2.jpeg'
import chat from '../../assets/chat.jpeg'
import coffe from '../../assets/coffe.jpeg'
import reactflix from '../../assets/reactflix.jpeg'
import varinha from '../../assets/varinha.png'

import {FaHtml5, FaCss3, FaReact, FaSass, FaNodeJs, FaDocker} from 'react-icons/fa'
import {TbBrandJavascript, TbBrandNextjs} from 'react-icons/tb'
import {SiExpress, SiSwagger, SiPostgresql, SiTypescript, SiStyledcomponents} from 'react-icons/si'

export function Projects() {
    return (
        <section className='projects_container'>

            <div className='title'>
                <h3>Projects</h3>
            </div>
            <div className='galeri_projects'>

            <div className="project_item">
                    <div className="project_item_image">
                        <img src={varinha} alt="" />
                    </div> 

                    <div className='sobre_projeto'>

                        <h4>Pagina de venda</h4>
                        <div>
                            <FaHtml5 color='#FFF' size={24} />
                            <FaReact color='#FFF' size={24} />
                            <SiStyledcomponents color='#FFF' size={24} />
                            <TbBrandJavascript color='#FFF' size={24} />
                        </div>
                        <div className="links_project">
                            <a href="https://github.com/GilCar21/pagevenda" className='btn' target="_blank">Github</a>
                            <a href="https://varinha-harry-potter.netlify.app/" className='btn btn-primary' target="_blank">Live Demo</a>
                        </div>
                    </div>
                </div>

                <div className="project_item">
                    <div className="project_item_image">
                        <img src={reactflix} alt="" />
                    </div>

                    <div className='sobre_projeto'>

                        <h4>Clone Netflix cadastro</h4>
                        <div>
                            <FaHtml5 color='#FFF' size={24} />
                            <FaReact color='#FFF' size={24} />
                            <SiStyledcomponents color='#FFF' size={24} />
                            <TbBrandJavascript color='#FFF' size={24} />
                        </div>
                        <div className="links_project">
                            <a href="https://github.com/GilCar21/reactflix" className='btn' target="_blank">Github</a>
                            <a href="https://reactflix-sigma-peach.vercel.app/" className='btn btn-primary' target="_blank">Live Demo</a>
                        </div>
                    </div>
                </div>

                <div className="project_item">
                    <div className="project_item_image">
                        <img src={cracha} alt="" />
                    </div>
                    <h4>Cracha virtual</h4>
                    <div>
                        <FaHtml5 color='#FFF' size={24} />
                        <FaCss3 color='#FFF' size={24} />
                        <TbBrandJavascript color='#FFF' size={24} />
                    </div>
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
                    <div>
                        <FaReact color='#FFF' size={24} />
                        <FaHtml5 color='#FFF' size={24} />
                        <TbBrandJavascript color='#FFF' size={24} />
                    </div>
                    <div className="links_project">
                        <a href="https://github.com/GilCar21/PrimeiraMaratonaDiscoverRocketset" className='btn' target="_blank">Github</a>
                        <a href="https://calculadorafinacegil.netlify.app/" className='btn btn-primary' target="_blank">Live Demo</a>
                    </div>
                </div>

                <div className="project_item">
                    <div className="project_item_image">
                        <img src={chat} alt="" />
                    </div>
                    <h4>Feedback widget com React</h4>
                    <div>
                        <FaHtml5 color='#FFF' size={24} />
                        <FaReact color='#FFF' size={24} />
                        <SiTypescript color='#FFF' size={24} />
                        <FaNodeJs color='#FFF' size={24} />
                        <SiExpress color='#FFF' size={24} />
                    </div>
                    <div className="links_project">
                        <a href="https://github.com/GilCar21/nlw-return" className='btn' target="_blank">Github</a>
                        <a href="https://nlw-return-4w6niuacm-gilcar21.vercel.app/" className='btn btn-primary' target="_blank">Live Demo</a>
                    </div>
                </div>

                <div className="project_item">
                    <div className="project_item_image">
                        <img src={coffe} alt="" />
                    </div>
                    <h4>Landing page de Café</h4>
                    <div>
                        <FaReact color='#FFF' size={24} />
                        <FaHtml5 color='#FFF' size={24} />
                        <TbBrandJavascript color='#FFF' size={24} />
                    </div>
                    <div className="links_project">
                        <a href="https://github.com/GilCar21/RocketCoffe" className='btn' target="_blank">Github</a>
                        <a href="https://rocketcoffegil.netlify.app/" className='btn btn-primary' target="_blank">Live Demo</a>
                    </div>
                </div>

                <div className="project_item">
                    <div className="project_item_image">
                        <img src={em_breve} alt="" />
                    </div>
                    <h4>Em Breve</h4>
                    <div className="links_project">
                        <a href="https://github.com/GilCar21" className='btn' target="_blank">Github</a>
                        <a name="contato"></a>
                    </div>
                </div>

            </div>

        </section>
    );
}