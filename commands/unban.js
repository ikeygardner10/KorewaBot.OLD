module.exports = message => {
const member = message.mentions.members.first()
	if (message.member.hasPermission("BAN_MEMBERS")) {
		message.guild.fetchBans()
			.then(bans => {
				bans.forEach(user => {
					user.send('MESSAGE / INVITE LINK');
					message.guild.unban(user);
				});
			});
	};
};