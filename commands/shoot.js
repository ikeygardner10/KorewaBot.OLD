module.exports = message => {
	const member = message.mentions.members.first()
	var fs = require('fs');
	var shoot = fs.readdirSync("/home/ikey/Documents/Git/KorewaBot/images/Shoot/")
	if (!member) {
	  return message.reply(
		`who are you trying to shoot? You must mention a user.`
	  )
	}
	else if (message.author.id === member.user.id) {
		message.reply(`you tried to shoot yourself, you miserable idiot :joy:`, {
		file: "/home/ikey/Documents/Git/KorewaBot/images/selfshoot.gif"
		});
	}
	else {
		message.reply(`you shot ${member} :gun: :smiling_imp:`, {
		file: "/home/ikey/Documents/Git/KorewaBot/images/Shoot/" + `${shoot[(Math.floor(Math.random() * shoot.length))]}`});
		return;
  }
}