module.exports.run = (client,message,args) => {
  message.channel.send(args.join(" "));
};

module.exports.help = {
  name: 'say',
  description: "Renvoie les arguments que l\'utilisateur envoie",
  usage: '<votre_message>',
  isUserAdmin: false,
  permissions: false,
  args: true
};
