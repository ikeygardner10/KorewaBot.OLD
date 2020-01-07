module.exports = message => {
const Discord = require('discord.js');
const list = client.guilds.size;

let embed1 = new Discord.RichEmbed()
	.setAuthor(`KorewaBot2`, "https://imgur.com/Bh2Qqyr.png")
	.addField('Servers', `${list}`)
    .setFooter(`KorewaBot2`, "https://imgur.com/Bh2Qqyr.png")
	.setTimestamp()
	.setColor(0x4F5450);
    	
	message.channel.send(embed1)
	return;
}
