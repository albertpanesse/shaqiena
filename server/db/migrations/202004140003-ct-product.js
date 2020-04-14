'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable(
			'Product',
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
  	      type: Sequelize.TEXT,
          allowNull: true
        },
        price: {
          type: Sequelize.FLOAT,
          allowNull: false,
          defaultValue: 0
        },
        discPrice: {
          type: Sequelize.FLOAT,
          allowNull: false,
          defaultValue: 0
        },
        image: {
          type: Sequelize.STRING,
          allowNull: true
        },
        display: {
          type: Sequelize.SMALLINT,
          allowNull: false,
          defaultValue: 0
        },
        categoryID: {
          type: Sequelize.BIGINT,
          allowNull: true,
          references: {
            model: 'Category',
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
		return queryInterface.dropTable('Product');
	}
};
