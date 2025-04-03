
const config = require('../../settings')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../functions')

cmd({
    pattern: "system",
    alias: ["about","bot"],
    desc: "Check bot online or no.",
    category: "main",
    react: "📟",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

    let status = `
───────────────────
_*⚙️ Lααɾα Ｓｙｓｔｅｍ  Ｉｎｆｏ ⚙️*_
───────────────────

┌────────────────
│❖ *ᴜᴘᴛɪᴍᴇ :* _${runtime(process.uptime())}_
│❖ *ʀᴀᴍ ᴜꜱᴀɢᴇ :*  _${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB_
│❖ *ʜᴏꜱᴛ ɴᴀᴍᴇ :* _${os.hostname()}_
│❖ *ᴏᴡɴᴇʀ :* _Sadeesha Tharumin_
└────────────────

> *ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴛʜᴀʀᴜᴍɪɴ*    
`
await conn.sendMessage(from,{image: {url: `https://i.ibb.co/TD5qh4JJ/20250224-022914.jpg`},caption: status,
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
    
}catch(e){
    console.log(e)
    reply(`${e}`)
    }
    })


//__________ping______

cmd({
    pattern: "ping",
    desc: "Check bot online or no.",
    category: "main",
    react: "🚀",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: '*pong...*' })
        const endTime = Date.now()
        const ping = endTime - startTime
        await conn.sendMessage(from, { text: `*⚬Lααɾα-ᴍᴅ ꜱᴘᴇᴇᴅ : ${ping}ms*`,
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
                    sourceUrl: "https://github.com/tharumin",
                    thumbnailUrl: 'https://github.com/sadiyamin/alexa-database/raw/refs/heads/main/Media/20250224_162020.jpg', // This should match the image URL provided above
                    renderLargerThumbnail: false,
                    showAdAttribution: true
                }
            }
     }, {quoted: mek});
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

//Owner
cmd({
    pattern: "owner",
    desc: "cmd",
    category: "system",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let cap = `
┏━┫ *⚬Lααɾα-ᴍᴅ⚬* ┣━✾
┃
┣━━━━━━━━━━━━━━━
- *Sᴀᴅᴇᴇsʜᴀ* 💗⃤
        94779062397
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
- *Vɪʜᴀɴɢᴀ* 💗⃤
        94718276378
╰━━━━━━━━━━━━━━━
> Lααɾα-ᴍᴅ
`
return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/TD5qh4JJ/20250224-022914.jpg`},caption: cap,
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
                    thumbnailUrl: 'https://github.com/sadiyamin/alexa-database/raw/refs/heads/main/Media/20250224_162020.jpg', // This should match the image URL provided above
                    renderLargerThumbnail: true,
                    showAdAttribution: true
                }
            }
     }, {quoted: mek});
}catch(e){
console.log(e)
reply(`${e}`)
}
})
//______________restart_____________

cmd({
    pattern: "restart",
    desc: "restart the bot",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const {exec} = require("child_process")
reply("*restarting...*")
exec("pm2 restart all")
}catch(e){
console.log(e)
reply(`${e}`)
}
})

//________Settings_________

cmd({
    pattern: "settings",
    alias: ["setting","st"],
    desc: "restart the bot",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let cap = `
┏━┫ *⚬Lααɾα-ᴍᴅ-ꜱᴇᴛᴛɪɴɢꜱ⚬* ┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
*ᴘʀᴇꜰɪx ➭* _${config.PREFIX}_
*ᴍᴏᴅᴇ ➭* _${config.MODE}_
*ᴠᴏɪᴄᴇ_ʀᴇᴘʟʏ ➭* _${config.AUTO_VOICE}_
*ᴀᴜᴛᴏ_ʀᴇᴀᴅ_ꜱᴛᴀᴛᴜꜱ ➭* _${config.AUTO_READ_STATUS}_
*ᴀᴜᴛᴏ_ꜱᴛᴀᴛᴜꜱ_ʀᴇᴀᴄᴛ ➭* _${config.AUTO_STATUS_REACT}_
*ᴀᴜᴛᴏ_ꜱᴛᴀᴛᴜꜱ_ʀᴇᴘʟʏ ➭* _${config.AUTO_STATUS_REPLY}_
*ꜱᴛᴀᴛᴜꜱ_ʀᴇᴘʟʏ_ᴍꜱɢ ➭ ${config.STATUS_REPLY_MSG}
*ᴀᴜᴛᴏ_ʀᴇᴀᴄᴛ ➭* _${config.AUTO_REACT}_
*ᴀɴᴛɪ_ʙᴀᴅ_ᴡᴏʀᴅ ➭* _${config.ANTI_BAD}_
*ᴀɴᴛɪ_ʟɪɴᴋ ➭* _${config.ANTI_LINK}_
*ᴀᴜᴛᴏ_ʀᴇᴀᴅ_ᴍꜱɢ ➭* _${config.READ_MESSAGE}_
*ꜰᴀᴋᴇ_ʀᴇᴄᴏʀᴅɪɴɢ ➭* _${config.FAKE_RECORDING}_
*ᴀᴜᴛᴏ_ᴛʏᴘɪɴɢ ➭* _${config.AUTO_TYPING}_
*ᴀɴᴛɪ_ᴅᴇʟᴇᴛᴇ ➭* _${config.ANTI_DELETE}_
*ɪɴʙᴏx_ʙʟᴏᴄᴋ ➭* _${config.INBOX_BLOCK}_
*ᴀʟᴡᴀʏꜱ_ᴏɴʟɪɴᴇ ➭* _${config.ALWAYS_ONLINE}_

> Lααɾα-ᴍᴅ ✻
`

await conn.sendMessage(from,{image: {url: `https://i.ibb.co/TD5qh4JJ/20250224-022914.jpg`},caption: cap,
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
     
}catch(e){
console.log(e)
reply(`${e}`)
}
})