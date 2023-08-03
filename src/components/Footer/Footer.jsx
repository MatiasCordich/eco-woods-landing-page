import { CgInstagram } from 'react-icons/cg'
import { PiPinterestLogo, PiTwitterLogo } from 'react-icons/pi'
import { VscGithubAlt } from 'react-icons/vsc'
import { AiFillHeart } from 'react-icons/ai'
import logo from '../../assets/logo.png'
import './footer.css'

const Footer = () => {

    let year = new Date().getFullYear()

    return (
        <footer className='footer'>
            <div className='footer_bg'>
                <div className='logo_footer'>
                    <img src={logo} className='logo_img' alt="page_logo" />
                    <div className='line'></div>
                    <h2 className='title_page s-f'>Eco-Woods</h2>
                </div>
                <div className='footer_nav'>
                    <ul className='footer_social'>
                        <h3>Redes</h3>
                        <li><CgInstagram /></li>
                        <li><PiPinterestLogo /></li>
                        <li><PiTwitterLogo /></li>
                    </ul>
                    <ul className='footer_links'>
                        <div className='line'></div>
                        <li>Home</li>
                        <li>Historia</li>
                        <li>Galeria</li>
                        <li>Contacto</li>
                        <div className='line'></div>
                    </ul>

                </div>
                <div className='footer_author'>
                    <p>Hecho por Matias</p>
                    <p>con mucho <AiFillHeart /></p>
                    <a href="#"><VscGithubAlt /></a>
                    <p className='year'>{year}</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer