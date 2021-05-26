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
  .setDescription(`**${user} has been muted by ${message.author.tag} !**\n __**Reason**__: ${reason}\n __**Time**__: ${ms(ms(muteTime))}`)
  .setColor("#FFD700")

  message.channel.send(embed);
  client.channels.cache.get('846831210289168384').send(embed);

  setTimeout(() => {
    user.roles.remove(muteRole.id);
  }, ms(muteTime));
};

module.exports.help = {
  name: 'mute',
  description: "Mute un utilisateur",
  usage: '<@user> <time> <reason>',
  isUserAdmin: true,
  permissions: true,
  args: true
};
