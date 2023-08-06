import { BigLayout } from '../Layouts/Layouts'
import { CgInstagram } from 'react-icons/cg'
import { PiPinterestLogo, PiTwitterLogo } from 'react-icons/pi'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import Navbar from '../Navbar/Navbar'
import logo from '../../assets/logo.png'
import header_img from '../../assets/furniture.png'
import './header.css'


const Header = () => {
  return (
    <header className='header' id='page1'>
      <motion.div
        className='header_logo'
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <img src={logo} className='logo_img' alt="page_logo" />
        <div className='line'></div>
      </motion.div>
      <Navbar />
      <BigLayout>
        <motion.section
          className='header_left'
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <h1 className='title_page'>Eco-Woods <div className='line'></div></h1>
          <h2>Tu casa,<span>un mundo más <span className='letter-b letter'>ecológico</span></span></h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quis rem natus excepturi ex eveniet odit saepe minus dolore consequuntur, ab illo unde. Voluptate, animi dolorem. Maiores, iste ullam. Eveniet. </p>
          <ul className='header_left-social'>
            <div className='line'></div>
            <li><CgInstagram /></li>
            <li><PiPinterestLogo /></li>
            <li><PiTwitterLogo /></li>
            <div className='line'></div>
          </ul>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <Link
              to='page2'
              style={{ cursor: 'pointer' }}
              spy={true}
              smooth={true}
              offset={-120}
              duration={700}
              className='header_left-down'
            >
              <img width="50" height="50" src="https://img.icons8.com/ios/50/000000/long-arrow-down.png" alt="long-arrow-down" />
              Ver mas...
            </Link>
          </motion.div>


        </motion.section>
        <motion.section
          className='header_right'
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <div className='header_img-box'>
            <img className='header_right-img' src={header_img} alt="furniture_img" />
            <div className='shadow'>
              <motion.div
                className='shadow_content'
                initial={{opacity: 0 }}
                whileHover={{opacity: 1 }}
                transition={{ duration: .5, delay: .3}}>
                <Link
                  style={{ cursor: 'pointer' }}
                  to='page3'
                  spy={true}
                  smooth={true}
                  duration={1000}
                >
                  <h2>Ver mas...</h2>
                </Link>
              </motion.div>
            </div>
          </div>

        </motion.section>
      </BigLayout>
    </header>
  )
}

export default Header