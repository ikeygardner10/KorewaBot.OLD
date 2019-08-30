module.exports = message => {
	var fs = require('fs');
	var cursed = fs.readdirSync("/home/ikey/Documents/GitHub/KorewaBot/images/Cursed/")
    message.channel.send({file: "/home/ikey/Documents/GitHub/KorewaBot/images/Cursed/" + `${cursed[(Math.floor(Math.random() * cursed.length))]}`});
		return;
};
