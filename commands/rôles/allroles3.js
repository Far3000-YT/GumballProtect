const { MessageEmbed } = require('discord.js');

module.exports.run = (client,message,args) => {
  
  const embed = new MessageEmbed()
  .setTitle("Notifications")
  .setDescription("<a:pin:835920290658779146> : Notifications news \n<a:giveaway2:835920882319884350> : Notifications giveaways \n<a:love:835920118303031306> : Notifications parteneriats")
  .setColor("#00BFFF")

  client.channels.cache.get('854260243792658462').send(embed).then(message => {
    message.react('835920290658779146');
    message.react('835920882319884350');
    message.react('835920118303031306');
  })
}

module.exports.help = {
  name: 'allroles3',
  description: 'Donne d\'autres rôles',
};
