import React from 'react';
import Hero from './HomeComponents/Hero/Hero';
import Header from '../../components/shared/Header/Header';
import Gallery from './HomeComponents/Gallery/Gallery';
import CategoryTabs from './HomeComponents/CategoryTabs/CategoryTabs';
import WhyChooseUs from './HomeComponents/WhyChooseUs/WhyChooseUs';
import OfferSell from './HomeComponents/OfferSell/OfferSell';
import useTitle from '../../hooks/useTitle';

const Home = () => {
	useTitle('Home')
	return (
		<div>
			
			<Hero></Hero>
			<Gallery></Gallery>
			<CategoryTabs></CategoryTabs>
			<OfferSell></OfferSell>
			<WhyChooseUs></WhyChooseUs>
		</div>
	);
};

export default Home;