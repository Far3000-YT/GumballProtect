const { MessageEmbed } = require('discord.js');

module.exports.run = async (client,messageReaction,args) => {
  
  if(messageReaction.partial) {
    await messageReaction.fetch();
    return;
  }
  
  const embed = new MessageEmbed()
  .setTitle("Notifications")
  .setDescription("<a:alerte:835919931434467378> : News \n<a:giveaway2:835920882319884350> : Giveaways \n<a:love:835920118303031306> : Parteneriats")
  .setColor("#00BFFF")

  client.channels.cache.get('839150422652223538').send(embed).then(message => {
    message.react('835919931434467378');
    message.react('835920882319884350');
    message.react('835920118303031306');
  })
}

module.exports.help = {
  name: 'allroles3',
  description: 'Donne d\'autres rôles',
};
