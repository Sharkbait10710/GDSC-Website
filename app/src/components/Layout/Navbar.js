// Node imports
import * as React from 'react';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
// MUI Icons
import AppsIcon from '@mui/icons-material/Apps';

// Image imports
import GDSC_logo from '../../imgs/GDSC_Logo.png';
//CSS import
import './styles.css';

//Authentication
import { addAuthListener, getProfilePicUrl, getUserName, signIn, signOutUser } from '../../firebase/Auth';
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const framerControl = useAnimationControls();

  const linkVariant = {
    hidden: {
      y: props.init ? '-10vh' : '0vh',
    },
    visible: {
      y: '0vh',
      transition: {
        delay: props.delay,
        duration: 1,
      },
    },
    transition: {
      delay: props.delay,
      duration: 1,
    },
    hover: {
      scale: 1.2,
    },
  };

  const userOptions = ['Join Us', 'Meetups', 'Courses', 'Projects'];
  const Links = ['https://forms.gle/95Kx8NHm6eyaCkeS8', '/meetup', '/education', '/projects'];

  const [showOptions, setshowOptions] = React.useState(() => {
    return false;
  });

  const handleSignIn = () => {
    signIn();
  };

  React.useEffect(() => {
    const handleKeypresses = (event) => {
      if (event.key === `Escape`) {
        setshowOptions(false);
      }
    };

    document.addEventListener('keydown', handleKeypresses);

    return function cleanupListener() {
      document.removeEventListener('keydown', handleKeypresses);
    };
  });

  // ----- Authentication --------
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isSignedIn, setIsSignedIn] = React.useState(false);

  React.useEffect(() => {
    //Initialize Listeners

    addAuthListener((user) => {
      if (user) {
        // if user is signed in
        console.log('user signed in!');
        setIsSignedIn(true);
      } else {
        setIsSignedIn(false);
      }
    });
  }, []);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'right',
        top: '0%',

        width: '80%',
        height: '10%',
      }}
    >
      {
        <motion.div
          initial={{
            x: props.init && props.sizeWidth !== 1 ? '45vw' : '10vw',
            y: props.init ? '50vh' : '0vh',
            scale: props.init ? 4 : 1,
          }}
          animate={{
            x: '10vw',
            y: '0vh',
            scale: 1,
          }}
          transition={{
            delay: props.delay,
            duration: 2,
          }}
          style={{
            position: 'absolute',
            right: props.sizeWidth !== 1 ? '94vw' : props.sizeHeight === 1 ? '45%' : '50%',
            top: props.sizeHeight === 1 ? '5%' : '3.3%',
          }}
        >
          <img src={GDSC_logo} alt="GDSC" height={50} />
        </motion.div>
      }

      <motion.div
        variants={linkVariant}
        whileHover={{
          scale: 1.2,
          borderBottom: 'solid #4885ed',
        }}
        initial="hidden"
        animate="visible"
        transition="transition"
        className="navbar-link"
        style={{
          fontFamily: 'Google Sans',
          position: 'absolute',
          top: props.sizeWidth === 3 ? '2%' : props.sizeHeight === 1 ? '4.3%' : '2.3%',
          left: '17.5%',
          fontWeight: 500,
        }}
      >
        {props.sizeWidth === 3 && <Link to="/">Google Developer Student Club</Link>}
        {props.sizeWidth !== 3 && props.sizeWidth !== 1 && <Link to="/">GDSC</Link>}
      </motion.div>
      {isSignedIn && (
        <div
          style={{
            marginTop: '2%',
            marginRight: '2%'
          }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <Avatar alt={getUserName()} src={getProfilePicUrl()} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            style={{
              marginLeft: "-3.5%",
              marginTop: "0.3%"
              
            }}
          >
            <MenuItem onClick={handleClose} sx={{fontSize: "20px"}}>Profile</MenuItem>
            <MenuItem onClick={handleClose} sx={{fontSize: "20px"}}>My account</MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                signOutUser();
              }}
              sx={{fontSize: "20px"}}
            >
              Sign Out
            </MenuItem>
          </Menu>
        </div>
      )}
      <motion.button
        onClick={() => {
          setshowOptions(true);
        }}
        initial={{
          opacity: props.init ? 0 : 1,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1,
          duration: 1,
        }}
        style={{
          marginTop: '2%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2,
        }}
        className="scaling"
      >
        <div
          style={{
            backgroundColor: '#1a73e8',
            height: '100%',
            width: '100%',
            display: 'flex',
          }}
          className="slidingBackground"
        >
          <div
            style={{
              height: '100%',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            className="rotating"
          >
            <div
              style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              className="appsColor"
            >
              <AppsIcon style={{ height: '40px', width: '40px' }} />
            </div>
          </div>
        </div>
      </motion.button>

      {showOptions && (
        <AnimatePresence>
          <motion.div
            initial={{
              y: '100vh',
              opacity: 0,
            }}
            animate={{
              y: '0',
              opacity: 1,
            }}
            style={{
              height: '70vh',
              width: '80vw',
              display: 'flex',
              flexDirection: 'column',

              boxShadow: '0px 0px 1px 5000px rgba(0,0,0,0.1)',
              zIndex: 3,

              position: 'absolute',
              top: '15vh',
              left: '10vw',
              backgroundColor: '#f0ecee',

              overflow: 'hidden',
            }}
          >
            <motion.div
              initial={{
                y: '100vh',
                x: '-100vw',
                opacity: 0.3,
              }}
              animate={{
                y: '-100vh',
                x: '100vw',
              }}
              transition={{
                duration: 1.7,
              }}
              style={{
                position: 'absolute',
                height: '70vh',
                width: '80vw',
                border: '1px solid',
                background: 'linear-gradient(#1a73e8, #0f9d58)',
              }}
            />
            <div
              style={{
                width: '100%',
                height: '50%',

                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
            >
              <div
                className="appObjects"
                style={{
                  backgroundImage: 'linear-gradient(to bottom, white 50%, #569efc 50%)',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  className="appsColor2"
                >
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://forms.gle/95Kx8NHm6eyaCkeS8"
                    className="Links appsColor2"
                  >
                    Join Us
                  </a>
                </div>
              </div>
              <div
                className="appObjects"
                style={{
                  backgroundImage: 'linear-gradient(to bottom, white 50%, #e84438 50%)',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  className="appsColor2"
                >
                  <Link to="/meetup" className="Links appsColor2" onClick={() => setshowOptions(false)}>
                    Meetups
                  </Link>
                </div>
              </div>
              <div
                className="appObjects"
                style={{
                  backgroundImage: 'linear-gradient(to bottom, white 50%, #0f9d58 50%)',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  className="appsColor2"
                >
                  <Link to="/education" className="Links appsColor2" onClick={() => setshowOptions(false)}>
                    Courses
                  </Link>
                </div>
              </div>
            </div>

            <div
              style={{
                width: '100%',
                height: '50%',

                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
            >
              <div
                className="appObjects"
                style={{
                  backgroundImage: 'linear-gradient(to bottom, white 50%, #fbbc04 50%)',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  className="appsColor2"
                >
                  <Link to="/projects" className="Links" onClick={() => setshowOptions(false)}>
                    Projects
                  </Link>
                </div>
              </div>
              <div
                className="appObjects"
                style={{
                  backgroundImage: 'linear-gradient(to bottom, white 50%, #1a73e8 50%)',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  className="appsColor2"
                >
                  <button
                    className="Links"
                    onClick={() => {
                      setshowOptions(false);
                      handleSignIn();
                    }}
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Navbar;
