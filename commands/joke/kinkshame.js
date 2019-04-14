const Commando = require('discord.js-commando');

class ShameCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'kinkshame',
            aliases: [],
            group: 'joke',
            memberName: 'kinkshame',
            description: `Who do I need to kinkshame?`,
            guildOnly: true
        });
    }
    run(message) {
        let user = message.mentions.members.first();
        let msg = `${user}, do I have to kinkshame you now?`;
        
        if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
            return message.author.send("I don't have permission to speak there!");
        } else if (!user) {
            message.say('Who am I kinkshaming?');
        } else {
            message.delete();
            message.say(msg);
        }
    }
}

module.exports = ShameCommand;