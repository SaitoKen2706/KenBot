const discord = require('discord.js')

module.exports.run = async (client, message, args, prefix) => {
  message.channel.send("Test prefix")
}

module.exports.help = {
  name: "ping",
  aliases: ["p"],
}