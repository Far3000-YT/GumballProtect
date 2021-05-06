const { MessageEmbed } = require('discord.js');

module.exports.run = async (client,messageReaction,args) => {
  const rougeRole = message.guild.roles.cache.get('835933265328078899');
  const orangeRole = message.guild.roles.cache.get('835933437918576750');
  const jauneRole = message.guild.roles.cache.get('835933404360867922');
  const vertRole = message.guild.roles.cache.get('835933371552366632');
  const bleuRole = message.guild.roles.cache.get('835933337046220880');
  const violetRole = message.guild.roles.cache.get('835933511872675850');
  
  if(messageReaction.partial) {
    await messageReaction.fetch();
    return;
  }

  const embed = new MessageEmbed()
  .setTitle("Couleurs")
  .setDescription("Cliquez sur les réactions ci-dessous pour choisir vos couleurs")
  .setColor("#00BFFF")

  client.channels.cache.get('835898278876938270').send(embed).then(message => {
    message.react('836980372209926144');
    message.react('836980373455765534');
    message.react('836980371983302726');
    message.react('836980372071645204');
    message.react('836980373677408327');
    message.react('836980373614624808');
  })
}

module.exports.help = {
  name: 'allroles2',
  description: 'Donne les rôles couleurs',
};
