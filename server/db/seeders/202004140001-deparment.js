'use strict';

require('dotenv').load();

var moment = require('moment-timezone');

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.bulkInsert('Department', [
			{
				name: 'Clothes',
				description: 'All about clothes',
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Shoes',
				description: 'All about shoes',
				createdAt: moment().format(),
				updatedAt: moment().format()
			}
		], {});
	},
	
	down: function (queryInterface, Sequelize) {
		  return queryInterface.bulkDelete('Department', null, {});
	}
};
