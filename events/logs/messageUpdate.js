const { MessageEmbed } = require('discord.js');

module.exports = async (client, oldMessage, newMessage) => {
  const embed = new MessageEmbed()
  .setAuthor("Modification d'un message")
  .setDescription(`__**Message modifié**__: ${oldMessage} ==> ${newMessage}\n __**Auteur du message**__: ${newMessage.author}`)
  .setColor("#00BFFF")

  client.channels.cache.get('835906671624716289').send(embed);
}
