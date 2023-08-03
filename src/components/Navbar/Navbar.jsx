import { useState } from 'react'
import { motion } from 'framer-motion'
import { RiMenu3Line } from 'react-icons/ri'
import './navbar.css'

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <motion.nav
            initial={false}
            animate={open ? "open" : "closed"} className='navbar'
        >

            <motion.button
                className='navbar_button'
                onClick={() => handleClick()}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
            >
                <RiMenu3Line />
            </motion.button>
            <motion.ul
                className='navbar_links'
                variants={
                    {
                        open: {
                            clipPath: "circle(100% at 50% 51%)",
                            transition: { duration: 1 }
                        },
                        closed: {
                            clipPath: "circle(0% at 50% 51%)",
                            transition: { duration: 1 }
                        }
                    }
                }
            >
                <motion.h2
                    variants={
                        {
                            open: {
                                opacity: 1,
                                x: 20,
                                transition: { duration: .6, delay: 1 }
                            },
                            closed: { opacity: 0, x: -20, transition: { duration: .2 } }
                        }
                    }
                >
                    Menu
                    <div className='dooted_line'></div>
                </motion.h2>
                <motion.li
                    variants={
                        {
                            open: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: .6, delay: 1.3 }
                            },
                            closed: { opacity: 0, y: 20, transition: { duration: .3 } }
                        }
                    }>
                    <a
                        href="#"
                        onClick={() => handleClick()}>
                        Home
                    </a>
                </motion.li>
                <motion.li
                    variants={
                        {
                            open: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: .6, delay: 1.5 }
                            },
                            closed: { opacity: 0, y: 20, transition: { duration: .4 } }
                        }
                    }>
                    <a
                        href="#"
                        onClick={() => handleClick()}>
                        Historia
                    </a>
                </motion.li>
                <motion.li
                    variants={
                        {
                            open: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: .6, delay: 1.7 }
                            },
                            closed: { opacity: 0, y: 20, transition: { duration: .5 } }
                        }
                    }>
                    <a
                        href="#"
                        onClick={() => handleClick()}>
                        Galería
                    </a>
                </motion.li>
                <motion.li
                    variants={
                        {
                            open: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: .6, delay: 1.9 }
                            },
                            closed: { opacity: 0, y: 20, transition: { duration: .6 } }
                        }
                    }>
                    <a
                        href="#"
                        onClick={() => handleClick()}>
                        Contacto
                    </a>
                </motion.li>
            </motion.ul>


        </motion.nav>

    )
}

export default Navbar