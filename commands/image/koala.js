const Commando = require('discord.js-commando');

class KoalaCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'koala',
            aliases: ['koalas'],
            group: 'image',
            memberName: 'koala',
            description: `Would you like a picture of a koala?`,
            guildOnly: true
        });
    }
    async run(message) {
        try {
            let number = 40;
            let randomKoala = Math.floor(Math.random() * (number - 1 + 1)) + 1;

            if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
                return console.log(`I do not have permission to send messages in ${message.channel.name} from ${message.guild.name} (${message.guild.owner.user.username})`);
            } else {
                return message.say({
                    files: ["images/koalas/" + randomKoala + ".jpg"]
                });
            }
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = KoalaCommand;