module.exports = message => {
	var fs = require('fs');
	var smug = fs.readdirSync("/home/ikey/Documents/GitHub/KorewaBot/images/Smug/")
	message.channel.send({
		file: "/home/ikey/Documents/GitHub/KorewaBot/images/Smug/" + `${smug[(Math.floor(Math.random() * smug.length))]}`
	});
}