module.exports = message => {
	var fs = require('fs');
	var hotdog = fs.readdirSync("/home/ikey/Documents/GitHub/KorewaBot/images/Hotdog/")
	message.channel.send({file: "/home/ikey/Documents/GitHub/KorewaBot/images/Hotdog/" + `${hotdog[(Math.floor(Math.random() * hotdog.length))]}`});
		return;
};
