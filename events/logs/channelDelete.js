const { MessageEmbed } = require('discord.js');

module.exports = async (client, channel) => {

  const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
    limit: 1,
    type: 'CHANNEL_DELETE'
  });

  const latestChannelDeleted = fetchGuildAuditLogs.entries.first();
  const { executor } = latestChannelDeleted;

  const embed = new MessageEmbed()
  .setAuthor("Suppression d'un salon")
  .setDescription(`__**Nom du salon**__: ${channel.name}\n __**Salon supprimé par**__: ${executor.tag}`)
  .setColor("#00BFFF")

  client.channels.cache.get('846831210289168384').send(embed);
}
