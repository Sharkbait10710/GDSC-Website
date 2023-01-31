// Node imports
import * as React           from "react"
import { motion }           from "framer-motion"

// Image imports
import GDSC_logo            from "../../imgs/GDSC_Logo.png"
import Berkeley_logo        from "../../imgs/Berkeley.png"
//CSS import
import                      './styles.css'

const Navbar = () => {
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

    const delaytoShow = 0;

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
                height: "10%",
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
                        top: '3.3vh'
                    }}>
                    <img src={GDSC_logo} alt="GDSC" height={40}/>
                </motion.div>
                <motion.div
                    variants={appear}
                    initial="hidden"
                    animate="visible"
                    className="navbar-link">
                    <motion.a  
                        variants={linkVariant}
                        whileHover={{
                            scale: 1.2,
                            borderBottom: "solid #4885ed"
                        }}
                        href="#"
                        className="navbar-link"
                        style={{
                            position: "absolute",
                            left: "16%",
                        }}>GDSC</motion.a>
                    <a  
                        href="https://eecs.berkeley.edu/"
                        style={{
                            position: "relative",
                            left: "32.7%",
                            top: "8%"
                        }}><motion.img whileHover={{scale: 1.2}} src={Berkeley_logo} alt="school" height={60}/></a>
                </motion.div>
                <motion.div
                    variants={linkVariant}
                    whileHover={{
                        scale: 1.2,
                        borderBottom: "solid #f4c20d"
                    }}
                    initial="hidden"
                    animate="visible"
                    transition="transition"
                    className="navbar-link"><a href="/">About</a></motion.div>
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
                        marginRight: "0%"
                    }}><a href="/Projects">Projects</a></motion.div>

        </div>
    );
}

export default Navbar;