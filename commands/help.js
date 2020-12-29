const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let help = new Discord.MessageEmbed()
      .setTitle("Command List ")
      .addField("\🎁 Giveaway \🎁","`c!start (Mention Channel) (Times) (Winners) (Prize)`\n`c!greroll [prize name]`\n`c!gend [prize name]`")
      .addField("\💰 Economy \💰","`c!beg` `c!searchmoney` `c!work` `c!daily` `c!weekly`")
      .addField("\🎵 Music \🎵","`c!play` `c!search` `c!loop` `c!lyrics` `c!pause` `c!resume` `c!stop` `c!queue` `c!skip` `c!volume`")
      .addField("\👾 General \👾 ","`c!avatar` `c!channelinfo` `c!serverinfo` `c!shorten` `c!userinfo` `c!youtube` `c!stop` `c!queue`")
      .addField("\🔧 Moderation \🔧  ","`c!ban` `c!kick` `c!lock` `c!mute` `c!purge` `c!tempban` `c!unmute`")
      .addField("\🛠️ Utility \🛠️", "`c!ping` `c!invite`", true)
      .addField("ℹ Information ℹ", "`c!botstats`", true)
      .setTimestamp()
      .setColor('RANDOM')
      .setFooter(`Command Requested By ${message.author.tag}`, client.user.displayAvatarURL());
    message.channel.send("**- Check Mail**");

    return message.author.send(help);
}

module.exports.help = {
  name: "help"
}
