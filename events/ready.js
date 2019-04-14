const Discord = require('discord.js');
const io = require('console-read-write');

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
    // consoleAnnounce();

    // async function consoleAnnounce() {
    //     try {
    //         function isReady() {
    //             io.write('Are you ready to make an annoucement? Respond "Yes" or "No"!');
    //             if (await io.read() === 'yes'.toLowerCase()) {
    //                 io.write('Awaiting annoucement...');
    //                 let annouce = await io.read();
    //                 io.write(`Sending following annoucement to #annoucenments...\n${annouce}`);
    //                 annouce = new Discord.RichEmbed()
    //                     .setColor('73b6ff')
    //                     .setDescription(`**${annouce}**`)
    //                 announcements.send(annouce);
    //                 // testing.send(annouce);
    //             } else if (await io.read() === 'no'.toLowerCase()) {
    //                 // function notReady() {
    //                 //     io.write('Not right now? Okay! Let me know when you are ready to make one :)\n Just say "ready"!');
    //                 //     await io.read() === 'ready'.toLowerCase()

    //                 return;
    //                 // }
    //             } else {
    //                 isReady();
    //             }
    //         }
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }
};