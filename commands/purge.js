module.exports = message => {
let command = '$purge';
let amount = parseInt(message.content.slice(command.length));
let pUser = message.author;
	if(!pUser.hasPermission("MANAGE_MESSAGES")) return message.reply("you do not have permissions!");
	if(isNaN(amount)) {
		message.reply(`no amount speciified.`)
		return;
	}
	message.channel.bulkDelete(amount + 1)
	return;
}