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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_57_05_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDYyLFxuICAgICAgICA2NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDUyLFxuICAgICAgICA2NixcbiAgICAgICAgNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3NixcbiAgICAgICAgODUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODYsXG4gICAgICAgIDMsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE4LFxuICAgICAgICA5MixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjU1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA2LFxuICAgICAgICA0NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDk5LFxuICAgICAgICA1LFxuICAgICAgICAyOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk1LFxuICAgICAgICA3NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDksXG4gICAgICAgIDU2LFxuICAgICAgICAxLFxuICAgICAgICAxNCxcbiAgICAgICAgOCxcbiAgICAgICAgODEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDMsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjksXG4gICAgICAgIDYwLFxuICAgICAgICA2OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAzNixcbiAgICAgICAgMTM5LFxuICAgICAgICAyNixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICAxOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDcxLFxuICAgICAgICA1NixcbiAgICAgICAgMTQsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgODgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDkxLFxuICAgICAgICA2MixcbiAgICAgICAgMTkyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTk4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTAsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY3LFxuICAgICAgICA1MCxcbiAgICAgICAgODQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMixcbiAgICAgICAgMjEwLFxuICAgICAgICA4OCxcbiAgICAgICAgNixcbiAgICAgICAgMTI0LFxuICAgICAgICA2NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODIsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlJtcys1RGtTZzJjQzdCL0pIWGljS045VkZlUTNkQk5JUWRjOGJhM1g1WE09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkRnRWlpVnpDUzBLelNxakNSd1o0eFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDgxYzRkNWItZmMwOC00ZTNiLWExNzgtNGFiNmZiYWY2YzgwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMCxcbiAgICAgIDExNSxcbiAgICAgIDE2NSxcbiAgICAgIDIwNCxcbiAgICAgIDI0MyxcbiAgICAgIDExNyxcbiAgICAgIDIxMCxcbiAgICAgIDIyMSxcbiAgICAgIDE3MCxcbiAgICAgIDE0NSxcbiAgICAgIDg2LFxuICAgICAgMjUwLFxuICAgICAgMjQ2LFxuICAgICAgOTAsXG4gICAgICAxODgsXG4gICAgICAxNTUsXG4gICAgICAxNixcbiAgICAgIDI1MixcbiAgICAgIDI1MixcbiAgICAgIDUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NSxcbiAgICAgIDEzMyxcbiAgICAgIDgsXG4gICAgICAyMDksXG4gICAgICAxNzMsXG4gICAgICAxODQsXG4gICAgICAyNTIsXG4gICAgICAxMTYsXG4gICAgICAyNSxcbiAgICAgIDE2NyxcbiAgICAgIDEwMyxcbiAgICAgIDIzNyxcbiAgICAgIDU2LFxuICAgICAgMTA4LFxuICAgICAgNDIsXG4gICAgICAxNjUsXG4gICAgICAyMDUsXG4gICAgICA4MCxcbiAgICAgIDE0NyxcbiAgICAgIDExMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBSjRUMllKUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDoxMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKdjcrZFVDRU1LYS9jQUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQzMrRTVvd0p1RkI1cnV4U3Z3b3BITG9VeXpMbDhJRXVqU2JsTkQvU21KTktjaXBOSlZkZm9DVjBNVXFyK3FpQ3pUYU9OK3hOQ1oxOEZ1U0VRU0RHRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwid2tndFl5eVBZbnFmbEIrSCttdCtScndVNXZ5Q1lxNGo2N1NZbEl0Rng3R1NTOU9helFUQis5bi81VHJENVhqVS9CRWhGc0ZkUjNJbTdyQlBWWlhWalE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0Njg4MTg2MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJveVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQm95Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiVEs5MTJiajNWQU9sVTRiSVlEWWFGenpkWlVORktsYjQ0UzJNTGdDK0FEMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcwNjQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDY4MDcyMDg3ODlcIn0iCn0="  // PUT your SESSION_ID 


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
