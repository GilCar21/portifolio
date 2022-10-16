import React from 'react';
import './projects.css'

import em_breve from '../../assets/breve.jpg'

import { DataProjects } from '../../DataProjects';

export function Projects() {
    return (
        <section className='projects_container'>

            <div className='title'>
                <h3>Projetos</h3>
            </div>
            <div className='galeri_projects'>

                {DataProjects.map(data => {
                    return (
                        <div className="project_item" key={data.nameProject}>
                            <div className="project_item_image">
                                <img src={data.image} alt="" />
                            </div>
                            <div className='sobre_projeto'>
                                <h4>{data.nameProject}</h4>
                                <p>{data.status}</p>
                                <div className="links_project">
                                    <a href={data.livedemo} className='btn btn-primary' target="_blank">Live Demo</a>
                                    <a href={data.github} className='btn btn-primary' target="_blank">Github</a>
                                </div>
                            </div>
                        </div>
                    )
                })}

                <div className="project_item">
                    <div className="project_item_image">
                        <img src={em_breve} alt="" />
                    </div>
                    <h4>Em Breve novos prejetos</h4>
                    <p>Mais projetos no github</p>
                    <div className="links_project">
                        <a href="https://github.com/GilCar21" className='btn' target="_blank">Github</a>
                        <a name="contato"></a>
                    </div>
                </div>

            </div>

        </section>
    );
}