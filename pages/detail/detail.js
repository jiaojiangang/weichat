Page({
	data: {
		address: "",
		message: "",
		comtact: "",
		type: "sell",
		textType: ""
	},

	onLoad:function(options){
		var id= options.id;
		wx.request({
			url: 'https://nuanwan.wekeji.cn/student/index.php/trade/get_item', 
            data: {
            	distinct:"teacher_jiao0802",
            	id: id
            },
            method:"POST",
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success: this.handleGetDetailSucc.bind(this)
		})
	},

	handleGetDetailSucc: function(res) {
		var data = res.data.data;
		this.setData({
			address:data.address,
			message:data.message,
			contact:data.contact,
			type:data.type,
			textType: data.type == "sell" ? "邀请" : "加入"
		})
	}
})
