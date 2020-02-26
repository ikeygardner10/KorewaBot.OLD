module.exports = message => {
const Discord = require('discord.js');
const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });

let embed1 = new Discord.RichEmbed()
	.setAuthor(`Command List`, "https://imgur.com/Bh2Qqyr.png")
	.addField(`Website`, `https://ikeygardner10.github.io`)
	.setColor(0xFF2E2E);
	
	message.author.send(embed1)
	return;
};