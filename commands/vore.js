module.exports = message => {
	const member = message.mentions.members.first()
	var fs = require('fs');
	var vore = fs.readdirSync("/home/ikey/Documents/Git/KorewaBot/images/Vore/")
	if (!member) {
	  return message.reply(
		`who are you trying to vore? You must mention a user.`
	  )
	}
	else if (message.author.id === member.user.id) {
		message.reply(
			`you can't vore yourself :pensive:`
		)
	}
	else {
		message.reply(`you vored ${member}! Yummy yummy in your tummy :yum:`, {
		file: "/home/ikey/Documents/Git/KorewaBot/images/Vore/" + `${vore[(Math.floor(Math.random() * vore.length))]}`});
	}
}