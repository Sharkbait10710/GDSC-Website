// Node imports
import { motion }   from "framer-motion"

import seal         from "../../imgs/Berkeley_Seal.png"

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
                y: 0,
                opacity: 1
            }}
            style={{

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
                    alignItems: "center",
                    fontSize: "20px"
                }}><img src={seal} alt="seal" height="40px"/> <span style={{marginLeft: "5px", fontFamily: "Google Sans"}}>UC Berkeley</span></div>
        </motion.div>
    )
}

export default Footer;
