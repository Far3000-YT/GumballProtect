module.exports = (client,messageReaction, user) => {
  const message = messageReaction.message;
  const member = message.guild.members.cache.get(user.id);
  const emoji = messageReaction.emoji.name;
  const channel = message.guild.channels.cache.find(c => c.id === '835898278876938270');
  const rougeRole = message.guild.roles.cache.get('835933265328078899');
  const orangeRole = message.guild.roles.cache.get('835933437918576750');
  const jauneRole = message.guild.roles.cache.get('835933404360867922');
  const vertRole = message.guild.roles.cache.get('835933371552366632');
  const bleuRole = message.guild.roles.cache.get('835933337046220880');
  const violetRole = message.guild.roles.cache.get('835933511872675850');

  if (member.user.bot) return;

  if (["redverify","orangeverify","yellowverify","greenverify","blueverify","purpleverify"].includes(emoji)) {
    switch(emoji) {
      case "redverify":
        member.roles.remove(rougeRole);
        break;
      case "orangeverify":
        member.roles.remove(orangeRole);
        break;
      case "yellowverify":
        member.roles.remove(jauneRole);
        break;
      case "greenverify":
        member.roles.remove(vertRole);
        break;
      case "blueverify":
        member.roles.remove(bleuRole);
        break;
      case "purpleverify":
        member.roles.remove(violetRole);
        break;
    }
  }

  const newsRole = message.guild.roles.cache.get('835934922672701466');
  const gwRole = message.guild.roles.cache.get('835934662815514655');
  const partRole = message.guild.roles.cache.get('835934655697125417');

  if (member.user.bot) return;

  if (["alerte","giveaway2","love"].includes(emoji)) {
    switch(emoji) {
      case "alerte":
        member.roles.remove(newsRole);
        break;
      case "giveaway2":
        member.roles.remove(gwRole);
        break;
      case "love":
        member.roles.remove(partRole);
        break;
    }
  }
}
