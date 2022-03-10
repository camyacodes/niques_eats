import React from "react";
// import { useQuery } from '@apollo/client';
// import { QUERY_THOUGHTS } from '../utils/queries';
import Hero from "../components/Hero";
// import heroBanner from "../components/heroBanner";
import About from "../components/About";
import Contact from "../components/Contact";

const Home = () => {
	return (
		<body>
			<div>
				<Hero />
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
