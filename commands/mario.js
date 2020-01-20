module.exports = message => {
var used = false;
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
	used = true;
	setTimeout(() => {
		used = false;
	}, 1000 * 30);
}