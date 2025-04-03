const { cmd, commands } = require('../command');
const os = require("os");
const {runtime} = require('../functions');

cmd({
    pattern: "menu",
    alias: ["list","help","panel"],
    desc: "commands panel",
    react: "🌸",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
const cap = `
┏━┫ *⚬Lααɾα-ᴍᴅ-ᴍᴇɴᴜ⚬* ┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻╭─────────────✑
◉│ *1*    *ᴅᴏᴡɴʟᴏᴀᴅ ᴄᴍᴅ*
◉│ *2*    *ꜱᴇᴀʀᴄʜ ᴄᴍᴅ*
◉│ *3*    *ᴀɴɪᴍᴇ ᴄᴍᴅ*
◉│ *4*    *ꜰᴜɴ ᴄᴍᴅ*
◉│ *5*    *ᴄᴏɴᴠᴇʀᴛᴇᴅ ᴄᴍᴅ*
◉│ *6*    *ᴀɪ ᴄᴍᴅ*
◉│ *7*    *ɢʀᴏᴜᴘ ᴄᴍᴅ*
◉│ *8*    *ᴏᴡɴᴇʀ ᴄᴍᴅ*
◉│ *9*    *ꜱʏꜱᴛᴇᴍ ᴄᴍᴅ*
◉│ *10*   *ʀᴀɴᴅᴏᴍ ᴄᴍᴅ*
┳╰─────────────✑
⁠⁠⁠⁠┗━┫ *⚬Lααɾα-ᴍᴅ-ᴍᴇɴᴜ⚬* ┣━✾

*ᴍᴇɴᴛɪᴏɴ & ʀᴇᴘʟʏ ᴛᴏ ɴᴜᴍʙᴇʀ ꜱᴇʟᴇᴄᴛ ᴡɪᴛʜ ᴄᴀᴛᴇɢᴏʀʏ*

> Lααɾα-ᴍᴅ ✻
`
let menu1 = `
┏━┫ *⚬Lααɾα-ᴍᴅ-ᴅᴏᴡɴ ᴄᴍᴅ⚬* ┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
╭━━━━━━━━━━━━━━━
         *.song*
         *.song2*
         *.song3*
 (_Downloading you tube song )_

- _🌸 Ex :  .song lelena_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.video*
 (_Downloading you tube video )_

- _🌸 Ex :  .video lelena_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.fb*
         *.fb2*
 (_Downloading facebook video )_

- _🌸 Ex :  .fb <url>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.tiktok*
         *.tiktok2*
         *.tiktok3*
 (_Downloading tiktok )_

- _🌸 Ex :  .tiktok <url>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.apk*
 (_Downloading apk )_

- _🌸 Ex :  .apk whatsapp_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.mfire*
 (_Downloading mediafire )_

- _🌸 Ex :  .mfire <url>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.gdrive*

 (_Downloading google drive file)_

- _🌸 Ex :  .gdrive <link>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.ig*

 (_Downloading instagrm)_

- _🌸 Ex :  .ig <link>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.twdl*

 (_Downloading twiter )_

- _🌸 Ex :  .twdl <url>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.mega*

 (_Downloading mega file )_

- _🌸 Ex :  .mega <url>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.pinterest*

 (_Downloading pinterest img )_

- _🌸 Ex :  .pinterest baby_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.movie*

 (_Downloading sinhala sub movie)_

- _🌸 Ex :  .movie spider man_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.baiscope*

 (_Downloading baiscope movie )_

- _🌸 Ex :  .baiscope flash_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.ginisisila*

 (_Downloading ginisisila cartoon )_

- _🌸 Ex :  .ginisisila ben 10_
╰━━━━━━━━━━━━━━━

╭━━━━━━━━━━━━━━━
         *.xvdl*

 (_Downloading xvideos videos )_

- _🌸 Ex :  .xvdl <link>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.xnxxdl*

 (_Downloading xnxx video )_

- _🌸 Ex :  .xnxxdl <link>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.xnxx*

 (_Downloading xnxx video )_

- _🌸 Ex :  .xnxxdl sri Lanka_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.pornhub*
         *.phub*

 (_Downloading pornhub video )_

- _🌸 Ex :  .pornhub sri Lanka_
╰━━━━━━━━━━━━━━━

> Lααɾα-ᴍᴅ ✻
`
let menu2 = `
┏━┫ *⚬Lααɾα-ꜱᴇᴀʀᴄʜ ᴄᴍᴅ⚬* ┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
╭━━━━━━━━━━━━━━━
         *.img*
         *.img2*

 (_Searching to google image)_

- _🌸 Ex :  .img cars_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.githubstalk*

 (_Searching to github profile)_

- _🌸 Ex :  .githubstalk sadiyamin_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.wether*

 (_Searching to wether)_

- _🌸 Ex :  .wether mathara_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.movie*

 (_Searching to movie details)_

- _🌸 Ex :  .movie spider man_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.yts*

 (_Searching to you tube links)_

- _🌸 Ex :  .yts lara md whatsapp bot_
╰━━━━━━━━━━━━━━━

> Lααɾα-ᴍᴅ ✻
`
let menu3 = `
┏━┫ *⚬Lααɾα-ᴀɴɪᴍᴇ ᴄᴍᴅ⚬* ┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
╭━━━━━━━━━━━━━━━
         *.loli*

 (_Random loli image_)

- _🌸 Ex :  .loli_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.waifu*

 (_Random waifu image_)

- _🌸 Ex :  .waifu_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.neko*

 (_Random neko image_)

- _🌸 Ex :  .neko_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.megumin*

 (_Random megumin image_)

- _🌸 Ex :  .megumin_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.maid*

 (_Random maid image_)

- _🌸 Ex :  .maid_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.awoo*

 (_Random awoo image_)

- _🌸 Ex :  .awoo_
╰━━━━━━━━━━━━━━━

> Lααɾα-ᴍᴅ ✻
`
let menu4 = `
┏━┫ *⚬Lααɾα-ꜰᴜɴ ᴄᴍᴅ⚬* ┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
╭━━━━━━━━━━━━━━━
         *.hack*

 _(Hack Frank)_

- _🌸 Ex :  .hack_
╰━━━━━━━━━━━━━━━

> Lααɾα-ᴍᴅ ✻
`
let menu5 = `
┏━┫ *⚬Lααɾα-ᴄᴏɴᴠᴇʀᴛ ᴄᴍᴅ⚬* ┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
╭━━━━━━━━━━━━━━━
         *.logo*
         *.logo2*
         *.logo3*

 _(Generated logo)_

- _🌸 Ex :  .logo Sadeesha_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.sticker*
         *.s*

 _(Photo to convert sticker)_

- _🌸 Ex :  .sticker <reply to photo or short video_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.toimg*

 _(Sticker convert to photo)_

- _🌸 Ex :  .toimg @mention sticker_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.tts*

 _(Generated ai voice)_

- _🌸 Ex :  .tts Hello World_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.trt*

 _(Translate to all language)_

- _🌸 Ex :  .trt si how are you_
╰━━━━━━━━━━━━━━━

> Lααɾα-ᴍᴅ ✻
`
let menu6 = `
┏━┫ *⚬Lααɾα-ᴀɪ ᴄᴍᴅ⚬* ┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
╭━━━━━━━━━━━━━━━
         *.ai*

 _(Chat with ai)_

- _🌸 Ex :  .ai how are you_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.gpt*

 _(Chat gpt)_

- _🌸 Ex :  .gpt what's node.js_
╰━━━━━━━━━━━━━━━

> Lααɾα-ᴍᴅ ✻
`
let menu7 = `
┏━┫ *⚬Lααɾα-ɢʀᴏᴜᴘ ᴄᴍᴅ⚬* ┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
╭━━━━━━━━━━━━━━━
         *.mute*

 _(Group close)_

- _🌸 Ex :  .mute_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.unmute*

 _(Group open)_

- _🌸 Ex :  .unmute_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.tagall*

 _(Group tag to all members)_

- _🌸 Ex :  .tagall Hi_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.hidetag*

 _(Group tag to all members)_

- _🌸 Ex :  .hidetag Hi_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.promote*

 _(Group members promoted)_

- _🌸 Ex :  .promote @mention_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.demote*

 _(Group members demoted)_

- _🌸 Ex :  .demote @mention_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.approve*

 _(Group members approved)_

- _🌸 Ex :  .approve_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.requests*

 _(View pending join requests)_

- _🌸 Ex :  .requests
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.accept*

 _(Accept group join request_

- _🌸 Ex :  .accept <request number>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.reject*

 _(Reject group join request)_

- _🌸 Ex :  .reject <request number>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.del*

 _(Group message delete)_

- _🌸 Ex :  .del @mention_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.leave*

 _(Leave from Groups)_

- _🌸 Ex :  .leave_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.invite*

 _(Get Group invite link )_

- _🌸 Ex :  .invite_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.add*

 _(Group members add)_

- _🌸 Ex :  .add 9477×××××_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.join*

 _(Join Group in invite link)_

- _🌸 Ex :  .join <invitation link>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.kick*

 _(Group members remove)_

- _🌸 Ex :  .kick @mention_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.kickall*

 _(Group all members remove)_
*⚠️ Warning*
- _🌸 Ex :  .kickall_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.end*

 _(All Group members remove)_

- _🌸 Ex :  .end_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.tagadmin*

 _(Group Admins tag)_

- _🌸 Ex :  .tagadmin_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.setname*

 _(Set Group name)_

- _🌸 Ex :  .setname <group name>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.setdesc*

 _(Set Group description)_

- _🌸 Ex :  .setdesc <description>
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.opentime*

 _(Set Group open time)_

- _🌸 Ex :  .opentime 10 second_
           _.opentime 1 minute_
           _.opentime 1 hour_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.closetime*

 _(Set Group close time)_

- _🌸 Ex :  .closetime 10 second_
           _.closetime 1 minute_
           _.closetime 1 hour_
╰━━━━━━━━━━━━━━━

> Lααɾα-ᴍᴅ ✻
`
let menu8 = `
┏━┫ *⚬Lααɾα-ᴏᴡɴᴇʀ ᴄᴍᴅ⚬* ┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
╭━━━━━━━━━━━━━━━
         *.block*

 _(Block user)_

- _🌸 Ex :  .block_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.ublock*

 _(Unblock user)_

- _🌸 Ex :  .unblock_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.jid*

 _(Send to chat jid)_

- _🌸 Ex :  .jid_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.gjid*

 _(Send to group jid)_

- _🌸 Ex :  .gjid_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.clearchats*

 _(Delete in all your chats)_

- _🌸 Ex :  .clearchats_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.restart*

 _(Restarting the bot)_

- _🌸 Ex :  .restart_
╰━━━━━━━━━━━━━━━

> Lααɾα-ᴍᴅ ✻
`
let menu9 = `
┏━┫ *⚬Lααɾα-ꜱʏꜱᴛᴇᴍ ᴄᴍᴅ⚬* ┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
╭━━━━━━━━━━━━━━━
         *.ping*

 _(Test bot speed)_

- _🌸 Ex :  .ping
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.system*

 _(Check bot status)_

- _🌸 Ex :  .system_
╰━━━━━━━━━━━━━━━

╭━━━━━━━━━━━━━━━
         *.restart*

 _(Restarting alxa bot)_

- _🌸 Ex :  .restart_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.owner*

 _(Alexa developer team)_

- _🌸 Ex :  .owner_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.repo*
         *.src*
 _(Alexa bot github repo)_

- _🌸 Ex :  .repo_
╰━━━━━━━━━━━━━━━

> Lααɾα-ᴍᴅ ✻
`

let menu10 =`
┏━┫ *⚬Lααɾα-ꜱʏꜱᴛᴇᴍ ᴄᴍᴅ⚬* ┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
╭━━━━━━━━━━━━━━━
         *.china*

 _(Create random china girl)_

- _🌸 Ex :  .china_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.japan*

 _(Create random japan girl)_

- _🌸 Ex :  .japan_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.indonesia*

 _(Create random indonesia girl)_

- _🌸 Ex :  .indonesia_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.vietnam*

 _(Create random vietnam girl)_

- _🌸 Ex :  .vietnam_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.korea*

 _(Create random korea girl)_

- _🌸 Ex :  .korea_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.malaysia*

 _(Create random malaysia girl)_

- _🌸 Ex :  .malaysia_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.thailand*

 _(Create random thailand girl)_

- _🌸 Ex :  .thailand_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.asupan*

 _(Create random asupan video)_

- _🌸 Ex :  .asupan_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.gore*

 _(Create random gore video)_

- _🌸 Ex :  .gore_
╰━━━━━━━━━━━━━━━
`
await conn.sendMessage(from, { 
                        audio: { url: `https://github.com/tharumin/Alexa_Voice/raw/refs/heads/main/menu.mp3` }, 
                        mimetype: "audio/mpeg" ,
                        ptt: "true" ,
                        contextInfo: {
                            externalAdReply: {
                                title: "Lara-MD",
                                body: "ꜱᴀᴅᴇᴇꜱʜᴀ ᴛʜᴀʀᴜᴍɪɴ",
                                mediaType: 1,
                                sourceUrl: "https://github.com/tharumin",
                                thumbnailUrl: "https://github.com/sadiyamin/alexa-database/raw/refs/heads/main/Media/20250224_162020.jpg", // This should match the image URL provided above
                                renderLargerThumbnail: true,
                                showAdAttribution: true
                            }
                        }
                    
                    }, { quoted: mek });
     const sentMsg = await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/TD5qh4JJ/20250224-022914.jpg`}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
            caption: cap,
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
      
      const messageID = sentMsg.key.id; // Save the message ID for later reference


        // Listen for the user's response
        conn.ev.on('messages.upsert', async (messageUpdate) => {
            const mek = messageUpdate.messages[0];
            if (!mek.message) return;
            const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
            const from = mek.key.remoteJid;
            const sender = mek.key.participant || mek.key.remoteJid;

            // Check if the message is a reply to the previously sent message
            const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;
            if (isReplyToSentMsg) {
                if (messageType === '1') {
                    // Handle option 1 (Audio File)
                    await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/TD5qh4JJ/20250224-022914.jpg`}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
            caption: menu1,
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
                } else if (messageType === '2') {
                    // Handle option 2 (Document File)
                    await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/TD5qh4JJ/20250224-022914.jpg`}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
            caption: menu2,
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
                  } else if (messageType === '3') {
                    // Handle option 2 (Document File)
                    await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/TD5qh4JJ/20250224-022914.jpg`}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
            caption: menu3,
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
                  } else if (messageType === '4') {
                    // Handle option 2 (Document File)
                    await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/TD5qh4JJ/20250224-022914.jpg`}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
            caption: menu4,
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
                  } else if (messageType === '5') {
                    // Handle option 2 (Document File)
                    await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/TD5qh4JJ/20250224-022914.jpg`}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
            caption: menu5,
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
                  } else if (messageType === '6') {
                    // Handle option 2 (Document File)
                    await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/TD5qh4JJ/20250224-022914.jpg`}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
            caption: menu6,
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
                  } else if (messageType === '7') {
                    // Handle option 2 (Document File)
                    await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/TD5qh4JJ/20250224-022914.jpg`}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
            caption: menu7,
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
                  } else if (messageType === '8') {
                    // Handle option 2 (Document File)
                    await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/TD5qh4JJ/20250224-022914.jpg`}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
            caption: menu8,
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
                  } else if (messageType === '9') {
                    // Handle option 2 (Document File)
                    await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/TD5qh4JJ/20250224-022914.jpg`}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
            caption: menu9,
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
                    
                } else if (messageType === '10') {
                    // Handle option 2 (Document File)
                    await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/TD5qh4JJ/20250224-022914.jpg`}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
            caption: menu10,
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
                
            }
            }
            });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});  