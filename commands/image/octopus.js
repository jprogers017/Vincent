const Commando = require('discord.js-commando');

class TurtleCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'octopus',
            aliases: ['octopi'],
            group: 'image',
            memberName: 'octopus',
            description: `Would you like a picture of an octopus...maybe like Vincent?`,
            guildOnly: true
        });
    }
    async run(message) {
        try {
            let number = 40;
            let randomOctopus = Math.floor(Math.random() * (number - 1 + 1)) + 1;

            if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
                return console.log(`I do not have permission to send messages in ${message.channel.name} from ${message.guild.name} (${message.guild.owner.user.username})`);
            } else {
                return message.say({
                    files: ["images/octopi/" + randomOctopus + ".jpg"]
                });
            }
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = TurtleCommand;