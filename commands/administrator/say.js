const Commando = require('discord.js-commando');

class SayCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'say',
            aliases: ['copyme', 'repeat', 'echo'],
            group: 'administrator',
            memberName: 'say',
            description: `You didn't say that, I said that.`,
            clientPermissions: ['MANAGE_MESSAGES']
        });
    }
    async run(message) {
        try {
            const args = message.content.trim().split(/ +/g);

            if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
                return console.log(`I do not have permission to send messages in ${message.channel.name} from ${message.guild.name} (${message.guild.owner.user.username})`);
            } else if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) {
                message.say('I can \'t do that, sorry!');
            } else {
                let sayMessage = args.slice(1).join(' ');

                message.delete();
                message.say(sayMessage);
            }
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = SayCommand;