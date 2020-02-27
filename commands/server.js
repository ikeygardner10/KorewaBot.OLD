module.exports = (message) => {
const Discord = require('discord.js');
const moment = require("moment");
const botsTotal = message.guild.members.filter(member => member.user.bot).size;
const usersTotal = message.guild.members.filter(member => !member.user.bot).size;
const rolesTotal = message.guild.roles.size;
const emojisTotal = message.guild.emojis.size;
let tcount = message.guild.channels.filter(c => c.type === 'text').size;
let vcount = message.guild.channels.filter(c => c.type === 'voice').size;
const ccount = message.guild.channels.filter(channel => channel.type === "category").size;
const icon = message.guild.iconURL;
const owner = message.guild.owner;
const verificationLevel = {
	0: "None",
	1: "Low",
	2: "Medium",
	3: "High",
	4: "Very High",
};
const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });

const embed = new Discord.RichEmbed()
	.setAuthor(`${message.guild.name}`, icon)
	.addField('**Owner**', `<@${owner.user.id}>`)
	.setThumbnail(`${message.guild.iconURL}`)
	.addField('**Verification**', `${verificationLevel[message.guild.verificationLevel]}`, true)
	.addField('**Region**', `${message.guild.region}`, true)
	.addBlankField()
	.addField('**Members**', `${usersTotal}`, true)
	.addField('**Bots**', `${botsTotal}`, true)
	.addField('**Emoji Count**', `${emojisTotal}`, true)
	.addField('**Categories**', `${ccount}`, true)
	.addField('**Text Channels**', `${tcount}`, true)
	.addField('**Voice Channels**', `${vcount}`, true)
	.addField('**Role Count**', `${rolesTotal} ($roles)`, true)
	.addField('**Created**', `${moment(message.guild.createdAt).format("dddd, MMMM Do YYYY @ HH:mm:ss")}`)
	.setFooter(`ID: ${message.guild.id}`)
	.setTimestamp()
	.setColor(randomColor);

	message.channel.send(embed)
	return;
};