module.exports = message => {
	const member = message.mentions.members.first()
	var fs = require('fs');
	var slap = fs.readdirSync("/home/ikey/Documents/Git/KorewaBot/images/Slap/")
	if (!member) {
	  return message.reply(
		`who are you trying to slap? You must mention a user.`
	  )
	}
	else if (message.author.id === member.user.id) {
		message.reply(`you can't slap yourself silly :pensive:`)
		return;
	}
	else {
		message.reply(`you slapped ${member} :hand_splayed: :smiling_imp:`, {
		file: "/home/ikey/Documents/Git/KorewaBot/images/Slap/" + `${slap[(Math.floor(Math.random() * slap.length))]}`});
		return;
  }
}