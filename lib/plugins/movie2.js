const axios = require('axios');
const { cmd, commands } = require('../command');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const { fetchJson } = require('../functions');

cmd({
    pattern: "movie",
    alias: ["sinhalasub"],
    react: '📑',
    category: "download",
    desc: "Search movies on sinhalasub and get download links",
    filename: __filename
}, async (conn, m, mek, { from, q, reply }) => {
    try {
        if (!q) return await reply('*Please provide a search query! (e.g., Deadpool)*');
        const msApi = await fetchJson("https://www.dark-yasiya-api.site/movie/sinhalasub/search?text=${q}")
        
        const searchResults = msApi.result.data(0, 10);
        
        if (!searchResults || searchResults.length === 0) {
            return await reply(`No results found for: ${q}`);
        }

        let resultsMessage = `🔢 *ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ*\n\n📽️ *Search Results for* "${q}":\n\n`;
        searchResults.forEach((result, index) => {
            resultsMessage += `*${index + 1}.* ${data.title}\n🔗 Link: ${data.link}\n\n`;
        });

        const sentMsg = await conn.sendMessage(from, { text: resultsMessage, 
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
        const messageID = sentMsg.key.id;

        conn.ev.on('messages.upsert', async (messageUpdate) => {
            const replyMek = messageUpdate.messages[0];
            if (!replyMek.message) return;
            const messageType = replyMek.message.conversation || replyMek.message.extendedTextMessage?.text;
            const isReplyToSentMsg = replyMek.message.extendedTextMessage && replyMek.message.extendedTextMessage.contextInfo.stanzaId === messageID;

            if (isReplyToSentMsg) {
                const selectedNumber = parseInt(messageType.trim());
                if (!isNaN(selectedNumber) && selectedNumber > 0 && selectedNumber <= searchResults.length) {
                    const selectedMovie = searchResults[selectedNumber - 1];

                    const apiUrl = `https://api-site-2.vercel.app/api/sinhalasub/movie?url=${encodeURIComponent(selectedMovie.link)}`;
                    try {
                        const response = await axios.get(apiUrl);
                        const movieData = response.data.result;

                        // Only use `dl_links1` for PixelDrain links
                        const pixelDrainLinks = movieData.dl_links || [];
                        if (pixelDrainLinks.length === 0) {
                            return await reply('No PixelDrain links found.');
                        }

                        let downloadMessage = `🔢 *Please reply with the number you want to select*\n\n🎥 *${movieData.title}*\n\n`;
                        downloadMessage += `*Available PixelDrain Download Links:*\n`;

                        pixelDrainLinks.forEach((link, index) => {
                            downloadMessage += `*${index + 1}.* ${link.quality} - ${link.size}\n🔗 Link: ${link.link}\n\n`;
                        });

                        const pixelDrainMsg = await conn.sendMessage(from, { text: downloadMessage,
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
                     }, {quoted: replyMek});
                        const pixelDrainMessageID = pixelDrainMsg.key.id;

                        conn.ev.on('messages.upsert', async (pdUpdate) => {
                            const pdReply = pdUpdate.messages[0];
                            if (!pdReply.message) return;
                            const pdMessageType = pdReply.message.conversation || pdReply.message.extendedTextMessage?.text;
                            const isReplyToPixelDrainMsg = pdReply.message.extendedTextMessage && pdReply.message.extendedTextMessage.contextInfo.stanzaId === pixelDrainMessageID;

                            if (isReplyToPixelDrainMsg) {
                                const qualityNumber = parseInt(pdMessageType.trim());
                                if (!isNaN(qualityNumber) && qualityNumber > 0 && qualityNumber <= pixelDrainLinks.length) {
                                    const selectedPixelDrainLink = pixelDrainLinks[qualityNumber - 1];
                                    const fileId = selectedPixelDrainLink.link.split('/').pop();
                                    await conn.sendMessage(from, { react: { text: '⬇️', key: pixelDrainMsg.key } });
                                    conn.sendMessage(from, { text: "*`Downloading your movie...`*\n\n*`Wait few minits...`*\n\n> © ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ",
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

                                    const directDownloadUrl = `https://pixeldrain.com/api/file/${fileId}`;

                                    await conn.sendMessage(from, { react: { text: '⬆', key: pixelDrainMsg.key } });

                                    await conn.sendMessage(from, {
                                        document: { url: directDownloadUrl },
                                        mimetype: "video/mp4",
                                        fileName: `${movieData.title} - ${selectedPixelDrainLink.quality}.mp4`,
                                        caption: `${movieData.title}\nQuality: ${selectedPixelDrainLink.quality}\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ*`,
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

                                    await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });
                                } else {
                                    await reply('Invalid selection. Please reply with a valid number.');
                                }
                            }
                        });

                    } catch (error) {
                        console.error('Error fetching movie details:', error);
                        await reply('An error occurred while fetching movie details. Please try again.');
                    }
                } else {
                    await reply('Invalid selection. Please reply with a valid number.');
                }
            }
        });

    } catch (error) {
        console.error('Error during search:', error);
        reply('*An error occurred while searching!*');
    }
});


cmd({
    pattern: "ginisisila",
    alias: ["cartoon"],
    react: '📑',
    category: "download",
    desc: "ginisisilacartoon.net",
    filename: __filename
}, async (conn, m, mek, { from, q, isDev, reply }) => {
    try {
        if (!q) return await reply('*Please provide a search query! (e.g., Garfield)*');

        // Construct the search URL
        const searchUrl = `https://ginisisilacartoon.net/search.php?q=${encodeURIComponent(q)}`;
        const response = await axios.get(searchUrl);
        const $ = cheerio.load(response.data);

        let episodes = [];

        // Scrape episode details
        $("div.inner-video-cell").each((index, element) => {
            const title = $(element).find("div.video-title > a").attr("title");
            const postedTime = $(element).find("div.posted-time").text().trim();
            const episodeLink = $(element).find("div.video-title > a").attr("href");
            const imageUrl = $(element).find("div.inner-video-thumb-wrapper img").attr("src"); // Get episode image URL

            if (title && episodeLink) {
                episodes.push({
                    title,
                    postedTime,
                    episodeLink: `https://ginisisilacartoon.net/${episodeLink}`,
                    imageUrl: imageUrl
                });
            }
        });

        // If no episodes found
        if (episodes.length === 0) {
            return await reply(`No results found for: ${q}`);
        }

        // Prepare message info
        let info = `🔢 *Please reply with the number you want to select*\n\n📺 Search Results for *${q}:*\n\n`;
        episodes.forEach((ep, index) => {
            info += `*${index + 1}.* ${ep.title}\n🗓️ Posted: ${ep.postedTime}\n🔗 Link: ${ep.episodeLink}\n\n`;
        });

        // Send the compiled information
        const sentMsg = await conn.sendMessage(from,{ text: info,
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
        const messageID = sentMsg.key.id; // Save the message ID for later reference

        // Listen for the user's response
        conn.ev.on('messages.upsert', async (messageUpdate) => {
            const mek = messageUpdate.messages[0];
            if (!mek.message) return;
            const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
            const from = mek.key.remoteJid;
// Check if the message is a reply to the previously sent message
            const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;
            if (isReplyToSentMsg) {
                const selectedNumber = parseInt(messageType.trim());
                if (!isNaN(selectedNumber) && selectedNumber > 0 && selectedNumber <= episodes.length) {
                    const selectedEpisode = episodes[selectedNumber - 1];

                    // Send episode details with image first
                    const episodeInfo = `*🪄 ɴᴀᴍᴇ:-* ${selectedEpisode.title}\n⏳ *ᴅᴀᴛᴇ:-* ${selectedEpisode.postedTime}\n📎 *ᴇᴘɪꜱᴏᴅᴇ ʟɪɴᴋ*:- ${selectedEpisode.episodeLink}\n\n☘ *We are uploading the Movie/Episode you requested.*`;
                    const imageMessage = {
                        image: { url: selectedEpisode.imageUrl },
                        caption: episodeInfo
                    };
                    await conn.sendMessage(from, imageMessage, { quoted: mek });

                    // Fetch the episode page to extract the video link (iframe src)
                    const episodePageResponse = await axios.get(selectedEpisode.episodeLink);
                    const $ = cheerio.load(episodePageResponse.data);

                    // Extract the IFRAME src link
                    const iframeSrc = $('div#player-holder iframe').attr('src');

                    if (iframeSrc) {
                        // Call the external API to get the download link using the iframe link
                       const apiUrl = `https://www.dark-yasiya-api.site/download/ginisisila?url=${iframeSrc}`;

                        try {
                            const downloadResponse = await axios.get(apiUrl);
                            const downloadUrl = downloadResponse.result.dl_link; // Assuming this is the correct path

                            if (downloadUrl) {
                                // Send the video as a document (.mp4)
                                await conn.sendMessage(from, {
                                    document: { url: downloadUrl },
                                    mimetype: "video/mp4",
                                    fileName: `Sadeesha | ${selectedEpisode.title}.mp4`,
                                    caption: `${selectedEpisode.title} |  *SADEESHA CODER*\n\n> Laara-MD`,
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
                            } else {
                                await reply('Failed to retrieve the download link for this episode.');
                            }
                        } catch (error) {
                            console.error('Error fetching the download link:', error);
                            await reply('An error occurred while trying to fetch the download link.');
                        }

                    } else {
                        await reply('No downloadable link found for this episode.');
                    }

                } else {
                    await reply(`Please reply with a valid number from the list.`);
                }
            }
        });

    } catch (e) {
        reply('*Error occurred while scraping!*');
        console.error(e);
    }
});

//Baiscope 

cmd({
    pattern: "baiscope",
    react: '📑',
    category: "download",
    desc: "baiscope.lk",
    filename: __filename
}, async (conn, m, mek, { from, q, isDev, reply }) => {
    try {
        if (!q) return await reply('*Please provide a search query! (e.g., Avatar)*');

        // Construct the search URL
        const searchUrl = `https://www.baiscope.lk/?s=${encodeURIComponent(q)}`;
        const response = await axios.get(searchUrl);
        const $ = cheerio.load(response.data);

        let episodes = [];

        // Scrape episode details (title, link, and image)
        $("article.elementor-post").each((index, element) => {
            const title = $(element).find("h5.elementor-post__title > a").text().trim();
            const episodeLink = $(element).find("h5.elementor-post__title > a").attr("href");
            const imgUrl = $(element).find(".elementor-post__thumbnail img").attr("src");

            if (title && episodeLink && imgUrl) {
                episodes.push({
                    title,
                    episodeLink,
                    imgUrl
                });
            }
        });

        // If no episodes found
        if (episodes.length === 0) {
            return await reply(`No results found for: ${q}`);
        }

        // Prepare message info
        let info = `📺 Search Results for *${q}:*\n\n`;
        episodes.forEach((ep, index) => {
            info += `*${index + 1}.* ${ep.title}\n🔗 Link: ${ep.episodeLink}\n\n`;
        });

        // Send the compiled information
        const sentMsg = await conn.sendMessage(from,
            { text: info
             }, { quoted: mek });
        const messageID = sentMsg.key.id; // Save the message ID for later reference

        // Listen for the user's response
        conn.ev.on('messages.upsert', async (messageUpdate) => {
            const mek = messageUpdate.messages[0];
            if (!mek.message) return;
            const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
            const from = mek.key.remoteJid;

            // Check if the message is a reply to the previously sent message
            const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;
            if (isReplyToSentMsg) {
                const selectedNumber = parseInt(messageType.trim());
                if (!isNaN(selectedNumber) && selectedNumber > 0 && selectedNumber <= episodes.length) {
                    const selectedEpisode = episodes[selectedNumber - 1];

                    // Fetch the download link from the selected episode page
                    const episodeResponse = await axios.get(selectedEpisode.episodeLink);
                    const $episodePage = cheerio.load(episodeResponse.data);
                    const downloadLink = $episodePage("a.dlm-buttons-button").attr("href");

                    if (downloadLink) {
                        // Send the image of the selected episode along with the details
                        await conn.sendMessage(from, {
                            image: { url: selectedEpisode.imgUrl },
                            caption: `🎬 *${selectedEpisode.title}*\n🔗 Link: ${selectedEpisode.episodeLink}\n⬇️ Download will follow.`                        
                        }, { quoted: mek });

                        // Download the ZIP file
                        const zipFilePath = path.join(__dirname, 'downloaded_episode.zip');
                        const writer = fs.createWriteStream(zipFilePath);

                        const downloadResponse = await axios({
                            url: downloadLink,
                            method: 'GET',
                            responseType: 'stream'
                        });
downloadResponse.data.pipe(writer);

                        writer.on('finish', async () => {
                            // Once the download is complete, send the ZIP file to the user
                            await conn.sendMessage(from, {
                                document: { url: zipFilePath },
                                mimetype: 'application/zip',
                                fileName: `${selectedEpisode.title}.zip`,
                                caption: `*${selectedEpisode.title}*\n\n> Lααɾα-ᴍᴅ ✻`,                                
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

                            // Optionally delete the downloaded ZIP file after sending
                            fs.unlinkSync(zipFilePath);
                        });

                        writer.on('error', (err) => {
                            console.error('Error downloading ZIP file:', err);
                            reply('*Error downloading the episode ZIP file.*');
                        });

                    } else {
                        await reply('*Download link not found for the selected episode.*');
                    }
                } else {
                    await reply('*Invalid selection. Please choose a valid number.*');
                }
            }
        });

    } catch (error) {
        console.error(error);
        await reply('*An error occurred while scraping the data.*');
    }
});
