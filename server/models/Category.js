function Category(sequelize, DataTypes) {

	var Category = sequelize.define('Category', {
		ID: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true
		}
	},
	{
		timestamps: true,
		tableName: 'Category',
		instanceMethods: {},
		getterMethods: {}
	});

	Category.associate = (models) => {
		Category.belongsTo(models.Department, {
			foreignKey: 'departmentID', 
			constraints: false
		});
	};

	return Category;
};

module.exports = Category;
