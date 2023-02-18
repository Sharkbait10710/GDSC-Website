// Node imports
import * as React from 'react';
import { motion } from 'framer-motion';

import seal from '../../imgs/Berkeley_Seal.png';

const Footer = (props) => {
  const delaytoShow = 1;

  const appear = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: delaytoShow,
        duration: 1,
      },
    },
  };
  const [windowSize, setWindowSize] = React.useState(getWindowSize());

  React.useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  return (
    <motion.div
      variants={appear}
      initial={{
        opacity: props.init ? 0 : 1,
        y: '100vh',
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        delay: delaytoShow - 1,
        duration: 2,
      }}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: windowSize.innerWidth >= 1300 && windowSize.innerHeight > 850 ? 'space-between' : 'center',

        padding: '10px',
        height: '7%',
        width: '80%',
        position: "relative",
        right: "5.3%"
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: '20px',
        }}
      >
        <img src={seal} alt="seal" height="40px" />{' '}
        <span style={{ marginLeft: '5px', fontFamily: 'Google Sans' }}>UC Berkeley</span>
      </div>
    </motion.div>
  );
};

export default Footer;
