module.exports = message => {
const member = message.mentions.members.first()
	if (!member) {
	  return message.reply(
		`who are you trying to raid? You must mention a user.`
	  )
	}
	else if (message.author.id === member.user.id) {
		message.reply(
			`you swatted yourself... <:NeutralClown:605078235545600026>`, {
				file: "/home/ikey/Documents/GitHub/KorewaBot/images/fbi.gif"
		})
	}
	else {
	message.channel.send(`Currently, at ${member}'s house:`, {
		file: "/home/ikey/Documents/GitHub/KorewaBot/images/fbi.gif"
	});
	}
}