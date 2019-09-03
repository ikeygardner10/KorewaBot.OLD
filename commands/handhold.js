module.exports = message => {
	const Discord = require('discord.js')
	const member = message.mentions.members.first();
	const collector = new Discord.MessageCollector(message.channel, m => m.author.id === member.user.id, { time: 20000 });
	var fs = require('fs');
	var hh = fs.readdirSync("/home/ikey/Documents/GitHub/KorewaBot/images/HandHold/")
	if (!member) {
		message.reply(`who are you asking? You must mention a user.`)
		return
	}
	else if (message.author.id === member.user.id) {
		message.reply(`you weirdo :neutral: :pensive:`)
		return
	}
	message.channel.send(`${member}, ${message.author} wants to hold your hand... :sweat_smile: Do you want to as well? :flushed: (y/n)`)
	const author = message.author;
		collector.on('collect', message => {
				if (message.content === 'y' ) {
					message.channel.send(`${author} & ${member}, cute :heart:`, {
						file: "/home/ikey/Documents/GitHub/KorewaBot/images/HandHold/"  + `${hh[(Math.floor(Math.random() * hh.length))]}`})
					return;
				}
				else if (message.content === 'n' ) {
					message.channel.send(`${member}, damn... :open_mouth: :pensive:`, {
						file: "/home/ikey/Documents/GitHub/KorewaBot/images/handholdingno.gif"})
					return;
				}
		});
}
