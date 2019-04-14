const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class InviteCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'invite',
            aliases: [],
            group: 'information',
            memberName: 'invite',
            description: `Invite Vincent to your own server! Probably not the best idea though, he's really buggy because I learned all my Javascript from Youtube tutorials.`,
            guildOnly: true
        });
    }
    async run(message) {
        try {
            let inviteEmbed = new Discord.RichEmbed()
                .setAuthor(`Click here for Vincent's Invite link!`, this.client.user.avatarURL, 'https://discordapp.com/api/oauth2/authorize?client_id=483882945766096896&permissions=60480&scope=bot')
                .setColor('#71bcff');

            if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
                return console.log(`I do not have permission to send messages in ${message.channel.name} from ${message.guild.name} (${message.guild.owner.user.username})`);
            } else {
                return message.say(inviteEmbed);
            }
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = InviteCommand;