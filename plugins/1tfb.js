
/* Copyright (C) 2021 lusifar


*/
// අමාරුවෙන් යකො හැදුවෙ. උස්සන්න එපා තිරිසනෝ 😒

const lusifar = require('../events');
const {MessageType,mimetype,Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Language = require('../language');
const Lang = Language.getString('scrapers');
const ALang = Language.getString('amazone');
const capt = "　🧛‍♂️ *LUSIFAR FB DOWNLOADER* 💜\n"
const DOWNMSG = "🧛‍♂️ *DOWNLOADING FB VIDEO...* 🤍"
const UPMSG = "🧛‍♂️ _*U P L O A D I N G*_  💕"
let KSP = Config.WORKTYPE == 'public' ? false : true
let KSKK = Config.WORKTYPE == 'public' ? false : false
const Config = require('../config');

/*
Download.Facebook{
	addmeta : 100000;
		{
      "is_eligible_for_download": true,
      "downloable_id": "1353269864728879_1943344825721377",
      "id": "1353269864728879_1943344825721377"
    },
	video.info
	{
      "created_time": "{date}T16:24:04+0000",
      "message": "Request Data",
      "id": "{page-id}_2191966997525824"
    },
	
	FB.login(function(response) {
    if (response.authResponse) {
     console.log('Welcome!  Fetching your information.... ');
     FB.api('/me', function(response) {
       console.log('Good to see you, ' + response.name + '.');
     });
    } else {
     console.log('User cancelled login or did not fully authorize.');
    }
});
	x-business-use-case-usage: {api-type == get 
    "{business-object-id}": [
        {
            "type": "{rate-limit-type}",          
            "call_count": 100,                 
            "total_cputime": 25,                   
            "total_time": 25,                      
            "estimated_time_to_regain_access": 19  
        }
    ],      
    "66782684": [
        {
            "type": "ads_management",
            "call_count": 95,
            "total_cputime": 20,
            "total_time": 20,
            "estimated_time_to_regain_access": 0
        }
    ],
    "10153848260347724": [
        {
            "type": "ads_management",
            "call_count": 97,
            "total_cputime": 23,
            "total_time": 23,
            "estimated_time_to_regain_access": 0
        }
    ],
...
}
{ if error {   
"error": {      
    "message": "(#80001) There have been too many calls to this Page account. Wait a bit and try again. For more info, please refer to https://developers.facebook.com/docs/Config-api/overview/rate-limiting.",      
    "type": "OAuthException",      
    "code": 80001,      
    "fbtrace_id": "AmFGcW_3hwDB7qFbl_QdebZ"   
    }
}}
} */

// -----------------------------------------------------------------------
//                               MAIN COMMAND
// -----------------------------------------------------------------------
lusifar.addCommand({ pattern: 'fb ?(.*)', fromMe: KSP , desc: 'facebook video download'}, async (message, match) => {
// අමාරුවෙන් යකො හැදුවෙ. උස්සන්න එපා තිරිසනෝ 😒
    const link = match[1]

    if (!link) return await message.sendMessage("🧛‍♂️ *Give Vaild FB Link* ")

    await message.sendMessage(DOWNMSG)
	
	var url = `${Config.SITE1}socialmedia/${Config.FBS2}=${link}&apikey=${Config.BAPIME}`
				// 
				await axios 
					.get(`${url}`)
					.then(async(response) => {
						const {
							hd
						} = response.data.result

						const kavifb = await axios.get(hd, {responseType: 'arraybuffer'})
						await new Promise(r => setTimeout(r, 2000));
						await message.client.sendMessage(message.jid,UPMSG,MessageType.text);

						await message.sendMessage(Buffer.from(kavifb.data), MessageType.video, {caption: capt,})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID FB LINK*"),
							)
					})
					
}) //pattern close

lusifar.addCommand({ pattern: 'fb ?(.*)', fromMe: KSKK , dontAddCommandList: true}, async (message, match) => {
// අමාරුවෙන් යකො හැදුවෙ. උස්සන්න එපා තිරිසනෝ 😒
    const link = match[1]

    if (!link) return await message.sendMessage("🧛‍♂️ *Give Vaild FB Link* ")

    await message.sendMessage(DOWNMSG)
	
	var url = `${Config.SITE1}socialmedia/${Config.FBS2}=${link}&apikey=${Config.BAPIME}`
				// 
				await axios 
					.get(`${url}`)
					.then(async(response) => {
						const {
							hd
						} = response.data.result

						const kavifb = await axios.get(hd, {responseType: 'arraybuffer'})
						await new Promise(r => setTimeout(r, 2000));
						await message.client.sendMessage(message.jid,UPMSG,MessageType.text);

						await message.sendMessage(Buffer.from(kavifb.data), MessageType.video, {caption: capt,})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID FB LINK*"),
							)
					})
					
}) //pattern close
 

// -----------------------------------------------------------------------
//                               NOT WORKING COMMAND
// -----------------------------------------------------------------------

lusifar.addCommand({ pattern: 'xxfbsd ?(.*)', fromMe:KSKK , dontAddCommandList: true}, async (message, match) => {
// අමාරුවෙන් යකො හැදුවෙ. උස්සන්න එපා තිරිසනෝ 😒
    const link = match[1]

    if (!link) return await message.sendMessage("🧛‍♂️ *Give Vaild FB Link* ")

    await message.sendMessage('⛔️ _*ERROR 404*_')
	
	var url = `${Config.SITE1}socialmedia/${Config.FBS2}=${link}&apikey=${Config.BAPIME}`
				// 
				await axios 
					.get(`${url}`)
					.then(async(response) => {
						const {
							sd
						} = response.data.result

						const kavifb = await axios.get(sd, {responseType: 'arraybuffer'})
						await new Promise(r => setTimeout(r, 2000));
						await message.client.sendMessage(message.jid,UPMSG,MessageType.text);

						await message.sendMessage(Buffer.from(kavifb.data), MessageType.video, {caption: capt,})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID FB LINK*"),
							)
					})
					
}) //pattern close
