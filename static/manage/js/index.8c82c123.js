(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["index"],{"0403":function(t,a,s){"use strict";var e=s("b114"),l=s.n(e);l.a},"50f9":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"main pl20 pr20 pb20 pt20",attrs:{time:"1577589984746"}},[s("el-row",{attrs:{gutter:20}},[s("el-col",{staticClass:"pb20",attrs:{xs:24,sm:8,lg:8}},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"pub-flex",staticStyle:{color:"#515356"},attrs:{slot:"header"},slot:"header"},[s("i",{staticClass:"fa fa-user fa-1x"}),s("span",{staticClass:"ml10"},[t._v(t._s(t.loginInfo.userName))])]),s("div",{staticClass:"login-cart pl20 pr20 pt10 pb10"},[s("div",{staticClass:"clearfix item"},[s("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("本次登录时间")]),s("p",[t._v(t._s(t.loginInfo.nowLoginTime))])]),s("div",{staticClass:"clearfix item"},[s("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("本次登录IP")]),s("p",[t._v(t._s(t.loginInfo.nowLoginIp))])]),s("div",{staticClass:"clearfix item"},[s("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("NodeJS版本")]),s("p",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v(t._s(t.loginInfo.nodeVersion))])]),s("div",{staticClass:"clearfix item"},[s("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("MongoDB版本")]),s("p",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v(t._s(t.loginInfo.mongoVersion))])])])])],1),s("el-col",{attrs:{xs:24,sm:16,lg:16}},[s("div",{staticClass:"item-cart"},[s("el-row",{attrs:{gutter:20}},[s("el-col",{staticClass:"pb20",attrs:{xs:24,sm:12,md:12,lg:6}},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"cart-head text-center pub-flex cart-bg-warning",staticStyle:{"justify-content":"center"}},[s("i",{staticClass:"fa fa-user fa-2x pl10 pr10"}),s("span",{staticClass:"pl10 pr10"},[t._v("用户")])]),s("div",{staticClass:"cart-con text-center"},[t._v(" "+t._s(t.tagTotal.member)+" ")])])],1),s("el-col",{staticClass:"pb20",attrs:{xs:24,sm:12,md:12,lg:6}},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"cart-head text-center pub-flex cart-bg-danger",staticStyle:{"justify-content":"center"}},[s("i",{staticClass:"fa fa-weixin fa-2x pl10 pr10"}),s("span",{staticClass:"pl10 pr10"},[t._v("留言")])]),s("div",{staticClass:"cart-con text-center"},[t._v(" "+t._s(t.tagTotal.message)+" ")])])],1),s("el-col",{staticClass:"pb20",attrs:{xs:24,sm:12,md:12,lg:6}},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"cart-head text-center pub-flex cart-bg-primary",staticStyle:{"justify-content":"center"}},[s("i",{staticClass:"fa fa-video-camera fa-2x pl10 pr10"}),s("span",{staticClass:"pl10 pr10"},[t._v("视频")])]),s("div",{staticClass:"cart-con text-center"},[t._v(" "+t._s(t.tagTotal.video)+" ")])])],1),s("el-col",{staticClass:"pb20",attrs:{xs:24,sm:12,md:12,lg:6}},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"cart-head text-center pub-flex cart-bg-success",staticStyle:{"justify-content":"center"}},[s("i",{staticClass:"fa fa-bars fa-2x pl10 pr10"}),s("span",{staticClass:"pl10 pr10"},[t._v("分类")])]),s("div",{staticClass:"cart-con text-center"},[t._v(" "+t._s(t.tagTotal.type)+" ")])])],1)],1)],1)])],1),s("el-row",{attrs:{gutter:20}},[s("el-col",{staticClass:"pb20",attrs:{xs:24,sm:8,lg:8}},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"pub-flex",staticStyle:{color:"#515356"},attrs:{slot:"header"},slot:"header"},[s("i",{staticClass:"fa fa-user-plus fa-1x"}),s("span",{staticClass:"ml10"},[t._v("最新用户")])]),s("div",{staticClass:"new-user"},[t.memData.length?s("div",[s("div",{staticClass:"pt10"}),s("ul",{staticClass:"clearfix"},t._l(t.memData,(function(a){return s("li",{key:a._id},[s("i",{staticClass:"fa fa-user fa-1x img"}),s("p",{staticClass:"text-nowrap"},[t._v(t._s(a.userName))])])})),0)]):s("div",[s("div",{staticClass:"pt20 pb20 text-center"},[t._v("暂无注册会员……")])])])])],1),s("el-col",{staticClass:"pb20",attrs:{xs:24,sm:16,lg:16}},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"pub-flex",staticStyle:{color:"#515356"},attrs:{slot:"header"},slot:"header"},[s("i",{staticClass:"fa fa-weixin fa-1x"}),s("span",{staticClass:"ml10"},[t._v("最新留言")])]),s("div",{staticClass:"model"},[t.msgData.length?s("div",[s("ul",{staticClass:"reply"},t._l(t.msgData,(function(a){return s("li",{key:a._id},[s("div",{staticClass:"head pr text-left text-nowrap"},[s("span",{staticClass:"sky-blue",staticStyle:{color:"#409EFF"}},[t._v(t._s(a.userName))]),a.reply?s("span",[s("span",{staticClass:"red"},[t._v(" @ ")]),s("span",{staticClass:"sky-blue"},[t._v(t._s(a.reply))])]):t._e(),s("span",[t._v(" 在 ")]),s("a",{attrs:{title:a.title},on:{click:function(s){return t.showVideoDrawer(a.vid)}}},[t._v(t._s(a.title))]),s("div",{staticClass:"date text-nowrap text-right"},[s("i",{staticClass:"el-icon-time pr10"}),s("span",[t._v(t._s(t.timeInterval(a.date)))])])]),s("div",{staticClass:"msg clearfix"},[s("div",{staticClass:"user-logo text-center",staticStyle:{color:"#666"}},[s("i",{staticClass:"fa fa-user fa-2x"})]),s("div",{staticClass:"text-bg"},[s("div",{staticClass:"text"},[s("p",{staticClass:"word-wrap"},[t._v(t._s(a.text))])])])])])})),0)]):s("div",[s("div",{staticClass:"pt20 pb20 text-center"},[t._v("暂无留言内容……")])])])])],1)],1)],1)},l=[],i=s("b775");function r(t,a){return Object(i["a"])({url:"/manage/main/getAllInfos",method:"GET",params:t||{}},a||{})}var c={data:function(){return{loginInfo:{userName:"默认管理员",nowLoginTime:"",nowLoginIp:"127.0.0.1",nodeVersion:"8.11.0",mongoVersion:"4.0.0"},tagTotal:{member:0,type:0,message:0,video:0},msgData:[],memData:[]}},methods:{showVideoDrawer:function(t){},timeInterval:function(t){var a=(new Date).getTime(),s=a-t,e=s>=0?"前":"后";return s=Math.abs(s),s<6e4?"刚刚":s<36e5?parseInt(s/6e4)+" 分钟"+e:s<864e5?parseInt(s/36e5)+" 小时"+e:s<2592e6?parseInt(s/864e5)+" 天"+e:s<31536e6?parseInt(s/2592e6)+" 个月"+e:parseInt(s/31536e6)+" 年"+e}},created:function(){var t=this;r({},{loading:!0}).then((function(a){if(200===a.data.code){var s=a.data.value;t.loginInfo.userName=s.loginInfo.userName,t.loginInfo.nowLoginTime=t.dateStringify(s.loginInfo.nowLoginTime),t.loginInfo.nowLoginIp=s.loginInfo.nowLoginIp,t.loginInfo.nodeVersion=s.loginInfo.nodeVersion,t.loginInfo.mongoVersion=s.loginInfo.mongoVersion,t.tagTotal.member=s.tagTotal.member,t.tagTotal.message=s.tagTotal.message,t.tagTotal.video=s.tagTotal.video,t.tagTotal.type=s.tagTotal.type,t.msgData=s.message,t.memData=s.member}}))}},n=c,o=(s("0403"),s("ffee"),s("9ca4")),d=Object(o["a"])(n,e,l,!1,null,"380b0cde",null);a["default"]=d.exports},7389:function(t,a,s){},b114:function(t,a,s){},ffee:function(t,a,s){"use strict";var e=s("7389"),l=s.n(e);l.a}}]);