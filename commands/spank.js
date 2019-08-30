module.exports = message => {
	const member = message.mentions.members.first()
	var fs = require('fs');
	var spank = fs.readdirSync("/home/ikey/Documents/GitHub/KorewaBot/images/Spank/")
	if (!member) {
	  return message.reply(
		`who are you trying to spank? You must mention a user.`
	  )
	}
	else if (message.author.id === member.user.id) {
		message.reply(`you tried to spank yourself, you loner :joy:`, {
		file: "/home/ikey/Documents/GitHub/KorewaBot/images/spankself.jpg"
		});
	}
	else {
		message.reply(`you spanked ${member} :wave: :weary:`, {
		file: "/home/ikey/Documents/GitHub/KorewaBot/images/Spank/" + `${spank[(Math.floor(Math.random() * spank.length))]}`});
		return;
  }
}