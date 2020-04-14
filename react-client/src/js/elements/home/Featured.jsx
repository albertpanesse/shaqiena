import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

class Featured extends React.Component {
	state = {}

	componentDidMount() {
	}

	componentDidUpdate(prevProps, prevState, snapshot) { // eslint-disable-line
	}

	render() {
		return (
			<div className="card-deck mt-5 mb-4 featured-wrapper">
				<Card>
					<CardImg src={`${process.env.REACT_APP_IMAGE_URL}/products/1.jpg`} alt="Product 1" />
					<CardBody>
						<CardTitle>Andriani Hijab</CardTitle>
						<CardText>Some quick example text to build on the card title and make up the bulk of the card content.</CardText>
						<CardSubtitle className="mb-3">Rp. 250.000</CardSubtitle>
						<button className="btn btn-default"><i className="fa fa-plus"></i></button>
					</CardBody>
				</Card>

				<Card>
					<CardImg src={`${process.env.REACT_APP_IMAGE_URL}/products/2.jpg`} alt="Product 2" />
					<CardBody>
						<CardTitle>Shaqiena Niqob</CardTitle>
						<CardText>Some quick example text to build on the card title and make up the bulk of the card content.</CardText>
						<CardSubtitle className="mb-3">Rp. 250.000</CardSubtitle>
						<button className="btn btn-default"><i className="fa fa-plus"></i></button>
					</CardBody>
				</Card>

				<Card>
					<CardImg src={`${process.env.REACT_APP_IMAGE_URL}/products/3.jpg`} alt="Product 3" />
					<CardBody>
						<CardTitle>Shaqiena Boots</CardTitle>
						<CardText>Some quick example text to build on the card title and make up the bulk of the card content.</CardText>
						<CardSubtitle className="mb-3">Rp. 250.000</CardSubtitle>
						<button className="btn btn-default"><i className="fa fa-plus"></i></button>
					</CardBody>
				</Card>
			</div>
		);
	}
}

export default Featured;
