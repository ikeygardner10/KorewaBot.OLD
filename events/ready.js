module.exports = client => {
	client.user.setPresence({
		game: {
			name: 'with Jariel\'s Mom 🤤',
			type: 'PLAYING',
			url: 'https://twitter.com/_ikey_'
		}
	})
	console.log(`Logged in as ${client.user.tag}!\n${client.users.size} users, in ${client.guilds.size} servers connected.`)
}