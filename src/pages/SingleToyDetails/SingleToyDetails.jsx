import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToyDetails = () => {
	const loadedData = useLoaderData()
	console.log(loadedData)
	return (
		<div>
			<h2>Single toys Details coming soon</h2>
		</div>
	);
};

export default SingleToyDetails;