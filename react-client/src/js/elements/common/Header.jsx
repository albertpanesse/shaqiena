import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'; // eslint-disable-line

import * as apis from '../../apis';

class Header extends React.Component {
	state = {departments: []}

	componentDidMount() {
		apis.getDepartments(departments => this.setState({departments}));
	}

	componentDidUpdate(prevProps, prevState, snapshot) { // eslint-disable-line
	}

	renderDepartments = () => this.state.departments.map(department => <Link key={department.department_id} to={`/department/${department.department_id}`}>{department.name}</Link>)

	render() {
		return (
			<div className="d-flex flex-column flex-md-row align-items-center p-1 px-md-4 bg-white border-bottom shadow-sm tshop ts-header">
				<h5 className="my-0 mr-md-auto font-weight-normal ts-title">Shaqiena</h5>
				<nav className="my-2 my-md-0 mr-md-3">
					{this.renderDepartments()}
				</nav>

				<Link to="/cart" className="btn"><i className="fas fa-shopping-bag" /></Link>
			</div>
		);
	}
}

const mapStoreStateToProps = storeState => ({}); // eslint-disable-line

const mapDispatchToProps = dispatch => ({}); // eslint-disable-line

Header.propTypes = {};

Header.defaultProps = {};

export default connect(mapStoreStateToProps, mapDispatchToProps)(Header);
