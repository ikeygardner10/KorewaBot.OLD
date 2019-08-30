module.exports = message => {
	var fs = require('fs');
	var monkey = fs.readdirSync("/home/ikey/Documents/GitHub/KorewaBot/images/Monkey/")
	   	message.channel.send({file: "/home/ikey/Documents/GitHub/KorewaBot/images/Monkey/" + `${monkey[(Math.floor(Math.random() * monkey.length))]}`});
		return;
};
