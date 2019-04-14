const Commando = require('discord.js-commando');
const oneLinerJoke = require('one-liner-joke');

class JokeCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'joke',
            aliases: [],
            group: 'joke',
            memberName: 'joke',
            description: `Get a random joke from the one-liner-joke NPM package...that means they're not my jokes and I don't know what's in here.`
        });
    }
    async run(message) {
        try {
            let randomJoke = oneLinerJoke.getRandomJoke();
            let rand = randomJoke.body;

            if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
                return console.log(`I do not have permission to send messages in ${message.channel.name} from ${message.guild.name} (${message.guild.owner.user.username})`);
            } else {
                return message.say(rand);
            }
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = JokeCommand;