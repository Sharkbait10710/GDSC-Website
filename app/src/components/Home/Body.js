// Node imports
import { motion }           from "framer-motion"
import { useState }         from "react" 

// MUI imports
import { IconButton }       from "@mui/material"
import NavigateBeforeIcon   from "@mui/icons-material/NavigateBefore"
import NavigateNextIcon     from "@mui/icons-material/NavigateNext"

// Image imports
import info_1               from "../../imgs/info_1.png"
import info_2               from "../../imgs/info_2.png"
import info_3               from "../../imgs/info_3.png"
import info_4               from "../../imgs/info_4.png"
import info_5               from "../../imgs/info_5.png"
import info_6               from "../../imgs/GDSC_QR.png"

const Body = () => {
    const [img, setImg] = useState(() => {
        return 0;
    })

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
                    onClick={() => setImg(img == 0 ? 5 : (Math.abs(img-1))%6)}
                    size="large">
                    <NavigateBeforeIcon fontSize="inherit" />
                </IconButton>
            </motion.div>
            <motion.div
                variants={appear}
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
                
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                    border: "solid black",
                    height: "87%",
                    width: "80%"
                }}>
                {img == 0 && <img src={info_1} alt="info_1" height={630}/>}
                {img == 1 && <img src={info_2} alt="info_2" height={630}/>}
                {img == 2 && <img src={info_3} alt="info_3" height={630}/>}
                {img == 3 && <img src={info_4} alt="info_4" height={630}/>}
                {img == 4 && <img src={info_5} alt="info_5" height={630}/>}
                {img == 5 && 
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
                    </div>}

            </motion.div>
            <motion.div
                variants={appear}
                initial="hidden"
                animate="visible">
                <IconButton 
                    onClick={() => setImg((img+ 1)%6)}
                    size="large">
                    <NavigateNextIcon fontSize="inherit" />
                </IconButton>
            </motion.div>
        </div>
    )
}

export default Body;
