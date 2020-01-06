module.exports = message => {
var fs = require('fs');
var fuck = fs.readdirSync("/home/ikey/Documents/GitHub/KorewaBot/images/Fuck/")
const member = message.mentions.members.first();
const author = message.author;
const filter = m => m.content.toLowerCase().includes('yes') && m.author.id === member.id;
	if(!message.channel.nsfw){
     	return message.reply('you must be in a channel marked NSFW to use this command.')
    }
	if(!member) {
		return message.reply(`who are you trying to fuck? You must mention a user.`)
	}
	if(message.author.id === member.user.id) {
		return message.reply(`that's called jerking off :neutral_face:`)
	}
	
	message.channel.send(`${member}, ${author} wants to fuck... <:omgomgomg:621117976040439808> Do you accept!? :flushed: (yes/no)`).then(() => {
		message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] }) 
			.then(collected => {
				message.channel.send(`${member} & ${author}, hot! :weary:`, {
					file: "/home/ikey/Documents/GitHub/KorewaBot/images/Fuck/" + `${fuck[(Math.floor(Math.random() * fuck.length))]}`});
			})
			.catch(collected => {
				message.channel.send(`No response :pensive: (15 second time out)`)
			});
	});
}
