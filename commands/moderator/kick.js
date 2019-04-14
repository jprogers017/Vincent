const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class KickCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'kick',
            aliases: [],
            group: 'moderator',
            memberName: 'kick',
            description: `Kicks a user from the server.`,
            clientPermissions: ['KICK_MEMBERS']
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

module.exports = KickCommand;