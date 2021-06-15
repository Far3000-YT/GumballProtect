module.exports = (client,messageReaction, user) => {
  const message = messageReaction.message;
  const member = message.guild.members.cache.get(user.id);
  const emoji = messageReaction.emoji.name;
  const channel = message.guild.channels.cache.find(c => c.id === '835898278876938270');
  const rougeRole = message.guild.roles.cache.get('854260214550495232');
  const orangeRole = message.guild.roles.cache.get('854260215292362802');
  const jauneRole = message.guild.roles.cache.get('854260216043405332');
  const vertRole = message.guild.roles.cache.get('854260216723537931');
  const bleuRole = message.guild.roles.cache.get('854260217454133289');
  const violetRole = message.guild.roles.cache.get('854260218333757451');

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

  const newsRole = message.guild.roles.cache.get('854260226320629760');
  const gwRole = message.guild.roles.cache.get('854260225121320981');
  const partRole = message.guild.roles.cache.get('854260224834404384');
  
  if (member.user.bot) return;

  if (["pin","giveaway2","love"].includes(emoji)) {
    switch(emoji) {
      case "pin":
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
