var express = require("express")
,path = require("path")
,cookieParser = require("cookie-parser")
,bodyParser = require('body-parser')  
,session = require("express-session")
,app = new express()
,ejs = require("ejs");

app.use(bodyParser());
app.use(cookieParser());

app.engine("html",ejs.__express);
app.set("view engine","html");//设定模板为.html后缀
app.use(express.static(path.join(__dirname,"public")));//设定public目录为资源根目录，duwww.com:3000/public/images/a.jpg变为duwww.com:3000/images/a.jpg

app.get(/^\/([\w_\/]+).html$/,function(req,res){
	var tpl = "test",par={name:"sfg"},p = req.params[0];
	switch(req.params[0]){
		
		default :
			tpl = p.toString();
			par = { title : "测试页面"};
			break
	}
	res.render(tpl,par);  
})
var app_port = 3001;
app.listen(app_port,function(){
	console.log(app_port," ===== ",Math.random());
})