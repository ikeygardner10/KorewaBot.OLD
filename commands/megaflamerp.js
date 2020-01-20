module.exports = message => {
	var fs = require('fs');
	var mega = fs.readdirSync("/home/ikey/Documents/GitHub/KorewaBot/images/MegaFlame/")
		message.channel.send({
		file: "/home/ikey/Documents/GitHub/KorewaBot/images/MegaFlame/" + `${mega[(Math.floor(Math.random() * mega.length))]}`
		});
}