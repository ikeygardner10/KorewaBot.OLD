module.exports = client => {
var servers = client.guilds.size;
var users = client.users.size;
const activities_list = [
    "$help", 
    `${servers} servers`,
	`${users} users`,
    "NEW FUCK CMD!",
    "NEW CHOKE CMD!",
    ];
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
	client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000);
	
	console.log(`Logged in as ${client.user.tag}!\n${client.users.size} users, in ${servers} servers connected.`)
}
