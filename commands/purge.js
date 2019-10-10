module.exports = message => {
let command = '$purge';
let amount = parseInt(message.content.slice(command.length));
	if(isNaN(amount)) {
		message.reply(`no amount speciified.`)
		return;
	}
	message.channel.bulkDelete(amount + 1)
	return
}