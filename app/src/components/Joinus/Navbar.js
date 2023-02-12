// Node imports
import * as React           from "react"
import { motion }           from "framer-motion"

// Image imports
import GDSC_logo            from "../../imgs/GDSC_Logo.png"

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
                height: "10%",

                marginBottom: "10px"
            }}>
                <motion.div
                    initial={{
                        x: "10vw",
                        y: "0vh",
                        scale: 1
                    }}
                    style={{
                        position: 'absolute',
                        right: props.sizeWidth != 1 ? '94vw' : props.sizeHeight == 1 ? "45%" : "50%",
                        top: props.sizeHeight == 1 ? '5%' : '3.3%'
                    }}>
                    <img src={GDSC_logo} alt="GDSC" onClick={props.setFunction} style={{cursor: "pointer"}}height={50}/>
                </motion.div>

                {props.sizeWidth == 3 && <motion.div
                    variants={linkVariant}
                    whileHover={{
                        scale: 1.2,
                        borderBottom: "solid #4885ed"
                    }}
                    initial={{
                        opacity: 1
                    }}
                    className="navbar-link"
                    style={{
                        fontFamily: "Google Sans",
                        position: "absolute",
                        top: props.sizeWidth == 2 ? "1%" : props.sizeHeight != 1 ? "2%" : "0.5%",
                        left: props.sizeWidth == 3 ? "18%": "16%",
                        fontWeight: 500
                    }}>
                        {props.sizeWidth != 3 && <a onClick={props.setFunction}>GDSC</a>}
                        {props.sizeWidth == 3 && <a onClick={props.setFunction}>Google Developer Student Club</a>}
                </motion.div>}
        </div>
    );
}

export default Navbar;