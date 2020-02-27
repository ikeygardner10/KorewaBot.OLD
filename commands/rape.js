module.exports = message => {
	const member = message.mentions.members.first()
	var fs = require('fs');
	var rape = fs.readdirSync("/home/ikey/Documents/GitHub/KorewaBot/images/Rape/")
		if (!member) {
	  return message.reply(
		`who are you trying to rape? You must mention a user.`
	  )
	}
	else if (member.user.id == "341086875232108545") {
		message.channel.send(`${message.author} got raped by the bot, no one touches ikey. :joy::ok_hand::fire::100:`)
		return;
	}
	else if (message.author.id === member.user.id) {
		message.channel.send(`${member} raped themselves! :open_mouth: Don't ask me how that works :confused:`)
		return;
	}
	else {
		message.reply(`you raped ${member}! :drool: :smiling_imp:`, {
		file: "/home/ikey/Documents/GitHub/KorewaBot/images/Rape/" + `${rape[(Math.floor(Math.random() * rape.length))]}`});
		return;
	}
}
