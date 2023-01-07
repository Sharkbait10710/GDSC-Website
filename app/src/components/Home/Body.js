// Node imports
import { motion, AnimatePresence }  from "framer-motion"
import { useState }                 from "react" 

// MUI imports
import { IconButton }               from "@mui/material"
import NavigateBeforeIcon           from "@mui/icons-material/NavigateBefore"
import NavigateNextIcon             from "@mui/icons-material/NavigateNext"

// Image imports
import info_1                       from "../../imgs/info_1.png"
import info_2                       from "../../imgs/info_2.png"
import info_3                       from "../../imgs/info_3.png"
import info_4                       from "../../imgs/info_4.png"
import info_5                       from "../../imgs/info_5.png"
import info_6                       from "../../imgs/GDSC_QR.png"

const Body = () => {
    const [img, setImg] = useState(() => {
        return 0;
    })

    const [previmg, setprevImg] = useState(() => {
        return 0;
    })

    const googleColors = ["#4885ed", "#f4c20d", "#3cba54", "#db3236"];
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
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",

                border: "solid black",
                height: "80vh",
                width: "80%"
            }}>
            <motion.div
                variants={appear}
                initial="hidden"
                animate="visible">
                <IconButton 
                    onClick={() => {
                        setImg(img == 0 ? 5 : (Math.abs(img-1))%6)
                        setTimeout(() => setprevImg((Math.abs(img-1))%6), 500)
                    }}
                    size="large">
                    <NavigateBeforeIcon fontSize="inherit" />
                </IconButton>
            </motion.div>

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
                    delay: delaytoShow,
                    duration: 1
                }}
                exit={{ 
                    x: "-100vw" 
                }}
                
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                    border: "solid black",
                    height: "87%",
                    width: "80%",

                    overflow: "hidden"
                }}>
                <AnimatePresence initial={false}>
                    {img == 0 && 
                        <motion.div
                        initial={{
                            x: "75vw"
                        }}
                        animate={{
                            x: "0vw"
                        }}
                        transition={{
                            duration: 1,
                            stiffness: 0
                        }}
                            exit={{ x:  previmg == 5 && img == 0 ? "100vw" :
                                        img > previmg ? "100vw" :
                                        previmg == 0 && img == 5 ? "-100vw":
                                        "-100vw",
                                    transition: {
                                        duration: 1
                                    }}}>
                            <img src={info_1} alt="info_1" height={630}/>
                        </motion.div>}
                </AnimatePresence>
                <AnimatePresence initial={false}>
                    {img == 1 && 
                        <motion.div
                        initial={{
                            x: "75vw"
                        }}
                        animate={{
                            x: "0vw"
                        }}
                        transition={{
                            duration: 2,
                            stiffness: 0
                        }}
                            exit={{ x:  previmg == 5 && img == 0 ? "100vw" :
                                        img > previmg ? "100vw" :
                                        previmg == 0 && img == 5 ? "-100vw":
                                        "-100vw",
                                        transition: {
                                            duration: 1
                                        }}}>
                            <img src={info_2} alt="info_2" height={630}/>
                        </motion.div>}
                </AnimatePresence>
                <AnimatePresence initial={false}>
                    {img == 2 && 
                        <motion.div
                        initial={{
                            x: "75vw"
                        }}
                        animate={{
                            x: "0vw"
                        }}
                        transition={{
                            duration: 2,
                            stiffness: 0
                        }}
                            exit={{ x:  previmg == 5 && img == 0 ? "100vw" :
                                        img > previmg ? "100vw" :
                                        previmg == 0 && img == 5 ? "-100vw":
                                        "-100vw",
                                        transition: {
                                            duration: 1
                                        }}}>
                            <img src={info_3} alt="info_3" height={630}/>
                        </motion.div>}
                </AnimatePresence>
                <AnimatePresence initial={false}>
                    {img == 3 && 
                        <motion.div
                        initial={{
                            x: "75vw"
                        }}
                        animate={{
                            x: "0vw"
                        }}
                        transition={{
                            duration: 2,
                            stiffness: 0
                        }}
                            exit={{ x:  previmg == 5 && img == 0 ? "100vw" :
                                        img > previmg ? "100vw" :
                                        previmg == 0 && img == 5 ? "-100vw":
                                        "-100vw",
                                        transition: {
                                            duration: 1
                                        }}}>
                            <img src={info_4} alt="info_4" height={630}/>
                        </motion.div>}
                </AnimatePresence>
                <AnimatePresence initial={false}>
                    {img == 4 && 
                        <motion.div
                        initial={{
                            x: "75vw"
                        }}
                        animate={{
                            x: "0vw"
                        }}
                        transition={{
                            duration: 2,
                            stiffness: 0
                        }}
                            exit={{ x:  previmg == 5 && img == 0 ? "100vw" :
                                        img > previmg ? "100vw" :
                                        previmg == 0 && img == 5 ? "-100vw":
                                        "-100vw",
                                        transition: {
                                            duration: 1
                                        }}}>
                            <img src={info_5} alt="info_5" height={630}/>
                        </motion.div>}
                </AnimatePresence>
                <AnimatePresence initial={false}>
                    {img == 5 && 
                        <motion.div
                        initial={{
                            x: "75vw"
                        }}
                        animate={{
                            x: "0vw"
                        }}
                        transition={{
                            duration: 2,
                            stiffness: 0
                        }}
                            exit={{ x:  previmg == 5 && img == 0 ? "100vw" :
                                        img > previmg ? "100vw" :
                                        previmg == 0 && img == 5 ? "-100vw":
                                        "-100vw",
                                        transition: {
                                            duration: 1
                                        }}}>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",

                                    fontFamily: "Google Sans"
                                }}>
                                Connect with us!
                                <img src={info_6} alt="info_6" height={500}/>    
                            </div>
                        </motion.div>}
                </AnimatePresence>
                {/* {img == 5 && 
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",

                            fontFamily: "Google Sans"
                        }}>
                        Connect with us!
                        <img src={info_6} alt="info_6" height={500}/>    
                    </div>} */}

            </motion.div>

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
                    delay: delaytoShow,
                    duration: 1
                }}>
                <IconButton 
                    onClick={() => {
                        setImg((img+ 1)%6)
                        setTimeout(() => setprevImg((Math.abs(img-1))%6), 500)
                    }}
                    size="large">
                    <NavigateNextIcon fontSize="inherit" />
                </IconButton>
            </motion.div>

            <motion.div
                variants={appear}
                initial="hidden"
                animate="visible"
                style={{
                    display: "flex",
                    position: "absolute",
                    bottom: "13%",
                    width: "64.5vw",
                    height: "1vh"
                }}>
                {[0,1,2,3,4,5].map((ele) => 
                    img != ele ? 
                        <div
                            key={"slide " + ele}
                            style={{
                                flexGrow: 1,
                                backgroundColor: "#b1b3b5",
                                
                                border: "solid " + "#b1b3b5",
                                borderRadius: "4px",
                                margin: "1px"
                            }}/> :
                        <div
                            key={"showslide " + ele}
                            style={{
                                backgroundColor: googleColors[ele%4],
                                flexGrow: 1,

                                border: "solid " + googleColors[ele%4],
                                borderRadius: "4px",
                                margin: "1px"
                        }}/>
                            
                )}
            </motion.div>
            img {img}
        </div>
    )
}

export default Body;
