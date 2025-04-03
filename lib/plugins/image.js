const {cmd , commands} = require('../command');
const { igdl } = require('ruhend-scraper');
const axios = require('axios');

cmd({
    pattern: "img2",
    alias: ["image","photo"],
    desc: "To download facebook videos.",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) {
      return reply("*`Please provide a search query for the image.`*");
    }
    const query = encodeURIComponent(q);
    const apiKey = "AIzaSyAskJZkqxVyAzZpfvqN5jI9SNZQ984ftMw";
    const cx = "4258e6a0d3f004974";
    const searchUrl = `https://www.googleapis.com/customsearch/v1?q=${query}&cx=${cx}&key=${apiKey}&searchType=image&num=5`;
    const response = await axios.get(searchUrl);
    const searchResults = response.data;

    if (!searchResults.items || searchResults.items.length === 0) {
      return reply("No images found for your query.");
    }

    for (let i = 0; i < searchResults.items.length; i++) {
      const imageUrl = searchResults.items[i].link;
      const axiosConfig = { responseType: "arraybuffer" };
      const imageResponse = await axios.get(imageUrl, axiosConfig);
      const imageBuffer = Buffer.from(imageResponse.data, "binary");
      const messageOptions = { quoted: mek };

      await conn.sendMessage(from, {
        image: imageBuffer,
        caption: `\n*Image ${i + 1} from your search!*\n*LARA-MD IMG DOWNLOADER*\n\n> *© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*\n`
      }, messageOptions);
    }
  } catch (error) {
    console.error(error);
    reply("Error: " + error.message);
  }
});
