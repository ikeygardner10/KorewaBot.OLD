module.exports = message => {
const Discord = require('discord.js');
let embed1 = new Discord.RichEmbed()
	.setAuthor(`Website`, "https://imgur.com/Bh2Qqyr.png")
	.addField(`\u200b`, `https://ikeygardner10.github.io`)
	.setColor(0xFF2E2E);
	
	message.author.send(embed1)
	return;
}
