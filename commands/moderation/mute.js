const { MessageEmbed } = require('discord.js');
const ms = require('ms');

module.exports.run = async (client,message,args) => {
  let user = message.guild.member(message.mentions.users.first());
  let muteRole = message.guild.roles.cache.find(r => r.name === "muted");
  const reason = (args.splice(2).join(' '));
  let muteTime = (args[1] || '60s');

  if (!muteRole) {
    muteRole = await message.guild.roles.create({
      data: {
        name: "muted",
        permissions: []
      }
    });

    message.guild.channels.cache.forEach(async (channel, id) => {
      await channel.updateOverwrite(muteRole, {
        SEND_MESSAGES: false,
        CONNECT: false,
        ADD_REACTIONS: false
      })
    })
  }

  await user.roles.add(muteRole.id);
  const embed = new MessageEmbed()
  .setTitle("Mute")
  .setDescription(`**L'utilisateur ${user} est muté par ${message.author.tag} !**\n __**Raison**__: ${reason}\n __**Temps**__: ${ms(ms(muteTime))}`)
  .setColor("#FFD700")

  message.channel.send(embed);
  client.channels.cache.get('835906671624716289').send(embed);

  setTimeout(() => {
    user.roles.remove(muteRole.id);
  }, ms(muteTime));
};

module.exports.help = {
  name: 'mute',
  description: "Mute un utilisateur",
  usage: '<@utilisateur> <temps> <raison>',
  isUserAdmin: true,
  permissions: true,
  args: true
};
