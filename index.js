const fs = require('fs')
const config = require('./config.json')
const Discord = require('discord.js')
const client = new Discord.Client({ fetchAllMembers: true, sync: true })

client.on("message", async message => {
    if(message.author.bot || message.system) return; // Ignore bots
	if(message.author == client.user) return;//Ignore itself
	if(message.channel.type === 'dm') { // Direct Message
        return;//Optionally handle direct messages
    }
	if (message.content.indexOf(config.prefix) === 0) { // Message starts with your prefix
        let msg = message.content.slice(config.prefix.length); // slice of the prefix on the message
        let args = msg.split(" "); // break the message into part by spaces
        let cmd = args[0].toLowerCase(); // set the first word as the command in lowercase just in case
        args.shift().toLowerCase(); // delete the first word from the args
	}
})

fs.readdir('./events/', (err, files) => {
	files.forEach(file => {
	  const eventHandler = require(`./events/${file}`)
	  const eventName = file.split('.')[0]
	  client.on(eventName, (...args) => eventHandler(client, ...args))
  })
});

// Catch Errors before they crash the app.
process.on('uncaughtException', (err) => {
    const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, 'g'), './');
    console.error('Uncaught Exception: ', errorMsg);
    // process.exit(1); //Eh, should be fine, but maybe handle this?
});

process.on('unhandledRejection', err => {
    console.error('Uncaught Promise Error: ', err);
    // process.exit(1); //Eh, should be fine, but maybe handle this?
});

client.login(config.token);
