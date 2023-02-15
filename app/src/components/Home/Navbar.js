// Node imports
import * as React                   from "react"
import { motion, AnimatePresence }  from "framer-motion"
import TextField                    from '@mui/material/TextField';
import Button                       from '@mui/material/Button';
// MUI Icons
import MenuIcon                     from '@mui/icons-material/Menu';
import LoginIcon                    from '@mui/icons-material/Login';
import SendTimeExtensionIcon        from '@mui/icons-material/SendTimeExtension';

// Image imports
import GDSC_logo                    from "../../imgs/GDSC_Logo.png"
//CSS import
import                              './styles.css'

const Navbar = (props) => {

    const linkVariant = {
        hidden: {
            y: props.init ? '-10vh' : '0vh'  
        },
        visible: {
            y: '0vh',
            transition: {
                delay: props.delay,
                duration: 1
            }
        },
        transition: {
            delay: props.delay,
            duration: 1
        },
        hover: {
            scale: 1.2
        }
    }
    
    const [showOptions, setshowOptions] = React.useState(() => {
        return false
    })

    const [signIn, setsignIn] = React.useState(() => {
        return false
    })

    const [register, setRegister] = React.useState(() => {
        return false
    })

    React.useEffect(() => {
        const handleKeypresses = (event) => {
            if (event.key==`Escape`) {
                setRegister(false);
                setsignIn(false)
            }
        }

        document.addEventListener('keydown', handleKeypresses);

        return function cleanupListener() {
            document.removeEventListener('keydown', handleKeypresses)
        }
    })

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "right",
                top: "0%",

                width: "80%",
                height: "10%"
            }}>
                {<motion.div
                    initial={{
                        x: props.init && props.sizeWidth != 1 ? "45vw" : "10vw",
                        y: props.init ? "50vh" : "0vh",
                        scale: props.init ? 4 : 1
                    }}
                    animate={{
                        x: "10vw",
                        y: "0vh",
                        scale: 1
                    }}
                    transition={{
                        delay:      props.delay,
                        duration:   2
                    }}
                    style={{
                        position: 'absolute',
                        right: props.sizeWidth != 1 ? '94vw' : props.sizeHeight == 1 ? "45%" : "50%",
                        top: props.sizeHeight == 1 ? '5%' : '3.3%'
                    }}>
                    <img src={GDSC_logo} alt="GDSC" height={50}/>
                </motion.div>}

                <motion.div
                    variants={linkVariant}
                    whileHover={{
                        scale: 1.2,
                        borderBottom: "solid #4885ed"
                    }}
                    initial="hidden"
                    animate="visible"
                    transition="transition"
                    className="navbar-link"
                    style={{
                        fontFamily: "Google Sans",
                        position: "absolute",
                        top: props.sizeWidth == 3 ? "2%" : props.sizeHeight == 1 ? "4.3%" : "2.3%",
                        left: "17.5%",
                        fontWeight: 500
                    }}>
                        {props.sizeWidth == 3 && <a>Google Developer Student Club</a>}
                        {props.sizeWidth != 3 && props.sizeWidth != 1 && <a>GDSC</a>}
                </motion.div>
                {props.sizeWidth != 3 && <motion.div
                    initial={{
                        opacity: props.init ? 0 : 1
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        delay: 1,
                        duration: 1
                    }}
                    style={{
                        marginTop: props.sizeHeight == 1 && props.sizeWidth == 1 ? "50px" : "5%"
                    }}>
                    <a onClick={(() => setshowOptions(!showOptions))}><MenuIcon/></a>
                    </motion.div>}
                {props.sizeWidth == 3 && <motion.div
                    variants={linkVariant}
                    whileHover={{
                        scale: 1.2,
                        borderBottom: "solid #e84438"
                    }}
                    initial="hidden"
                    animate="visible"
                    transition="transition"
                    className="navbar-link"
                    style={{
                        marginRight: "32%",
                        fontFamily: "Google Sans",
                        position: "absolute",
                        top: "2%"
                    }}><a href="https://forms.gle/95Kx8NHm6eyaCkeS8">Join Us</a>
                </motion.div>}

                {props.sizeWidth == 3 && <motion.div
                    variants={linkVariant}
                    whileHover={{
                        scale: 1.2,
                        borderBottom: "solid #1a73e8"
                    }}
                    initial="hidden"
                    animate="visible"
                    transition="transition"
                    className="navbar-link"
                    style={{
                        marginRight: "24%",
                        fontFamily: "Google Sans",
                        position: "absolute",
                        top: "2%"
                    }}><a onClick={props.setMeetup}>Meetups</a>
                </motion.div>}

                {props.sizeWidth == 3 && <motion.div
                    variants={linkVariant}
                    whileHover={{
                        scale: 1.2,
                        borderBottom: "solid #fbbc04"
                    }}
                    initial="hidden"
                    animate="visible"
                    transition="transition"
                    className="navbar-link"
                    style={{
                        marginRight: "16%",
                        fontFamily: "Google Sans",
                        position: "absolute",
                        top: "2%"
                    }}><a onClick={props.setEducation}>Courses</a>
                </motion.div>}

                {props.sizeWidth == 3 && <motion.div
                    variants={linkVariant}
                    whileHover={{
                        scale: 1.2,
                        borderBottom: "solid #3cba54"
                    }}
                    initial="hidden"
                    animate="visible"
                    transition="transition"
                    className="navbar-link"
                    style={{
                        marginRight: "8%",
                        fontFamily: "Google Sans",
                        position: "absolute",
                        top: "2%"
                    }}><a onClick={props.setProject}>Projects</a>
                </motion.div>}
                {props.sizeWidth == 3 && <motion.div
                    variants={linkVariant}
                    whileHover={{
                        scale: 1.2,
                        borderBottom: "solid #e84438"
                    }}
                    initial="hidden"
                    animate="visible"
                    transition="transition"
                    className="navbar-link"
                    style={{
                        marginRight: "0%",
                        fontFamily: "Google Sans",
                        position: "absolute",
                        top: "2%"
                    }}><a onClick={() => setsignIn(true)}>Sign In</a>
                </motion.div>}
                <AnimatePresence>
                    {showOptions && props.sizeWidth != 3 &&
                        <motion.div
                            initial={{
                                y: "100vh"
                            }}
                            animate={{
                                y: "0vh"
                            }}
                            transition={{
                                duration: 0.5
                            }}
                            exit={{
                                y: "100vh",
                                transition: {
                                    duration: 0.5
                                }
                            }}
                            style={{
                                position: "absolute",
                                top: props.sizeHeight == 1 ? "20%" : "12%",
                                right: "-4%",
                                marginRight: "0px",
                                zIndex: 1,
                                
                                display: "flex",
                                flexDirection: "column",
                                backgroundColor: "white",

                                width: "100%",
                                height: props.sizeHeight == 1 ? "100%" : "76%",
                                fontSize: props.sizeHeight == 1 ? "60px" : "100px",
                                fontFamily: "Google Sans",

                                overflowY: 'scroll'
                            }}
                            className="navbar-link">
                                <div
                                    style={{
                                        width: "90%",
                                        height: "5px",
                                        backgroundColor: "#e84438",
                                        position: "absolute"
                                    }}/>
                                <div onClick={props.setProject}>Projects</div>
                                <div>Join Us</div>
                                <div >Education</div>
                                <div>Meetup</div>
                    </motion.div>}
                </AnimatePresence>
                {signIn && <AnimatePresence>
                    <motion.div
                        initial={{
                            y: "-100vh",
                            opacity: 0
                        }}
                        animate={{
                            y: "0vh",
                            opacity: 1
                        }}
                        transition={{
                            duration: 0.3
                        }}
                        style={{
                            position: "absolute",
                            top: "10%",
                            right: "10%",

                            width: "20vw",
                            height: "23vh",
                            border: "1px solid",
                            backgroundColor: "white",
                            borderRadius: "5px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly",

                            zIndex: 2
                        }}>
                        <motion.div
                            initial={{
                                scale: 1.1
                            }}
                            animate={{
                                scale: 1.1
                            }}
                            style={{
                                display: "flex",
                                flexDirection: "column",

                                width: "70%",
                                height: "80%",
                                margin: "30px"
                            }}>
                            <TextField
                                id="standard-password-input"
                                label="Username"
                                type="username"
                                autoComplete="current-password"
                                variant="standard"
                                />
                            <TextField
                                id="standard-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                variant="standard"
                                />
                        </motion.div>
                        <motion.div
                            style={{display: "flex",
                                justifyContent: "space-evenly",

                                height: "40%",
                                marginBottom: "20px",
                                marginRight: "100px"
                            }}>
                            <Button variant="contained" startIcon={<LoginIcon />}>
                                Login
                            </Button>
                            <Button variant="outlined" onClick={() => setRegister(true)}>
                                Register
                            </Button>
                        </motion.div>
                    </motion.div>    
                </AnimatePresence>}
                {register && <AnimatePresence>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: "100vh"
                        }}
                        animate={{
                            opacity: 1,
                            y: "0vh"
                        }}
                        transition={{
                            duration: 0.5
                        }}
                        exit={{
                            opacity: 0,
                            transition: {
                                duration: 1
                            }
                        }}
                        style={{
                            position: "absolute",
                            width: "20vw",
                            height: "80vh",
                            top: "10vh",
                            right: "34vw",

                            backgroundColor: "white",

                            border: "1px solid",
                            borderRadius: "10px",
                            boxShadow: "5px 5px #d9d9d9",

                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly",
                            marginLeft: "6%",
                            zIndex: 3,
                            backgroundColor: "white"
                        }}>
                        <motion.div
                            initial={{
                                scale: 2
                            }}
                            animate={{
                                scale: 2
                            }}
                            style={{
                                height: "10vh",
                                marginLeft: "37%"
                            }}>
                            <TextField
                                required
                                id="standard-required"
                                label="Username"
                                variant="standard"
                                size="normal"
                                />
                        </motion.div>
                        <motion.div
                            initial={{
                                scale: 2
                            }}
                            animate={{
                                scale: 2
                            }}
                            style={{
                                height: "10vh",
                                marginLeft: "37%"
                            }}>
                            <TextField
                                required
                                id="standard-required"
                                label="Name"
                                variant="standard"
                                size="normal"
                                />
                        </motion.div>
                        <motion.div
                            initial={{
                                scale: 2
                            }}
                            animate={{
                                scale: 2
                            }}
                            style={{
                                height: "10vh",
                                marginLeft: "37%"
                            }}>
                            <TextField
                                required
                                id="standard-required"
                                label="Permission Code"
                                variant="standard"
                                size="normal"
                                />
                        </motion.div>
                        <motion.div
                            initial={{
                                scale: 2
                            }}
                            animate={{
                                scale: 2
                            }}
                            style={{
                                height: "10vh",
                                marginLeft: "47%"
                            }}>
                        <Button variant="contained" startIcon={<SendTimeExtensionIcon />}>
                                Request
                            </Button>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>}
        </div>
    );
}

export default Navbar;