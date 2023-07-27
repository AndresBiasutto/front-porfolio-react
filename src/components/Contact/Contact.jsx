import React from 'react'
import styles from "./Contact.module.css"
import { useState } from 'react';
import { BsLinkedin, BsFacebook, BsGithub } from "react-icons/bs"

const Contact = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear el objeto con los datos ingresados
    const datos = {
      nombre,
      email,
      descripcion
    };

    // Llamar a una función para manejar el envío de los datos
    enviarDatos(datos);

    // Limpiar los campos del Contact
    setNombre('');
    setEmail('');
    setDescripcion('');
  };

  const enviarDatos = (datos) => {
    // Aquí puedes realizar alguna acción con los datos, como enviarlos a un servidor
    console.log(datos);
  };

  return (
    <div className={styles.container}>
      <h2>Get in touch!</h2>
      <div className={styles.insideBox}>
        <div className={styles.social}>
         <a target='_blank' href="https://www.linkedin.com/in/andres-biasutto/"> <BsLinkedin className={styles.icon} /></a>
         <a target='_blank' href="https://github.com/AndresBiasutto"><BsGithub className={styles.icon} /></a>
        </div>
        <form action="https://formsubmit.co/22be705f7ce3299001e410c4398ca5bc" method="POST" className={styles.form} id='contact'>
          <div className={styles.labelAndInput}>
            <label className={styles.label} htmlFor="nombre">Name:</label>
            <input
              className={styles.input}
              type="text"
              id="nombre"
              name='name'
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <p><span className={styles.span}> {">"} </span> </p>
          </div>

          <div className={styles.labelAndInput}>
            <label className={styles.label} htmlFor="email">Email:</label>
            <input
              className={styles.input}
              type="email"
              id="email"
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p><span className={styles.span}> {">"} </span> </p>
          </div>

          <div className={styles.labelAndInput}>
            <label className={styles.label} htmlFor="descripcion">Descripción:</label>
            <textarea
              className={`${styles.input} ${styles.textArea}` }
              id="descripcion"
              name='description'
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            ></textarea>
            <p><span className={styles.span}> {">"} </span> </p>
          </div>

          <button className={styles.send} type="submit">Send</button>
        </form>
      </div>

    </div>

  );
};

export default Contact;