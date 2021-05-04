const { MessageEmbed } = require('discord.js');

module.exports.run = (client,message,args) => {
  const user = message.mentions.users.first();
  const reason = (args.splice(1).join(' '));
  user ? message.guild.member(user).ban({ reason }) : message.channel.send("L\'utilisateur n'existe pas !")

  const embed = new MessageEmbed()
  .setTitle("Ban")
  .setDescription(`L'utilisateur ${user} a été banni par ${message.author.tag}!**\n __**Raison**__: ${reason}`)
  .setColor("#dc143c")

  message.channel.send(embed);
  client.channels.cache.get('835906671624716289').send(embed);
};

module.exports.help = {
  name: 'ban',
  description: "Ban un utilisateur",
  usage: '<@utilisateur> <raison>',
  isUserAdmin: true,
  permissions: true,
  args: true
};
