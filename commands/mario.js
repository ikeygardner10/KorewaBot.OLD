module.exports = message => {
if (message.author.id == "341086875232108545") {
	message.channel.send({
	file: "/home/ikey/Documents/GitHub/KorewaBot/images/Mario/mario1.jpeg"})
		.then(() =>
			setTimeout(function(){
				message.channel.send({
				file: "/home/ikey/Documents/GitHub/KorewaBot/images/Mario/mario2.jpeg"})
			}, 5000))
				.then(() =>
					setTimeout(function(){
						message.channel.send({
						file: "/home/ikey/Documents/GitHub/KorewaBot/images/Mario/mario3.jpeg"})
					}, 13000))
						.then(() =>
							setTimeout(function(){
								message.channel.send({
								file: "/home/ikey/Documents/GitHub/KorewaBot/images/Mario/mario4.jpeg"})
							}, 14500));
}
else {
	message.reply("ikey only :slight_smile:")
};
};