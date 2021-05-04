const { MessageEmbed } = require('discord.js');

module.exports = async (client, emoji) => {

  const fetchGuildAuditLogs = await emoji.guild.fetchAuditLogs({
    limit: 1,
    type: 'EMOJI_DELETE'
  });

  const latestEmojiDeleted = fetchGuildAuditLogs.entries.first();
  const { executor } = latestEmojiDeleted;

  const embed = new MessageEmbed()
  .setAuthor("Suppression d'un emoji")
  .setDescription(`__**Nom de l'emoji**__: ${emoji.name}\n __**Emoji supprimé par**__: ${executor.tag}`)
  .setColor("#00BFFF")

  client.channels.cache.get('835906671624716289').send(embed);
}
