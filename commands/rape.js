module.exports = message => {
	const member = message.mentions.members.first()
	var fs = require('fs');
	var rape = fs.readdirSync("/home/ikey/Documents/GitHub/KorewaBot/images/Rape/")
	//if (message.member.highestRole.id == "540347917358071818") {
	//	message.reply(`no rape for first years! Too young! :triumph:`)
	//	return;
	//}
	if (!member) {
	  return message.reply(
		`who are you trying to rape? You must mention a user.`
	  )
	}
	else if (message.author.id === member.user.id) {
		message.channel.send(
			`${member} raped themselves! :open_mouth: Don't ask me how that works :confused:`
		)
	}
	else if (message.author.id == "456126810493812766") {
		message.reply(`lol no you don't`)
		return;
	}
	else {
		message.reply(`you raped ${member}! :drool: :smiling_imp:`, {
		file: "/home/ikey/Documents/GitHub/KorewaBot/images/Rape/" + `${rape[(Math.floor(Math.random() * rape.length))]}`});
		return;
	}
}