module.exports = message => {
	const member = message.mentions.users.first();
	if (!member) {
	  return message.channel.send(
	    `Good morning ${message.author}! :grin: :ok_hand:`
	  )
	}
	else {
	  return message.channel.send(
		`${member}, ${message.author} wishes you a good morning! Did you sleep well? :grin: :hugging:`
	  )
	}
}