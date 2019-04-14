const Commando = require('discord.js-commando');

class EightBallCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: '8ball',
            aliases: [],
            group: 'general',
            memberName: '8ball',
            description: `I'm psychic.`
        });
    }
    async run(message) {
        try {
            const args = message.content.trim().split(/ +/g);

            let eightBallReplies = [
                "It is certain",
                "It is decidely so",
                "Without a doubt",
                "Yes, definitely",
                "You may rely on it",
                "As I see it, yes",
                "Most likely",
                "Outlook good",
                "Signs point to yes",
                "Yes",
                "Reply hazy, try again",
                "Ask again later",
                "Better not tell you now",
                "Cannot predict now",
                "Concentrate and ask again",
                "Maybe",
                "Don't count on it",
                "My reply is no",
                "My sources say no",
                "Outlook not so good",
                "Very doubtful",
                "No"
            ];
            let eightBallResults = Math.floor((Math.random() * eightBallReplies.length));
            let eightBallAnswer = eightBallReplies[eightBallResults];

            if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
                return console.log(`I do not have permission to send messages in ${message.channel.name} from ${message.guild.name} (${message.guild.owner.user.username})`);
            } else if (!args[0]) {
                return message.channel.send("Did you have a question?");
            } else if (!args[1]) {
                return message.channel.send("More than a one worded question, please!");
            } else {
                return message.channel.send(eightBallAnswer);
            }
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = EightBallCommand;