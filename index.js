const Discord = require('discord.js')
const client = new Discord.Client()

//const config = require('./config.json')
const poll = require('./poll')

client.on('ready', () => {
    console.log('The client is ready!')

    poll(client)
})
console.log(process.env.btoken)
client.login(process.env.btoken)