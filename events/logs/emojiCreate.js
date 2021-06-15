const { MessageEmbed } = require('discord.js');

module.exports = async (client, emoji) => {

  const fetchGuildAuditLogs = await emoji.guild.fetchAuditLogs({
    limit: 1,
    type: 'EMOJI_CREATE'
  });

  const latestEmojiCreated = fetchGuildAuditLogs.entries.first();
  const { executor } = latestEmojiCreated;

  const embed = new MessageEmbed()
  .setAuthor("Création d'un emoji")
  .setDescription(`__**Nom de l'emoji**__: ${emoji.name}\n __**Emoji**__: <:${emoji.name}:${emoji.id}>\n __**Emoji créé par**__: ${executor.tag}`)
  .setColor("#00BFFF")

  client.channels.cache.get('854260261611241492').send(embed);
}
