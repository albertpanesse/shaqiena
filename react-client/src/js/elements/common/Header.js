import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Nav, Navbar, NavbarBrand, NavItem} from 'reactstrap';

import * as actions from '@client/stores/actions';

class Header extends React.Component {
	state = {}

	componentDidMount() {
		const {getDepartments} = this.props;

		getDepartments();
	}

	render() {
		const {departments} = this.props;

		const departmentLinks = departments.map(department => <NavItem key={department.ID}><Link to={`/department/${department.ID}`}>{department.name}</Link></NavItem>);

		return (
			<>
				<Navbar color="light" light expand="md">
					<NavbarBrand href="/">
						<img className="mb-2 logo" src={`${process.env.IMAGE_URL}/logos/1.png`} alt="logo" />
					</NavbarBrand>
					<Nav className="mr-auto" navbar>{departmentLinks}</Nav>
				</Navbar>
			</>
		);
	}
}

const mapStoreStateToProps = storeState => ({departments: storeState.departmentReducer.departments});

const mapDispatchToProps = dispatch => ({getDepartments: () => dispatch(actions.getDepartments())});

Header.propTypes = {
	departments: PropTypes.array,
	getDepartments: PropTypes.func.isRequired
};

Header.defaultProps = {departments: []};

export default connect(mapStoreStateToProps, mapDispatchToProps)(Header);
