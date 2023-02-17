// Node imports
import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// MUI Icons
import MenuIcon from '@mui/icons-material/Menu';

// Image imports
import GDSC_logo from '../../imgs/GDSC_Logo.png';
//CSS import
import './styles.css';

//Authentication
import { addAuthListener, getProfilePicUrl, getUserName, signIn, signOutUser } from '../../firebase/Auth';
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
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

  const [showOptions, setshowOptions] = React.useState(() => {
    return false;
  });

  const handleSignIn = () => {
    signIn();
  };

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

  const handleProfile = () => {
    handleClose();
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
      {props.sizeWidth !== 3 && (
        <motion.div
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
            marginTop: props.sizeHeight === 1 && props.sizeWidth === 1 ? '50px' : '5%',
          }}
        >
          <IconButton aria-label="open menu" onClick={() => setshowOptions(!showOptions)}>
            <MenuIcon />
          </IconButton>
        </motion.div>
      )}
      {props.sizeWidth === 3 && (
        <motion.div
          variants={linkVariant}
          whileHover={{
            scale: 1.2,
            borderBottom: 'solid #e84438',
          }}
          initial="hidden"
          animate="visible"
          transition="transition"
          className="navbar-link"
          style={{
            marginRight: '32%',
            fontFamily: 'Google Sans',
            position: 'absolute',
            top: '2%',
          }}
        >
          <a target="_blank" rel="noreferrer" href="https://forms.gle/95Kx8NHm6eyaCkeS8">
            Join Us
          </a>
        </motion.div>
      )}

      {props.sizeWidth === 3 && (
        <motion.div
          variants={linkVariant}
          whileHover={{
            scale: 1.2,
            borderBottom: 'solid #1a73e8',
          }}
          initial="hidden"
          animate="visible"
          transition="transition"
          className="navbar-link"
          style={{
            marginRight: '24%',
            fontFamily: 'Google Sans',
            position: 'absolute',
            top: '2%',
          }}
        >
          <Link to="/meetup">Meetups</Link>
        </motion.div>
      )}

      {props.sizeWidth === 3 && (
        <motion.div
          variants={linkVariant}
          whileHover={{
            scale: 1.2,
            borderBottom: 'solid #fbbc04',
          }}
          initial="hidden"
          animate="visible"
          transition="transition"
          className="navbar-link"
          style={{
            marginRight: '16%',
            fontFamily: 'Google Sans',
            position: 'absolute',
            top: '2%',
          }}
        >
          <Link to="/education">Courses</Link>
        </motion.div>
      )}

      {props.sizeWidth === 3 && (
        <motion.div
          variants={linkVariant}
          whileHover={{
            scale: 1.2,
            borderBottom: 'solid #3cba54',
          }}
          initial="hidden"
          animate="visible"
          transition="transition"
          className="navbar-link"
          style={{
            marginRight: '8%',
            fontFamily: 'Google Sans',
            position: 'absolute',
            top: '2%',
          }}
        >
          <Link to="/projects">Projects</Link>
        </motion.div>
      )}
      {props.sizeWidth === 3 &&
        (isSignedIn ? (
          <div>
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
            >
              <Link to="/profile" style={{ all: 'unset' }}>
                <MenuItem onClick={handleProfile}>Profile</MenuItem>
              </Link>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  signOutUser();
                }}
              >
                Sign Out
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <motion.div
            variants={linkVariant}
            whileHover={{
              scale: 1.2,
              borderBottom: 'solid #e84438',
            }}
            initial="hidden"
            animate="visible"
            transition="transition"
            className="navbar-link"
            style={{
              marginRight: '0%',
              fontFamily: 'Google Sans',
              position: 'absolute',
              top: '2%',
            }}
          >
            <button onClick={handleSignIn}>Sign In</button>
          </motion.div>
        ))}
      <AnimatePresence>
        {showOptions && props.sizeWidth !== 3 && (
          <motion.div
            initial={{
              y: '100vh',
            }}
            animate={{
              y: '0vh',
            }}
            transition={{
              duration: 0.5,
            }}
            exit={{
              y: '100vh',
              transition: {
                duration: 0.5,
              },
            }}
            style={{
              position: 'absolute',
              top: props.sizeHeight === 1 ? '20%' : '12%',
              right: '-4%',
              marginRight: '0px',
              zIndex: 1,

              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'white',

              width: '100%',
              height: props.sizeHeight === 1 ? '100%' : '76%',
              fontSize: props.sizeHeight === 1 ? '60px' : '100px',
              fontFamily: 'Google Sans',

              overflowY: 'scroll',
            }}
            className="navbar-link"
          >
            <div
              style={{
                width: '90%',
                height: '5px',
                backgroundColor: '#e84438',
                position: 'absolute',
              }}
            />
            <div onClick={props.setProject}>Projects</div>
            <div>Join Us</div>
            <div>Education</div>
            <div>Meetup</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
