module.exports = message => {
	const member = message.mentions.members.first()
	var fs = require('fs');
	var hug = fs.readdirSync("/home/ikey/Documents/Git/KorewaBot/images/Hug/")
	if (!member) {
	  return message.reply(
		`who are you trying to hug? You must mention a user.`
	  )
	}
	else if (message.author.id === member.user.id) {
		message.reply(
			`you can't hug yourself :pensive:`
		)
	}
	else {
		message.reply(`you gave ${member} a hug :hugging:`, {
		file: "/home/ikey/Documents/Git/KorewaBot/images/Hug/" + `${hug[(Math.floor(Math.random() * hug.length))]}`});
		return;
  }
}