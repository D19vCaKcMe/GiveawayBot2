const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    let prefix = config.prefix;
    if (message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    let invite = new Discord.MessageEmbed()
    .setTitle("")
    .addField("Invite Link", "[Click here to invite me](https://discord.com/api/oauth2/authorize?client_id=766661157834194944&permissions=8&scope=bot)")
    .addField("Or Support My Server", "[Click to join support Server](https://discord.gg/5ZsD5fkd)")
    .setTimestamp()
    .setColor('RANDOM')
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL());
    message.channel.send(invite);
}

module.exports.help = {
    name: "invite"
}
