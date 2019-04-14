const Commando = require('discord.js-commando');

class MemeCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'meme',
            aliases: [],
            group: 'joke',
            memberName: 'meme',
            description: `There's literally like 300 memes in here. Haven't seen them all...but I love them.`
        });
    }
    async run(message) {
        try {
            let number = 331;
            let rand = Math.floor(Math.random() * (number - 1 + 1)) + 1;

            if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
                return console.log(`I do not have permission to send messages in ${message.channel.name} from ${message.guild.name} (${message.guild.owner.user.username})`);
            } else {
                return message.say({
                    files: ["images/memes/" + rand + ".mp4"]
                });
            }
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = MemeCommand;