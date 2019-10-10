module.exports = message => {
const Discord = require('discord.js');
const list = message.guild.roles.map(r => `${r}`).join(' | ');

const embed1 = new Discord.RichEmbed()
	.setAuthor(`Server Roles`, "https://i.imgur.com/7Wy9aSB.png")
	.addField('Roles:', `${list}`, true)
	.setFooter(`${message.guild.name}`)
	.setColor(0x4F5450);
	
	message.channel.send(embed1)
	return;
}