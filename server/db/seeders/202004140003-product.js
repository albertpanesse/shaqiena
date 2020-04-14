'use strict';

require('dotenv').load();

var moment = require('moment-timezone');

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.bulkInsert('Product', [
			{
				name: 'Andriani Hijab',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus cursus libero, eu hendrerit massa maximus eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus metus ipsum, dignissim vel mattis rutrum, gravida id nunc. Nam sit amet aliquet turpis. Curabitur tristique iaculis velit, vel aliquet diam consequat non. Phasellus id volutpat enim, et semper risus. Phasellus accumsan massa et velit interdum vulputate at et lorem. In sit amet nulla at nisl suscipit malesuada ut eu metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin vitae porta ipsum, eget rhoncus nisl. Nullam iaculis luctus turpis sed posuere. Aliquam efficitur elit ex, vel placerat elit dictum eget. Donec gravida ex eu tellus euismod vulputate. Vivamus auctor tellus at auctor tempus.\nDonec venenatis egestas pulvinar. Donec quis scelerisque sapien. Nam tempor, augue nec vestibulum mattis, massa enim cursus eros, nec auctor nulla turpis in massa. Sed tempor accumsan nulla, non pretium augue dictum ut. Ut interdum tellus et condimentum accumsan. Ut sit amet purus eu sapien lacinia venenatis sit amet gravida dui. Vestibulum libero quam, pellentesque sit amet dolor eget, volutpat pellentesque dolor. Praesent ultricies dui at leo tincidunt aliquam. Ut porta, arcu at venenatis tincidunt, ipsum elit finibus sem, ut posuere enim neque et erat. Nullam imperdiet, ipsum vel tempus sollicitudin, ligula ex scelerisque purus, sed placerat nisi tellus non odio. Praesent non ex quis ipsum sodales finibus. Quisque laoreet erat id tempus ultricies.',
				price: 350000,
				discPrice: 300000,
				image: '1.jpg',
				categoryID: 1,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Niqob Shaqiena',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus cursus libero, eu hendrerit massa maximus eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus metus ipsum, dignissim vel mattis rutrum, gravida id nunc. Nam sit amet aliquet turpis. Curabitur tristique iaculis velit, vel aliquet diam consequat non. Phasellus id volutpat enim, et semper risus. Phasellus accumsan massa et velit interdum vulputate at et lorem. In sit amet nulla at nisl suscipit malesuada ut eu metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin vitae porta ipsum, eget rhoncus nisl. Nullam iaculis luctus turpis sed posuere. Aliquam efficitur elit ex, vel placerat elit dictum eget. Donec gravida ex eu tellus euismod vulputate. Vivamus auctor tellus at auctor tempus.\nDonec venenatis egestas pulvinar. Donec quis scelerisque sapien. Nam tempor, augue nec vestibulum mattis, massa enim cursus eros, nec auctor nulla turpis in massa. Sed tempor accumsan nulla, non pretium augue dictum ut. Ut interdum tellus et condimentum accumsan. Ut sit amet purus eu sapien lacinia venenatis sit amet gravida dui. Vestibulum libero quam, pellentesque sit amet dolor eget, volutpat pellentesque dolor. Praesent ultricies dui at leo tincidunt aliquam. Ut porta, arcu at venenatis tincidunt, ipsum elit finibus sem, ut posuere enim neque et erat. Nullam imperdiet, ipsum vel tempus sollicitudin, ligula ex scelerisque purus, sed placerat nisi tellus non odio. Praesent non ex quis ipsum sodales finibus. Quisque laoreet erat id tempus ultricies.',
				price: 250000,
				discPrice: 200000,
				image: '2.jpg',
				categoryID: 2,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Boots Shaqiena',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus cursus libero, eu hendrerit massa maximus eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus metus ipsum, dignissim vel mattis rutrum, gravida id nunc. Nam sit amet aliquet turpis. Curabitur tristique iaculis velit, vel aliquet diam consequat non. Phasellus id volutpat enim, et semper risus. Phasellus accumsan massa et velit interdum vulputate at et lorem. In sit amet nulla at nisl suscipit malesuada ut eu metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin vitae porta ipsum, eget rhoncus nisl. Nullam iaculis luctus turpis sed posuere. Aliquam efficitur elit ex, vel placerat elit dictum eget. Donec gravida ex eu tellus euismod vulputate. Vivamus auctor tellus at auctor tempus.\nDonec venenatis egestas pulvinar. Donec quis scelerisque sapien. Nam tempor, augue nec vestibulum mattis, massa enim cursus eros, nec auctor nulla turpis in massa. Sed tempor accumsan nulla, non pretium augue dictum ut. Ut interdum tellus et condimentum accumsan. Ut sit amet purus eu sapien lacinia venenatis sit amet gravida dui. Vestibulum libero quam, pellentesque sit amet dolor eget, volutpat pellentesque dolor. Praesent ultricies dui at leo tincidunt aliquam. Ut porta, arcu at venenatis tincidunt, ipsum elit finibus sem, ut posuere enim neque et erat. Nullam imperdiet, ipsum vel tempus sollicitudin, ligula ex scelerisque purus, sed placerat nisi tellus non odio. Praesent non ex quis ipsum sodales finibus. Quisque laoreet erat id tempus ultricies.',
				price: 450000,
				discPrice: 400000,
				image: '3.jpg',
				categoryID: 3,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Heels Shaqiena',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus cursus libero, eu hendrerit massa maximus eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus metus ipsum, dignissim vel mattis rutrum, gravida id nunc. Nam sit amet aliquet turpis. Curabitur tristique iaculis velit, vel aliquet diam consequat non. Phasellus id volutpat enim, et semper risus. Phasellus accumsan massa et velit interdum vulputate at et lorem. In sit amet nulla at nisl suscipit malesuada ut eu metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin vitae porta ipsum, eget rhoncus nisl. Nullam iaculis luctus turpis sed posuere. Aliquam efficitur elit ex, vel placerat elit dictum eget. Donec gravida ex eu tellus euismod vulputate. Vivamus auctor tellus at auctor tempus.\nDonec venenatis egestas pulvinar. Donec quis scelerisque sapien. Nam tempor, augue nec vestibulum mattis, massa enim cursus eros, nec auctor nulla turpis in massa. Sed tempor accumsan nulla, non pretium augue dictum ut. Ut interdum tellus et condimentum accumsan. Ut sit amet purus eu sapien lacinia venenatis sit amet gravida dui. Vestibulum libero quam, pellentesque sit amet dolor eget, volutpat pellentesque dolor. Praesent ultricies dui at leo tincidunt aliquam. Ut porta, arcu at venenatis tincidunt, ipsum elit finibus sem, ut posuere enim neque et erat. Nullam imperdiet, ipsum vel tempus sollicitudin, ligula ex scelerisque purus, sed placerat nisi tellus non odio. Praesent non ex quis ipsum sodales finibus. Quisque laoreet erat id tempus ultricies.',
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
