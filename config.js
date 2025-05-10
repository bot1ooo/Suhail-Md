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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_54_05_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTczLFxuICAgICAgICA4NixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDAsXG4gICAgICAgIDcwLFxuICAgICAgICA2OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU4LFxuICAgICAgICA0NSxcbiAgICAgICAgODcsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDM4LFxuICAgICAgICA3MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDkwLFxuICAgICAgICAzNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTMxLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDczLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE0LFxuICAgICAgICAzMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDM3LFxuICAgICAgICAyMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjksXG4gICAgICAgIDU5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDksXG4gICAgICAgIDM5LFxuICAgICAgICAxOTksXG4gICAgICAgIDgsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTIxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDI0LFxuICAgICAgICAxODEsXG4gICAgICAgIDUyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjIwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM2LFxuICAgICAgICA0MixcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTM2LFxuICAgICAgICA3MixcbiAgICAgICAgNzksXG4gICAgICAgIDQzLFxuICAgICAgICA4MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDkyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTksXG4gICAgICAgIDY5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExLFxuICAgICAgICA0MixcbiAgICAgICAgMzcsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI0TkdGS2hBUjFaaW9Yc3NlMFFtNDBlelNMSEd1alh5NDBMaU1XL0VKaS9ZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJVUHY4dnpBdFRqcUktS3UtYVZsRXdRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNkY2ZhNThkLTk1M2MtNDZhNi05NzU2LWRkODU2ZWRkNzI5YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTAsXG4gICAgICAxMzcsXG4gICAgICA2MyxcbiAgICAgIDcyLFxuICAgICAgNTksXG4gICAgICA4MixcbiAgICAgIDc4LFxuICAgICAgMTM4LFxuICAgICAgNDksXG4gICAgICA4OSxcbiAgICAgIDIxMyxcbiAgICAgIDE5OSxcbiAgICAgIDEwMCxcbiAgICAgIDMxLFxuICAgICAgMTQsXG4gICAgICAxMzksXG4gICAgICAyMCxcbiAgICAgIDQ3LFxuICAgICAgOCxcbiAgICAgIDg3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NyxcbiAgICAgIDIwNSxcbiAgICAgIDgsXG4gICAgICA4LFxuICAgICAgMTAwLFxuICAgICAgMjI2LFxuICAgICAgODMsXG4gICAgICAxMDYsXG4gICAgICAxMTMsXG4gICAgICA2LFxuICAgICAgMjMzLFxuICAgICAgMjMyLFxuICAgICAgMjQyLFxuICAgICAgNjksXG4gICAgICA2OCxcbiAgICAgIDQ0LFxuICAgICAgMTkwLFxuICAgICAgMjQ0LFxuICAgICAgMjI4LFxuICAgICAgNzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRVQ0Wk1RV1lcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4MzoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6MTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSno3K2RVQ0VNSHQvY0FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIi9EN3Y2ZWNDb3gybXhJQiswZXUxQTlSaDdtY2xROGxEcDgyYWcxYXJhcUVaZ1N5N1NJV085VXNPNzA5M1JIUFhlODgrTU1EdDgvV0xXV0ZualNCckFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkRmMlUzS2Jwb1Z5cFJ2dGpodlVRNTZ3VnF4VURrUlhxUUw2Y0oyRVl5bEg1dW50OTVVS1RHK3Z4NEczaEFnV3JPOGxTN0dSSDhXUHBFWHlROEw1T2p3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4MzoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDY4OTI0ODUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCb3lcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJveS5qc29uIjogIntcImtleURhdGFcIjpcIlRLOTEyYmozVkFPbFU0YklZRFlhRnp6ZFpVTkZLbGI0NFMyTUxnQytBRDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MDY0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ2ODA3MjA4Nzg5XCJ9Igp9"  // PUT your SESSION_ID 


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
