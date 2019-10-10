module.exports = client => {
var servers = client.guilds.size;
	client.user.setPresence({
		game: {
			name: `${client.users.size} users`,
			type: 'STREAMING',
			url: 'https://twitter.com/_ikey_'
		}
	})
	console.log(`Logged in as ${client.user.tag}!\n${client.users.size} users, in ${servers} servers connected.`)
}