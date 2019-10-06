module.exports = message => {
const Discord = require('discord.js');
const member = message.mentions.members.first();
	if (message.member.hasPermission("KICK_MEMBERS")) {
		if (!member) {
			return message.reply(`who are you trying to kick? You must mention a user.`)
		}
		if (!member.kickable) {
			return message.reply(`I can't kick this user. Sorry!`)
		}

const user = message.mentions.users.first()
const avatar = user.displayAvatarURL || message.author.displayAvatarURL;
let embed1 = new Discord.RichEmbed()
	.setThumbnail(avatar)
	.addField(`Result:`, `${user.tag} has been kicked`)
	.setTimestamp()
	.setColor(0x4F5450);
	
		return member
		.kick()
		.then(() => message.reply(embed1))
		.catch(error => message.reply(`Sorry, an error occured.`))
	}
	else (message.channel.send("Fuck off lol :joy:"))
}