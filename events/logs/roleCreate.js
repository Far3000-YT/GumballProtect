const { MessageEmbed } = require('discord.js');

module.exports = async (client, role) => {

  const fetchGuildAuditLogs = await role.guild.fetchAuditLogs({
    limit: 1,
    type: 'ROLE_CREATE'
  });

  const latestRoleCreated = fetchGuildAuditLogs.entries.first();
  const { executor } = latestRoleCreated;

  const embed = new MessageEmbed()
  .setAuthor("Création d'un rôle")
  .setDescription(`__**Rôle créé**__: ${role}\n __**Rôle créé par**__: ${executor.tag}`)
  .setColor("#00BFFF")

  client.channels.cache.get('854260261611241492').send(embed);
}
