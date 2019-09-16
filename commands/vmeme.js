module.exports = message => {
	var fs = require('fs');
	var meme = fs.readdirSync("/home/ikey/Documents/GitHub/KorewaBot/videos/Vmeme/")
	message.channel.send({file: "/home/ikey/Documents/GitHub/KorewaBot/videos/Vmeme/" + `${meme[(Math.floor(Math.random() * meme.length))]}`});
		return;
};