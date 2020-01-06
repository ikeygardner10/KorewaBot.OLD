module.exports = message => {
	const member = message.mentions.members.first()
	if (!member) {
		return message.reply(
		  `who are you trying to ping? You must mention a user.`
		)
	}
	return message.channel.send(`And what you you like to do to ${member}?`)
		.then((newmsg) => {
			newmsg.channel.awaitMessages(response => response.content, {
				max: 1,
				time: 3000,
				errors: ['time'],
			})
		.then((collected) => {
			newmsg.channel.send(`Well aren't you kinky :smirk:`)
		})
		.catch((err) => {
			console.error('$fuck: An error has occured');
		});
		});
}