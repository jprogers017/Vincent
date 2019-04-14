const Commando = require('discord.js-commando');

class CoinFlipCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'coinflip',
            aliases: [],
            group: 'general',
            memberName: 'coinflip',
            description: `Easier than getting a coin out of the couch, yeah?`
        });
    }
    async run(message) {
        try {
            let chance = Math.floor(Math.random() * 2);

            if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
                return console.log(`I do not have permission to send messages in ${message.channel.name} from ${message.guild.name} (${message.guild.owner.user.username})`);
            } else if (chance == 0) {
                return message.say('The coin landed on heads!');
            } else {
                return message.say('The coin landed on tails!');
            }
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = CoinFlipCommand;