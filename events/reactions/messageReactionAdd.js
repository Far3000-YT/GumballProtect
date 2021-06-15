
module.exports = async (client,messageReaction, user) => {
  const message = messageReaction.message;
  const member = message.guild.members.cache.get(user.id);
  const emoji = messageReaction.emoji.name;
  const valideRole = message.guild.roles.cache.get('854260219935588352');
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


  const rougeRole = message.guild.roles.cache.get('854260214550495232');
  const orangeRole = message.guild.roles.cache.get('854260215292362802');
  const jauneRole = message.guild.roles.cache.get('854260216043405332');
  const vertRole = message.guild.roles.cache.get('854260216723537931');
  const bleuRole = message.guild.roles.cache.get('854260217454133289');
  const violetRole = message.guild.roles.cache.get('854260218333757451');

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


  const newsRole = message.guild.roles.cache.get('854260226320629760');
  const gwRole = message.guild.roles.cache.get('854260225121320981');
  const partRole = message.guild.roles.cache.get('854260224834404384');

  if (member.user.bot) return;
  
  if(messageReaction.partial) {
    await messageReaction.fetch();
    return;
  }

  if (["pin","giveaway2","love"].includes(emoji)) {
    switch(emoji) {
      case "pin":
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
