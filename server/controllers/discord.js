const dotenv = require('dotenv');
dotenv.config();
// const { Client, GatewayIntentBits, ChannelType } = require('discord.js');
// const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const axios = require('axios');

const headers = { 
    Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
    ContentType: 'application/x-www-form-urlencoded',
    Accept: 'application/json',
};

async function fetchTest() {
    const body = {
        content: 'Hello, world!',
    }
    axios.post(`https://discord.com/api/v10/channels/1298957564062732330/messages`, body, { headers })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
}

async function uploadFile() {
    const body = {
        content: "a",
        attachment: './test.txt'
    }
    axios.post(`https://discord.com/api/v10/channels/1298957564062732330/messages`, body, { headers })
}

function getChannelIDs() {
    const guild = client.guilds.cache.get(process.env.DISCORD_GUILD_ID);
    const channels = guild.channels.cache;
    const channelIDs = { categories: {}, text: {}, voice: {} };
    channels.forEach(channel => {
        switch (channel.type) {
            case ChannelType.GuildCategory:
                channelIDs.categories[channel.name] = channel.id;
                break;
            case ChannelType.GuildText:
                channelIDs.text[channel.name] = channel.id;
                break;
            case ChannelType.GuildVoice:
                channelIDs.voice[channel.name] = channel.id;
                break;
        }
    });
    return channelIDs;
};

async function createCategory(categoryName) {
    try {
        // await client.login(process.env.DISCORD_TOKEN);
        client.on('ready', async () => {
            const guild = client.guilds.cache.get(process.env.DISCORD_GUILD_ID);
            guild.channels.create({
                name: categoryName,
                type: ChannelType.GuildCategory,
            })
            console.log(`Created category ${categoryName}`);
            // await client.destroy(process.env.DISCORD_TOKEN);
        });
    } catch (error) {
        console.log(error)
    }
}

async function createChannel(channelName, parentCategory) {
    try {
        // await client.login(process.env.DISCORD_TOKEN);
        client.on('ready', async () => {
            const guild = client.guilds.cache.get(process.env.DISCORD_GUILD_ID);
            guild.channels.create({
                name: channelName,
                type: ChannelType.GuildText,
                parent: parentCategory,
            })
            console.log(`Created channel ${channelName} in category ${parentCategory}`);
            // await client.destroy(process.env.DISCORD_TOKEN);
        });
    } catch (error) {
        console.log(error)
    }
}

// getChannelIDs();
// fetchTest();
uploadFile();