const { Collection } = require('discord.js');
const { PREFIX } = require('../../config');

module.exports = async (client, message) => {
  if (!message.content.startsWith(PREFIX) || message.author.bot) return;

  const settings = await client.getGuild(message.guild);

  const args = message.content.slice(PREFIX.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  const user = message.mentions.users.first();

  if (!client.commands.has(commandName)) return;
  const command = client.commands.get(commandName);

  if (command.help.permissions && !message.member.hasPermission('KICK_MEMBERS')) return message.reply("Tu n'as pas les permissions nécessaires pour utiliser cette commande")

  if (command.help.args && !args.length) {
    let noArgsReply = `${message.author}, il faut un argument pour cette commande !`;

    if (command.help.usage) noArgsReply += `\nVoici comment utiliser la commande : \`${PREFIX}${command.help.name} ${command.help.usage}\``

    return message.channel.send(noArgsReply);
  }

  if (command.help.isUserAdmin && !user) return message.reply("Il faut mentionner un utilisateur !")
  if (command.help.isUserAdmin && message.guild.member(message.mentions.users.first()).hasPermission('KICK_MEMBERS')) return message.reply("Tu ne peux pas utiliser cette commande sur cet utilisateur !")

  command.run(client, message, args, settings);
}
