const {cmd , commands} = require('../command');
const { fetchJson } = require('../functions');

cmd({
    pattern: "download",
    alias: ["downurl"],
    use: '.yts lara md whatsapp bot',
    react: "📁",
    desc: "Search and get details from youtube.",
    category: "search",
    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try {
    if (!q) {
      return reply("❗ කරුණාකර download link එකක් ලබා දෙන්න."); // "Please provide a download link."
    }

    const link = q.trim();
    const urlPattern = /^(https?:\/\/[^\s]+)/;

    if (!urlPattern.test(link)) {
      return reply("❗ දීලා තියෙන URL එක වැරදි. කරුණාකර link එක හොඳින් බලන්න."); // "The provided URL is incorrect. Please check the link carefully."
    }
let info = `*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*`;

   await conn.sendMessage(from, {
                        document: { url: link},
                        mimetype: "video/mp4",
                        fileName: `Lααɾα-ᴍᴅ ✻.mp4`, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
                        caption: info
                                            
                      }, { quoted: mek });

} catch (e) {
        console.log(e);
        reply(`${e}`);
        }
    });  
