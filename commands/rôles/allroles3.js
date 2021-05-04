const { MessageEmbed } = require('discord.js');

module.exports.run = (client,message,args) => {
  const embed = new MessageEmbed()
  .setTitle("Notifications")
  .setDescription("<a:alerte:835919931434467378> \n<a:giveaway2:835920882319884350> \n<a:love:835920118303031306>")
  .setColor("#00BFFF")

  client.channels.cache.get('835898363152039946').send(embed).then(message => {
    message.react('835919931434467378');
    message.react('835920882319884350');
    message.react('835920118303031306');
  })
}

module.exports.help = {
  name: 'allroles3',
  description: 'Donne d\'autres rôles',
};
