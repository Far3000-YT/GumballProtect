
module.exports = async (client,messageReaction, user) => {
  const message = messageReaction.message;
  const member = message.guild.members.cache.get(user.id);
  const emoji = messageReaction.emoji.name;
  const valideRole = message.guild.roles.cache.get('835898952372191242');
  if (member.user.bot) return;
  
  if(messageReaction.partial) {
    await messageReaction.fetch();
    return;
  }

  if (["valide"].includes(emoji)) {
    switch(emoji) {
      case "valide":
        member.roles.add(valideRole);
        break;
    }
  }


  const rougeRole = message.guild.roles.cache.get('835933265328078899');
  const orangeRole = message.guild.roles.cache.get('835933437918576750');
  const jauneRole = message.guild.roles.cache.get('835933404360867922');
  const vertRole = message.guild.roles.cache.get('835933371552366632');
  const bleuRole = message.guild.roles.cache.get('835933337046220880');
  const violetRole = message.guild.roles.cache.get('835933511872675850');

  if (member.user.bot) return;
  
  if(messageReaction.partial) {
    await messageReaction.fetch();
    return;
  }

  if (["redverify","orangeverify","yellowverify","greenverify","blueverify","purpleverify"].includes(emoji)) {
    switch(emoji) {
      case "redverify":
        member.roles.add(rougeRole);
        break;
      case "orangeverify":
        member.roles.add(orangeRole);
        break;
      case "yellowverify":
        member.roles.add(jauneRole);
        break;
      case "greenverify":
        member.roles.add(vertRole);
        break;
      case "blueverify":
        member.roles.add(bleuRole);
        break;
      case "purpleverify":
        member.roles.add(violetRole);
        break;
    }
  }


  const newsRole = message.guild.roles.cache.get('846841817776521266');
  const gwRole = message.guild.roles.cache.get('846841873649369118');
  const partRole = message.guild.roles.cache.get('846841670053003289');

  if (member.user.bot) return;
  
  if(messageReaction.partial) {
    await messageReaction.fetch();
    return;
  }

  if (["alerte","giveaway2","love"].includes(emoji)) {
    switch(emoji) {
      case "alerte":
        member.roles.add(newsRole);
        break;
      case "giveaway2":
        member.roles.add(gwRole);
        break;
      case "love":
        member.roles.add(partRole);
        break;
    }
  }
}
