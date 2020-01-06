module.exports = message => {
	var fs = require('fs');
	var ds = fs.readdirSync("/home/ikey/Documents/GitHub/KorewaBot/images/Dodge/Success/");
	var df = fs.readdirSync("/home/ikey/Documents/GitHub/KorewaBot/images/Dodge/Fail/");
	var d = Math.random();

	if (message.author.id == "341086875232108545") {
		message.channel.send(`${message.author} succesfully dodged the attack!`, {
			file: "/home/ikey/Documents/GitHub/KorewaBot/images/Dodge/Success/" + `${ds[(Math.floor(Math.random() * ds.length))]}`});
			return
	}
	else if (d < 0.5) {
		message.channel.send(`${message.author} succesfully dodged the attack!`, {
			file: "/home/ikey/Documents/GitHub/KorewaBot/images/Dodge/Success/" + `${ds[(Math.floor(Math.random() * ds.length))]}`});
			return
	}
	else {
		message.channel.send(`${message.author} failed to dodge the attack :pensive:`, {
			file: "/home/ikey/Documents/GitHub/KorewaBot/images/Dodge/Fail/" + `${df[(Math.floor(Math.random() * df.length))]}`});
			return
	}
}