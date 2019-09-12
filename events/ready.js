module.exports = client => {
	client.user.setActivity('$info');
	console.log(`Logged in as ${client.user.tag}!\n${client.users.size} users, in ${client.guilds.size} servers connected.`)
}