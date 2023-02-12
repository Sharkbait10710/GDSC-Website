// Node imports
import { motion, AnimatePresence }  from "framer-motion"

// Data
import educationData                from "../../data/education.json"

// CSS
import                              './styles.css'
const Body = (props) => {

    return(
        <motion.div
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            transition={{
                duration: 1
            }}
            style={{
                marginTop: props.sizeHeight == 1 ? "20%" : "1%",
                display: "flex",
                flexDirection: "column",
                width: "95%",
                height: "100%"
            }}>
                <div
                    style={{
                        width: "100%",
                        height: "5px",
                        backgroundColor: "gray",
                        
                        marginTop: "15px",
                        opacity: "0.6"
                    }}/>
            {
                <AnimatePresence>
                    <motion.div
                        initial={{

                        }}
                        animate={{

                        }}
                        transition={{

                        }}
                        exit={{

                        }}
                        style={{
                            height: "100%",
                            width: "100%",
                            display: "flex",

                            marginTop: "20px"
                        }}
                    >
                        <motion.div
                            style={{
                                width: "33%",
                                borderRight: "1px solid",

                                display: "flex",
                                flexDirection: "column"
                            }}>
                                <div
                                    style={{
                                        fontSize: "50px",
                                        fontFamily: "Google Sans",
                                        textAlign: "center"
                                    }}>
                                        {educationData["arr"][0]["name"]}
                                </div>
                                {educationData["arr"][0]["content"].map((ele) => {
                                    return <div
                                        variant="outlined"
                                        key={ele["name"]}
                                        style={{
                                            height: "20%",
                                            width: "90%",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "center",

                                            border: "1px solid gray",
                                            borderRadius: "5px",

                                            margin: "30px",

                                            boxShadow: "10px 10px #d9d9d9"
                                        }}
                                        className="hovering">
                                            <div>
                                                <img 
                                                    src={ele["image"]} 
                                                    alt={ele["name"]} 
                                                    style={{width: "300px"}}/>
                                            </div>
                                        </div>
                                })}
                        </motion.div>
                        <motion.div
                            style={{
                                width: "33%",
                                borderRight: "1px solid",

                                display: "flex",
                                flexDirection: "column"
                            }}>
                                <div
                                    style={{
                                        fontSize: "50px",
                                        fontFamily: "Google Sans",
                                        textAlign: "center"
                                    }}>
                                        {educationData["arr"][1]["name"]}
                                </div>
                                {educationData["arr"][1]["content"].map((ele) => {
                                    return <div
                                        variant="outlined"
                                        key={ele["name"]}
                                        style={{
                                            height: "20%",
                                            width: "90%",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "center",

                                            border: "1px solid gray",
                                            borderRadius: "5px",

                                            margin: "30px",
                                            boxShadow: "10px 10px #d9d9d9"
                                        }}
                                        className="hovering">
                                            <div>
                                                <img 
                                                    src={ele["image"]} 
                                                    alt={ele["name"]} 
                                                    style={{width: "300px"}}/>
                                            </div>
                                        </div>
                                })}
                        </motion.div>
                        <motion.div
                            style={{
                                width: "33%",

                                display: "flex",
                                flexDirection: "column"
                            }}>
                                <div
                                    style={{
                                        fontSize: "50px",
                                        fontFamily: "Google Sans",
                                        textAlign: "center"
                                    }}>
                                        {educationData["arr"][2]["name"]}
                                </div>
                                {educationData["arr"][2]["content"].map((ele) => {
                                    return <div
                                        variant="outlined"
                                        key={ele["name"]}
                                        style={{
                                            height: "20%",
                                            width: "90%",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "center",

                                            border: "1px solid gray",
                                            borderRadius: "5px",

                                            margin: "30px",
                                            boxShadow: "10px 10px #d9d9d9"
                                        }}
                                        className="hovering">
                                            <div>
                                                <img 
                                                    src={ele["image"]} 
                                                    alt={ele["name"]} 
                                                    style={{width: "100px"}}/>
                                            </div>
                                        </div>
                                })}
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            }
        </motion.div>
    )
}

export default Body;
