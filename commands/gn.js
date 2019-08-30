module.exports = message => {
	const member = message.mentions.users.first();
	if (!member) {
	  return message.channel.send(
	    `Good night ${message.author}! :relaxed: :sleeping: :zzz:`
	  )
	}
	else {
	  return message.channel.send(
		`${member}, ${message.author} wishes you a good night! Sleep well! :relaxed: :kissing_closed_eyes:`
	  )
	}
}