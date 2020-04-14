'use strict';

require('dotenv').load();

var moment = require('moment-timezone');

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.bulkInsert('Category', [
			{
				name: 'Hijab',
				description: 'All about hijabs',
				departmentID: 1,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Niqob',
				description: 'All about niqobs',
				departmentID: 1,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Boots',
				description: 'All about boots',
				departmentID: 2,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Heels',
				description: 'All about heels',
				departmentID: 2,
				createdAt: moment().format(),
				updatedAt: moment().format()
			}
		], {});
	},
	
	down: function (queryInterface, Sequelize) {
		  return queryInterface.bulkDelete('Category', null, {});
	}
};
