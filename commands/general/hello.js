const Commando = require('discord.js-commando');

class HelloCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'hello',
            aliases: ['hey', 'hi'],
            group: 'general',
            memberName: 'hello',
            description: `Hello!`,
            guildOnly: true
        });
    }
    async run(message) {
        try {
            if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
                return console.log(`I do not have permission to send messages in ${message.channel.name} from ${message.guild.name} (${message.guild.owner.user.username})`);
            } else {
                return message.say(`Hello, ${message.author.username}!`);
            }
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = HelloCommand;