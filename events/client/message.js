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

  if (command.help.permissions && !message.member.hasPermission('KICK_MEMBERS')) return message.reply("You do not have enough permissions to use this command !")

  if (command.help.args && !args.length) {
    let noArgsReply = `${message.author}, you need to add an argument for this command !`;

    if (command.help.usage) noArgsReply += `\nThis is how to use the command : \`${PREFIX}${command.help.name} ${command.help.usage}\``

    return message.channel.send(noArgsReply);
  }

  if (command.help.isUserAdmin && !user) return message.reply("You have to mention the user !")
  if (command.help.isUserAdmin && message.guild.member(message.mentions.users.first()).hasPermission('KICK_MEMBERS')) return message.reply("You can't use this command on a user !")

  command.run(client, message, args, settings);
}
