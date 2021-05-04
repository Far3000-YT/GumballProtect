const { MessageEmbed } = require ('discord.js')

module.exports = (client, member) => {
    const embed = new MessageEmbed()
    .setAuthor(`${member.displayName} ${member.id}`, member.user.displayAvatarURL())
    .setFooter('Un utilisateur a quitté :(')
    .setColor("#dc143c")
    .setTimeStamp();

    client.channels.cache.get('835906671624716289').send(embed);
  }