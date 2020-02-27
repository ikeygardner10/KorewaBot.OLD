module.exports = message => {
const Discord = require('discord.js');
const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });

let embed1 = new Discord.RichEmbed()
	.setAuthor(`KorewaBot2 Help`, "https://imgur.com/Bh2Qqyr.png")
	.addField('**Links**', `[All Commands](https://ikeygardner10.github.io)\n[Bot Discord](https://discordapp.com/invite/GQh6XEk)\n[Invite To Your Server](https://discordapp.com/oauth2/authorize?client_id=607091388588359687&permissions=8&scope=bot)\n[Twitter](https://twitter.com/_ikey_)`)
	.setColor(randomColor);
	
	message.author.send(embed1)
	return;
};