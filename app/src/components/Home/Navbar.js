// Node imports
import * as React           from "react"
import { motion }           from "framer-motion"

// Image imports
import GDSC_logo            from "../../imgs/GDSC_Logo.png"
import Berkeley_logo        from "../../imgs/Berkeley.png"
//CSS import
import                      './styles.css'

const Navbar = (props) => {
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

    const delaytoShow = 1.5;

    const linkVariant = {
        hidden: {
            y: '-10vh'  
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
                <motion.div
                    initial={{
                        x: "45vw",
                        y: "50vh",
                        scale: 4
                    }}
                    animate={{
                        x: "10vw",
                        y: "0vh",
                        scale: 1
                    }}
                    transition={{
                        delay:      delaytoShow,
                        duration:   1
                    }}
                    style={{
                        position: 'absolute',
                        right: '94vw',
                        top: '3.3%'
                    }}>
                    <img src={GDSC_logo} alt="GDSC" height={50}/>
                </motion.div>

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
                    }}><a href="https://qr.link/ynzrLA">GDSC</a>
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
                    }}><a href="/Projects" onClick={props.setFunction}>Projects</a>
                </motion.div>

        </div>
    );
}

export default Navbar;