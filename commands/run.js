module.exports = message => {
	const member = message.mentions.members.first()
	var fs = require('fs');
	var run = fs.readdirSync("/home/ikey/Documents/Git/KorewaBot/images/Run/")
	if (!member) {
		message.channel.send(`${message.author} ran away!`, {
		file: "/home/ikey/Documents/Git/KorewaBot/images/Run/" + `${run[(Math.floor(Math.random() * run.length))]}`});
		return;
	}
	 else if (message.author.id === member.user.id) {
		message.reply(`you can't run away from yourself dumbass :neutral_face:`)
		return;
	}
	else {
		message.channel.send(`${message.author} ran away from you ${member} :open_mouth:`, {
		file: "/home/ikey/Documents/Git/KorewaBot/images/Run/" + `${run[(Math.floor(Math.random() * run.length))]}`});
		return;
  }
}