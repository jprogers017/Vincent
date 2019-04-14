const Commando = require('discord.js-commando');

class CatCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'cat',
            aliases: ['kitty', 'kitties', 'cats'],
            group: 'image',
            memberName: 'cat',
            description: `Would you like a picture of a cat?`,
            guildOnly: true
        });
    }
    async run(message) {
        try {
            let number = 40;
            let randomCat = Math.floor(Math.random() * (number - 1 + 1)) + 1;

            if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
                return console.log(`I do not have permission to send messages in ${message.channel.name} from ${message.guild.name} (${message.guild.owner.user.username})`);
            } else {
                return message.say({
                    files: ["images/cats/" + randomCat + ".jpg"]
                });
            }
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = CatCommand;