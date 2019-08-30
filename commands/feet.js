module.exports = message => {
	var ChannelID = message.channel.id
	var fs = require('fs');
	var feet = fs.readdirSync("/home/ikey/Documents/GitHub/KorewaBot/images/Feet/")
	if(!message.channel.nsfw){
     	 message.reply('you must be in a channel marked NSFW to use this command.')
    }
	else {
    	message.channel.send({file: "/home/ikey/Documents/GitHub/KorewaBot/images/Feet/" + `${feet[(Math.floor(Math.random() * feet.length))]}`});
		return;
    };
};
