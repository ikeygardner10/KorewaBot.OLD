module.exports = message => {
	var fs = require('fs');
	var crazimo = fs.readdirSync("/home/ikey/Documents/GitHub/KorewaBot/images/Crazimo/")
	message.channel.send({
		file: "/home/ikey/Documents/GitHub/KorewaBot/images/Crazimo/" + `${crazimo[(Math.floor(Math.random() * crazimo.length))]}`
	});
}