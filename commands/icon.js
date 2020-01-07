module.exports = message => {
const Discord = require('discord.js');
const icon = message.guild.iconURL;
let embed1 = new Discord.RichEmbed()
	.setImage(icon)
	.setFooter(`${message.guild.name}'s icon`, "https://imgur.com/Bh2Qqyr.png")
	.setColor(0x4F5450);

    message.channel.send(embed1)
	return;
}
