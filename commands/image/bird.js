const Commando = require('discord.js-commando');

class BirdCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'bird',
            aliases: ['birb', 'birds', 'birbs'],
            group: 'image',
            memberName: 'bird',
            description: `Would you like a picture of a bird?`,
            guildOnly: true
        });
    }
    async run(message) {
        try {
            let number = 40;
            let randomBird = Math.floor(Math.random() * (number - 1 + 1)) + 1;

            if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
                return console.log(`I do not have permission to send messages in ${message.channel.name} from ${message.guild.name} (${message.guild.owner.user.username})`);
            } else {
                return message.say({
                    files: ["images/birds/" + randomBird + ".jpg"]
                });
            }
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = BirdCommand;