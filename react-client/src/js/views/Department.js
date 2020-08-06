import React from 'react';
import PropTypes from 'prop-types';

import {Common as CommonElement, Department as DepartmentElement} from '../elements';

const Department = function (props) {
	const {match} = props;
	
	return (
		<React.Fragment>
			<CommonElement.Header />
			<div className="category-list">
				<DepartmentElement.CategoryList departmentId={match.params.id} />
			</div>
			<div className="row">
				<DepartmentElement.Sidebar />
				<DepartmentElement.ProductList />
			</div>
			<CommonElement.Footer />
		</React.Fragment>
	);
};

Department.propTypes = {match: PropTypes.object.isRequired};

export default Department;
