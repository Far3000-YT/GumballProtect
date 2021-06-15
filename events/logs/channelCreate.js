const { MessageEmbed } = require('discord.js');

module.exports = async (client, channel) => {

  const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
    limit: 1,
    type: 'CHANNEL_CREATE'
  });

  const latestChannelCreated = fetchGuildAuditLogs.entries.first();
  const { executor } = latestChannelCreated;

  const embed = new MessageEmbed()
  .setAuthor("Création d'un salon")
  .setDescription(`__**Nom du salon**__: ${channel.name}\n __**Salon créé par**__: ${executor.tag}`)
  .setColor("#00BFFF")

  client.channels.cache.get('854260261611241492').send(embed);
}
