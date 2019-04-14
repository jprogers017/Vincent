const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class PollCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'vkick',
            aliases: ['voicekick', 'kickvoice', 'kickv'],
            group: 'moderator',
            memberName: 'vkick',
            description: `Remove a user from a voice channel.`,
            clientPermissions: ['MANAGE_MESSAGES']
        });
    }
    async run(message) {
        try {
            const kickChannel = await message.guild.createChannel('temp', 'voice');
            const user = message.mentions.members.first();
            const channel = user.voiceChannel;

            if (!message.guild.me.hasPermission(['MANAGE_CHANNELS', 'MOVE_MEMBERS'])) {
                return message.say('I need to have "manage channels" and "move members" permissions for you to use this command!').then(msg => {
                        msg.delete(5000)
                    })
                    .catch();
            } else if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
                return console.log(`I do not have permission to send messages in ${message.channel.name} from ${message.guild.name} (${message.guild.owner.user.username})`);
            } else if (!message.member.hasPermission('ADMINISTRATOR')) {
                return message.say("You don't have permission to use this command!").then(msg => {
                    msg.delete(5000);
                }).catch(e => {
                    return console.log(e);
                });
            } else {
                // if (!message.member.roles.some(roles => ["537508552512897024", "537508351228117002"].includes(roles.id))) {
                //     return message.say({
                //         embed: {
                //             color: 0x71bcff,
                //             title: "You need to have the following role to use this command:",
                //             description: "<@537508351228117002>"
                //         }
                //     }).then(msg => {
                //         msg.delete(5000)
                //     }).catch();
                // } else 
                if (!user) {
                    return message.say(`Who are you trying to kick from a voice channel?`);
                } else if (!channel) {
                    return message.say(`${user} is not in a voice channel!`);
                } else {
                    await user.setVoiceChannel(kickChannel);
                    await kickChannel.delete();
                    return message.say(`Kicked ${user} from the voice channel ${channel}!`);
                }
            }
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = PollCommand;