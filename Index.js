const FS = require('fs');
const { Client } = require('discord.js-selfbot-v13');
const { channel } = require('diagnostics_channel');
const Instance = new Client({
});
let skullLoopActive = false;

Instance.on('messageCreate', async (Message) => {
    if (Message.author.id !== Instance.user.id) {
        return;
    };
    const Arguments = Message.content.split(' ');
    const Command = Arguments[0];  


    if (skullLoopActive) {

        Message.react('💀');

    }  

    if (Message.content.startsWith('!skullyes')) {
        Message.delete();
        skullLoopActive = true;
        Message.channel.send('Skull reaction loop activated! 💀');

    }   

    else if (Message.content.startsWith('!flip')) {
        Message.delete();
        const s = ['Heads ', 'Tails'];
        const r = s[Math.floor(Math.random() * s.length)];
        Message.channel.send(`# [+] The coin landed on ${r} 💵`);
    }
    
});


Instance.on('ready', () => {
    console.log('Skullbot is ready for easy use.');
});

FS.readFile('./Information.json', 'utf8', (Error, Data) => {
    if (Error) {
        console.error('Error reading the file: ', Error);

        return;
    };

    const Json = JSON.parse(Data);
    const Token = Json.Token;

    try {
        Instance.login(Token);
    } catch (Error) {
        console.error('Error logging in: ', Error);

        return;
    };
});