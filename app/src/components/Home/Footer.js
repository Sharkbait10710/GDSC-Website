// Node imports
import { motion }   from "framer-motion"

import seal         from "../../imgs/Berkeley_Seal.png"
import trademark    from "../../imgs/google_trademark.png"
const Footer = () => {
    const delaytoShow = 1.5;

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

    return(
        <motion.div
            variants={appear}
            initial={{
                opacity: 0,
                y: "100vh"
            }}
            animate={{
                y: 0,
                opacity: 1
            }}
            transition={{
                delay: delaytoShow,
                duration: 1
            }}
            style={{
                borderLeft: "solid #b1b3b5",
                borderRight: "solid #b1b3b5",
                borderWidth: "1px",

                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",

                padding: "10px",
                height: "7%",
                width: "80%"
            }}>
            <div
                style={{
                    display: "flex",
                    alignItems: "center"
                }}><img src={seal} alt="seal" height="40px"/> <span style={{marginLeft: "5px", fontFamily: "Noto Sans"}}>UC Berkeley</span></div>
            <img src={trademark} alt="trademark" height="40px"/>
        </motion.div>
    )
}

export default Footer;
