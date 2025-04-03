const { cmd, commands } = require('../command');
const { fetchJson } = require("../functions");

cmd({
  'pattern': 'ai',
  'alias': ["mistra", "zimai"],
  'react': '🪄',
  'desc': "AI chat.",
  'category': 'main',
  'filename': __filename
}, async (bot, message, options, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    if (!q) {
      return reply("Please ask a question or provide input for the AI.");
    }

    // Fetch AI response from API
    const aiResponse = await fetchJson("https://pikabotzapi.vercel.app/ai/mistral/?apikey=anya-md&message=" + q);
    
    console.log(aiResponse);

    if (!aiResponse.message) {
      return reply("No response from the AI.");
    }

    return reply("*Lααɾα-ᴍᴅ ✻* " + aiResponse.message);
  } catch (error) {
    console.error(error);
    reply("An error occurred: " + error.message);
  }
});
