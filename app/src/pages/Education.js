import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { motion, AnimatePresence } from 'framer-motion';

// Data
import educationData from '../data/education.json';

// CSS
import './styles.css';

const Education = (props) => {
  const [click, setClick] = React.useState(() => {
    return false;
  });

  React.useEffect(() => {
    const handleKeypresses = (event) => {
      if (event.key === `Escape`) {
        setClick(false);
      }
    };

    document.addEventListener('keydown', handleKeypresses);

    return function cleanupListener() {
      document.removeEventListener('keydown', handleKeypresses);
    };
  });

  const [year, setYear] = React.useState(() => {
    return 'year';
  });

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      style={{
        marginTop: props.sizeHeight === 1 ? '20%' : '1%',
        display: 'flex',
        flexDirection: 'column',
        width: '95%',
        height: '100%',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '5px',
          backgroundColor: 'gray',

          marginTop: '15px',
          opacity: '0.6',
        }}
      />

      {!click && (
        <AnimatePresence>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 3,
              },
            }}
            style={{
              height: '100%',
              width: '100%',
              display: 'flex',

              marginTop: '20px',
            }}
          >
            <motion.div
              style={{
                width: '33%',
                borderRight: '1px solid',

                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  fontSize: '50px',
                  fontFamily: 'Google Sans',
                  textAlign: 'center',
                }}
              >
                {educationData['arr'][0]['name']}
              </div>
              {educationData['arr'][0]['content'].map((ele) => {
                return (
                  <div
                    variant="outlined"
                    key={ele['name']}
                    style={{
                      height: '20%',
                      width: '90%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',

                      border: '1px solid gray',
                      borderRadius: '5px',

                      margin: '30px',

                      boxShadow: '10px 10px #d9d9d9',
                    }}
                    className="hovering"
                  >
                    <div>
                      <button
                        style={{ all: 'unset' }}
                        onClick={() => {
                          setClick(true);
                        }}
                      >
                        <img src={ele['image']} alt={ele['name']} style={{ width: '300px' }} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </motion.div>
            <motion.div
              style={{
                width: '33%',
                borderRight: '1px solid',

                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  fontSize: '50px',
                  fontFamily: 'Google Sans',
                  textAlign: 'center',
                }}
              >
                {educationData['arr'][1]['name']}
              </div>
              {educationData['arr'][1]['content'].map((ele) => {
                return (
                  <div
                    variant="outlined"
                    key={ele['name']}
                    style={{
                      height: '20%',
                      width: '90%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',

                      border: '1px solid gray',
                      borderRadius: '5px',

                      margin: '30px',
                      boxShadow: '10px 10px #d9d9d9',
                    }}
                    className="hovering"
                  >
                    <div>
                      <button
                        style={{ all: 'unset' }}
                        onClick={() => {
                          setClick(true);
                        }}
                      >
                        <img src={ele['image']} alt={ele['name']} style={{ width: '300px' }} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </motion.div>
            <motion.div
              style={{
                width: '33%',

                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  fontSize: '50px',
                  fontFamily: 'Google Sans',
                  textAlign: 'center',
                }}
              >
                {educationData['arr'][2]['name']}
              </div>
              {educationData['arr'][2]['content'].map((ele) => {
                return (
                  <div
                    variant="outlined"
                    key={ele['name']}
                    style={{
                      height: '20%',
                      width: '90%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',

                      border: '1px solid gray',
                      borderRadius: '5px',

                      margin: '30px',
                      boxShadow: '10px 10px #d9d9d9',
                    }}
                    className="hovering"
                  >
                    <div>
                      <button
                        style={{ all: 'unset' }}
                        onClick={() => {
                          setClick(true);
                        }}
                      >
                        <img src={ele['image']} alt={ele['name']} style={{ width: '100px' }} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}

      {click && (
        <AnimatePresence>
          <motion.div
            initial={{
              opacity: 0,
              y: '100vh',
            }}
            animate={{
              opacity: 1,
              y: '0vh',
            }}
            transition={{
              duration: 0.5,
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 1,
              },
            }}
            style={{
              position: 'absolute',
              width: '80vw',
              height: '75vh',
              top: '15vh',
              left: '10vw',

              backgroundColor: 'white',

              border: '1px solid',
              borderRadius: '10px',
              boxShadow: '5px 5px #d9d9d9',

              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '65vh',
                width: '55%',

                fontFamily: 'Google Sans',
              }}
            >
              <div
                style={{
                  fontSize: '70px',
                }}
                className="displayItems"
              >
                Course Description
              </div>
              <div
                style={{
                  fontSize: '30px',
                  marginLeft: '80px',
                  marginBottom: '60px',
                }}
                className="displayItems"
              >
                TBD
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',

                  fontSize: '40px',

                  marginTop: '20px',

                  width: '80%',
                }}
              >
                <motion.div
                  initial={{
                    scale: 1.3,
                  }}
                  animate={{
                    scale: 1.5,
                  }}
                >
                  <TextField
                    required
                    id="standard-required"
                    label="Required"
                    defaultValue="Name"
                    variant="standard"
                    size="normal"
                  />
                </motion.div>
                <motion.div
                  initial={{
                    scale: 1.5,
                  }}
                  animate={{
                    scale: 1.5,
                  }}
                >
                  <TextField
                    required
                    id="standard-required"
                    label="Required"
                    defaultValue="Major"
                    variant="standard"
                    size="normal"
                  />
                </motion.div>
              </div>
              <motion.div
                initial={{
                  scale: 1.5,
                }}
                animate={{
                  scale: 1.5,
                }}
                style={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',

                  fontSize: '40px',

                  width: '40%',
                  marginTop: '80px',
                  marginLeft: '-30px',
                }}
              >
                <FormControl
                  style={{
                    width: '40%',
                  }}
                >
                  <InputLabel>Year</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={year}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>1st</MenuItem>
                    <MenuItem value={20}>2nd</MenuItem>
                    <MenuItem value={30}>3rd</MenuItem>
                    <MenuItem value={30}>4th</MenuItem>
                    <MenuItem value={30}>Graduate</MenuItem>
                  </Select>
                </FormControl>
              </motion.div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',

                fontFamily: 'Google Sans',
                width: '23vw',

                marginTop: '50px',
              }}
            >
              <div
                style={{
                  fontSize: '40px',
                  marginBottom: '-50px',
                }}
              >
                Availability
              </div>
              <motion.div
                style={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  height: '65vh',
                }}
              >
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((ele) => {
                  return (
                    <motion.div
                      key={'day ' + ele}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        fontFamily: 'Google Sans',
                      }}
                    >
                      <motion.div
                        initial={{
                          opacity: 0,
                        }}
                        animate={{
                          opacity: 1,
                        }}
                        transition={{
                          duration: 2,
                        }}
                        style={{
                          marginBottom: '5px',
                        }}
                      >
                        {ele}
                      </motion.div>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((ele) => {
                        return (
                          <motion.div
                            initial={{
                              x: '100vw',
                            }}
                            animate={{
                              x: '0vw',
                            }}
                            transition={{
                              duration: 1.5 + ele * 0.1,
                            }}
                            key={'time ' + ele}
                            style={{
                              height: '5vh',
                              width: '4vw',
                              border: '1px solid',
                              margin: '0.1px',

                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                            className="timing"
                          >
                            {ele}:00pm
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default Education;
