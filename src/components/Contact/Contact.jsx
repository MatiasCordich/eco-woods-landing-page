import { SmallLayout } from '../Layouts/Layouts'
import { BsDot } from 'react-icons/bs'
import { PiMapPin, PiTwitterLogo, PiFacebookLogo, PiPinterestLogo } from 'react-icons/pi'
import { TfiEmail } from 'react-icons/tfi'
import { BsTelephone } from 'react-icons/bs'
import { motion } from 'framer-motion'
import './contact.css'

const Contact = () => {
    return (


        <SmallLayout direction='column'>
            <div id='page4'>
                <motion.h2
                    className='title_section'
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: .8, delay: 1.5 }}
                ><span className='number_section'>3.</span>Contacto<div className='l-line'></div>
                </motion.h2>
                <div className='contact_content'>
                    <motion.form
                        className='form'
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: .8, delay: 1.7 }}
                    >
                        <fieldset className='form_box'>
                            <h3><BsDot /><span className='title-line'></span>Contactanos<span className='title-line'></span><BsDot /></h3>
                            <label className='form_label' htmlFor="name">
                                Nombre
                                <input className='form_input' type="text" name='name' placeholder='Nombre' />
                            </label>
                            <label className='form_label' htmlFor="email">
                                Email
                                <input className='form_input' type="email" name='email' placeholder='E-mail' />
                            </label>
                            <label className='form_label' htmlFor="text">
                                Mensaje
                                <textarea
                                    className='form_input'
                                    placeholder='Deje su mensaje aquí...'
                                    name='text' />
                            </label>
                            <button className='send_btn' type='submit'>Enviar</button>
                        </fieldset>
                    </motion.form>
                    <motion.aside
                        className='contact_info'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: .8, delay: 2.5 }}
                    >
                        <h3><BsDot /><span className='title-line-2'></span>¿Dónde encontrarnos?<span className='title-line-2'></span><BsDot /></h3>
                        <div className='info_content'>
                            <h2>Tambien podes encontrarnos</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, tenetur consequatur id repellat minima.</p>
                            <ul className='info_ubication'>
                                <li><PiMapPin style={{ color: '#ebe2cd', fontSize: '2rem' }} />Falsa 123, Springfield</li>
                                <li><TfiEmail style={{ color: '#ebe2cd', fontSize: '2rem' }} />ecowoods@gmail.com</li>
                                <li><BsTelephone style={{ color: '#ebe2cd', fontSize: '2rem' }} />+12 234-4345</li>
                            </ul>
                            <ul className='info_links'>
                                <BsDot />
                                <span className='title-line-3'></span>
                                <li><PiTwitterLogo /></li>
                                <li><PiFacebookLogo /></li>
                                <li><PiPinterestLogo /></li>
                                <span className='title-line-3'></span>
                                <BsDot />
                            </ul>
                        </div>
                    </motion.aside>
                </div>
            </div>
        </SmallLayout>


    )
}

export default Contact