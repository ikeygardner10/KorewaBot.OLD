module.exports = message => {
	const member = message.mentions.members.first()
	var fs = require('fs');
	var stab = fs.readdirSync("/home/ikey/Documents/GitHub/KorewaBot/images/Stab/")
	if (!member) {
	  return message.reply(
		`who are you trying to stab? You must mention a user.`
	  )
	}
	else if (message.author.id === member.user.id) {
		message.reply(`you stabbed yourself, you fucking idiot :joy:`, {
		file: "/home/ikey/Documents/GitHub/KorewaBot/images/selfstab.gif"
		});
	}
	else {
		message.reply(`you stabbed ${member} :knife: :smiling_imp:`, {
		file: "/home/ikey/Documents/GitHub/KorewaBot/images/Stab/" + `${stab[(Math.floor(Math.random() * stab.length))]}`});
		return;
  }
}