

//独立COOKIE文件     ck在``里面填写，多账号换行
let xiaoleurlVal= `https://minapp.xqrobot.net/user.php?mod=index&client=minapp&version=2.7&site=yyq&user_openid=ofGEO5Aldk3wqyljR_MD3qxGnb44&user_lbs=&city=&u=11084
https://minapp.xqrobot.net/user.php?mod=index&client=minapp&version=2.7&site=yyq&user_openid=ofGEO5FWUdfYEOLiuCny7O5jFI_c&user_lbs=&city=
https://minapp.xqrobot.net/user.php?mod=index&client=minapp&version=2.7&site=yyq&user_openid=ofGEO5LnvVk-IhgXMN2e9B9xXZbY&user_lbs=&city=&u=51925`
let xiaoleheaderVal= `{"Cookie":"PHPSESSID=05vogph23np6om345uet00h2t2","Accept":"*/*","Connection":"keep-alive","Referer":"https://servicewechat.com/wx7d27c26991711f37/127/page-frame.html","Content-Type":"application/json","Host":"minapp.xqrobot.net","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.2(0x1800022e) NetType/WIFI Language/zh_CN","Accept-Encoding":"gzip, deflate, br","Accept-Language":"zh-cn"}
{"Accept-Encoding":"gzip,compress,br,deflate","Cookie":"PHPSESSID=0d8c1epvi1b3vjvba9g8rlh0j5","Connection":"keep-alive","Referer":"https://servicewechat.com/wx7d27c26991711f37/127/page-frame.html","Content-Type":"application/json","Host":"minapp.xqrobot.net","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.2(0x1800022d) NetType/WIFI Language/zh_CN"}
{"Cookie":"PHPSESSID=6aaqs1ui72u0firn67o0i89b23","Accept":"*/*","Connection":"keep-alive","Referer":"https://servicewechat.com/wx7d27c26991711f37/127/page-frame.html","Content-Type":"application/json","Host":"minapp.xqrobot.net","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.2(0x18000233) NetType/WIFI Language/zh_CN","Accept-Encoding":"gzip, deflate, br","Accept-Language":"zh-cn"}`



let xiaolecookie = {
  xiaoleurlVal: xiaoleurlVal,	
  xiaoleheaderVal: xiaoleheaderVal,  

}

module.exports =  xiaolecookie
  


