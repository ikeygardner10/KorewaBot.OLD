module.exports = message => {
	var fs = require('fs');
	var konata = fs.readdirSync("/home/ikey/Documents/GitHub/KorewaBot/images/Konata/")
    message.channel.send({file: "/home/ikey/Documents/GitHub/KorewaBot/images/Konata/" + `${konata[(Math.floor(Math.random() * konata.length))]}`});
		return;
};
