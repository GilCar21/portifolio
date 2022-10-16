import React from 'react';
import { useState } from 'react';
import { MdOutlineMail } from 'react-icons/md'
import { SiWhatsapp } from 'react-icons/si'
import emailjs from '@emailjs/browser'

import './contact.css'

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [campus, setCampus] = useState(false);
  const [success, setSuccess] = useState(false);

  function sendEmail(e){
    e.preventDefault();

    if(name === '' || message === '' || email === ''){
      setCampus(prev => prev = true)
      setTimeout(()=>{ setCampus((prev) => prev = false)}, 4000)
      return;
    }

    const templateParams = {
      from_name: name,
      message,
      email,
    }

    emailjs.send("service_xake71u","template_p6lal08",templateParams,"qhF5jdGV-oHfn88AK")
    .then((res)=>{
      console.log("Email enviado", res.status, res.text)
      setName('');
      setEmail('');
      setMessage('');
      setSuccess(prev => prev = true)
      setTimeout(()=>{ setSuccess((prev) => prev = false)}, 4000)
    }, (err) => {
      console.log("Error: ", err)
    })
  }

  return (
    <section className='contact'>
      
      <h3>Gostou do meu trabalho e quer trabalhar comigo?</h3>
      <h4>Entre em contado</h4>
      <div className='containerContact'>
        <div className='contact_options'>

          <div className='contact_option'>
            <MdOutlineMail className='contact_icon' />
            <h4>Email</h4>
            <h5>gjcn1997@gmail.com</h5>
            <a href="mailto:gilbertocarvalho1997" target="_blank">Send a message</a>
          </div>
          <div className='contact_option'>
            <SiWhatsapp className='contact_icon'/>
            <h4>WhatsApp</h4>
            <h5>(84) 9 8796-9544</h5>
            <a href="https://wa.me/5584987969544" target="_blank">Send a message</a>
          </div>

        </div>
        <form onSubmit={sendEmail}>  
          <input 
            type="text" 
            placeholder='Nome' 
            onChange={(e)=> setName(e.target.value)}
            value={name}
          />
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder='Digite seu email' 
            onChange={(e) => setEmail(e.target.value)}
            value={email}  
          />
          <textarea 
            name="text" 
            id="text" 
            cols="30" 
            rows="10" 
            placeholder='Mensagem'
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div className={`message_err_campus ${campus === true ? 'active' : ''}`}>
        <div className='aviso'>
          <strong>Preencha todos os campos</strong>
        </div>
      </div>
      
      <div className={`message_success ${success === true ? 'active' : ''}`}>
        <div className='success'>
          <strong>Mensagem enviada</strong>
        </div>
      </div>
    </section>
  )
}