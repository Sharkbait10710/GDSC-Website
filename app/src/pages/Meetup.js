import { motion } from 'framer-motion';
import React from 'react';
import './styles.css';
import { loadMeetings, saveMeeting } from '../firebase/Firestore';
import { Paper, Typography } from '@mui/material';

const Meetup = (props) => {
  const [firestoreMeetingData, setFirestoreMeetingData] = React.useState([]);

  const loadMeetingData = async () => {
    const meetings = await loadMeetings();
    console.log('meetups loaded', meetings);
    setFirestoreMeetingData(meetings);
  };

  React.useEffect(() => {
    loadMeetingData();
  }, []);
  return (
    <div style={{ width: '80%' }}>
      {firestoreMeetingData &&
        firestoreMeetingData.map((meeting, i) => {
          return (
            <Paper elevation={2} style={{ width: '90%', minWidth: '500px', padding: 30 }}>
              <Typography variant="h4">{meeting.title}</Typography>
              <Typography variant="body1" color="text.secondary">
                Location: {meeting.location}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Date: {meeting.date.toDate().toDateString()}
              </Typography>
              <Typography variant="subtitle1">{meeting.description}</Typography>
            </Paper>
          );
        })}
    </div>
  );
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
      <motion.div
        style={{
          border: '1px solid',
          borderRadius: '10px',
          height: '74vh',
          width: '100%',
          marginTop: '30px',
          overflowY: 'scroll',
          overflowX: 'hidden',
          alignItems: 'center',
        }}
      >
        {[0, 1, 2].map((ele) => {
          return (
            <div
              style={{
                width: '99%',
                fontFamily: 'Google Sans',
                fontSize: '30px',
                padding: '10px',
              }}
              key={'week' + ele + 1}
            >
              Week {ele}
              <motion.div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space_evenly',
                }}
              >
                <motion.div
                  style={{
                    height: '30vh',
                    width: '20%',
                    border: '1px solid',
                    borderRadius: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',

                    boxShadow: '5px 5px #d9d9d9',
                  }}
                >
                  <div>Monday</div>
                  <div>General Meeting {ele + 1}</div>
                  <div>2/{15 + ele * 7}/2023</div>
                </motion.div>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Meetup;
