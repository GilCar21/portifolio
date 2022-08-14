import React from 'react';

import './skills.css'
import {FaHtml5, FaCss3, FaReact, FaSass, FaNodeJs, FaDocker} from 'react-icons/fa'
import {TbBrandJavascript, TbBrandNextjs} from 'react-icons/tb'
import {SiExpress, SiSwagger, SiPostgresql, SiTypescript} from 'react-icons/si'

export function Skills() {
    return (
        <section className='section_skills skills'>

            <div className='title'>
                <h3> Minhas Habilidades</h3>
            </div>

            <div className='container'>

                <div className='card'>
                    <div className='title'>
                        <h3>Habilidades Front-end</h3>
                    </div>
                    <div className='content-skills'>
                        <div className='skill'>
                            <FaHtml5 size={35} />
                            <h4>HTML</h4>
                        </div>
                        <div className='skill'>
                            <FaCss3 size={35}/>
                            <h4>CSS</h4>
                        </div>
                        <div className='skill'>
                            <TbBrandJavascript size={35}/>
                            <h4>JavaScript</h4>
                        </div>
                        <div className='skill'>
                            <FaReact size={35}/>
                            <h4>React</h4>
                        </div>
                        <div className='skill'>
                            <FaSass size={35}/>
                            <h4>SASS</h4>
                        </div>
                        <div className='skill'>
                            <TbBrandNextjs size={35}/>
                            <h4>Next</h4>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='title'>
                        <h3>Habilidades Back-end</h3>
                    </div>

                    <div className='content-skills'>
                        <div className='skill'>
                            <FaNodeJs size={35}/>
                            <h4>Node Js</h4>
                        </div>
                        <div className='skill'>
                            <SiPostgresql size={35}/>
                            <h4>PostgreSQL</h4>
                        </div>
                        <div className='skill'>
                            <FaDocker size={35}/>
                            <h4>Docker</h4>
                        </div>
                        <div className='skill'>
                            <SiExpress size={35}/>
                            <h4>Express</h4>
                        </div>
                        <div className='skill'>
                            <SiTypescript size={35}/>
                            <h4>TypeScript</h4>
                        </div>
                        <div className='skill'>
                            <SiSwagger size={35}/>
                            <h4>Swagger</h4>
                        </div>

                    </div>
                    <a name="projetos"></a>
                </div>

            </div>

        </section>
    );
}