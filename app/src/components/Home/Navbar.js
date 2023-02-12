// Node imports
import * as React                   from "react"
import { motion, AnimatePresence }  from "framer-motion"

// MUI Icons
import MenuIcon                     from '@mui/icons-material/Menu';

// Image imports
import GDSC_logo                    from "../../imgs/GDSC_Logo.png"
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
    
    const [showOptions, setshowOptions] = React.useState(() => {
        return false
    })

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
                        x: props.init && props.sizeWidth != 1 ? "45vw" : "10vw",
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
                        right: props.sizeWidth != 1 ? '94vw' : props.sizeHeight == 1 ? "45%" : "50%",
                        top: props.sizeHeight == 1 ? '5%' : '3.3%'
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
                        top: props.sizeWidth == 3 ? "2%" : "2.3%",
                        left: "16%",
                        fontWeight: 500
                    }}>
                        {props.sizeWidth == 3 && <a>Google Developer Student Club</a>}
                        {props.sizeWidth != 3 && props.sizeWidth != 1 && <a>GDSC</a>}
                </motion.div>
                {props.sizeWidth == 1 && <motion.div
                    initial={{
                        opacity: props.init ? 0 : 1
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        delay: 1,
                        duration: 1
                    }}
                    style={{
                        marginTop: props.sizeHeight == 1 ? "20%" : "5%"
                    }}>
                    <a onClick={(() => setshowOptions(!showOptions))}><MenuIcon/></a>
                    </motion.div>}
                {props.sizeWidth != 1 && <motion.div
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
                        marginRight: "15%",
                        fontFamily: "Google Sans",
                        position: "absolute",
                        top: "2%"
                    }}><a href="https://forms.gle/95Kx8NHm6eyaCkeS8">Join Us</a>
                </motion.div>}

                {props.sizeWidth != 1 && <motion.div
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
                </motion.div>}
                <AnimatePresence>
                    {showOptions && props.sizeWidth == 1 &&
                        <motion.div
                            initial={{
                                y: "100vh"
                            }}
                            animate={{
                                y: "0vh"
                            }}
                            transition={{
                                duration: 0.5
                            }}
                            exit={{
                                y: "100vh",
                                transition: {
                                    duration: 0.5
                                }
                            }}
                            style={{
                                position: "absolute",
                                top: props.sizeHeight == 1 ? "20%" : "12%",
                                right: "-4%",
                                marginRight: "0px",
                                zIndex: 1,
                                
                                display: "flex",
                                flexDirection: "column",
                                backgroundColor: "white",

                                width: "100%",
                                height: props.sizeHeight == 1 ? "100%" : "76%",
                                fontSize: props.sizeHeight == 1 ? "70px" : "100px",
                                fontFamily: "Google Sans",

                                overflowY: 'scroll'
                            }}
                            className="navbar-link">
                                <div
                                    style={{
                                        width: "90%",
                                        height: "5px",
                                        backgroundColor: "#e84438",
                                        position: "absolute"
                                    }}/>
                                <div onClick={props.setFunction}>Projects</div>
                                <div>Join Us</div>
                    </motion.div>}
                </AnimatePresence>
        </div>
    );
}

export default Navbar;