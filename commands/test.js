module.exports = message => {
    const allGuilds = client.guilds.filter(g => g.memberCount > 10).map(g => g.name).join("\n");

    message.channel.send(`${allGuilds}`)
    return;
}
