const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const countdown = require('countdown');

class MarvelCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'mcu',
            aliases: [],
            group: 'information',
            memberName: 'mcu',
            description: `Who doesn't love the MCU?`,
            guildOnly: true,
            args: [{
                key: 'movie',
                prompt: 'Enter a number between 1 and 22! To see a list of which movie corresponds to which number enter 0.',
                type: 'string'
            }]
        });
    }
    async run(message, {
        movie
    }) {
        try {
            const mcu = this.client.mcu;

            let name = mcu[movie].name;
            let link = mcu[movie].link;
            let cover = mcu[movie].cover;
            let desc = mcu[movie].desc;
            let year = mcu[movie].year;
            let trailerLink = mcu[movie].trailerLink;
            let trailer = mcu[movie].trailer;
            let until = countdown(new Date(2019, 4, 26, 0, 0))

            let embed = new Discord.RichEmbed()
                .setAuthor(name, cover, link)
                .setDescription(`${desc}\n\n[Movie Trailer](${trailerLink})`)
                .setImage(trailer)
                .setFooter(`Takes place in ${year}, placing it at number ${movie} when ordering the movies chronologically.`)
                .setColor('ed1d24');

            let list = mcu[0];

            let endgame = new Discord.RichEmbed()
                .setAuthor(name, cover, link)
                .setDescription(`${desc}\n\n[Movie Trailer](${trailerLink})`)
                .setImage(trailer)
                .setFooter(`${until} till Avengers: Endgame`)
                .setColor('ed1d24')
                .setTimestamp();

            if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
                return console.log(`I do not have permission to send messages in ${message.channel.name} from ${message.guild.name} (${message.guild.owner.user.username})`);
            } else if ((movie == '0') || !movie) {
                message.delete();
                return message.say(list);
            } else if (movie == '22') {
                message.delete();
                return message.say(endgame);
            } else {
                message.delete();
                return message.say(embed);
            }
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = MarvelCommand;