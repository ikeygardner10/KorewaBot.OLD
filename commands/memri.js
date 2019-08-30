module.exports = message => {
	var fs = require('fs');
	var memri = fs.readdirSync("/home/ikey/Documents/GitHub/KorewaBot/images/Memri/")
	message.channel.send({file: "/home/ikey/Documents/GitHub/KorewaBot/images/Memri/" + `${memri[(Math.floor(Math.random() * memri.length))]}`});
		return;
}