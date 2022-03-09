import React from 'react';
// import { useQuery } from '@apollo/client';
// import { QUERY_THOUGHTS } from '../utils/queries';
import Carousel from '../components/Carousel';
import About from '../components/About';
import Contact from '../components/Contact';


const Home = () => {


  return (
<body >
    <div>
      <Carousel />
    </div>
    <div>
      <About /> 
    </div>
    <div>
      <Contact />
    </div>
  
</body>
  );
};

export default Home;
