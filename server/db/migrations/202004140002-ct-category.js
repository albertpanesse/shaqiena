'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable(
			'Category',
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
        departmentID: {
          type: Sequelize.BIGINT,
          allowNull: true,
          references: {
            model: 'Department',
            key: 'ID'
          }
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
		return queryInterface.dropTable('Category');
	}
};
