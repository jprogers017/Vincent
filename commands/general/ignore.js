const Commando = require('discord.js-commando');
const fs = require("fs");

class IgnoreCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'ignore',
            aliases: [],
            group: 'general',
            memberName: 'ignore',
            description: `Ignore specific user ID's in specific channels or all together for Vincent's "Hi, ___, I'm Vincent!" feature`
        });
    }
    async run(message) {
        try {
            let ignored = fs.readFileSync('../../config/ignored.json');
            let role = message.guild.roles.find(r => r.name == args[1]);
            let channel = message.guild.channels.find(ch => ch.name == args[0]);

            if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
                return console.log(`I do not have permission to send messages in ${message.channel.name} from ${message.guild.name} (${message.guild.owner.user.username})`);
            } else if (!message.guild.me.hasPermission('MANAGE_ROLES')) {
                return message.say(`Sorry! I don't have permission to manage roles in this server! :( To enable this command to work in this server have somebody with permission create a role called "vIgnore"!`);
            } else {
                return message.say('Incomplete command, try again later.');
            }
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = IgnoreCommand;