const { MessageEmbed } = require('discord.js');

module.exports.run = (client,message,args) => {
  const rougeRole = message.guild.roles.cache.get('854260214550495232');
  const orangeRole = message.guild.roles.cache.get('854260215292362802');
  const jauneRole = message.guild.roles.cache.get('854260216043405332');
  const vertRole = message.guild.roles.cache.get('854260216723537931');
  const bleuRole = message.guild.roles.cache.get('854260217454133289');
  const violetRole = message.guild.roles.cache.get('854260218333757451');

  const embed = new MessageEmbed()
  .setTitle("Couleurs")
  .setDescription("Cliquez sur les réactions ci-dessous pour choisir vos couleurs")
  .setColor("#00BFFF")

  client.channels.cache.get('854260242601476156').send(embed).then(message => {
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
