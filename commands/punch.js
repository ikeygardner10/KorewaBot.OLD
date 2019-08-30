module.exports = message => {
	const member = message.mentions.members.first()
	var fs = require('fs');
	var punch = fs.readdirSync("/home/ikey/Documents/GitHub/KorewaBot/images/Punch/")
	if (!member) {
	  return message.reply(
		`who are you trying to punch? You must mention a user.`
	  )
	}
	else if (message.author.id === member.user.id) {
		message.reply(
			`you punched yourself, fucking idiot :joy:`
		)
	}
	else {
		message.reply(`you punched ${member} :smiling_imp:`, {
		file: "/home/ikey/Documents/GitHub/KorewaBot/images/Punch/" + `${punch[(Math.floor(Math.random() * punch.length))]}`});
		return;
  }
}