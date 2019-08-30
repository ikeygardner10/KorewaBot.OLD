module.exports = message => {
	const user = message.mentions.users.first() || message.author;
	return message.channel.send(`${user}'s avatar: ${user.displayAvatarURL}`);
}