import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetter from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zua2oar', 'template_qrpp4l5', form.current, 'aZWTJya-l3_QsCB9c')
      .then((response) => {
        if (response.status === 200) {
          alert('Message successfully sent!');
          window.location.reload(false);
        } else {
          alert('Failed to send the message, please try again');
          console.error('EmailJS Error:', response);
        }
      })
      .catch((error) => {
        alert('Failed to send the message, please try again');
        console.error('EmailJS Error:', error);
      });
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetter
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious or large projects. However, if you have any
            other requests or questions, don't hesitate to contact me using the form below.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input type="email" name="email" placeholder="Email" required />
                </li>
                <li>
                  <input placeholder="Subject" type="text" name="subject" />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Urooj Akram,
          <br />
          Islamabad,
          <br />
          Pakistan <br />
          <br />
          <span>urooj@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[30.3753, 69.3451]} zoom={13} style={{ width: '100%', height: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[30.3753, 69.3451]}>
              <Popup>A pretty CSS3 popup. Easily customizable.</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
