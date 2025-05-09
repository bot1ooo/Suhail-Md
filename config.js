const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923247116683";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGE || process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_21_05_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODQsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDM4LFxuICAgICAgICA5MixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxLFxuICAgICAgICAzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM0LFxuICAgICAgICA3MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA5LFxuICAgICAgICA1NixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDQ5LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1LFxuICAgICAgICAyMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDUzLFxuICAgICAgICA5MixcbiAgICAgICAgMTc2LFxuICAgICAgICAyNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDc3LFxuICAgICAgICA4NixcbiAgICAgICAgNTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjU1LFxuICAgICAgICA1MSxcbiAgICAgICAgMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjI3LFxuICAgICAgICA1NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTksXG4gICAgICAgIDUzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDI3LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMCxcbiAgICAgICAgNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg0LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTEsXG4gICAgICAgIDI0LFxuICAgICAgICA2MSxcbiAgICAgICAgMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjExLFxuICAgICAgICA0MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDUyLFxuICAgICAgICA5NCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDU1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA5MSxcbiAgICAgICAgNDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjI0LFxuICAgICAgICAzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzksXG4gICAgICAgIDE3NixcbiAgICAgICAgNTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlJxTG1PSTA3WG00TzQvL3ovUFlBVXFYZldqMjI3dFAxcytaZi91ZllOc1E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInNQbDk0RG1SUXl1TERBVHFtX0p1QkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjhkN2QwNDQtZmI1NS00MmY1LTljYzMtN2VlNTdiMWZjNWFhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU5LFxuICAgICAgMTA0LFxuICAgICAgMjExLFxuICAgICAgMCxcbiAgICAgIDIxMixcbiAgICAgIDU2LFxuICAgICAgMTAsXG4gICAgICAxNzcsXG4gICAgICAyNDUsXG4gICAgICAxNDMsXG4gICAgICAxNjIsXG4gICAgICAxNDgsXG4gICAgICA4MixcbiAgICAgIDIzLFxuICAgICAgMTUwLFxuICAgICAgMTA0LFxuICAgICAgMTE4LFxuICAgICAgMjA1LFxuICAgICAgMTAwLFxuICAgICAgMTE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNyxcbiAgICAgIDE1OSxcbiAgICAgIDE5NSxcbiAgICAgIDEsXG4gICAgICAxOTQsXG4gICAgICAyMjksXG4gICAgICA1NixcbiAgICAgIDIwNCxcbiAgICAgIDg4LFxuICAgICAgMTE4LFxuICAgICAgMTcxLFxuICAgICAgMjQzLFxuICAgICAgNDgsXG4gICAgICAzLFxuICAgICAgMSxcbiAgICAgIDkyLFxuICAgICAgOTIsXG4gICAgICA5NixcbiAgICAgIDE1MCxcbiAgICAgIDMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjlUQUVWNU44XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKajcrZFVDRU91QytNQUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiM2hjSWw3Y2Y1ZkttUDNPYmN4bnhyUmVPTkw4eEJPazZCUTNCVXlEbkRTYWFSVG56a0k2MVFOVjZZZlRBTGZNdnkvTC9TZHp5SUo2a3dMTHd5Z1ByQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibndKYTRJUXYyZk05WTBaNWNGUTVYY0p6SU1GUS93QTF4ejNqNVpHclk4M1B1TC9yelVZTzNOM3VjZjN5c0dSSnZ1OVY2dlozTU9QL2FVczNSUVdSanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ2Nzk2OTEwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQm9xXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCb3EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJCV3duQWFoWldWeFR3aXlSbGxRc3YvOTAxSmhWcnRQZmxPeUVjL2ttenZFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzA2MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "null",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "🌸ضـ۬ـۧۛـ𝆊۬ـ۬ــــ۬ـۧۛـ𝆊۬دی مــّْ͢ـْــلـ۬ـۧۛـ𝆊۬ک⁰¹²🩷03247116683🤌🏻",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
