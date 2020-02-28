module.exports = message => {
	var ChannelID = message.channel.id
	var fs = require('fs');
	var tights = fs.readdirSync("/home/ikey/Documents/Git/KorewaBot/images/Tights/")
	if(!message.channel.nsfw){
     	 message.reply('you must be in a channel marked NSFW to use this command.')
    }
	else {
    	message.channel.send({file: "/home/ikey/Documents/Git/KorewaBot/images/Tights/" + `${tights[(Math.floor(Math.random() * tights.length))]}`});
		return;
    };
};
