module.exports = message => {
	const member = message.mentions.members.first() || message.author;
	if (member === message.author) {
	  return message.channel.send(
		`${member} nae nae'd!`, {
			file: "/home/ikey/Documents/GitHub/KorewaBot/images/naenae.gif"
		});
	}
	else if (message.author.id === member.user.id) {
		message.reply(
			`you can't nae nae yourself :pensive:`
		)
	}
	message.channel.send(`Get nae nae'd on ${member}`, {
		file: "/home/ikey//Documents/GitHub/KorewaBot/images/naenae.gif"
	});
}
	