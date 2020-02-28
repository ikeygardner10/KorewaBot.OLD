module.exports = (message) => {
const Discord = require('discord.js');
const moment = require("moment");
const status = {
    online: "Online",
    idle: "Idle",
    dnd: "Do Not Disturb",
    offline: "Offline/Invisible"
};
var acknowledgements = 'None';
const member = message.mentions.members.first() || message.member;
const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
const list = member.roles.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id }>`).join(" ") || "No Roles";

if(`<@${member.user.id}>` == message.guild.owner){
    acknowledgements = 'Server Owner';
}
if(member.hasPermission("ADMINISTRATOR")){
    acknowledgements = "Administrator";
}
if(`<@${member.user.id}>` == message.guild.owner && message.member.hasPermission("ADMINISTRATOR")){
	acknowledgements = [
		'Server Owner',
		' Administrator',
	];
}

let embed = new Discord.RichEmbed()
	.setDescription(`<@${member.user.id}>`)
	.setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
	.setColor(randomColor)
	.setFooter(`ID: ${message.author.id}`)
	.setThumbnail(member.user.displayAvatarURL)
	.setTimestamp()
	.addField("Status",`${status[member.user.presence.status]}`, true)
	.addField('Joined at: ',`${moment(member.joinedAt).format("MMMM Do YYYY")}`, true)
	.addField("Created at: ",`${moment(member.user.createdAt).format("MMMM Do YYYY")}`, true)
	.addField("Extras: ", `${acknowledgements}`, true);
	
	message.channel.send(embed)
	return;
}