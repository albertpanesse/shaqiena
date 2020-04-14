'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable(
			'Department',
			{
				ID: {
					type: Sequelize.INTEGER,
					primaryKey: true,
					allowNull: false,
					autoIncrement: true
				},
				name: {
				  type: Sequelize.STRING,
				  allowNull: false
				},
				description: {
				  type: Sequelize.STRING,
				  allowNull: true
				},
				createdAt: {
					type: Sequelize.DATE
				},
				updatedAt: {
					type: Sequelize.DATE
				}
			}
		)
	},
	
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Department');
	}
};
