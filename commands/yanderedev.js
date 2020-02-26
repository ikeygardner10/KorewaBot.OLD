module.exports = message => {
if (message.author.id == "341086875232108545") {
	message.channel.send({
	file: "/home/ikey/Documents/GitHub/KorewaBot/images/YandereDev/1.png"})
		.then(() =>
			setTimeout(function(){
				message.channel.send({
				file: "/home/ikey/Documents/GitHub/KorewaBot/images/YandereDev/2.png"})
			}, 4000))
				.then(() =>
					setTimeout(function(){
						message.channel.send({
						file: "/home/ikey/Documents/GitHub/KorewaBot/images/YandereDev/3.png"})
					}, 8000))
						.then(() =>
							setTimeout(function(){
								message.channel.send({
								file: "/home/ikey/Documents/GitHub/KorewaBot/images/YandereDev/4.png"})
							}, 12000));
}
else {
	message.reply("ikey only :slight_smile:")
};
};