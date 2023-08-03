import { SmallLayout } from '../Layouts/Layouts'
import { motion } from 'framer-motion'
import about_img from '../../assets/about_img.png'
import './about.css'

const About = () => {
  return (

    <SmallLayout>
      <div>
        <motion.h2 
          className='title_section'
          initial={{x:-20, opacity:0}}
          whileInView={{x: 0, opacity:1}}
          transition={{duration: .8, delay: 1}}
          >
          
            <span className='number_section'>
              1.
            </span>
              Historia 
              <div className='line'></div>
        </motion.h2>
        <div className='about_content'>
          <motion.img 
            src={about_img} 
            alt="about_img" 
            initial={{y:-20, opacity:0}}
            whileInView={{y: 0, opacity:1}}
            transition={{duration: .8, delay: 1.5}}
          />
          <div className='about_text'>
            <motion.p 
              className='about_text-1'
              initial={{y:-20, opacity:0}}
              whileInView={{y: 0, opacity:1}}
              transition={{duration: .8, delay: 2}}
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, impedit? Atque doloribus, magni laborum perferendis, molestias repellendus quo ipsam ullam asperiores modi consequuntur omnis doloremque aliquid culpa officiis qui? Vero.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ipsam esse possimus assumenda doloribus?</motion.p>
            <motion.p 
              className='about_text-2'
              initial={{y:-20, opacity:0}}
              whileInView={{y:0, opacity:1}}
              transition={{duration: .8, delay: 2.5}}
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, impedit? Atque doloribus, magni laborum perferendis, molestias repellendus quo ipsam ullam asperiores modi consequuntur omnis doloremque aliquid culpa officiis qui?</motion.p>
            <motion.p 
              className='about_text-3'
              initial={{y:-20, opacity:0}}
              whileInView={{y: 0, opacity:1}}
              transition={{duration: .8, delay: 2.7}}
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, impedit? Atque doloribus, magni laborum perferendis, molestias repellendus quo ipsam ullam asperiores modi consequuntur omnis doloremque aliquid culpa officiis qui?</motion.p>
          </div>
        </div>
      </div>

    </SmallLayout>

  )
}

export default About