module.exports = message => {
const Discord = require('discord.js');
const list = message.guild.roles.map(r => `${r}`).join(' | ');
const icon = message.guild.iconURL;
const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });

let embed1 = new Discord.RichEmbed()
	.setAuthor(`${message.guild.name} Roles`, icon)
	.addField('**Roles:**', `${list}`, true)
	.setFooter(`KorewaBot2`, "https://imgur.com/Bh2Qqyr.png")
	.setColor(randomColor);
	
	message.channel.send(embed1)
	return;
}
