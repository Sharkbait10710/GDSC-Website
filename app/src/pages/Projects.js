// Node imports
import { Button, Input, InputLabel, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ReplayIcon from '@mui/icons-material/Replay';
import { motion } from 'framer-motion';
import React from 'react';

// Firestore
import { loadProjects, saveProject } from '../firebase/Firestore';

// CSS
import './styles.css';

const Projects = (props) => {
  const [firestoreProjectData, setFirestoreProjectData] = React.useState([]);
  const [uploadImage, setUploadImage] = React.useState(null);
  const [showAdd, setshowAdd] = React.useState(() => {
    return false;
  });

  React.useEffect(() => {
    const handleKeypresses = (event) => {
      if (event.key === `Escape`) {
        setshowAdd(false);
      }
    };

    document.addEventListener('keydown', handleKeypresses);

    return function cleanupListener() {
      document.removeEventListener('keydown', handleKeypresses);
    };
  });

  const loadProjectData = async () => {
    const projects = await loadProjects();
    console.log('projects loaded', projects);
    setFirestoreProjectData(projects);
  };

  const handleImage = (event) => {
    if (event.target.files) {
      setUploadImage(event.target.files[0]);
    }
  };

  const handleSubmit = async (event) => {
    if (!uploadImage) {
      console.log('no image uploaded.');
      return;
    }

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const project = {
      title: data.get('title'),
      description: data.get('description'),
      projectlink: data.get('publiclink'),
      githublink: data.get('githublink'),
    };
    console.log(project);
    await saveProject(project.title, project.description, project.githublink, uploadImage, project.publiclink);
    setshowAdd(false);
    await loadProjectData();
    console.log('project successfully uploaded!');
  };

  //Load the projects from firestore
  React.useEffect(() => {
    loadProjectData();
  }, []);

  return (
    <>
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
          height: '90%',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '75%',
            overflowY: 'scroll',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '5px',
              backgroundColor: 'gray',

              marginLeft: '10px',
              marginTop: '3%',
              opacity: '0.6',
            }}
          />
          {firestoreProjectData.map((project, i) => {
            return (
              <div
                key={i}
                style={{
                  width: '100%',
                  height: '20vh',
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginLeft: '10px',
                  paddingBottom: '20px',
                  alignItems: 'center',
                  borderBottom: '5.7px solid rgba(128, 128, 128, .6)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '60%',
                    height: '100%',

                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Google Sans',
                      fontSize: '30px',

                      paddingLeft: '10px',
                      paddingTop: '20px',

                      opacity: 1,
                    }}
                  >
                    <a
                      className="Hover"
                      style={{ color: '#1a73e8' }}
                      target="_blank"
                      rel="noreferrer"
                      href={project.githubLink}
                    >
                      {project.title}
                    </a>
                  </div>
                  <div
                    style={{
                      width: '90%',
                      fontFamily: 'Google Sans',
                      fontSize: '25px',

                      paddingLeft: '10px',
                    }}
                    className="scrolling"
                  >
                    {project.description}
                  </div>
                </div>
                <div
                  style={{
                    width: '100px',
                    height: '100px',

                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                    marginRight: '50px',
                  }}
                >
                  <img src={project.imageUrl} alt="project" height="100%" />
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      <button
        onClick={() => setshowAdd(true)}
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '4%',
          width: '74px',
          height: '74px',
          borderRadius: '37px',

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#e84438',

          boxShadow: '2px 2px #d9d9d9',
        }}
        className="hovering"
      >
        <AddIcon style={{ color: 'white', fontSize: '60px' }} />
      </button>
      <button
        onClick={() => {
          loadProjectData();
          setshowAdd(false);
        }}
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '4%',
          width: '74px',
          height: '74px',
          borderRadius: '37px',

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#e84438',

          boxShadow: '2px 2px #d9d9d9',
        }}
        className="hovering"
      >
        <ReplayIcon style={{ color: 'white', fontSize: '60px' }} />
      </button>
      {showAdd && (
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
            duration: 0.5,
          }}
          style={{
            position: 'absolute',
            width: '70vw',
            height: '70vh',

            border: '1px solid',
            borderRadius: '10px',
            top: '20vh',

            backgroundColor: 'white',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Project Title"
              name="title"
              InputProps={{ style: { fontSize: 40 } }}
              InputLabelProps={{ style: { fontSize: 40 } }}
              sx={{
                width: '80%',
              }}
            />
            <TextField
              margin="normal"
              required
              multiline
              rows={4}
              id="description"
              label="Project Description"
              name="description"
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              sx={{
                width: '80%',
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="githublink"
              label="Github Link"
              name="githublink"
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              sx={{
                width: '80%',
              }}
            />
            <TextField
              margin="normal"
              fullWidth
              id="publiclink"
              label="Public Project Link"
              name="publiclink"
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              sx={{
                width: '80%',
              }}
            />
            <div
              style={{
                width: '80%',
                position: 'flex',
                flexDirection: 'column',
              }}
            >
              <InputLabel htmlFor="image" style={{ fontSize: '20px' }}>
                Project Icon
              </InputLabel>
              <Input
                type="file"
                id="image"
                onChange={handleImage}
                placeholder="Upload image of the project"
                sx={{
                  fontSize: '20px',
                }}
              />
            </div>
            <div
              style={{
                marginTop: '20px',
                width: '80%',
              }}
            >
              <Button
                type="submit"
                variant="contained"
                sx={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#1a73e8',
                }}
              >
                <FileUploadIcon />
              </Button>
            </div>
          </form>
        </motion.div>
      )}
    </>
  );
};

export default Projects;
