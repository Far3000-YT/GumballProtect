const { MessageEmbed } = require('discord.js');

module.exports.run = (client,message,args) => {
  
  const embed = new MessageEmbed()
  .setTitle("Notification Roles")
  .setDescription("<a:news:846845623784570970> : News role \n<a:giveaway:846845623662542848> : Giveaways role \n<a:partner:846848375281418311> : Partnerships notification role")
  .setColor("#00BFFF")

  client.channels.cache.get('846840240135733299').send(embed).then(message => {
    message.react('846845623784570970');
    message.react('846845623662542848');
    message.react('846848375281418311');
  })
}

module.exports.help = {
  name: 'allroles3',
  description: 'Donne d\'autres rôles',
};
