const Discord = require('discord.js')
const client = new Discord.Client()

//const config = require('./config.json')
const poll = require('./poll')

client.on('ready', () => {
  console.log('The client is ready!')

  poll(client)
})

client.login('NzYzMzQyNDI0ODMwNTA5MDc2.X32UCA.P_j1WExAo2q6QQuusapkcaF6MTc')