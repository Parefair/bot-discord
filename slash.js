const dotenv = require('dotenv')

dotenv.config();

const { Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
  {
    name: 'tik',
    description: 'Replies with Tok!',
  },
  {
    name: 'jing',
    description: 'Replies with Jang!',
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();