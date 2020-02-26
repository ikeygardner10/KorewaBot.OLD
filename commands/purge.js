module.exports = message => {
let command = '$purge';
let amount = parseInt(message.content.slice(command.length));
	if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES")) {
		return message.reply("you do not have permissions!");
	}
	if(!amount) return message.reply(`you didn't specify an amount`);
	if(isNaN(amount)) return message.reply(`that amount isn't a number.`);
	if(amount > 100) return message.reply(`you cannot delete more than 100 messages at once.`);
	if(amount < 1) return message.reply(`you have to delete at least 1 message.`);
	
	message.channel.bulkDelete(amount + 1)
	return;
}