const { MessageEmbed } = require('discord.js');

module.exports.run = (client,message,args) => {
  let user = message.guild.member(message.mentions.users.first());
  let muteRole = message.guild.roles.cache.find(r => r.name === "muted");

  if (!user.roles.cache.has(muteRole.id)) return message.reply("The tagged user is not muted !")

  user.roles.remove(muteRole.id);
  const embed = new MessageEmbed()
  .setTitle("Mute")
  .setDescription(`${user} is now unmuted !`)
  .setColor("#32CD32")

  message.channel.send(embed);
  client.channels.cache.get('846831210289168384').send(embed);
};

module.exports.help = {
  name: 'unmute',
  description: "Unmute un utilisateur",
  usage: '<@user>',
  isUserAdmin: true,
  permissions: true,
  args: true
};
