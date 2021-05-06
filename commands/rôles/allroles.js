const { MessageEmbed } = require('discord.js');

module.exports.run = (client,message,args) => {
  const valideRole = message.guild.roles.cache.get('835898952372191242');

  const embed = new MessageEmbed()
  .setTitle("Vérification")
  .setDescription("Cliquez sur la réaction ci-dessous pour accéder au reste du serveur")
  .setColor("#00BFFF")

  client.channels.cache.get('835897653111685160').send(embed).then(message => {
    message.react('835920851299729438');
  })
}

module.exports.help = {
  name: 'allroles',
  description: 'Donne le rôle membre pour accéder au reste du serveur',
};
