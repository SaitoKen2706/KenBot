const client = require('../index.js').client
client.on("interactionCreate", async (interaction) => {
  if (interaction.isCommand()) {
    let slashcmd = client.SlashCmds.get(interaction.commandName)
    if (!interaction.member.permissions.has(slashcmd.help.permission)) return interaction.reply({ content: "No perm!" })
    if (slashcmd) slashcmd.run(client, interaction);
  }
})