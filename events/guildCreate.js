module.exports = (client, guild) => {
	console.log(`Joined new server: ${guild.name}, owned by ${guild.owner.user.username} (${guild.owner.user.id})`)
};