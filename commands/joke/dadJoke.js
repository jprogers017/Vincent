const Commando = require('discord.js-commando');
const fs = require('fs')
const jokes = JSON.parse(fs.readFileSync('./config/jokes.json', 'utf-8'));

class DadJokeCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'dadjoke',
            aliases: [],
            group: 'joke',
            memberName: 'dad',
            description: `In addition to sending dad jokes, Vincent will also dad joke you if you say "i am" at the start of your message.`
        });
    }
    async run(message) {
        try {
            let dadJokes = jokes.dadJokes
            let rand = dadJokes[Math.floor(Math.random() * dadJokes.length)];

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

module.exports = DadJokeCommand;