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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_36_05_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDczLFxuICAgICAgICAxMjUsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDksXG4gICAgICAgIDk4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDUxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTIyLFxuICAgICAgICA2LFxuICAgICAgICAxNTksXG4gICAgICAgIDI4LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTkzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTkxLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDU2LFxuICAgICAgICAyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI4LFxuICAgICAgICA5NCxcbiAgICAgICAgNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODYsXG4gICAgICAgIDYwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDksXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgODgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNixcbiAgICAgICAgMTgyLFxuICAgICAgICA2MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc1LFxuICAgICAgICA1MixcbiAgICAgICAgODIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc5LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDM2LFxuICAgICAgICA0MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDY4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDYzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTExLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgODUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI4LFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjksXG4gICAgICAgIDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTksXG4gICAgICAgIDQwLFxuICAgICAgICA2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzLFxuICAgICAgICAxODksXG4gICAgICAgIDY1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA2NixcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzEsXG4gICAgICAgIDExMixcbiAgICAgICAgODQsXG4gICAgICAgIDYwLFxuICAgICAgICA1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUa2ZZYkdDQlBpWUhlV2lnV3FBZFkrMTdFeE1lSGRWR3Ird1RTVkJ6cUtzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJiY2RoMjEzelFwQ1A3V3dnMzVFdXBnXCIsXG4gIFwicGhvbmVJZFwiOiBcImMwZGI2YjlhLWI1NzctNDBjYS1hZmE0LTE1NzAwZDdlNDhlZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNSxcbiAgICAgIDYwLFxuICAgICAgODgsXG4gICAgICAxODksXG4gICAgICAyMjQsXG4gICAgICAxODIsXG4gICAgICAxMjUsXG4gICAgICA2MCxcbiAgICAgIDIyNixcbiAgICAgIDYwLFxuICAgICAgNyxcbiAgICAgIDk1LFxuICAgICAgMjI2LFxuICAgICAgMjI2LFxuICAgICAgODEsXG4gICAgICAxNDIsXG4gICAgICAyNDQsXG4gICAgICAyMDYsXG4gICAgICAxNTgsXG4gICAgICA4M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTAsXG4gICAgICAxODgsXG4gICAgICAxOCxcbiAgICAgIDMyLFxuICAgICAgMTE0LFxuICAgICAgNyxcbiAgICAgIDEwOSxcbiAgICAgIDEyNSxcbiAgICAgIDgyLFxuICAgICAgNDQsXG4gICAgICA2OSxcbiAgICAgIDEwNSxcbiAgICAgIDExNSxcbiAgICAgIDYwLFxuICAgICAgMTkxLFxuICAgICAgMjgsXG4gICAgICAyMTUsXG4gICAgICAyMyxcbiAgICAgIDE0NyxcbiAgICAgIDExNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRSzY2RzlNUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDoxMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKcjcrZFVDRU5yTytjQUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibkRJRmNzWWQ0US9pS2F5MHdFWWJnelp0cG5GREF4T2hnVjkxYjRiMVA1WlgyMEliU25rUXFFd3pRZkR4NW9aRjlKMno3dHRwQWpGNWYxUlRLV0pOQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZ2pueUN5dTRRRXFnOHVlTlBCdzl2dlpKZ0xxYWpuN0Q4L2c4TG5GOENzQlRpNHdWbDBSRTZhaTRrdGJ3QkkweHBubXdhdGR4YWNZdEV3YkdaOW9aaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NjgyMzAwNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJveVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQm95Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiVEs5MTJiajNWQU9sVTRiSVlEWWFGenpkWlVORktsYjQ0UzJNTGdDK0FEMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcwNjQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDY4MDcyMDg3ODlcIn0iCn0="  // PUT your SESSION_ID 


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
