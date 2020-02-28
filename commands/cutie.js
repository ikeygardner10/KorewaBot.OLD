module.exports = message => {
	var ChannelID = message.channel.id
	var fs = require('fs');
	var cutie = fs.readdirSync("/home/ikey/Documents/Git/KorewaBot/images/Cutie/")
	if(!message.channel.nsfw){
     	message.reply('you must be in a channel marked NSFW to use this command.')
    }
	else {
		message.channel.send({file: "/home/ikey/Documents/Git/KorewaBot/images/Cutie/" + `${cutie[(Math.floor(Math.random() * cutie.length))]}`});
			return;
	}
};