const { MessageEmbed } = require('discord.js');

module.exports.run = async (client,message,args) => {
  const user = await client.users.fetch(args[0]);
  const reason = (args.splice(1).join(' '));

  if (!user) return message.reply("The user do not exist !")
  message.guild.members.unban(user)

  const embed = new MessageEmbed()
  .setTitle("Ban")
  .setDescription(`${user.id} is now unbanned by ${message.author.tag}`)
  .setColor("#32CD32")

  message.channel.send(embed);
  client.channels.cache.get('846831210289168384').send(embed);
};

module.exports.help = {
  name: 'unban',
  description: "Unban un utilisateur",
  usage: '<user_id>',
  isUserAdmin: false,
  permissions: true,
  args: true
};
