module.exports = (message) => {
const Discord = require('discord.js');

var uptime = process.uptime();
const date = new Date(uptime*1000);
const days = date.getUTCDate() - 1,
      hours = date.getUTCHours(),
      minutes = date.getUTCMinutes(),
      seconds = date.getUTCSeconds(),
      milliseconds = date.getUTCMilliseconds();
let segments = [];
if (days > 0) segments.push(days + 'd' + ((days == 1) ? '' : ''));
if (hours > 0) segments.push(hours + 'h' + ((hours == 1) ? '' : ''));
if (minutes > 0) segments.push(minutes + 'm' + ((minutes == 1) ? '' : ''));
if (seconds > 0) segments.push(seconds + 's' + ((seconds == 1) ? '' : ''));
if (milliseconds > 0) segments.push(milliseconds + 'ms' + ((seconds == 1) ? '' : ''));
const dateString = segments.join(', ');
const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });

const embed1 = new Discord.RichEmbed()
	.setAuthor(`KorewaBot2`, "https://imgur.com/Bh2Qqyr.png")
	.addField(`Prefix`, `$`, true)
	.addField(`Command List`, `[Link](https://ikeygardner10.github.io/)`, true)
	.addField(`Support Server`, `[Some Chick Named Emma](https://discord.gg/GQh6XEk)`, true)
	.addField(`Invite`, `[Link](https://discordapp.com/api/oauth2/authorize?client_id=599430180452433921&permissions=8&scope=bot)`, true)
	.addField(`GitHub`, `[Link](https://github.com/ikeygardner10/KorewaBot)`, true)
	.addField(`Developer`, `[ikey.#0911](https://twitter.com/_ikey_)`, true)
	.addBlankField()
	.addField(`Version`, `1.0`, true)
	.addField(`Node JS`, `12.8.1`, true)
	.addField(`Library`, `discord.js`, true)
	.addField(`Uptime`, `${dateString}`, true)
	.addField(`Servers`, `${message.client.guilds.size}`, true)
	.addField(`Users`, `${message.client.users.size}`, true)
	.addBlankField()
	.addField(`Twitter`, `[@_ikey_](https://twitter.com/_ikey_)\n[@_sair_](https://twitter.com/kibashippuden1)`, true)
	.addField(`Snapchat`, `ikeygardner10\nsarozkader`, true)
	.setFooter("Suggestions go in the creators/support server", "https://imgur.com/Bh2Qqyr.png")
	.setTimestamp()
	.setColor(randomColor);
	
const embed2 = new Discord.RichEmbed()
	.setAuthor(`KorewaBot2`, "https://imgur.com/Bh2Qqyr.png")
	.addField(`Prefix`, `$`, true)
	.addField(`Command List`, `[Link](https://ikeygardner10.github.io/)`, true)
	.addField(`Support Server`, `[Soundcloud 2.0](https://discord.gg/GQh6XEk)`, true)
	.addField(`Invite`, `[Link](https://discordapp.com/api/oauth2/authorize?client_id=599430180452433921&permissions=8&scope=bot)`, true)
	.addField(`GitHub`, `[Link](https://github.com/ikeygardner10/KorewaBot)`, true)
	.addField(`Developer`, `ikey.#0911`, true)
	.addBlankField()
	.addField(`Twitter`, `[@_ikey_](https://twitter.com/_ikey_)\n[@_sair_](https://twitter.com/kibashippuden1)`, true)
	.addField(`Snapchat`, `ikeygardner10\nsarozkader`, true)
	.setFooter("Suggestions go in the creators/support server", "https://imgur.com/Bh2Qqyr.png")
	.setTimestamp()
	.setColor(randomColor);

	if (message.author.id === "341086875232108545") {
		message.channel.send(embed1)
		return;
	}
	else {
		message.channel.send(embed2)
		return;
	};
};