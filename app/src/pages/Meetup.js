import { motion } from 'framer-motion';
import React from 'react';
import './meetupStyles.css';
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
    checkUserAdmin();
  }, []);

  return (
    <div
      style={{
        width: '80%',
        height: '80%',
        overflowY: 'scroll',
        marginTop: '2%',
        paddingTop: '2.3%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        overflowX: 'hidden',
      }}
    >
      <motion.div
        initial={{
          y: '100vh',
          opacity: 0,
        }}
        animate={{
          y: '0vh',
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        style={{
          width: '100%',
          height: '100%',
          border: '1px solid',
        }}
      >
        <div>
          {console.log(userIsAdmin) ||
            (userIsAdmin && !addingNewEvent && (
              <Button
                sx={{
                  marginTop: '30px',
                  marginLeft: "30px",
                  fontSize: '20px',
                  zIndex: 3,
                }}
                onClick={() => setAddingNewEvent(true)}
              >
                Add new event
              </Button>
            ))}
          {addingNewEvent && (
            <motion.div
              initial={{
                y: '100vh',
                opacity: 0,
              }}
              animate={{
                y: '-10vh',
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
            >
              <Paper
                id="newMeetingForm"
                component="form"
                elevation={3}
                sx={{ padding: 20 }}
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
            </motion.div>
          )}
        </div>
        {firestoreMeetingData &&
          firestoreMeetingData.map((meeting, i) => {
            return (
              <Paper
                elevation={2}
                style={{
                  width: '90%',
                  minHeight: '20vh',
                  minWidth: '500px',
                  padding: '30px',
                  marginLeft: '30px',

                  border: '1px solid#d9d9d9',
                  boxShadow: '10px 10px #d9d9d9',
                  overflowY: 'scroll',
                  overflowX: 'hidden',
                }}
                className="meetupItems"
              >
                <Typography variant="h4">{meeting.title}</Typography>
                <Typography variant="body1" color="text.secondary">
                  <span style={{ fontWeight: 'bold' }}>Location:</span> {meeting.location}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  <span style={{ fontWeight: 'bold' }}>Date:</span> {meeting.date.toDate().toDateString()}
                </Typography>
                <Typography variant="subtitle1">{meeting.description}</Typography>
              </Paper>
            );
          })}
      </motion.div>
    </div>
  );
};

export default Meetup;
