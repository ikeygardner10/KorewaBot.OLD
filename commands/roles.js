module.exports = message => {
const Discord = require('discord.js');
const list = message.guild.roles.map(r => `${r}`).join(' | ');
const icon = message.guild.iconURL;

let embed1 = new Discord.RichEmbed()
	.setAuthor(`${message.guild.name} Roles`, icon)
	.addField('Roles:', `${list}`, true)
	.setFooter(`KorewaBot2`, "https://imgur.com/Bh2Qqyr.png")
	.setColor(0x4F5450);
	
	message.channel.send(embed1)
	return;
}
