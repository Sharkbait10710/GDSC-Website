// Node imports
import * as React from 'react';
import { motion, useAnimationControls } from 'framer-motion';
// MUI Icons
import AppsIcon from '@mui/icons-material/Apps';

// Image imports
import GDSC_logo from '../../imgs/GDSC_Logo.png';
//CSS import
import './styles.css';

//Authentication
import { addAuthListener, signIn} from '../../firebase/Auth'
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const framerControl = useAnimationControls()

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
          marginTop: "2%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2
        }}
        className="scaling"
      >
        <AppsIcon className="rotating" style={{height: "40px", width: "40px"}}/>
      </motion.div>
    </div>
  );
};

export default Navbar;
