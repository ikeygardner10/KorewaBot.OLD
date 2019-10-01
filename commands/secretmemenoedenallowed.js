module.exports = message => {
	var fs = require('fs');
	var meme = fs.readdirSync("/home/ikey/Documents/GitHub/KorewaBot/videos/Vmeme/")
	if(message.guild.id === "528094881177010176") {
		message.reply(`Eden doesn't like this cmd so no one gets to enjoy it :neutral_face:`)
		return;
	}
	message.channel.send({file: "/home/ikey/Documents/GitHub/KorewaBot/videos/Vmeme/" + `${meme[(Math.floor(Math.random() * meme.length))]}`});
		return;
};