import { CgInstagram } from 'react-icons/cg'
import { PiPinterestLogo, PiTwitterLogo } from 'react-icons/pi'
import { VscGithubAlt } from 'react-icons/vsc'
import { AiFillHeart } from 'react-icons/ai'
import { Link } from 'react-scroll'
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
                        <li>
                            <Link
                                to='page1'
                                style={{ cursor: 'pointer' }}
                                spy={true}
                                smooth={true}
                                duration={2500}
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                to='page2'
                                style={{ cursor: 'pointer' }}
                                spy={true}
                                smooth={true}
                                duration={2000}
                            >
                                Historia
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='page3'
                                style={{ cursor: 'pointer' }}
                                spy={true}
                                smooth={true}
                                duration={2000}
                            >
                                Galeria
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='page4'
                                style={{ cursor: 'pointer' }}
                                spy={true}
                                smooth={true}
                                duration={1500}
                            >
                                Contacto
                            </Link>
                        </li>
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