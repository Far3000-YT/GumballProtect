const { Client, Collection } = require('discord.js');
const { TOKEN, PREFIX } = require('./config');
const randomstring = require("randomstring");
const { loadCommands, loadEvents } = require("./util/loader");

const client = new Client({ partials: ['MESSAGE', 'CHANNEL' ,'REACTION'] });
require("./util/functions")(client);
client.mongoose = require('./util/mongoose');
client.commands = new Collection();

loadCommands(client);
loadEvents(client);
client.mongoose.init();

client.login(TOKEN);
