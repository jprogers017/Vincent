const Commando = require('discord.js-commando');

class PlayCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'play',
            aliases: [],
            group: 'music',
            memberName: 'play',
            description: `Joins your current voice channel and plays a song of your choice from youtube.`
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

module.exports = PlayCommand;