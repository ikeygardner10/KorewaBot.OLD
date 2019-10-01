module.exports = message => {
const member = message.mentions.members.first()
	if(!member) {
		message.channel.send(`HORNY ON MAIN!`, {
			file: "/home/ikey/Documents/GitHub/KorewaBot/images/lewd.gif"
		})
	}
	else {
		message.channel.send(`${member}, that's lewd!`, {
				file: "/home/ikey/Documents/GitHub/KorewaBot/images/lewd.gif"
		});
	};
};