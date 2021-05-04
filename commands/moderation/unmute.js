const { MessageEmbed } = require('discord.js');

module.exports.run = (client,message,args) => {
  let user = message.guild.member(message.mentions.users.first());
  let muteRole = message.guild.roles.cache.find(r => r.name === "muted");

  if (!user.roles.cache.has(muteRole.id)) return message.reply("L'utilisateur mentionné n'est pas muté !")

  user.roles.remove(muteRole.id);
  const embed = new MessageEmbed()
  .setTitle("Mute")
  .setDescription(`L'utilisateur ${user} est désormais unmuté !`)
  .setColor("#32CD32")

  message.channel.send(embed);
  client.channels.cache.get('835906671624716289').send(embed);
};

module.exports.help = {
  name: 'unmute',
  description: "Unmute un utilisateur",
  usage: '<@utilisateur>',
  isUserAdmin: true,
  permissions: true,
  args: true
};
