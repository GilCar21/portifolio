import React from 'react';
import { MdOutlineMail } from 'react-icons/md'
import { SiWhatsapp } from 'react-icons/si'

import './contact.css'

export function Contact() {
  return (
    <section className='contact'>
      
      <h3>Gostou do meu trabalho e quer trabalhar comigo?</h3>
      <h4>Entre em contado</h4>
      <div className='containerContact'>
        <div className='contact_options'>

          <div className='contact_option'>
            <MdOutlineMail className='contact_icon' />
            <h4>Email</h4>
            <h5>gjcn@gmail.com</h5>
            <a href="mailto:gilbertocarvalho1997" target="_blank">Send a message</a>
          </div>
          <div className='contact_option'>
            <SiWhatsapp className='contact_icon'/>
            <h4>WhatsApp</h4>
            <h5>(84) 9 8796-9544</h5>
            <a href="https://wa.me/5584987969544" target="_blank">Send a message</a>
          </div>

        </div>
        <form action="">  
            <input type="text" placeholder='Nome' />
          <input type="email" name="email" id="email" placeholder='digite seu email' />
          <textarea name="text" id="text" cols="30" rows="10" placeholder='Mensagem'></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  )
}