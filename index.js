const { Client, GatewayIntentBits, Partials } = require('discord.js');
// Client = bot discord, GatewayIntentBits = events ต่างๆที่จะดึงมาใช้
const dotenv = require('dotenv')

dotenv.config();

const client = new Client({ 
    intents: [GatewayIntentBits.Guilds], 
    partials: [Partials.Channel] 
    });

client.on('ready', ()=>{
    console.log('Your Deary is Ready !!')
});

client.on('messageCreate', msg=>{
    console.log(msg)
});

client.login(process.env.TOKEN);  