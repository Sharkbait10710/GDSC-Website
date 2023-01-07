// Node imports
import { motion }           from "framer-motion"

// Image imports
import logo                 from "../../imgs/GDSC_Logo.png"

//CSS import
import                      './styles.css'

const Navbar = () => {
    const linkVariant = {
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
                height: "10%",

                borderBottom: "solid #c8cfc6",
                borderRadius: "6px",
                paddingBottom: "5px"
            }}>
                <motion.div
                    variants={linkVariant}
                    whileHover="hover"
                    className="navbar-link"><a href="#">About</a></motion.div>
                <motion.div
                    variants={linkVariant}
                    whileHover="hover"
                    className="navbar-link"
                    style={{
                        marginRight: "0%"
                    }}><a href="#">Projects</a></motion.div>
                
                <motion.div
                    initial={{
                        x: "45vw",
                        y: "35vh",
                        scale: 4
                    }}
                    animate={{
                        x: "10vw",
                        y: "0vh",
                        scale: 1
                    }}
                    transition={{
                        delay:      "2",
                        duration:   "1"
                    }}
                    style={{
                        position: 'absolute',
                        left: 0
                    }}>
                    <img src={logo} alt="logo" height={40}/>
                </motion.div>
        </div>
    );
}

export default Navbar;