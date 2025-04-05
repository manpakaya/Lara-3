const { cmd, commands } = require('../command');
const { fetchJson } = require('../functions');

cmd({
    pattern: "xvsearch",
    alias: "xvs",
    react: "🔞",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
 if (!q) return reply("*`Need Title`*"); 
 
 const xvid =  await fetchJson(`https://apis-keith.vercel.app/search/searchxvideos?q=${q}`);
 
var msg = '';
xvid.all.map((result) => {
msg += ' *🌸ᴛɪᴛʟᴇ* ' + result.title + '\n*🔗ᴜʀʟ*  ' + result.url + '\n*⌛ᴅᴜʀᴀᴛɪᴏɴ* ' + result.duration + '\n*👀Qᴜᴀʟɪᴛʏ* ' + result.quality + '\n*📎ᴠɪᴅᴇᴏ ɪᴅ* ' + result.videoId + '\n\n'
});
 
await conn.sendMessage(from , { text:  msg,
contextInfo: {
                mentionedJid: ['94779062397@s.whatsapp.net'], // specify mentioned JID(s) if any
                groupMentions: [],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363192254044294@newsletter',
                    newsletterName: "Lααɾα-ᴍᴅ ✻",
                    serverMessageId: 999
                }         
                }   
            }, {quoted: mek});

  } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});