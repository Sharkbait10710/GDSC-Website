import * as React from 'react';
import homeData from '../data/home.json';
import Carousel from '../components/Carousel/Carousel';

const Home = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        top: '10%',
        height: '80vh',
        width: '80%',
      }}
    >
      <Carousel
        init={props.init}
        delaytoShow={props.delay}
        data={homeData}
        sizeWidth={props.sizeWidth}
        sizeHeight={props.sizeHeight}
      />
    </div>
  );
};

export default Home;
