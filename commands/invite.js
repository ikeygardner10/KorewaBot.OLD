module.exports = message => {
const Discord = require('discord.js');
const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
let embed1 = new Discord.RichEmbed()
	.setAuthor(`KorewaBot2`, "https://imgur.com/Bh2Qqyr.png")
	.addField('**Invite**', `[Link](https://discordapp.com/oauth2/authorize?client_id=607091388588359687&permissions=8&scope=bot)`)
	.setFooter(`KorewaBot2`, "https://imgur.com/Bh2Qqyr.png")
	.setTimestamp()
	.setColor(randomColor);
	
	message.author.send(embed1)
	return;
};