module.exports = message => {
	var fs = require('fs');
	var meme = fs.readdirSync("/home/ikey/Documents/GitHub/KorewaBot/videos/Vmeme/")
    if (message.author.id == '341086875232108545') {
	    message.channel.send({file: "/home/ikey/Documents/GitHub/KorewaBot/videos/Vmeme/" + `${meme[(Math.floor(Math.random() * meme.length))]}`});
		return;
    }
	else {
		message.reply(`owner command only.`)
	}
};
