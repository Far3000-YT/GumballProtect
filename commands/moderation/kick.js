const { MessageEmbed } = require('discord.js');

module.exports.run = (client,message,args) => {
  const user = message.mentions.users.first();
  const reason = (args.splice(1).join(' '));
  user ? message.guild.member(user).kick(reason) : message.channel.send("The user do not exist !")

  const embed = new MessageEmbed()
  .setTitle("Kick")
  .setDescription(`**${user} has been kicked by ${message.author.tag} !**\n __**Reason**__: ${reason}`)
  .setColor("#FFD700")

  message.channel.send(embed);
  client.channels.cache.get('846831210289168384').send(embed);
};

module.exports.help = {
  name: 'kick',
  description: "Kick un utilisateur",
  usage: '<@user> <reason>',
  isUserAdmin: true,
  permissions: true,
  args: true
};
