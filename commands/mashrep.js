module.exports = message => {
	var fs = require('fs');
	var mashrep = fs.readdirSync("/home/ikey/Documents/GitHub/KorewaBot/images/Mashrep/")
	message.channel.send({
		file: "/home/ikey/Documents/GitHub/KorewaBot/images/Mashrep/" + `${mashrep[(Math.floor(Math.random() * mashrep.length))]}`});
	return;
}