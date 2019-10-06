module.exports = message => {
	var fs = require('fs');
	var sleepy = fs.readdirSync("/home/ikey/Documents/GitHub/KorewaBot/images/Sleepy/")
	message.channel.send({
		file: "/home/ikey/Documents/GitHub/KorewaBot/images/Sleepy/" + `${sleepy[(Math.floor(Math.random() * sleepy.length))]}`
	});
}