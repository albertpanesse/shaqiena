import React from 'react';
import PropTypes from 'prop-types';
import {Button, Card, CardBody, CardImg, CardText, CardTitle, CardSubtitle} from 'reactstrap';

const ProductCard = function (props) {
	const {product} = props;

	return (
		<Card>
			<CardImg src={`${process.env.IMAGE_URL}/products/${product.image}`} alt={product.name} />
			<CardBody>
				<CardTitle>{product.name}</CardTitle>
				<CardText>{product.description}</CardText>
				<CardSubtitle className="mb-3">{product.discPrice}<span>{product.price}</span></CardSubtitle>
				<Button className="btn btn-default"><i className="fa fa-plus" /></Button>
			</CardBody>
		</Card>
	);
};

ProductCard.propTypes = {product: PropTypes.object.isRequired};

export default ProductCard;
