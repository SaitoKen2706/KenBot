const {MessageEmbed} = require("discord.js")
const client = require('../index.js').client
const {PREFIX} = require("../Data/config.json");
client.on("messageCreate", async (message) => {
	if (message.author.bot || message.channel.type == "DM") return
	let prefix = PREFIX
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1)
  //SHARK======================================
    if (cmd == "sharkbank" || cmd == "Sharkbank"|| cmd == "sb") {
        const mess = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`**${client.emojis.cache.find(emoji => emoji.name === 'kenarrow')} Bank Dark Shark\n
${client.emojis.cache.find(emoji => emoji.name === 'kenmomo')} 0917770120\n
${client.emojis.cache.find(emoji => emoji.name === 'cardvip')} hoanganhnguyen7h@gmail.com\n
${client.emojis.cache.find(emoji => emoji.name === 'kencard')} Ngân hàng đông á (STK:0101629358)**`)
        return message.channel.send({content: `<@!${message.author.id}>`,embeds: [mess]})
      }
  
    if (cmd == "<@853973754043564042>"){
        return message.channel.send({content: `**<@${message.author.id}> vui lòng đừng ping Shark nữa nếu ko muốn bị Ken yêu**`})
    }
    //BOT REPLY======================================
    if (cmd == "<@984524514010497044>") {
        const mess = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`**Hả tag gì, tui là bot chứ hong phải người nha **`)
        return message.channel.send({content: `<@!${message.author.id}>`,embeds: [mess]})
    }

    //Ken BOT===========================================
  if (cmd == "Ken" || cmd == "ken"){
        return message.channel.send({content: `**Nếu <@${message.author.id}> muốn tạo bot giống vậy thì dms <@498382972542648330> nhe hehe ${client.emojis.cache.find(emoji => emoji.name === 'Cat_Cute')}**`})
      }

    if (cmd == "<@498382972542648330>"){
        return message.channel.send({content: `Thằng chủ tệ bạc đi ngủ bỏ tui òi có gì <@${message.author.id}> nhắn với tui nè ${client.emojis.cache.find(emoji => emoji.name === 'anime_cry')} \n||Mặc dù tui chỉ là bot||`})
      }

    if (cmd == "Kenbank" || cmd == "kenbank"){
        return message.channel.send({content: `**Tham khảo thêm thanh toán tại: __http://thanhtoan-ken.ddns.net/__ ${client.emojis.cache.find(emoji => emoji.name === 'blob_dance')}**`})
    }
  //======================================================
  
    let commands = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)))
    if(commands) {
    	if (!message.content.startsWith(prefix)) return
    	commands.run(client, message, args, prefix);
    } 
})