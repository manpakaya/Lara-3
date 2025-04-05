const { cmd, commands } = require('../command');
const yts = require('yt-search');
const { fetchJson } = require('../functions');

// Function to extract the video ID from youtu.be or YouTube links
function extractYouTubeId(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

// Function to convert any YouTube URL to a full YouTube watch URL
function convertYouTubeLink(q) {
    const videoId = extractYouTubeId(q);
    if (videoId) {
        return `https://www.youtube.com/watch?v=${videoId}`;
    }
    return q;
}

cmd({
    pattern: "video2",
    alias: ["ytv2"],
    desc: "To download songs.",
    react: "🎬",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        q = convertYouTubeLink(q);
        if (!q) return reply("*`Need YT_URL or Title`*");
        const search = await yts(q);
        const data = search.videos[0];
        const url = data.url;

        let desc = `
✾━┫ *⚬Lααɾα-ᴠᴇᴅɪᴏ⚬* ┣━✾
              *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*

> ❍ *ᴛɪᴛʟᴇ :* ${data.title}
> ❍ *ᴅᴜʀᴀᴛɪᴏɴ :* ${data.timestamp}
> ❍ *ᴠɪᴇᴡꜱ :* ${data.views}
> ❍ *ᴜᴘʟᴏᴀᴅ ᴏɴ :* ${data.ago}

> Lααɾα-ᴍᴅ ✻
`;
let info = `
*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*
 `;   
const sentMsg = await conn.sendMessage(from, {
            image: { url: data.thumbnail},
            caption: desc,
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
     
     const down =  await fetchJson(`https://api.agatz.xyz/api/ytmp4?url=${url}`);
     const laraDown = down.data.downloadUrl;
     await conn.sendMessage(
    from, 
    { 
        video: {
            url: laraDown
        },
        caption: '*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*',
	    ptv: false // if set to true, will send as a `video note`
    },
{quoted: mek});
await conn.sendMessage(from, { delete: sentMsg.key });

 } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

cmd({
    pattern: "video",
    alias: ["ytv","ytmp4"],
    desc: "To download songs.",
    react: "🎬",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        q = convertYouTubeLink(q);
        if (!q) return reply("*`Need YT_URL or Title`*");
        const search = await yts(q);
        const data = search.videos[0];
        const url = data.url;

        let desc = `
✾━┫ *⚬Lααɾα-ᴠᴇᴅɪᴏ⚬* ┣━✾
              *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*

> ❍ *ᴛɪᴛʟᴇ :* ${data.title}
> ❍ *ᴅᴜʀᴀᴛɪᴏɴ :* ${data.timestamp}
> ❍ *ᴠɪᴇᴡꜱ :* ${data.views}
> ❍ *ᴜᴘʟᴏᴀᴅ ᴏɴ :* ${data.ago}

> Lααɾα-ᴍᴅ ✻
`;
let info = `
*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*
 `;   
const sentMsg = await conn.sendMessage(from, {
            image: { url: data.thumbnail},
            caption: desc,
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
     
     const down =  await fetchJson(`https://apis-keith.vercel.app/download/dlmp4?url=${url}`);
     const laraDown = down.result.downloadUrl;
     await conn.sendMessage(
    from, 
    { 
        video: {
            url: laraDown
        },
        caption: '*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*\n> 720P',
	    ptv: false // if set to true, will send as a `video note`
    },
{quoted: mek});
await conn.sendMessage(from, { delete: sentMsg.key });

 } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});