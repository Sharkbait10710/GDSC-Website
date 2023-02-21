// Node imports
import * as React from 'react';

// Page imports
import Home from './pages/Home';
import Projects from './pages/Projects';
import Joinus from './pages/Joinus';
import Meetup from './pages/Meetup';
import Education from './pages/Education';
import Profile from './pages/Profile';

//Routing imports
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import Profile from './pages/Profile';

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

let windowSize = getWindowSize();
var bigWidth = windowSize.innerWidth >= 1640;
var mediumWidth = windowSize.innerWidth >= 900 && !bigWidth;
var sizeWidth = bigWidth ? 3 : mediumWidth ? 2 : 1;

var bigHeight = windowSize.innerHeight >= 900;
var mediumHeight = windowSize.innerHeight >= 600 && !bigHeight;
var sizeHeight = bigHeight ? 3 : mediumHeight ? 2 : 1;

const delay = 0.5;

let init = true;
setTimeout(() => (init = false), 2000);

// For more information on routers, read through this tutorial
// https://reactrouter.com/en/main/start/tutorial
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home init={init} sizeWidth={sizeWidth} sizeHeight={sizeHeight} delay={delay} />} />
      <Route path="projects" element={<Projects sizeWidth={sizeWidth} sizeHeight={sizeHeight} />} />
      <Route path="join" element={<Joinus sizeWidth={sizeWidth} sizeHeight={sizeHeight} />} />
      <Route path="education" element={<Education sizeWidth={sizeWidth} sizeHeight={sizeHeight} />} />
      <Route path="meetup" element={<Meetup sizeWidth={sizeWidth} sizeHeight={sizeHeight} />} />
      <Route path="profile" element={<Profile />} />
    </Route>,
  ),
);

function App() {
  return (
    <div id="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
