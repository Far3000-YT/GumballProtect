const { MessageEmbed } = require('discord.js');

module.exports = async (client, role) => {

  const fetchGuildAuditLogs = await role.guild.fetchAuditLogs({
    limit: 1,
    type: 'ROLE_DELETE'
  });

  const latestRoleDeleted = fetchGuildAuditLogs.entries.first();
  const { executor } = latestRoleDeleted;

  const embed = new MessageEmbed()
  .setAuthor("Suppression d'un rôle")
  .setDescription(`__**Rôle supprimé**__: ${role.name}\n __**Rôle supprimé par**__: ${executor.tag}`)
  .setColor("#00BFFF")

  client.channels.cache.get('835906671624716289').send(embed);
}
