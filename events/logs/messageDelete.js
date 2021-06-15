const { MessageEmbed } = require('discord.js');

module.exports = async (client, message) => {

  const fetchGuildAuditLogs = await message.guild.fetchAuditLogs({
    limit: 1,
    type: 'MESSAGE_DELETE'
  });

  const latestMessageDeleted = fetchGuildAuditLogs.entries.first();
  const { executor } = latestMessageDeleted;

  const embed = new MessageEmbed()
  .setAuthor("Suppression d'un message")
  .setDescription(`__**Message supprimé**__: ${message.content}\n __**Message supprimé par**__: ${executor.tag}`)
  .setColor("#00BFFF")

  client.channels.cache.get('854260261611241492').send(embed);
}
