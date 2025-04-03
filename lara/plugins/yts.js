const {cmd , commands} = require('../command')
const axios = require('axios')
const { Buffer } = require('buffer')


//__________________YT-SEARCH________________________
cmd({
    pattern: "yts",
    alias: ["ytsearch"],
    use: '.yts lara md whatsapp bot',
    react: "🔎",
    desc: "Search and get details from youtube.",
    category: "search",
    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try {
if (!q) return reply('*Please give me words to search*')
let yts = require("yt-search")
var arama = await yts(q);

var mesaj = '';
arama.all.map((video) => {
mesaj += ' *🌸ᴛɪᴛʟᴇ* ' + video.title + '\n*🔗ᴜʀʟ*  ' + video.url + '\n*⌛ᴅᴜʀᴀᴛɪᴏɴ* ' + video.timestamp + '\n*👀ᴠɪᴇᴡꜱ* ' + video.views + '\n*📤ᴜᴘʟᴏᴀᴅ ᴏɴ* ' + video.ago + '\n\n'
});
await conn.sendMessage(from , { text:  mesaj,
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