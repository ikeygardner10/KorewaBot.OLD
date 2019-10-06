module.exports = message => {
const Discord = require('discord.js');
let embed1 = new Discord.RichEmbed()
	.setAuthor(`Command List`, "https://i.imgur.com/7Wy9aSB.png")
	.addField(`Website`, `https://ikeygardner10.github.io`)
	.setColor(0xFF2E2E);
	
	message.channel.send(embed1)
	return;
}