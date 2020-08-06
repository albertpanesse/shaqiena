'use strict';

require('dotenv').load();

var moment = require('moment-timezone');

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.bulkInsert('Product', [
			{
				name: 'Andriani Hijab',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus cursus libero, eu hendrerit massa maximus eu.',
				price: 350000,
				discPrice: 300000,
				image: '1.jpg',
				categoryID: 1,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Niqob Shaqiena',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus cursus libero, eu hendrerit massa maximus eu.',
				price: 250000,
				discPrice: 200000,
				image: '2.jpg',
				categoryID: 2,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Boots Shaqiena',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus cursus libero, eu hendrerit massa maximus eu.',
				price: 450000,
				discPrice: 400000,
				image: '3.jpg',
				categoryID: 3,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Heels Shaqiena',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus cursus libero, eu hendrerit massa maximus eu.',
				price: 200000,
				discPrice: 150000,
				image: '4.jpg',
				categoryID: 4,
				createdAt: moment().format(),
				updatedAt: moment().format()
			}
		], {});
	},
	
	down: function (queryInterface, Sequelize) {
		  return queryInterface.bulkDelete('Product', null, {});
	}
};
