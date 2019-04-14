const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class BanCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'ban',
            aliases: [],
            group: 'administrator',
            memberName: 'ban',
            description: `Bans a user from the server.`,
            clientPermissions: ['BAN_MEMBERS']
        });
    }
    async run(message) {
        if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
            return console.log(`I do not have permission to send messages in ${message.channel.name} from ${message.guild.name} (${message.guild.owner.user.username})`);
        } else {
            return message.say('Incomplete command, try again later.');
        }

    }
}

module.exports = BanCommand;