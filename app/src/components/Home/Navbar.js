// Node imports
import * as React           from "react"
import { motion }           from "framer-motion"

// Image imports
import GDSC_logo            from "../../imgs/GDSC_Logo.png"
//CSS import
import                      './styles.css'

const Navbar = (props) => {
    const delaytoShow = 1.5;

    const linkVariant = {
        hidden: {
            y: props.init ? '-10vh' : '0vh'  
        },
        visible: {
            y: '0vh',
            transition: {
                delay: delaytoShow,
                duration: 1
            }
        },
        transition: {
            delay: delaytoShow,
            duration: 1
        },
        hover: {
            scale: 1.2
        }
    }

    const appear = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: delaytoShow,
                duration: 1
            }
        },
    }

    const [windowSize, setWindowSize] = React.useState(getWindowSize());

    React.useEffect(() => {
        function handleWindowResize() {
        setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
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
                        x: windowSize.innerWidth >= 1300 && windowSize.innerHeight > 850 ? "10vw" : "0vw",
                        y: windowSize.innerWidth >= 1300 && windowSize.innerHeight > 850 ? "0vh": "0vh",
                        scale: windowSize.innerWidth >= 1300 && windowSize.innerHeight > 850 ? 1: 2
                    }}
                    transition={{
                        delay:     windowSize.innerWidth >= 1300 && windowSize.innerHeight > 850 ? delaytoShow : 0,
                        duration:   windowSize.innerWidth >= 1300 && windowSize.innerHeight > 850 ? 2 : 0
                    }}
                    style={{
                        position: 'absolute',
                        right: windowSize.innerWidth >= 1300 && windowSize.innerHeight > 850 ? '94vw' : 
                            windowSize.innerWidth >= 700 ? '45vw' : '35vw',
                        top: windowSize.innerWidth >= 1300 && windowSize.innerHeight > 850 ? '3.3%' : '40vh'
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
                    }}><a>GDSC</a>
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
                    }}><a href="https://qr.link/ynzrLA">Join Us</a>
                </motion.div>

                {windowSize.innerWidth >= 1300 && windowSize.innerHeight > 850 && <motion.div
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

        </div>
    );
}

export default Navbar;