module.exports = message => {
	var fs = require('fs');
	var jontron = fs.readdirSync("/home/ikey/Documents/GitHub/KorewaBot/images/Jontron/")
    message.channel.send({file: "/home/ikey/Documents/GitHub/KorewaBot/images/Jontron/" + `${jontron[(Math.floor(Math.random() * jontron.length))]}`});
	return;
};
