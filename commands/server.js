module.exports = (message) => {
const Discord = require('discord.js');
const botsTotal = message.guild.members.filter(member => member.user.bot).size;
const usersTotal = message.guild.members.filter(member => !member.user.bot).size;
const boostsTotal = message.guild.roles.find(role => role.name === "Nitro Booster").members.size;
const rolesTotal = message.guild.roles.size;
const emojisTotal = message.guild.emojis.size;
const txtchTotal = message.guild.channels.filter(chan => chan.type == 'GUILD_TEXT').size;

const embed = new Discord.RichEmbed()
	.setAuthor(`Server Information 😜`, "https://i.imgur.com/7Wy9aSB.png")
	.setThumbnail(`${message.guild.iconURL}`)
	.addField(`Name`, `${message.guild.name}`, true)
	.addField(`ID`, `${message.guild.id}`, true)
	.addField(`Owner`, `${message.guild.owner}`, true)
	.addField(`Region`, `${message.guild.region}`, true)
	.addField(`Verification`, `${message.guild.verificationLevel}`, true)
	.addField(`Boost Count`, `${boostsTotal}`, true)
	.addField(`Created`, `${message.guild.createdAt}`, true)
	.addBlankField()
	.addField(`Role Count`, `${rolesTotal}`, true)
	.addField(`Emoji Count`, `${emojisTotal}`, true)
	.addField(`Users`, `${usersTotal}`, true)
	.addField(`Bot Count`, `${botsTotal}`, true)
	.addField(`Text Channels`, `${txtchTotal.size}`. true)
	.setFooter(`KorewaBot`, "https://i.imgur.com/7Wy9aSB.png")
	.setTimestamp()
	.setColor(0xFFE18F);

	message.channel.send(embed)
	console.log(`${message.guild.iconURL}`)
		return;
}