const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class GithubCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'github',
            aliases: [],
            group: 'information',
            memberName: 'github',
            description: `Vincent's Github link...may or may not be current.`,
            guildOnly: true
        });
    }
    async run(message) {
        try {
            let githubEmbed = new Discord.RichEmbed()
                .setAuthor(`Click here for Vincent's Github link!`, this.client.user.avatarURL, 'https://github.com/jprogers017/vincent.v3')
                .setColor('#71bcff');

            if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
                return console.log(`I do not have permission to send messages in ${message.channel.name} from ${message.guild.name} (${message.guild.owner.user.username})`);
            } else {
                return message.say(githubEmbed);
            }
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = GithubCommand;