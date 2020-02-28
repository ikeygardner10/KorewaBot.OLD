module.exports = message => {
const Discord = require('discord.js');
const list = message.guild.roles.map(r => `${r}`).join(' ');
const icon = message.guild.iconURL;
const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
	async function sendEmbeds(text, channel) {
		const arr = text.match(/.{1,2048}/g);
		
		for (let list of arr) {
			let embed = new Discord.RichEmbed()
				.setAuthor(`${message.guild.name} Roles`, icon)
				.setDescription(list)
				.setFooter(`KorewaBot2`, "https://imgur.com/Bh2Qqyr.png")
				.setColor(randomColor);
				
			await channel.send({ embed });
		}
	}
	sendEmbeds(`${list}`, message.channel)
}