function Department(sequelize, DataTypes) {

	var Department = sequelize.define('Department', {
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
		tableName: 'Department',
		instanceMethods: {},
		getterMethods: {}
	});

	return Department;
};

module.exports = Department;
