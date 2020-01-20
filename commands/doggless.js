module.exports = message => {
	var fs = require('fs');
	var doggless = fs.readdirSync("/home/ikey/Documents/GitHub/KorewaBot/images/Doggless/")
	message.channel.send({
		file: "/home/ikey/Documents/GitHub/KorewaBot/images/Doggless/" + `${doggless[(Math.floor(Math.random() * doggless.length))]}`	
	});
};