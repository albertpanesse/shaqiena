import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import * as actions from '@client/stores/actions';

class CategoryList extends React.Component {
	state = {categories: []}
	
	componentDidMount() {
	}

	componentDidUpdate(prevProps, prevState, snapshot) { // eslint-disable-line
		if (prevProps.departmentId !== this.props.departmentId) {
			actions.getCategories(this.props.departmentId);
		}
	}

	renderCategories = () => this.state.categories.map(category => <div key={category.category_id} className="item"><Link to={`/category/${category.category_id}`}>{category.name}</Link></div>)

	render() {
		return (
			<div className="items">
				{this.renderCategories()}
			</div>
		);
	}
}

const mapStoreStateToProps = storeState => ({}); // eslint-disable-line

const mapDispatchToProps = dispatch => ({}); // eslint-disable-line

CategoryList.propTypes = {departmentId: PropTypes.number.isRequired};

CategoryList.defaultProps = {};

export default connect(mapStoreStateToProps, mapDispatchToProps)(CategoryList);
