import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Layout/Footer';
import Navbar from '../components/Layout/Navbar';

const Layout = () => {
  const [windowSize, setWindowSize] = React.useState(getWindowSize());
  const [init, setInit] = React.useState(true);

  React.useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    setTimeout(() => setInit(false), 2000);

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  var bigWidth = windowSize.innerWidth >= 1640;
  var mediumWidth = windowSize.innerWidth >= 900 && !bigWidth;
  var sizeWidth = bigWidth ? 3 : mediumWidth ? 2 : 1;

  var bigHeight = windowSize.innerHeight >= 900;
  var mediumHeight = windowSize.innerHeight >= 600 && !bigHeight;
  var sizeHeight = bigHeight ? 3 : mediumHeight ? 2 : 1;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <Navbar sizeWidth={sizeWidth} sizeHeight={sizeHeight} init={init} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
