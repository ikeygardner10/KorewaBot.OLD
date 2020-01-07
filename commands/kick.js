module.exports = message => {
const Discord = require('discord.js');
const member = message.mentions.members.first();

	if (message.member.hasPermission("KICK_MEMBERS")) {
		if (!member) {
			return;
		}
		
const icon = message.guild.iconURL;
const user = message.mentions.users.first()
const avatar = user.displayAvatarURL || message.author.displayAvatarURL;
let fail = new Discord.RichEmbed()
	.setThumbnail("https://imgur.com/a/qOoqxV6.png")
	.addField(`Result:`, `I could not kick ${user.tag}.\nCheck the users roles/permissions.`)
    .setFooter(`KorewaBot2`, "https://imgur.com/Bh2Qqyr.png")
	.setTimestamp()
	.setColor(0x4F5450);
let success = new Discord.RichEmbed()
	.setThumbnail(avatar)
	.addField(`Result:`, `${user.tag} has been kicked`)
    .setFooter(`KorewaBot2`, "https://imgur.com/Bh2Qqyr.png")
	.setTimestamp()
	.setColor(0x4F5450);
let error1 = new Discord.RichEmbed()
	.setThumbnail(icon)
	.addField(`Result:`, `Sorry, an error occured.`)
    .setFooter(`KorewaBot2`, "https://imgur.com/Bh2Qqyr.png")
	.setTimestamp()
	.setColor(0x4F5450);
	
		if (!member.kickable) {
			message.channel.send(fail)
			return;
		}
		return member
		.kick()
		.then(() => message.channel.send(embed1))
		.catch(error => message.channel.send(error1))
	}
	else return;
}
