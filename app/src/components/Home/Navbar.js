// Node imports
import { motion }           from "framer-motion"

// Image imports
import GDSC_logo            from "../../imgs/GDSC_Logo.png"
import Berkeley_logo        from "../../imgs/Berkeley.png"
//CSS import
import                      './styles.css'

const Navbar = () => {
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
                height: "10%",
            }}>
                <motion.div
                    variants={appear}
                    initial="hidden"
                    animate="visible"
                    className="navbar-link">
                    <a  
                        href="#"
                        style={{
                            position: "absolute",
                            left: "16%",
                            top: "3%",
                            borderBottom: "solid #4885ed"
                        }}>GDSC</a>
                    <a  
                        href="https://eecs.berkeley.edu/"
                        style={{
                            position: "absolute",
                            right: "20.7%",
                            top: "2%"
                        }}><img src={Berkeley_logo} alt="school" height={60}/></a>
                </motion.div>
                <motion.div
                    variants={linkVariant}
                    whileHover="hover"
                    initial="hidden"
                    animate="visible"
                    transition="transition"
                    className="navbar-link"><a href="#">About</a></motion.div>
                <motion.div
                    variants={linkVariant}
                    whileHover="hover"
                    initial="hidden"
                    animate="visible"
                    transition="transition"
                    className="navbar-link"
                    style={{
                        marginRight: "0%"
                    }}><a href="#">Projects</a></motion.div>
                
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
                        left: 0
                    }}>
                    <img src={GDSC_logo} alt="GDSC" height={40}/>
                </motion.div>

        </div>
    );
}

export default Navbar;