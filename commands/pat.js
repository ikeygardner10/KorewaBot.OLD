module.exports = message => {
	const member = message.mentions.members.first()
	var fs = require('fs');
	var pet = fs.readdirSync("/home/ikey/Documents/Git/KorewaBot/images/Pet/")
	if (!member) {
	  return message.reply(
		`who are you trying to pet? You must mention a user.`
	  )
	}
	else if (message.author.id === member.user.id) {
		message.reply(
			`you pat yourself, pathetic idiot. :pensive:`, {
			file: "/home/ikey/Documents/Git/KorewaBot/images/selfpat.gif"
			});
	}
	else {
		message.reply(`you pet ${member}. :relaxed:`, {
		file: "/home/ikey/Documents/Git/KorewaBot/images/Pet/" + `${pet[(Math.floor(Math.random() * pet.length))]}`});
		return;
  }
}