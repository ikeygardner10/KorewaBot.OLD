module.exports = message => {
	const member = message.mentions.members.first()
	var fs = require('fs');
	var kiss = fs.readdirSync("/home/ikey/Documents/GitHub/KorewaBot/images/Kiss/")
	
	if (!member) {
	return message.reply(
		`who are you trying to kiss? You must mention a user.`
	  )
	}
	else if (message.author.id == "300648520648753153") {
		message.channel.send(`${message.author} kissed ${member} :nauseated_face:`, {
		file: "/home/ikey/Documents/GitHub/KorewaBot/images/jarielkiss.gif"});
		return
	}
	else if (message.author.id === member.user.id) {
		message.reply(
			`you can't kiss yourself :pensive:`
		)
	}
	else {
		message.reply(`you gave ${member} a kiss :kissing_heart:`, {
		file: "/home/ikey/Documents/GitHub/KorewaBot/images/Kiss/" + `${kiss[(Math.floor(Math.random() * kiss.length))]}`});
		return;
  }
}