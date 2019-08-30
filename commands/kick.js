module.exports = message => {
  if (message.member.hasPermission("KICK_MEMBERS")) {
    const member = message.mentions.members.first()
    if (!member) {
      return message.reply(
        `who are you trying to kick? You must mention a user.`
      )
    }

    if (!member.kickable) {
      return message.reply(`I can't kick this user. Sorry!`)
    }

    return member
      .kick()
      .then(() => message.reply(`${member.user.tag} was kicked.`))
      .catch(error => message.reply(`Sorry, an error occured.`))
	}
  else {
	(message.channel.send("Fuck off lol :joy:"))
  }
}