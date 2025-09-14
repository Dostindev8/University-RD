import React, { useState } from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("¡Message sent successfully!");
    const formData = new FormData(event.target);

    formData.append("access_key", "f4c94d64-ead9-42b0-b79c-e746626e8b2c");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const correoStyle = {
    color: hovered ? '#c21717' : 'black',
    cursor: 'pointer'
  };

  const enviarCorreo = () => {
    window.location.href = 'mailto:EducationRD@gmail.com';
  };


  const handleMouseCall = () => {
    setHovered(true);
  };

  const handleMouseCold = () => {
    setHovered(false);
  };

  const numeroStyle = {
    color: hovered ? '#c21717' : 'black',
    cursor: 'pointer'
  };

  const llamarNumero = () => {
    window.location.href = 'tel:+1829 000 0000';
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to get in touch via the contact form</p>
        <ul>
          <li style={correoStyle}
            onClick={enviarCorreo}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}><img src={mail_icon} alt="" />
            EducationRD@gmail.com</li>
          <li style={numeroStyle}
            onClick={llamarNumero}
            onMouseEnter={handleMouseCall}
            onMouseLeave={handleMouseCold}><img src={phone_icon} alt="" />+1 829-000-0000</li>
          <li><img src={location_icon} className='location' alt="" />Santo Domingo, Dominican Republic.</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Full Name</label>
          <input type="text" name='' placeholder='Write your Full Name'
            required />
          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder='Write your phone here'
            required />
          <label>Write your message here</label>
          <textarea name="message" rows="10" placeholder='Write your message here' required></textarea>
          <button type='submit' role="btn" className='btn1 dark-btn'>Enviar</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
