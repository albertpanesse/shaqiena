import React from 'react';
import {Container} from 'reactstrap';

import {Common as CommonElement, Home as HomeElement} from '../elements';

const Home = function () {
	return (
		<>
			<CommonElement.Header />
			<HomeElement.CarouselImages />
			<Container>
				<HomeElement.Featured />
				<CommonElement.Footer />
			</Container>
		</>
	);
};

export default Home;
