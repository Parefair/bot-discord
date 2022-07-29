const { Client, GatewayIntentBits } = require('discord.js');
// Client = bot discord, GatewayIntentBits = events ต่างๆที่จะดึงมาใช้
const dotenv = require('dotenv')

dotenv.config();

const client = new Client({ 
    intents: [GatewayIntentBits.Guilds], 
    });

client.once('ready', account => {
    console.log(`Your Deary is Ready !! Login as ${account.user.tag}`);
});

client.on('interactionCreate', interaction => {
	console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
});

client.login(process.env.TOKEN);  