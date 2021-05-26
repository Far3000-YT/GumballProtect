module.exports.run = async (client,message,args) => {
    message.channel.clone().then(c => {
        message.channel.delete()
        c.send("The channel has been nuked !\nhttps://imgur.com/LIyGeCR")
    })
};

module.exports.help = {
  name: 'nuke',
  description: "Recréé un salon",
  usage: '<>',
  isUserAdmin: false,
  permissions: true,
  args: false
};
