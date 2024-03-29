// Node imports
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

// CSS
import './style.css';
// Imgs
import bg_1 from '../../imgs/carounsel_bg_1.png';

const Carousel = (props) => {
  const [slideNum, setslideNum] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          setslideNum((oldslideNum) => {
            return (oldslideNum + 1) % props.data['arr'].length;
          });
          return 0;
        }
        const diff = 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 1500);

    return () => {
      clearInterval(timer);
    };
  }, [props.data]);

  return (
    <motion.div
      initial={{
        y: props.init ? '100vh' : '0vh',
        opacity: props.init ? 0 : 1,
      }}
      animate={{
        y: '0vh',
        opacity: 1,
      }}
      transition={{
        delay: props.init ? props.delaytoShow : 0,
        duration: 1,
      }}
      style={{
        height: '100%',
        width: '100%',
        overflow: props.sizeWidth === 3 ? 'hidden' : '',
      }}
    >
      <div
        style={{
          height: props.sizeWidth === 1 ? '100%' : '75%',
          width: props.sizeWidth !== 3 ? '110%' : '',
          paddingRight: props.sizeWidth !== 3 ? '140px' : '',
          position: 'absolute',
          top: props.sizeWidth === 1 ? '10%' : '',
          overflowY: props.sizeWidth !== 3 ? 'scroll' : 'hidden',
          msScrollbarTrackColor: 'orange',
        }}
      >
        {props.data['arr'].map((ele) => {
          return (
            <AnimatePresence key={parseInt(ele['index'])}>
              {slideNum === parseInt(ele['index']) && (
                <motion.div
                  initial={{
                    x: '-100vh',
                    opacity: 0,
                  }}
                  animate={{
                    x: '0vh',
                    opacity: 1,
                  }}
                  transition={{
                    delay: props.init ? props.delaytoShow : 0.5,
                    duration: props.init ? 1 : 0.5,
                  }}
                  exit={{
                    x: '-1000vw',
                    transition: {
                      delay: 0,
                      duration: 0.5,
                    },
                  }}
                  className="slide"
                >
                  <h1
                    style={{
                      fontSize: props.sizeWidth === 1 ? '30px' : '',
                      marginTop: props.sizeWidth === 1 ? '20%' : '',
                    }}
                  >
                    {ele['title']}
                  </h1>
                  <h2
                    style={{
                      color: ele['subtitleColor'],
                    }}
                  >
                    {ele['subtitle']}
                  </h2>
                  {ele['points'].map((ele2) => {
                    return (
                      <div key={ele2['main']}>
                        <h3>{ele2['main']}</h3>
                        {ele2['sub'].map((ele3) => {
                          return <p key={ele3}>- {ele3}</p>;
                        })}
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          );
        })}
      </div>

      {props.sizeWidth === 3 && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: props.initinit ? props.delaytoShow : 0,
            duration: 1,
          }}
          style={{
            position: 'absolute',
            bottom: '5%',

            display: 'flex',
            height: '15%',
            width: '80%',
          }}
        >
          {props.data['arr'].map((ele) => {
            return (
              <div
                key={'legend ' + parseInt(ele['index'])}
                style={{
                  height: '90%',
                  maxWidth: '20%',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '5px',
                }}
              >
                <div
                  style={{
                    height: '5px',
                    width: '100%',
                    color: ele['subtitleColor'],
                    marginBottom: '-10px',

                    borderRadius: '5px',
                  }}
                >
                  <LinearProgress
                    variant="determinate"
                    value={slideNum === parseInt(ele['index']) ? progress : 0}
                    color="inherit"
                  />
                </div>
                <p
                  style={{
                    marginLeft: '0',
                  }}
                  className="Hover"
                >
                  <button
                    style={{ all: 'unset' }}
                    onClick={() => {
                      setslideNum(parseInt(ele['index']));
                      setProgress(0);
                    }}
                  >
                    {ele['subtitle']}
                  </button>
                </p>
              </div>
            );
          })}
        </motion.div>
      )}

      {props.sizeWidth !== 1 && props.sizeHeight !== 1 && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: props.init ? props.delaytoShow : 0,
            duration: 1,
          }}
          style={{
            position: 'absolute',
            right: '0%',
            top: '0%',
            height: '100%',
            zIndex: -1,
          }}
        >
          <img
            src={bg_1}
            alt="bg_1"
            style={{
              height: '100%',
            }}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default Carousel;
