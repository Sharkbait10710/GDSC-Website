// Node imports
import { motion, AnimatePresence }  from "framer-motion"
import { useState, useEffect }      from "react"
import LinearProgress               from '@mui/material/LinearProgress';

// CSS
import './style.css'
// Imgs
import bg_1                         from "../../imgs/carounsel_bg_1.png"

const Carousel = (props) => {
    const [slideNum, setslideNum] = useState(0)
    const [init, setInit] = useState(() => {
        return 1
    })

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setTimeout(() => setInit(0), 2000);
        const timer = setInterval(() => {
          setProgress((oldProgress) => {
            if (oldProgress >= 100) {
                setslideNum((oldslideNum) => {
                    return (oldslideNum + 1) % props.data["arr"].length
                })
                return 0
            }
            const diff = 10;
            return Math.min(oldProgress + diff, 100);
          });
        }, 1500);
    
        return () => {
          clearInterval(timer);
        };
      }, []);

    return (
        <motion.div
            initial={{
                y: props.init ? "100vh" : "0vh",
                opacity: props.init ? 0 : 1
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
                return <AnimatePresence key={ele["index"]}>
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
                                delay: init ? props.delaytoShow : 1,
                                duration: 1
                            }}
                            exit={{
                                x: "-1000vw",
                                transition: {
                                    delay: 0,
                                    duration: 1.5
                                }
                            }}
                            className="slide">
                            <h1>{ele["title"]}</h1>
                            <h2
                                style={{
                                    color: ele["subtitleColor"]
                                }}>{ele["subtitle"]}</h2>
                            {
                                ele["points"].map((ele2) => {
                                    return <div key={ele2["main"]}>
                                            <h3>{ele2["main"]}</h3>
                                            {ele2["sub"].map((ele3) => {
                                                return <p key={ele3}>- {ele3}</p>
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
                transition={{
                    delay: props.delaytoShow,
                    duration: 1
                }}
                style={{
                    position: "absolute",
                    bottom: "5%",

                    display: "flex",
                    height: "15%",
                    width: "80%"
                }}>
                    {
                        props.data["arr"].map((ele)=> {
                            return <div
                                key={"legend " + ele["index"]}
                                style={{
                                    height: "90%",
                                    maxWidth: "20%",
                                    display: "flex",
                                    flexDirection: "column",
                                    padding: "5px",

                                    textOverflow: "ellipsis"
                                }}>
                                <div
                                    style={{
                                        height: "5px",
                                        width: "100%",
                                        color: ele["subtitleColor"],
                                        marginBottom: "-10px",

                                        borderRadius: "5px"
                                    }}>
                                        <LinearProgress 
                                            variant="determinate" 
                                            value={(slideNum == ele["index"]) ? progress : 0}
                                            color="inherit"
                                            />
                                    </div>
                                <p style={{
                                    marginLeft: "0"
                                    }}
                                    className="Hover">
                                        <a onClick={() => {
                                            setslideNum(ele["index"])
                                            setProgress(0)
                                        }}>{ele["subtitle"]}</a>
                                </p>
                            </div>
                        })
                    }
            </motion.div>

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

export default Carousel