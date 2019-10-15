module.exports = message => {
const Discord = require('discord.js');
const list = client.guilds.size;

let embed1 = new Discord.RichEmbed()
	.setAuthor(`KorewaBot | 酒`, "https://i.imgur.com/7Wy9aSB.png")
	.addField('Servers', `${list}`)
	.setTimestamp()
	.setColor(0x4F5450);
	
	message.channel.send(embed1)
	return;
}