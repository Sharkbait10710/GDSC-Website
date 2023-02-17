// Node imports
import { Box, Button, Input, InputLabel, TextField } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

// Firestore
import { loadProjects, saveProject } from '../firebase/Firestore';

// CSS
import './styles.css';

const Projects = (props) => {
  const [firestoreProjectData, setFirestoreProjectData] = React.useState([]);
  const [uploadImage, setUploadImage] = React.useState(null);
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
        {firestoreProjectData.map((project, i) => {
          return (
            <div
              style={{
                width: '100%',
                height: '30%',
                display: 'flex',
                flexDirection: 'column',
                borderBottom: '5.7px solid rgba(128, 128, 128, .6)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',

                  height: '100%',
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
            </div>
          );
        })}
      </motion.div>
      <Button onClick={loadProjectData}>Reload Projects</Button>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField margin="normal" required fullWidth id="title" label="Project Title" name="title" />
        <TextField margin="normal" required fullWidth id="description" label="Project Description" name="description" />
        <TextField margin="normal" required fullWidth id="githublink" label="Github Link" name="githublink" />
        <TextField margin="normal" fullWidth id="publiclink" label="Public Project Link" name="publiclink" />
        <InputLabel htmlFor="image">Select Image for Project</InputLabel>
        <Input type="file" id="image" onChange={handleImage} placeholder="Upload image of the project" />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Upload Project to Firestore
        </Button>
      </Box>
    </>
  );
};

export default Projects;
