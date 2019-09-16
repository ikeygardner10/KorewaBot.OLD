module.exports = message => {
	var fs = require('fs');
	var meme = fs.readdirSync("/home/ikey/Documents/GitHub/KorewaBot/images/Meme/")
	message.channel.send({file: "/home/ikey/Documents/GitHub/KorewaBot/images/Meme/" + `${meme[(Math.floor(Math.random() * meme.length))]}`});
		return;
};
