import { BigLayout } from '../Layouts/Layouts'
import { motion } from 'framer-motion'
import img01 from '../../assets/image-1.png'
import img02 from '../../assets/image-2.png'
import img03 from '../../assets/image-3.png'
import img04 from '../../assets/image-4.png'
import img05 from '../../assets/image-5.png'
import img06 from '../../assets/image-6.png'
import img07 from '../../assets/image-7.png'
import img08 from '../../assets/image-8.png'
import img09 from '../../assets/image-9.png'
import img10 from '../../assets/image-10.png'
import img11 from '../../assets/image-11.png'
import './galery.css'

const Galery = () => {
    return (
        <BigLayout direction='column'>
            <motion.h2
                className='title_section center'
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: .8, delay: 1 }}
            ><div className='line'></div><span className='number_section'>2.</span>Galeria<div className='line'></div>
            </motion.h2>
            <div className='grid-wrapper'>
                <motion.div
                    className='item'
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: .8, delay: 1 }}
                >
                    <img src={img01} alt="furniture-img" />
                </motion.div>
                <motion.div 
                    className='item'
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: .8, delay: 1.3 }}
                >
                    <img src={img02} alt="furniture-img" />
                </motion.div>
                <motion.div 
                    className='item'
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: .8, delay: 1.5 }}
                >
                    <img src={img03} alt="furniture-img" />
                </motion.div>
                <motion.div 
                    className='item'
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: .8, delay: 1.7 }}
                >
                    <img src={img04} alt="furniture-img" />
                </motion.div>
                <motion.div 
                    className='item'
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: .8, delay: 1.9 }}
                >
                    <img src={img05} alt="furniture-img" />
                </motion.div>
                <motion.div 
                    className='item'
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: .8, delay: 1.9 }}
                >
                    <img src={img06} alt="furniture-img" />
                </motion.div>
                <motion.div 
                    className='item'
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: .8, delay: 1.5 }}
                >
                    <img src={img07} alt="furniture-img" />
                </motion.div>
                <motion.div 
                    className='item'
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: .8, delay: 1.7 }}
                >
                    <img src={img08} alt="furniture-img" />
                </motion.div>
                <motion.div 
                    className='item'
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: .8, delay: 1.9 }}
                >
                    <img src={img09} alt="furniture-img" />
                </motion.div>
                <motion.div 
                    className='item'
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: .8, delay: 1.5 }}
                >
                    <img src={img10} alt="furniture-img" />
                </motion.div>
                <motion.div 
                    className='item'
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: .8, delay: 1.7 }}
                >
                    <img src={img11} alt="furniture-img" />
                </motion.div>
            </div>
        </BigLayout>
    )
}

export default Galery