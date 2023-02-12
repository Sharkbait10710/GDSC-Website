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
                projectData["arr"].map((ele) => {
                    return <div
                        style={{
                            width: "100%",
                            height: "30%",
                            display: "flex",
                            flexDirection: "column",
                            borderBottom: "5.7px solid rgba(128, 128, 128, .6)"
                        }}>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                        
                                    height: "100%"
                                }}>
                                    <div
                                       style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        width: "60%",
                                        height: "100%",

                                        overflow: "hidden"
                                       }}>
                                        <div
                                            style={{
                                                fontFamily: "Google Sans",
                                                fontSize: "30px",

                                                paddingLeft: "10px",
                                                paddingTop: "20px",

                                                opacity: 1
                                            }}><a className="Hover" style={{color: "#1a73e8"}} href={ele["github"]}>{ele["name"]}</a></div>
                                        <div
                                            style={{
                                                width: "90%",
                                                fontFamily: "Google Sans",
                                                fontSize: "25px",
                                                
                                                paddingLeft: "10px"

                                            }}
                                            className="scrolling">{ele["description"]}</div>
                                    </div>
                                    <div
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                            
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            
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
