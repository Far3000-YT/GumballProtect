module.exports.run = (client,message,args) => {
  message.channel.send("Pong !");
};

module.exports.help = {
  name: 'ping',
  description: 'Renvoie pong !',
  isUserAdmin: false,
  permissions: false,
  args: false
};
