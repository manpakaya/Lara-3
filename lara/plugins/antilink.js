const { cmd } = require('../command')
const fs = require('fs');
const path = require('path');
const config = require('../../settings')
// List of bad words to check against
 // Replace with actual words
cmd({
  on: "body"
},
async (conn,mek, m, { from, body, isGroup, isAdmins, isBotAdmins, reply, sender }) => {
    try {
    
        const badWords = ["wtf", "mia", "xxx","fuck","sex","huththa","pakaya","ponnaya","hutto","lol"]
        if (!isGroup || isAdmins || !isBotAdmins) return; // Skip if not in group, or sender is admin, or bot is not admin
      
        const lowerCaseMessage = body.toLowerCase();
        const containsBadWord = badWords.some(word => lowerCaseMessage.includes(word));
        
        if (containsBadWord & config.ANTI_BAD === 'true') {
          await conn.sendMessage(from, { delete: mek.key }, { quoted: mek });
          await conn.sendMessage(from, { text: "🚫 ⚠️BAD WORDS NOT ALLOWED⚠️ 🚫",
                contextInfo: {
    mentionedJid: ['94779062397@s.whatsapp.net'], // specify mentioned JID(s) if any
    groupMentions: [],
    forwardingScore: 1,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
        newsletterJid: '120363192254044294@newsletter',
        newsletterName: "Lααɾα-ᴍᴅ ✻",
        serverMessageId: 999
    },
    externalAdReply: {
        title: 'LARA MD',
        body: 'ꜱᴀᴅᴇᴇꜱʜᴀ ᴛʜᴀʀᴜᴍɪɴ',
        mediaType: 1,
        sourceUrl: "https://github.com/sadiyamin",
        thumbnailUrl: 'https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg', // This should match the image URL provided above
        renderLargerThumbnail: false,
        showAdAttribution: true
    }
}
}, {quoted: mek});
        }
    } catch (error) {
        console.error(error)
        reply("An error occurred while processing the message.")
    }
})

const linkPatterns = [
    /https?:\/\/(?:chat\.whatsapp\.com|wa\.me)\/\S+/gi,   // WhatsApp group or chat links
    /^https?:\/\/(www\.)?whatsapp\.com\/channel\/([a-zA-Z0-9_-]+)$/
];

cmd({
    on: "body"
}, async (conn, mek, m, { from, body, sender, isGroup, isAdmins, isBotAdmins, reply }) => {
    try {
        if (!isGroup || isAdmins || !isBotAdmins) return; // Skip if not in group, or sender is admin, or bot is not admin

        const containsLink = linkPatterns.some(pattern => pattern.test(body));

        if (containsLink && config.ANTI_LINK === 'true') {
            // Delete the message
            await conn.sendMessage(from, { delete: mek.key }, { quoted: mek });

            // Warn the user
            await conn.sendMessage(from, { text: `⚠️ Links are not allowed in this group.\n@${sender.split('@')[0]} has been removed. 🚫`, mentions: [sender],
                  contextInfo: {
    mentionedJid: ['94779062397@s.whatsapp.net'], // specify mentioned JID(s) if any
    groupMentions: [],
    forwardingScore: 1,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
        newsletterJid: '120363192254044294@newsletter',
        newsletterName: "Lααɾα-ᴍᴅ ✻",
        serverMessageId: 999
    },
    externalAdReply: {
        title: 'LARA MD',
        body: 'ꜱᴀᴅᴇᴇꜱʜᴀ ᴛʜᴀʀᴜᴍɪɴ',
        mediaType: 1,
        sourceUrl: "https://github.com/sadiyamin",
        thumbnailUrl: 'https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg', // This should match the image URL provided above
        renderLargerThumbnail: false,
        showAdAttribution: true
    }
}
}, {quoted: mek});

            // Remove the user from the group
            await conn.groupParticipantsUpdate(from, [sender], 'remove');
        }
    } catch (error) {
        console.error(error);
        reply("An error occurred while processing the message.");
    }
})
