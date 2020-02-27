module.exports = message => {
const Discord = require('discord.js');
const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
let kUser = message.guild.member(message.mentions.users.first());
let error2 = new Discord.RichEmbed()
	.setThumbnail("https://i.imgur.com/Bh2Qqyr.png")
	.addField("Result:", "No user was mentioned.")
    .setFooter("KorewaBot2", "https://i.imgur.com/Bh2Qqyr.png")
	.setTimestamp()
	.setColor(randomColor);
if (!kUser) return message.channel.send(error2);
let user = message.mentions.users.first() || message.author;
let  avatar = user.displayAvatarURL;

let fail = new Discord.RichEmbed()
	.setThumbnail("https://i.imgur.com/Bh2Qqyr.png")
	.addField("Result:", `I could not kick ${kUser}.\nCheck the users roles/permissions.`)
    .setFooter("KorewaBot2", "https://i.imgur.com/Bh2Qqyr.png")
	.setTimestamp()
	.setColor(randomColor);
let success = new Discord.RichEmbed()
	.setThumbnail(avatar)
	.addField("Result:", `${kUser} (ID: ${kUser.id}) has been kicked`)
	.addField("Kicked By", `<@${message.author.id}>`)
    .setFooter("KorewaBot2", "https://i.imgur.com/Bh2Qqyr.png")
	.setTimestamp()
	.setColor(randomColor);
let error1 = new Discord.RichEmbed()
	.setThumbnail("https://i.imgur.com/Bh2Qqyr.png")
	.addField("Result:", "Sorry, an error occured.")
    .setFooter("KorewaBot2", "https://i.imgur.com/Bh2Qqyr.png")
	.setTimestamp()
	.setColor(randomColor);
	
	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have permissions!");
	if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(fail);
	return kUser
	.kick()
	.then(() => message.channel.send(success))
	.catch(error => message.channel.send(error1))
}