const Discord = require('discord.js'), 
	gamedig = require("gamedig"),
	config = require("./config"),
	client = new Discord.Client(); 

client.on('ready', () => {
	console.log(`Статус: ${client.user.username} запущен!`);
        setInterval(() => {
            gamedig.query({
			type: 'przomboid',
			host: config.ip,
			port: config.port
			}).then((state) => {	
				if (state.players.length > 0) {
					client.user.setPresence({
						status: 'online',
						activity: {
							name: `${state.players.length}/${state.maxplayers} на сервере`,
							type: 'PLAYING',
						}
					});
				} else {			 
					client.user.setPresence({
						status: 'idle',
						activity: {
							name: `на пустой сервер`,
							type: 'WATCHING',
						}
					});
				}
	     	}).catch((error) => {
					const raks = [
						"на лучших игроков",
						"на оффлайн сервер",
						"на спящих админов",
						"бииип-буууп-бииип",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
						"на оффлайн сервер",
					]
					const rak = raks[Math.floor(Math.random() * raks.length)]
					client.user.setPresence({
						status: 'dnd',
						activity: {
							name: rak,
							type: 'WATCHING',
						}
					});
         });
      }, 5000); 		
});
client.login(config.token);