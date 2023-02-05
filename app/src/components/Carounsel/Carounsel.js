// Node imports
import { motion, AnimatePresence }  from "framer-motion"
import { useState }                 from "react" 

// CSS
import './style.css'
// Imgs
import bg_1                         from "../../imgs/carounsel_bg_1.png"
import bg_2                         from "../../imgs/carounsel_bg_2.png"

const Carounsel = (props) => {
    const [slideNum, setslideNum] = useState(0)
    const [init, setInit] = useState(true)
    return (
        <motion.div
            initial={{
                y: "100vh",
                opacity: 0
            }}
            animate={{
                y: "0vh",
                opacity: 1
            }}
            transition={{
                delay: props.delaytoShow,
                duration: 1
            }}
            style={{
                height: "100%",
                width: "100%",
                overflow: "hidden"
            }}>
                {props.data["arr"].map((ele) => {
                    return <AnimatePresence>
                        {slideNum == ele["index"]
                        && <motion.div
                                initial={{
                                    x: "-100vh",
                                    opacity: 0
                                }}
                                animate={{
                                    x: "0vh",
                                    opacity: 1
                                }}
                                transition={{
                                    delay: props.delaytoShow,
                                    duration: 2
                                }}
                                exit={{
                                    x: "-100vh"
                                }}
                                class="slide">
                                <h1>{ele["title"]}</h1>
                                <h2
                                    style={{
                                        color: ele["subtitleColor"]
                                    }}>{ele["subtitle"]}</h2>
                                {
                                    ele["points"].map((ele2) => {
                                        return <div>
                                                <h3>{ele2["main"]}</h3>
                                                {ele2["sub"].map((ele3) => {
                                                    return <p>- {ele3}</p>
                                                })}
                                        </div>
                                    })
                                }
                            </motion.div>}
                    </AnimatePresence>
                })}
                
            <motion.div
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                style={{
                    position: "absolute",
                    right: "0%",
                    top: "0%",
                    height: "100%",
                    zIndex: -1
                }}>
                <img 
                    src={bg_1} 
                    alt="bg_1"
                    style={{
                        height: "100%"
                    }}/>
            </motion.div>
        </motion.div>
    )
}

export default Carounsel