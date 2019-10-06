module.exports = (message) => {
const Discord = require('discord.js');
const user = message.mentions.users.first() || message.author;
const avatar = user.displayAvatarURL;
let embed1 = new Discord.RichEmbed()
	.setImage(avatar)
	.setFooter(`${user.username}'s Avatar`)
	.setColor(0x4F5450);

	message.channel.send(embed1)
	return;
}