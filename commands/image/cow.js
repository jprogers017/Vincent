const Commando = require('discord.js-commando');

class CowCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'cow',
            aliases: ['cows'],
            group: 'image',
            memberName: 'cow',
            description: `Would you like a picture of a cow?`,
            guildOnly: true
        });
    }
    async run(message) {
        try {
            let number = 30;
            let randomCow = Math.floor(Math.random() * (number - 1 + 1)) + 1;

            if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
                return console.log(`I do not have permission to send messages in ${message.channel.name} from ${message.guild.name} (${message.guild.owner.user.username})`);
            } else {
                return message.say({
                    files: ["images/cows/" + randomCow + ".jpg"]
                });
            }
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = CowCommand;