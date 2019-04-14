const Commando = require('discord.js-commando');
const math = require('mathjs');

class CalculatorCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'calculator',
            aliases: ['calc', 'math'],
            group: 'general',
            memberName: 'calculator',
            description: `Better than your TI-84...okay maybe not, but I can try. Right?`
        });
    }
    async run(message) {
        try {
            const args = message.content.trim().split(/ +/g).slice(1);
            let result;

            if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
                return console.log(`I do not have permission to send messages in ${message.channel.name} from ${message.guild.name} (${message.guild.owner.user.username})`);
            } else if (!args[0]) {
                return message.say('Please input what you would like me to calculate for you.');
            } else {
                try {
                    result = math.eval(args.join(' '));
                } catch (e) {
                    return message.say('Sorry, please input a valid calculator.')
                }
            }

            message.say(result);
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = CalculatorCommand;