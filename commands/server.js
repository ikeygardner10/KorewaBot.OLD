module.exports = (message) => {
const Discord = require('discord.js');
const botsTotal = message.guild.members.filter(member => member.user.bot).size;
const usersTotal = message.guild.members.filter(member => !member.user.bot).size;
const rolesTotal = message.guild.roles.size;
const emojisTotal = message.guild.emojis.size;
const boostTotal = message.guild.premium_subscription_count;
let tcount = message.guild.channels.filter(c => c.type === 'text').size;
let vcount = message.guild.channels.filter(c => c.type === 'voice').size;

const embed = new Discord.RichEmbed()
	.setAuthor(`Server Information 😜`, "https://i.imgur.com/7Wy9aSB.png")
	.setThumbnail(`${message.guild.iconURL}`)
	.addField(`Name`, `${message.guild.name}`, true)
	.addField(`ID`, `${message.guild.id}`, true)
	.addField(`Owner`, `${message.guild.owner}`, true)
	.addField(`Region`, `${message.guild.region}`, true)
	.addField(`Verification`, `${message.guild.verificationLevel}`, true)
	.addField(`Boost Count`, `${boostTotal}`, true)
	.addField(`Created`, `${message.guild.createdAt}`, true)
	.addBlankField()
	.addField(`Role Count`, `${rolesTotal}`, true)
	.addField(`Emoji Count`, `${emojisTotal}`, true)
	.addField(`Users`, `${usersTotal}`, true)
	.addField(`Bot Count`, `${botsTotal}`, true)
	.addField(`Text Channels`, `${tcount}`, true)
	.addField(`Voice Channels`, `${vcount}`, true)
	.setFooter(`KorewaBot`, "https://i.imgur.com/7Wy9aSB.png")
	.setTimestamp()
	.setColor(0xFF2E2E);

	message.channel.send(embed)
		return;
}