module.exports = message => {
	var ChannelID = message.channel.id
	var fs = require('fs');
	var cutie = fs.readdirSync("/home/ikey/Documents/GitHub/KorewaBot/images/Cutie/")
  	message.channel.send({file: "/home/ikey/Documents/GitHub/KorewaBot/images/Cutie/" + `${cutie[(Math.floor(Math.random() * cutie.length))]}`});
		return;
};