module.exports = message => {
	const member = message.mentions.members.first()
	message.member.send(
	`Invite Link:\nhttps://discordapp.com/api/oauth2/authorize?client_id=599430180452433921&permissions=8&scope=bot`
	);
}