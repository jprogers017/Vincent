const Discord = require('discord.js');

module.exports = async (client, message) => {
    const announcements = client.guilds.get(client.config.ids.server).channels.get(client.config.ids.announcements);
    // const testing = client.guilds.get(client.config.ids.server).channels.get(client.config.ids.botTesting);
    let clientStatuses = [
        `with ${client.commandPrefix}help`,
        `with ${client.commandPrefix}help`,
        `on ${client.guilds.size} server(s)! || ${client.commandPrefix}help`,
        `with ${client.users.size} users! || ${client.commandPrefix}help`
    ];

    setInterval(function () {
        let clientActivity = clientStatuses[Math.floor(Math.random() * clientStatuses.length)];
        client.user.setActivity(clientActivity);
    }, 10000)

    console.log(`\n${client.user.tag} is online in ${client.guilds.size} server(s)!\n`);
};