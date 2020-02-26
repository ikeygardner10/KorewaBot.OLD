module.exports = message => {
const Discord = require('discord.js');
let bUser = message.guild.member(message.mentions.users.first());
let error2 = new Discord.RichEmbed()
	.setThumbnail("https://i.imgur.com/Bh2Qqyr.png")
	.addField("Result:", "No user was mentioned.")
    .setFooter("KorewaBot2", "https://i.imgur.com/Bh2Qqyr.png")
	.setTimestamp()
	.setColor(0x4F5450);
if (!bUser) return message.channel.send(error2);
let user = message.mentions.users.first() || message.author;
let  avatar = user.displayAvatarURL;

let fail = new Discord.RichEmbed()
	.setThumbnail("https://i.imgur.com/Bh2Qqyr.png")
	.addField("Result:", `I could not ban ${bUser}.\nCheck the users roles/permissions.`)
    .setFooter("KorewaBot2", "https://i.imgur.com/Bh2Qqyr.png")
	.setTimestamp()
	.setColor(0x4F5450);
let success = new Discord.RichEmbed()
	.setThumbnail(avatar)
	.addField("Result:", `${bUser} (ID: ${bUser.id}) has been banned`)
	.addField("baned By", `<@${message.author.id}>`)
    .setFooter("KorewaBot2", "https://i.imgur.com/Bh2Qqyr.png")
	.setTimestamp()
	.setColor(0x4F5450);
let error1 = new Discord.RichEmbed()
	.setThumbnail("https://i.imgur.com/Bh2Qqyr.png")
	.addField("Result:", "Sorry, an error occured.")
    .setFooter("KorewaBot2", "https://i.imgur.com/Bh2Qqyr.png")
	.setTimestamp()
	.setColor(0x4F5450);
	
	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("you do not have permissions!");
	if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(fail);
	return bUser
	.ban()
	.then(() => message.channel.send(success))
	.catch(error => message.channel.send(error1))
}