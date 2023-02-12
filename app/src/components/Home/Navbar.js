// Node imports
import * as React           from "react"
import { motion }           from "framer-motion"

// Image imports
import GDSC_logo            from "../../imgs/GDSC_Logo.png"
//CSS import
import                      './styles.css'

const Navbar = (props) => {

    const linkVariant = {
        hidden: {
            y: props.init ? '-10vh' : '0vh'  
        },
        visible: {
            y: '0vh',
            transition: {
                delay: props.delay,
                duration: 1
            }
        },
        transition: {
            delay: props.delay,
            duration: 1
        },
        hover: {
            scale: 1.2
        }
    }
    
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "right",
                top: "0%",

                width: "80%",
                height: "10%"
            }}>
                {<motion.div
                    initial={{
                        x: props.init ? "45vw" : "10vw",
                        y: props.init ? "50vh" : "0vh",
                        scale: props.init ? 4 : 1
                    }}
                    animate={{
                        x: "10vw",
                        y: "0vh",
                        scale: 1
                    }}
                    transition={{
                        delay:      props.delay,
                        duration:   2
                    }}
                    style={{
                        position: 'absolute',
                        right:'94vw',
                        top: '3.3%'
                    }}>
                    <img src={GDSC_logo} alt="GDSC" height={50}/>
                </motion.div>}

                <motion.div
                    variants={linkVariant}
                    whileHover={{
                        scale: 1.2,
                        borderBottom: "solid #4885ed"
                    }}
                    initial="hidden"
                    animate="visible"
                    transition="transition"
                    className="navbar-link"
                    style={{
                        fontFamily: "Google Sans",
                        position: "absolute",
                        top: "2%",
                        left: "16%",
                        fontWeight: 500
                    }}>
                        {props.sizeWidth == 3 && <a>Google Developer Student Club</a>}
                        {props.sizeWidth != 3 && <a>GDSC</a>}
                </motion.div>

                <motion.div
                    variants={linkVariant}
                    whileHover={{
                        scale: 1.2,
                        borderBottom: "solid #e84438"
                    }}
                    initial="hidden"
                    animate="visible"
                    transition="transition"
                    className="navbar-link"
                    style={{
                        marginRight: "10%",
                        fontFamily: "Google Sans",
                        position: "absolute",
                        top: "2%"
                    }}><a href="https://forms.gle/95Kx8NHm6eyaCkeS8">Join Us</a>
                </motion.div>

                <motion.div
                    variants={linkVariant}
                    whileHover={{
                        scale: 1.2,
                        borderBottom: "solid #3cba54"
                    }}
                    initial="hidden"
                    animate="visible"
                    transition="transition"
                    className="navbar-link"
                    style={{
                        marginRight: "0%",
                        fontFamily: "Google Sans",
                        position: "absolute",
                        top: "2%"
                    }}><a onClick={props.setFunction}>Projects</a>
                </motion.div>

        </div>
    );
}

export default Navbar;