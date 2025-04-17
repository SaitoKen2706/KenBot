const client = require('../index.js').client
const {createCmd} = require('../dataHandler')
const mongoose = require('mongoose');
const {DataBase} = require('../Data/config.json')
client.on("ready", async () => {
	client.user.setPresence({activities: [{name: "Friends Shop"}], type: "PLAYING"});
	console.log("==================\n=Sẵn sàng để dùng=\n==================")
	createCmd(client, '984524514010497044')
	// try {
	// 	mongoose.connect(DataBase, {
	// 		//useFindAndModify: true,
	// 		useUnifiedTopology: true,
	// 		useNewUrlParser: true,
	// 	}).then(() => console.log("connected to db"))
	// } catch(e) {
	// 	console.log(e);
	// }
	
})