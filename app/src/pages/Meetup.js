import { motion } from 'framer-motion';
import React from 'react';
import './styles.css';
import { getUserProfile, loadMeetings, saveMeeting } from '../firebase/Firestore';

import { Button, Card, InputLabel, Paper, TextField, Typography } from '@mui/material';
import { Timestamp } from 'firebase/firestore';
import { isUserSignedIn } from '../firebase/Auth';
import { getAuth } from 'firebase/auth';

const Meetup = (props) => {
  const [firestoreMeetingData, setFirestoreMeetingData] = React.useState([]);
  const [addingNewEvent, setAddingNewEvent] = React.useState(false);
  const [userIsAdmin, setUserIsAdmin] = React.useState(false);
  const loadMeetingData = async () => {
    const meetings = await loadMeetings();
    console.log('meetups loaded', meetings);
    setFirestoreMeetingData(meetings);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const project = {
      title: data.get('title'),
      description: data.get('description'),
      location: data.get('location'),
      date: Timestamp.fromDate(new Date(data.get('meeting-time'))),
    };
    console.log(project);
    await saveMeeting(project.title, project.description, project.date, project.location);
    console.log('meeting successfully uploaded!');
    loadMeetingData();
    setAddingNewEvent(false);
  };
  const checkUserAdmin = async function () {
    if (!isUserSignedIn()) {
      setUserIsAdmin(false);
      return;
    }
    getUserProfile(getAuth().currentUser.uid).then((userProfile) => {
      setUserIsAdmin(userProfile.admin);
    });
  };
  React.useEffect(() => {
    loadMeetingData();
    // checkUserAdmin();
    checkUserAdmin();
  }, []);

  return (
    <div style={{ width: '80%' }}>
      <div style={{ margin: 20 }}>
        {console.log(userIsAdmin) ||
          (userIsAdmin && !addingNewEvent && <Button onClick={() => setAddingNewEvent(true)}>Add new event</Button>)}
        {addingNewEvent && (
          <Paper
            id="newMeetingForm"
            component="form"
            elevation={3}
            style={{ padding: 20 }}
            onSubmit={handleSubmit}
            noValidate
          >
            <Typography variant="h5">Add a new meeting:</Typography>
            <TextField margin="normal" required fullWidth id="title" label="Meeting Title" name="title" />
            <InputLabel htmlFor="meeting-time">Meeting Date</InputLabel>
            <TextField
              id="meeting-time"
              name="meeting-time"
              type="datetime-local"
              required
              fullWidth
              defaultValue={new Date().toString()}
            />
            <TextField margin="normal" required fullWidth id="location" label="Location" name="location" />
            <TextField margin="normal" required fullWidth id="description" label="Description" name="description" />
            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
              Save event
            </Button>
            <Button variant="outlined" onClick={() => setAddingNewEvent(false)} sx={{ mt: 3, mb: 2 }}>
              Cancel
            </Button>
          </Paper>
        )}
      </div>
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
