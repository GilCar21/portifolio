import React from 'react';

import './skills.css'

export function Skills() {
  return (
    <section className='section_skills skills'>
        
        <div className='title'>
            <h3> Minhas Skills</h3>
        </div>

        <div className='container'>

            <div className='card'>
                <div className='title'>
                    <h3>Desenvolvimento Front-end</h3>
                </div>
                <div className='content-skills'>
                    <div className='skill'>
                    <h4>HTML</h4>
                    <p>Intermediário</p>
                    </div>
                    <div className='skill'>
                    <h4>CSS</h4>
                    <p>Intermediário</p>
                    </div>
                    <div className='skill'>
                    <h4>JavaScript</h4>
                    <p>Intermediário</p>
                    </div>
                    <div className='skill'>
                    <h4>React</h4>
                    <p>Básico</p>
                    </div>
                    <div className='skill'>
                    <h4>SASS</h4>
                    <p>Básico</p>
                    </div>
                    <div className='skill'>
                    <h4>Next</h4>
                    <p>Básico</p>
                    </div>
                </div>
            </div>

            <div className='card'>
                <div className='title'>
                    <h3>Desenvolvimento Back-end</h3>
                </div>

                <div className='content-skills'>
                    <div className='skill'>
                    <h4>Node Js</h4>
                    <p>Básico</p>
                    </div>
                    <div className='skill'>
                    <h4>PostgreSQL</h4>
                    <p>Básico</p>
                    </div>
                    <div className='skill'>
                    <h4>Docker</h4>
                    <p>Básico</p>
                    </div>
                    <div className='skill'>
                    <h4>Express</h4>
                    <p>Básico</p>
                    </div>
                    <div className='skill'>
                    <h4>TypeScript</h4>
                    <p>Básico</p>
                    </div>
                   
                </div>
                <a name="projetos"></a>
            </div>
            
        </div>
        
    </section>
  );
}