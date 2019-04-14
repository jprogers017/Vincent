const Commando = require('discord.js-commando');

class RollCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll',
            aliases: [],
            group: 'general',
            memberName: 'roll',
            description: `Who has dice in 2019? Tabletop games are dead. Afterall, Tabletop Simulator does exist.`
        });
    }
    async run(message) {
        try {
            let roll = Math.floor(Math.random() * 100) + 1;

            if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
                return console.log(`I do not have permission to send messages in ${message.channel.name} from ${message.guild.name} (${message.guild.owner.user.username})`);
            } else if (roll <= 1) {
                return message.say(`${roll}, ouch!`);
            } else if (roll >= 2 && roll <= 19) {
                return message.say(`${roll}, better luck next time.`);
            } else if (roll >= 20 && roll <= 39) {
                return message.say(`${roll}, could've been better...`);
            } else if (roll >= 40 && roll <= 59) {
                return message.say(`${roll}, decent.`);
            } else if (roll >= 60 && roll <= 79) {
                return message.say(`${roll}, now we're getting somewhere!`);
            } else if (roll >= 80 && roll <= 99) {
                return message.say(`${roll}, woah. Look at you go!`);
            } else {
                return message.say(`${roll} how'd you do that? Did you hack me?`);
            }
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = RollCommand;