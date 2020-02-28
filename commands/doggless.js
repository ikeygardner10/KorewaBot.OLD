module.exports = message => {
	var fs = require('fs');
	var doggless = fs.readdirSync("/home/ikey/Documents/Git/KorewaBot/images/Doggless/")
	message.channel.send({
		file: "/home/ikey/Documents/Git/KorewaBot/images/Doggless/" + `${doggless[(Math.floor(Math.random() * doggless.length))]}`	
	});
};