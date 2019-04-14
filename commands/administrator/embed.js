const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const io = require('console-read-write');

class embed1Command extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'embed',
            aliases: [],
            group: 'administrator',
            memberName: 'embed',
            description: `I only use this to make embeds for specific channels!`,
            guildOnly: true
        });
    }
    async run(message) {
        try {
            let author;
            let title;
            let desc;
            let img;

            let embed = new Discord.RichEmbed()
                .setAuthor(author)
                .setTitle(title)
                .setDescription(desc)
                .setImage(img)
                .setColor('#71bcff');
                
            message.say(embed);
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = embed1Command;