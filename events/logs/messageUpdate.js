const { MessageEmbed } = require('discord.js');

module.exports = async (client, oldMessage, newMessage) => {
  if (newMessage.author.bot) return;
  const embed = new MessageEmbed()
  .setAuthor("Modification d'un message")
  .setDescription(`__**Message modifié**__: ${oldMessage} ==> ${newMessage}\n __**Auteur du message**__: ${newMessage.author}`)
  .setColor("#00BFFF")

  client.channels.cache.get('854260261611241492').send(embed);
}
