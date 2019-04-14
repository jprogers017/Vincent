const Commando = require('discord.js-commando');

class TurtleCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'turtle',
            aliases: ['turtles'],
            group: 'image',
            memberName: 'turtle',
            description: `Would you like a picture of a turtle?`,
            guildOnly: true
        });
    }
    async run(message) {
        try {
            let number = 40;
            let randomTurtle = Math.floor(Math.random() * (number - 1 + 1)) + 1;

            if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
                return console.log(`I do not have permission to send messages in ${message.channel.name} from ${message.guild.name} (${message.guild.owner.user.username})`);
            } else {
                return message.say({
                    files: ["images/turtles/" + randomTurtle + ".jpg"]
                });
            }
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = TurtleCommand;