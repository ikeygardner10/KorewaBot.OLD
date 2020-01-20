module.exports = message => {
var fs = require('fs');
var hh = fs.readdirSync("/home/ikey/Documents/GitHub/KorewaBot/images/HandHold/")
const member = message.mentions.members.first();
const author = message.author;
const filter1 = m => m.content.toLowerCase().includes('yes') && m.author.id === member.id;
const filter2 = m => m.content.toLowerCase().includes('no') && m.author.id === member.id;

	if(!member) {
		return message.reply(`who are you trying to hold hands with? You must mention a user.`)
	}
	if(message.author.id === member.user.id) {
		return message.reply(`you can't hold hands with yourself... :neutral_face:`)
	}
	
	message.channel.send(`${member}, ${author} wants to hold your hand <:omgomgomg:621117976040439808> Do you accept!? :flushed: (yes/no)`).then(() => {
		message.channel.awaitMessages(response => response.content == filter1 || response.content == filter2, {
			max: 1,
            time: 15000,
            errors: ['time'],
            })
			.then((collected) => {
                if (collected.first().content == filter1) {
                    message.channel.send(`${member} & ${author}, cute! :heart:`, {
					file: "/home/ikey/Documents/GitHub/KorewaBot/images/HandHold/" + `${hh[(Math.floor(Math.random() * hh.length))]}`});
                }
                else if(collected.first().content == filter2) {
                    message.channel.send(`${member} said no :sob: :broken_heart:`);
                }
			})
			.catch(collected => {
				message.channel.send(`No response :pensive: (15 second time out)`)
			});
	});
}