module.exports = client => {
	client.user.setActivity('$help');
	console.log(`Logged in as ${client.user.tag}!\n${client.users.size} users, in ${client.guilds.size} servers connected.`)
}