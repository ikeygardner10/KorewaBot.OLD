module.exports = message => {
	const member = message.mentions.members.first()
	var fs = require('fs');
	var cbt = fs.readdirSync("/home/ikey/Documents/Git/KorewaBot/images/CBT/")
	if (!member) {
	  return message.reply(
		`who are you trying to CBT? You must mention a user.`
	  )
	}
    else if (member.user.id == "341086875232108545") {
		message.channel.send(`${message.author} got raped by the bot, no one touches ikey. :joy::ok_hand::fire::100:`)
		return;
	}
	else if (message.author.id === member.user.id) {
		message.reply(
			`you can't torture your own cock and balls :flushed:`
		)
	}
	else {
		message.reply(`you tortured ${member}'s cock and balls :flushed: :drooling_face:`, {
		file: "/home/ikey/Documents/Git/KorewaBot/images/CBT/" + `${cbt[(Math.floor(Math.random() * cbt.length))]}`});
		return;
  }
}
