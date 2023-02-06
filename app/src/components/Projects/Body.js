// Node imports
import { motion, AnimatePresence }  from "framer-motion"

// Data
import projectData                  from "../../data/projects.json"

// CSS
import                              './styles.css'
const Body = () => {

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
                marginTop: "1%",
                display: "flex",
                flexDirection: "column",
                width: "90%",
                height: "100%"
            }}>
                <div
                    style={{
                        width: "100%",
                        height: "5px",
                        backgroundColor: "gray",

                        position: "relative",
                        left: "5px",
                        top: "5px",
                        opacity: "0.6"
                    }}/>
            {
                projectData["arr"].map((ele) => {
                    return <div
                        style={{
                            width: "100%",
                            height: "20%",
                            display: "flex",
                            flexDirection: "column",

                            paddingBottom: "40px",
                            borderBottom: "5.7px solid rgba(128, 128, 128, .6)"
                        }}>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                }}>
                                    <div
                                       style={{
                                        display: "flex",
                                        flexDirection: "column"
                                       }}>
                                        <div
                                            style={{
                                                height: "100%",
                                                width: "30%",
                                                fontFamily: "Google Sans",
                                                fontSize: "30px",

                                                position: "relative",
                                                left: "30px",
                                                top: "30px",

                                                opacity: 1
                                            }}><a className="Hover" style={{color: "#1a73e8"}} href={ele["github"]}>{ele["name"]}</a></div>
                                        <div
                                            style={{
                                                height: "100%",
                                                width: "50%",
                                                fontFamily: "Google Sans",
                                                fontSize: "25px",

                                                position: "relative",
                                                left: "30px",
                                                top: "40px"
                                            }}>{ele["description"]}</div>
                                    </div>
                                    <div
                                        style={{
                                            width: "100px",
                                            height: "100px",

                                            position: "relative",
                                            top: "30px",
                                            
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",

                                            marginTop: "2%",
                                            marginRight: "50px"
                                        }}><img src={ele["icon"]} height="100%"/></div>
                                </div>
                        </div>
                })
            }
        </motion.div>
    )
}

export default Body;
