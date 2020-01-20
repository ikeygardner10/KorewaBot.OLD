module.exports = message => {
	var fs = require('fs');
	var stalin = fs.readdirSync("/home/ikey/Documents/GitHub/KorewaBot/images/Stalin/")
	message.channel.send({
		file: "/home/ikey/Documents/GitHub/KorewaBot/images/Stalin/" + `${stalin[(Math.floor(Math.random() * stalin.length))]}`
	});
}