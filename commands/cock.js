module.exports = message => {
if (message.author.id == "341086875232108545") {
	message.channel.send({
	file: "/home/ikey/Documents/GitHub/KorewaBot/images/Cock/left.jpg"})
		.then(() =>
			setTimeout(function(){
				message.channel.send({
				file: "/home/ikey/Documents/GitHub/KorewaBot/images/Cock/right.jpg"})
			}, 2000))
				.then(() =>
					setTimeout(function(){
						message.channel.send({
						file: "/home/ikey/Documents/GitHub/KorewaBot/images/Cock/cock.jpg"})
					}, 4000));
}
else {
	message.reply("ikey only :slight_smile:")
};
};