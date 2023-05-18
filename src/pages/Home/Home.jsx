import React from 'react';
import Hero from './HomeComponents/Hero/Hero';
import Header from '../../components/shared/Header/Header';
import Gallery from './HomeComponents/Gallery/Gallery';
import CategoryTabs from './HomeComponents/CategoryTabs/CategoryTabs';

const Home = () => {
	return (
		<div>
			
			<Hero></Hero>
			<Gallery></Gallery>
			<CategoryTabs></CategoryTabs>
		</div>
	);
};

export default Home;