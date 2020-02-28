module.exports = message => {
	var fs = require('fs');
	var waifu = fs.readdirSync("/home/ikey/Documents/Git/KorewaBot/images/Waifu/")
	message.channel.send({file: "/home/ikey/Documents/Git/KorewaBot/images/Waifu/" + `${waifu[(Math.floor(Math.random() * waifu.length))]}`});
		return;
}