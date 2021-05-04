const { MessageEmbed } = require('discord.js');

module.exports.run = async (client,message,args) => {
  if (isNaN(args[0]) || (args[0]<1 || args[0]>100)) return message.reply("Il faut spécifier un nombre entre 1 et 100 !");

  const messages = await message.channel.messages.fetch({
    limit: Math.min(args[0], 100),
    before: message.id,
  });

  message.delete();
  await message.channel.bulkDelete(messages);

  const embed = new MessageEmbed()
  .setTitle("Clear")
  .setDescription(`__**Messages supprimés**__: ${args[0]}\n __**Salon**__: ${message.channel}`)
  .setColor("#00BFFF")

  message.channel.send(embed);
  client.channels.cache.get('835906671624716289').send(embed);
};

module.exports.help = {
  name: 'clear',
  description: "Enlève un nombre spécifié de messages",
  usage: '<nombre_de_messages>',
  isUserAdmin: false,
  permissions: true,
  args: true
};
