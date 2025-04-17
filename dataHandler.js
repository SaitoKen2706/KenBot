async function createCmd(client, guildId) {
	const data = [
		{
			name: "ping",
			description: "Test bruh bruh",
		},
		{
			name: "sua",
			description: "Sủa giúp bạn",
			options: [{
				name: "target",
				description: "Thằng bạn muốn sủa",
				type: 'USER',
				required: true,
			}],
		},
		{
			name: "khoamom",
			description: "Khóa mõm thằng nào đó",
			options: [
				{
					name: "target",
					description: "Thằng nào bạn muốn khóa mõm",
					type: 'USER',
					required: true,
				},
				{
					name: "time",
					description: "Thời gian khóa mõm (1s / 1d/ 1y)",
					type: "STRING",
					required: true,
				},
				{
					name: "reason",
					description: "Lí do",
					type: "STRING",
					required: false,
				},
			],
		},
		{
			name: "momom",
			description: "Mở mõm",
			options: [
				{
					name: "target",
					description: "Thằng nào bạn muốn mở mõm",
					type: 'USER',
					required: true,
				},
			],
		},
		{
			name: "link",
			description: "Link invite sever",
		},
		{
			name: "drama",
			description: "Tạo 1 kênh drama",
			options: [
				{
					name: "target1",
					description: "Thằng thứ nhất",
					type: 'USER',
					required: true,
				},
				{
					name: "target2",
					description: "Thằng thứ hai",
					type: 'USER',
					required: true,
				},
			]
		},
		{
			name: "bypass",
			description: "Lấy link rút gọn",
			options: [
				{
					name: "link",
					description: "Link bạn muốn bypass",
					type: 'STRING',
					required: true,
				},
			],
		},
		{
			name: "redeem",
			description: "Test",
			options: [
				{
					name: "key",
					description: "test",
					type: 'STRING',
					required: true,
				},
			],
		},
		{
			name: "remove",
			description: "Test",
			options: [
				{
					name: "key",
					description: "test",
					type: 'USER',
					required: true,
				},
			],
		},
		{
			name: "script",
			description: "Script",
		},
		{
			name: "whitelist",
			description: "whitelist memeber",
			options: [
				{
					name: "user",
					description: "test",
					type: 'USER',
					required: true,
				},
				{
					name: "key",
					description: "test",
					type: 'STRING',
					required: true,
				}
			],
		},
		{
			name: "gianghoa",
			description: "Giảng hòa",
			options: [
				{
					name: "user",
					description: "Giảng hòa",
					type: 'USER',
					required: true,
				},
			],
		},
		{
			name: "check",
			description: "Check",
			options: [{
				name: "id",
				description: "Id roblox",
				type: 'NUMBER',
				required: true,
			},
			],
		},
		{
			name: "r",
			description: "Giảng hòa",
			options: [
				{
					name: "user",
					description: "Giảng hòa",
					type: 'USER',
					required: true,
				},
			],
		},
	]
	await client.guilds.cache.get(guildId)?.commands.set(data)
}

module.exports = {createCmd}