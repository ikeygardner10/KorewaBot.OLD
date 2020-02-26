module.exports = message => {
	const member = message.mentions.members.first()
	var fs = require('fs');
	var hf = fs.readdirSync("/home/ikey/Documents/GitHub/KorewaBot/images/Highfive/")
	
	if (!member) {
	return message.reply(
		`who are you trying to high five? You must mention a user.`
	  )
	}
	else if (message.author.id === member.user.id) {
		message.reply(
			`you high fived yourself, loner :pensive:`, {
			file: "/home/ikey/Documents/GitHub/KorewaBot/images/selfhf.gif/"
			});
	}
	else {
		message.reply(`you gave ${member} a high five! :raised_hand::sunglasses:`, {
		file: "/home/ikey/Documents/GitHub/KorewaBot/images/Highfive/" + `${hf[(Math.floor(Math.random() * hf.length))]}`});
		return;
  }
}