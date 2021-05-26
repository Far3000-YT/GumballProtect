const { MessageEmbed } = require('discord.js');

module.exports.run = (client,message,args) => {
  const user = message.mentions.users.first();
  const reason = (args.splice(1).join(' '));
  user ? message.guild.member(user).ban({ reason }) : message.channel.send("The user do not exist !")

  const embed = new MessageEmbed()
  .setTitle("Ban")
  .setDescription(`**${user} has been banned by ${message.author.tag}!**\n __**Reason**__: ${reason}`)
  .setColor("#dc143c")

  message.channel.send(embed);
  client.channels.cache.get('846831210289168384').send(embed);
};

module.exports.help = {
  name: 'ban',
  description: "Ban un utilisateur",
  usage: '<@utilisateur> <raison>',
  isUserAdmin: true,
  permissions: true,
  args: true
};
