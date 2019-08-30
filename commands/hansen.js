module.exports = message => {
const member = message.mentions.members.first()
	if (!member) {
	  return;
	}
	if (message.author.id === member.user.id) {
		message.reply(
			`you turned yourself in to the authorites... <:what:468306439623147523>`
		)
	}
	else {
	message.channel.send(`${member}, why don't you take a seat over there?`, {
		file: "/home/ikey/Documents/GitHub/KorewaBot/images/hansen.png"
	});
	}
}