import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {ProductCard} from '@client/components';
import * as actions from '@client/stores/actions';

class Featured extends React.Component {
	state = {}

	componentDidMount() {
		const {getFeatured} = this.props;

		getFeatured();
	}

	render() {
		const {featured} = this.props;

		const featuredList = featured && featured.length > 0 ? featured.map(item => <ProductCard key={item.ID} product={item} />) : [];

		return (
			<div className="card-deck mt-5 mb-4 featured-wrapper">
				{featuredList}
			</div>
		);
	}
}

const mapStoreStateToProps = storeState => ({featured: storeState.productReducer.featured});

const mapDispatchToProps = dispatch => ({getFeatured: () => dispatch(actions.getFeatured())});

Featured.propTypes = {
	featured: PropTypes.array,
	getFeatured: PropTypes.func.isRequired
};

Featured.defaultProps = {featured: []};

export default connect(mapStoreStateToProps, mapDispatchToProps)(Featured);
