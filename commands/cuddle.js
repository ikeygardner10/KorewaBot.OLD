module.exports = message => {
	const member = message.mentions.members.first()
	var fs = require('fs');
	var cuddle = fs.readdirSync("/home/ikey/Documents/GitHub/KorewaBot/images/Cuddle/")
	if (!member) {
	  return message.reply(
		`who are you trying to cuddle with? You must mention a user.`
	  )
	}
	else if (message.author.id === member.user.id) {
		message.reply(
			`you can't cuddle with yourself :pensive:`
		)
	}
	else {
		message.reply(`${message.author} & ${member} in a tree, K-I-S... <:UwU:621845274775781379>`, {
		file: "/home/ikey/Documents/GitHub/KorewaBot/images/Cuddle/" + `${cuddle[(Math.floor(Math.random() * cuddle.length))]}`});
		return;
  }
}