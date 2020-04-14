function Product(sequelize, DataTypes) {

	var Product = sequelize.define('Product', {
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
			type: DataTypes.TEXT,
			allowNull: true
		},
		price: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: 0
		},
		discPrice: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: 0
		},
		image: {
			type: DataTypes.STRING,
			allowNull: true
		},
		display: {
			type: DataTypes.SMALLINT,
			allowNull: false,
			defaultValue: 0
		}
	},
	{
		timestamps: true,
		tableName: 'Product',
		instanceMethods: {},
		getterMethods: {}
	});

	Product.associate = (models) => {
		Product.belongsTo(models.Category, {
			constraints: false,
			foreignKey: 'categoryID'
		});
	};

	return Product;
};

module.exports = Product;
