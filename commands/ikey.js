module.exports = message => {
	var fs = require('fs');
	var ikey = fs.readdirSync("/home/ikey/Documents/GitHub/KorewaBot/images/Ikey/")
	message.channel.send('Follow his twitter :pleading_face:\nhttps://twitter.com/_ikey_', {
		file: "/home/ikey/Documents/GitHub/KorewaBot/images/Ikey/" + `${ikey[(Math.floor(Math.random() * ikey.length))]}`});
};