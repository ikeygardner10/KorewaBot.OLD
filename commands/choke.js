module.exports = message => {
	const member = message.mentions.members.first()
	var fs = require('fs');
	var choke = fs.readdirSync("/home/ikey/Documents/GitHub/KorewaBot/images/Choke/")
	if (!member) {
	  return message.reply(
		`who are you trying to choke? You must mention a user.`
	  )
	}
	else if (member.user.id == "341086875232108545") {
		message.channel.send(`${message.author} got choked by the bot, no one touches ikey. :joy::ok_hand::fire::100:`)
		return;
	}
	else if (message.author.id === member.user.id) {
		message.channel.send(`${member} choked themselves! :open_mouth: They almost killed themselves :weary:`)
		return;
	}
	else {
		message.reply(`you choked ${member}! :drool: :weary:`, {
		file: "/home/ikey/Documents/GitHub/KorewaBot/images/Choke/" + `${choke[(Math.floor(Math.random() * choke.length))]}`});
		return;
	}
}