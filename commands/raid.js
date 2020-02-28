module.exports = message => {
const member = message.mentions.members.first()
var fs = require('fs');
var raid = fs.readdirSync("/home/ikey/Documents/Git/KorewaBot/images/Raid/")
	if (!member) {
	  return message.reply(
		`who are you trying to raid? You must mention a user.`
	  )
	}
	else if (message.author.id === member.user.id) {
		message.reply(
			`you swatted yourself... <:NeutralClown:605078235545600026>`, {
				file: "/home/ikey/Documents/Git/KorewaBot/images/selfraid.gif"
		})
	}
	else {
	message.channel.send(`Currently, at ${member}'s house:`, {
		file: "/home/ikey/Documents/Git/KorewaBot/images/Raid/" + `${raid[(Math.floor(Math.random() * raid.length))]}`});
	}
}