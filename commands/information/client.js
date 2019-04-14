const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const moment = require('moment');
const ms = require('ms');

class ClientInfoCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'vincent',
            aliases: ['bot', 'botinfo', 'client', 'clientinfo'],
            group: 'information',
            memberName: 'vincent',
            description: `Has Vincent send information about himself!`,
            guildOnly: true
        });
    }
    run(message) {
        try {
            // let createDate = moment.utc(message.guild.me.createdAt).format('dddd, MMMM Do YYYY, HH:mm');
            let joinDate = moment.utc(message.guild.me.joinedAt).format('dddd, MMMM Do YYYY, HH:mm');
            let uptime = ms(this.client.uptime, {
                long: true
            });
            let userEmbed = new Discord.RichEmbed()
                .setAuthor(`${this.client.user.tag} || Prefix: ${this.client.commandPrefix}`, this.client.user.avatarURL)
                .setColor('73b6ff')
                .setDescription(`Vincent is based off of the Seattle Aquarium's very own Giant Pacific Octopus named Vincent!\n\nYou can view a live cam of Vincent between 9am and 6pm PST,  his feeding times are 12pm and 4pm PST.\n<https://www.seattleaquarium.org/live-cams/octopus-cam>`)
                .addField('Servers', this.client.guilds.size, true)
                .addField('Users', this.client.users.size, true)
                .addField('Uptime', uptime, true)
                .addField("Join Date", joinDate)
                .addField('Creation Date', "Tuesday, August 28th 2018, 06:18")
                .setImage('https://www.seattleaquarium.org/sites/default/files/images/_DSC1249-2%20%281%29.jpg');

            if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
                return console.log(`I do not have permission to send messages in ${message.channel.name} from ${message.guild.name} (${message.guild.owner.user.username})`);
            } else {
                if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
                    return message.author.send("I don't have permission to speak there!");
                } else {
                    return message.say(userEmbed);
                }
            }
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = ClientInfoCommand;