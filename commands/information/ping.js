const Commando = require('discord.js-commando');

class PingCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'ping',
            aliases: [],
            group: 'information',
            memberName: 'ping',
            description: `Vincent's latency.`,
            guildOnly: true
        });
    }
    async run(message) {
        try {
            if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
                return console.log(`I do not have permission to send messages in ${message.channel.name} from ${message.guild.name} (${message.guild.owner.user.username})`);
            } else {
                return message.say(`My ping is ${this.client.ping}ms!`);
            }
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = PingCommand;