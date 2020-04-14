import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'; // eslint-disable-line
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap';

import * as apis from '../../apis';

class Header extends React.Component {
	state = {
		departments: [],
		isOpen: false // eslint-disable-line
	}

	componentDidMount() {
		apis.getDepartments(departments => this.setState({departments}));
	}

	componentDidUpdate(prevProps, prevState, snapshot) { // eslint-disable-line
	}

	renderDepartments = () => this.state.departments.map(department => <Link key={department.department_id} to={`/department/${department.department_id}`}>{department.name}</Link>)

	toggle = () => {
		this.setState((prevState) => {
			const {isOpen} = {...prevState}; // eslint-disable-line

			return {isOpen: !isOpen}; // eslint-disable-line
		});
	};

	render() {
		const {isOpen} = {...this.state}; // eslint-disable-line

		return (
			<>
				<Navbar color="light" light expand="md">
					<NavbarBrand href="/">
						<img className="mb-2 logo" src={`${process.env.REACT_APP_IMAGE_URL}/logos/1.png`} alt="logo" />
					</NavbarBrand>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<NavLink href="/components/">Clothes</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/components/">Shoes</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/components/">Bags</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/components/">Accesories</NavLink>
						</NavItem>
					</Nav>
				</Navbar>
			</>
		);
	}
}

const mapStoreStateToProps = storeState => ({}); // eslint-disable-line

const mapDispatchToProps = dispatch => ({}); // eslint-disable-line

Header.propTypes = {};

Header.defaultProps = {};

export default connect(mapStoreStateToProps, mapDispatchToProps)(Header);
