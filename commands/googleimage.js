module.exports = message => {
var imageSearch = require('node-google-image-search');
var results = imageSearch('smile', callback, 0, 10);
	function callback(results) {
		message.channel.send(`${results}`)
	};
}