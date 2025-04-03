const { cmd, commands } = require('../command');
const { fetchJson } = require('../functions');

cmd({
  pattern: "tiktok",
  alias: ['tt', 'ttdown'],
  react: "🎥",
  desc: "Download For Tiktok Videos",
  category: "download",
  filename: __filename
}, async (bot, message, args, { from, quoted, reply, q }) => {
  try {
    if (!q) {
      return await reply("Please provide a TikTok URL.");
    }
    
    if (!q.includes('tiktok.com')) {
      return await reply("This URL is invalid.");
    }

    const contextInfo = {
      forwardingScore: 1,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterName: "Lααɾα-ᴍᴅ ✻",
        newsletterJid: "120363382823666763@newsletter"
      }
      //externalAdReply: {
        //title: "𝐒𝐄𝐎𝐍 𝐌𝐃 𝐖𝐀 𝐁𝐎𝐓",
        //body: "A Seon MD WA bot made by Dark Cyber Maker",
        //sourceUrl: "https://www.youtube.com/@Sadiya-Tech",
        //thumbnailUrl: "https://i.ibb.co/h2GC8Jn/20241228-171651.png",
        //mediaType: 1,
        //renderLargerThumbnail: false
      //}
    };

    const apiResponse = await fetchJson(`https://api.agatz.xyz/api/tiktok?url=${q}`);

    const downloadMessage = `
┏━┫ *⚬Lααɾα-ᴍᴅ-ᴛɪᴋᴛᴏᴋ⚬* ┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻ 
    
> *TITLE :* ${apiResponse.data.title}
> *Author :* ${apiResponse.data.author.fullname}
> *DURATION :* ${apiResponse.data.duration}
> *VIEWS :* ${apiResponse.data.stats.views}

*1.1 | No-Watermark-01*
*1.2 | No-Watermark-SD*
*1.3 | No-Watermark-HD*
*1.4 | AUDIO DOWNLOAD*
 
> Lααɾα-ᴍᴅ ✻
`;

    const sentMessage = await bot.sendMessage(from, {
      image: { url: apiResponse.data.cover || '' },
      caption: downloadMessage,
      contextInfo
    }, { quoted: message });

    bot.ev.on("messages.upsert", async (msgUpdate) => {
      const receivedMessage = msgUpdate.messages[0];

      if (!receivedMessage.message || !receivedMessage.message.extendedTextMessage) {
        return;
      }

      const userResponse = receivedMessage.message.extendedTextMessage.text.trim();

      if (receivedMessage.message.extendedTextMessage.contextInfo &&
          receivedMessage.message.extendedTextMessage.contextInfo.stanzaId === sentMessage.key.id) {
        
        switch (userResponse) {
          case '1.1':
            await bot.sendMessage(from, {
              video: { url: apiResponse.data.data[0].url },
              mimetype: "video/mp4",
              caption: `*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*`,
              contextInfo
            }, { quoted: receivedMessage });
            break;

          case '1.2':
            await bot.sendMessage(from, {
              video: { url: apiResponse.data.data[1].url },
              mimetype: "video/mp4",
              caption: `*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*`,
              contextInfo
            }, { quoted: receivedMessage });
            break;

          case '1.3':
            await bot.sendMessage(from, {
              video: { url: apiResponse.data.data[2].url },
              mimetype: "video/mp4",
              caption: `*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*`,
              contextInfo
            }, { quoted: receivedMessage });
            break;

          case '1.4':
            await bot.sendMessage(from, {
              audio: { url: apiResponse.data.music_info.url },
              mimetype: "audio/mpeg",
              contextInfo
            }, { quoted: receivedMessage });
            break;

          default:
            await bot.sendMessage(from, {
              text: "❌ Invalid option. Please select a valid number."
            }, { quoted: receivedMessage });
            break;
        }
      }
    });

  } catch (error) {
    console.error(error);
    await reply("❌ *I couldn't find anything. Please try again later...*");
    await bot.sendMessage(botNumber + "@s.whatsapp.net", {
      text: `❗ *Error Info:* ${error}`
    }, { quoted: message });
  }
});


cmd({
  pattern: "tiktok3",
  alias: ['tt3', 'ttdown3'],
  react: "🎥",
  desc: "Download TikTok Videos",
  category: "download",
  filename: __filename
}, async (bot, message, args, { from, quoted, reply, q }) => {
  try {
    if (!q) return await reply("*`Please provide a TikTok URL.`*");
    
    if (!q.includes('tiktok.com')) return await reply("This URL is invalid.");

    const apiUrl = `https://dark-shan-yt.koyeb.app/download/tiktok?url=${encodeURIComponent(q)}`;
    const apiResponse = await fetchJson(apiUrl);

    if (!apiResponse.status || !apiResponse.data) {
      return await reply("❌ Could not fetch video details.");
    }

    const videoData = apiResponse.data;
    const videoOptions = videoData.data;

    const downloadMessage = `
┏━┫ *⚬Lααɾα-ᴍᴅ-ᴛɪᴋᴛᴏᴋ⚬* ┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
> *Title:* ${videoData.title}
> *Author:* ${videoData.author.fullname}
> *Duration:* ${videoData.duration}
> *Views:* ${videoData.stats.views}
      
*🔢 ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ*

*1.1 | No Watermark - SD*
*1.2 | No Watermark - HD*
*1.3 | Watermarked*
*1.4 | AUDIO*

> Lααɾα-ᴍᴅ ✻`;

    const sentMessage = await conn.sendMessage(from, {
      image: { url: videoData.cover || '' },
      caption: downloadMessage,
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

    bot.ev.on("messages.upsert", async (msgUpdate) => {
      const receivedMessage = msgUpdate.messages[0];

      if (!receivedMessage.message || !receivedMessage.message.extendedTextMessage) return;

      const userResponse = receivedMessage.message.extendedTextMessage.text.trim();

      if (receivedMessage.message.extendedTextMessage.contextInfo &&
          receivedMessage.message.extendedTextMessage.contextInfo.stanzaId === sentMessage.key.id) {
        
        let downloadUrl;
        let captionText = "© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*";

        switch (userResponse) {
          case '1.1':
            downloadUrl = videoOptions.find(v => v.type === "nowatermark")?.url;
            break;
          case '1.2':
            downloadUrl = videoOptions.find(v => v.type === "nowatermark_hd")?.url;
            break;
          case '1.3':
            downloadUrl = videoOptions.find(v => v.type === "watermark")?.url;
            break;
          case '1.4':
            downloadUrl = videoData.music_info.url;
            captionText = "© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*";
            break;
          default:
            return await conn.sendMessage(from, { text: "❌ Invalid option. Try again." }, { quoted: receivedMessage });
        }

        if (downloadUrl) {
          const mediaType = userResponse === '4' ? "audio/mpeg" : "video/mp4";
          await bot.sendMessage(from, {
            [userResponse === '4' ? "audio" : "video"]: { url: downloadUrl },
            mimetype: mediaType,
            caption: captionText
          }, { quoted: mek });
        }
      }
    });

  } catch (error) {
    console.error(error);
    await reply("❌ Error fetching the video. Please try again later.");
  }
});