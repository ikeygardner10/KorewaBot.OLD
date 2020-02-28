module.exports = message => {
	var fs = require('fs');
	var crazimo = fs.readdirSync("/home/ikey/Documents/Git/KorewaBot/images/Crazimo/")
	message.channel.send({
		file: "/home/ikey/Documents/Git/KorewaBot/images/Crazimo/" + `${crazimo[(Math.floor(Math.random() * crazimo.length))]}`
	});
}