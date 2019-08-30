module.exports = message => {
	var fs = require('fs');
	var baby = fs.readdirSync("/home/ikey/Documents/GitHub/KorewaBot/images/Baby/")
	message.channel.send({file: "/home/ikey/Documents/GitHub/KorewaBot/images/Baby/" + `${baby[(Math.floor(Math.random() * baby.length))]}`});
		return;
}