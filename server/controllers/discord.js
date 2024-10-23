const dotenv = require('dotenv');
dotenv.config();
const { Client, GatewayIntentBits, ChannelType } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    const guild = client.guilds.cache.get(process.env.DISCORD_GUILD_ID);
    createChannel(guild, 'test');
});

function getChannelIDs(fetch) {
    return client.guilds.channels.fetch(process.env.DISCORD_GUILD_ID);
};

function createChannel(guild, channelName) {
    guild.channels.create({
        name: channelName,
        type: ChannelType.GuildText,
    })
}

client.login(process.env.DISCORD_TOKEN);