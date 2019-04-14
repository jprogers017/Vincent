const Commando = require('discord.js-commando');

class ChickenCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'chiken',
            aliases: ['chicken', 'chickens', 'chikens'],
            group: 'image',
            memberName: 'chiken',
            description: `Would you like a picture of a chicken?`,
            guildOnly: true
        });
    }
    async run(message) {
        try {
            let number = 30;
            let randomChicken = Math.floor(Math.random() * (number - 1 + 1)) + 1;

            if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
                return console.log(`I do not have permission to send messages in ${message.channel.name} from ${message.guild.name} (${message.guild.owner.user.username})`);
            } else {
                message.say("DID SOMEONE SAY CHIKEN?");
                message.say({
                    files: ["images/chikens/" + randomChicken + ".jpeg"]
                });
                return;
            }
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = ChickenCommand;