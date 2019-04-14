const Commando = require('discord.js-commando');

class DogCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'dog',
            aliases: ['puppy', 'puppies', 'dogs', 'doggos', 'doggo'],
            group: 'image',
            memberName: 'dog',
            description: `Would you like a picture of a dog?`,
            guildOnly: true
        });
    }
    async run(message) {
        try {
            let number = 40;
            let randomDog = Math.floor(Math.random() * (number - 1 + 1)) + 1;

            if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
                return console.log(`I do not have permission to send messages in ${message.channel.name} from ${message.guild.name} (${message.guild.owner.user.username})`);
            } else {
                return message.say({
                    files: ["images/dogs/" + randomDog + ".jpg"]
                });
            }
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = DogCommand;