
link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css'); document.body.appendChild(link);

link1 = document.createElement('link');
link1.setAttribute('rel', 'stylesheet');
link1.setAttribute('href', 'https://mess20.github.io/css/magic effect.css'); document.body.appendChild(link1);

$("body").append(" <div id=\"tool-nav\" style=\"z-index:6001;display:flex;justify-content:space-around; position:fixed;bottom:1.6vh;left:50vw;width:50vw;height:2rem;\">    <btn id=\"btn-start\" style=\"\"><i class=\"fa fa-gamepad\" ></i></btn>     <btn id=\"btn-dice\" style=\"\"><i class=\"fa fa-flickr\" ></i></btn>        <btn id=\"btn-skill\" style=\"\"><i class=\"fa fa-magic\" ></i></btn>    <btn id=\"btn-map\" style=\"\"><i class=\"fa fa-map\" ></i></btn>    </div>                                <div id=\"skill-panel\" style=\"position:fixed;left:22vw;right:22vw;top:35vh;bottom:35vh;display:none;background:#3A393E;border-radius:15px;padding:20px;flex-direction:column;justify-content:space-around;padding-left:4rem;\">  <div id=\"m1\">Shock wave</div> <div id=\"m2\">Blue blaze</div> <div id=\"m3\">Darkblue curse</div> <div id=\"m4\">Ash fog</div> <div id=\"m5\">Explosion</div> <div id=\"m6\">Quick swords</div> <div id=\"m7\">Silvers lightning</div> <div id=\"m8\">Fleuret</div>  <div id=\"m9\">Sorry, you haven't got any skills.</div> <div id=\"m10\">Ball fire</div> <div id=\"m11\">Blood-sword</div> <div id=\"m12\">Ice arrow</div> <div id=\"m13\">Flame shield</div> <div id=\"m14\">Ice-breaking</div> <div id=\"m15\">Water hiding</div> </div>            <img id=\"map\" style=\"opacity:0.7;display:none;position:fixed;overflow-x:auto;left:0;bottom:20%;height:60%;width:auto;\" src=\"http://i.miaosu.bid/data/f_18363771.jpg\">      <div id=\"mask\" style=\"position:fixed;left:0;top:0;height:100vh;width:100vw;background:rgba(0,0,0,0.7);display:none;\"></div>   <div id=\"mask1\" style=\"position:fixed;right:-12vw;bottom:-25vh;height:80vh;width:80vw;background:transparent;display:block;z-index:-1000\"></div> ");  

//初始化
$("body").append("<textarea id=\"career\" value=\"\" style=\"z-index:6000;position:fixed;top:16.3vh;left:0vw;height:3.6rem;width:10rem;padding-top:0.8rem;text-align: center;background:#333;color:yellow;box-shadow:2px 2px 6px lightyellow;border:1px;border-radius:8px;transition:1s\" >wait…</textarea>  ");

setTimeout(function(){
//自定义版
//var c = prompt("请输入您的职业","");
//随机版
var c = Math.round(Math.random()*(16-1)+1);
if(c==1){var career = "王子" };
if(c==2){var career = "公主" };
if(c==3){var career = "勇者" };
if(c==4){var career = "女孩" };
if(c==5){var career = "剑士" };
if(c==6){var career = "射手" };
if(c==7){var career = "法师" };
if(c==8){var career = "占卜师" };
if(c==9){var career = "吟游诗人" };
if(c==10){var career = "商人" };
if(c==11){var career = "工匠" };
if(c==12){var career = "农民" };
if(c==13){var career = "精灵" };
if(c==14){var career = "吸血鬼" };
if(c==15){var career = "盗贼" };
if(c==16){var career = "杀手" };
alert("现在您成为了DOLLARS里的一位"+career);

$("span.select-text").each(function(){
var a=$(this).text();
if(a=="Lord"){
$(this).click();
}  
});
$("li").each(function(){
var a=$(this).text();
if(a=="私信（DM）"){
$(this).click();
$("[name='message']").val(career);
$("[name='post']").submit();
}
});

$("#career").val("【"+career+"】");

//游戏开始
$("#btn-start").bind("click",function(){
$("body").append("<textarea id=\"sum\" type=\"number\" value=\"\" style=\"z-index:6000;position:fixed;top:16.3vh;right:2vw;height:4rem;width:4rem;padding-top:1rem;text-align: center;background:#111;color:green;box-shadow:2px 2px 8px lightgreen;border:1px;border-radius:100%;transition:1s\" ></textarea>  ");
var n0 = Math.round(Math.random()*(10-1)+1);
$("#sum").val(n0);
$("[name='message']").val("/me被传送到地点"+n0);
$("[name='post']").submit();
$("#btn-start").unbind();
});
//投掷骰子
$("#btn-dice").bind("click",function(){
var n0 = $("#sum").val();
var n0 = n0.toString();
var n0 = Number(n0);
var n = Math.round(Math.random()*(12-1)+1);
var n1 = n + n0;
$("#sum").val(n1);
$("#sum").css({"color":"lightgreen"});
$("[name='message']").val("/me掷出了点数"+ n + "，到达地点" + n1);
$("[name='post']").submit();

setTimeout(function(){
$("#sum").css({"color":"green"});
},1000);

//地图
//$(".plot")[n1].css({"opacity":"1"});


});
//技能特效
$("#btn-skill").bind("click",function(){
$("#skill-panel").css({"display": "flex" });
$("#skill-panel").css({"z-index": "6001"});
$("#skill-panel div").css({"display": "none" });


if( c==3){ $("#m10,#m11,#13").css({"display": "block" }) }
else if( c==5){ $("#m6,#m7,#m8").css({"display": "block" }) }
else if( c==6){ $("#m12,#m14").css({"display": "block" }) }
else if( c==7){ $("#m1,#m2,#m3,#m4,#m5").css({"display": "block" }) }
else if( c==13){ $("#m15").css({"display": "block" }) }else{$("#m9").css({"display": "block" }) };

$("#mask").css({"display": "block"});
$("#mask").css({"z-index": "6000"});

$("#skill-panel div").bind("click",function(){
$("#skill-panel").css({"display":"none" });
$("#mask").css({"display":"none" });
var i = $(this).attr("id");
$("#mask1").css({"z-index": "10000"});
$("#mask1").css({"animation": i +" 1s" });
var skillname = $(this).text();
$("[name='message']").val("/me使用了技能「"+ skillname + "」" );
$("[name='post']").submit();
$("[name='message']").val("");

setTimeout(function(){
$("#mask1").css({"z-index": "-1000"});
$("#mask1").css({"animation": "none" });
},1000);
});


$("#mask").bind("click",function(){
$("#skill-panel").css({"display": "none"});
$("#mask").css({"display": "none"});
});

});


var a = $("body").html();
var b = a
//中级徽章（纪念徽章）
.replace(new RegExp('【建筑师】' , "g"), '<font color=\"gold\">✪</font>')
.replace(new RegExp('【收藏家】' , "g"), '<font color=\"orange\">★</font> ')
.replace(new RegExp('【巧辩手】' , "g"), '<font color=\"grape\">✤</font> ')
.replace(new RegExp('【守护者】' , "g"), '<font color=\"olive\">❈</font> ')
.replace(new RegExp('【破冰者】' , "g"), '<font color=\"navy\">✵</font> ')
.replace(new RegExp('【艺术家】' , "g"), '<font color=\"purple\">❆</font> ')
//高级徽章（荣耀强者徽章）
.replace(new RegExp('【圣人】' , "g"), ' <span style=\"animation:transformColor 10s infinite\">❀༒❀</span>')
.replace(new RegExp('【勇士】' , "g"), ' <span style=\"animation:transformColor 10s infinite\">༺࿈༻</span>')
.replace(new RegExp('【骑士】' , "g"), ' <span style=\"animation:transformColor 10s infinite\">༺༒༻</span>')
.replace(new RegExp('【先知】' , "g"), ' <span style=\"animation:transformColor 10s infinite\">༺ཌ༈༒༈ད༻</span>')
.replace(new RegExp('【死神】' , "g"), ' <span style=\"animation:transformColor 10s infinite\">༺༽༾ཊ࿈ཏ༿༼༻</span>')
.replace(new RegExp('【强者】' , "g"), ' <span style=\"animation:transformColor 10s infinite\">༺❀ൢ༒ൢ❀༻</span>')
//身份徽章
.replace(new RegExp('1 ❂' , "g"), '<span style=\"background:linear-gradient(to right bottom,red 0%,gold 14%,yellow 28%,lightgreen 42%,blue 56%,navy 70%,purple 84%);-webkit-background-clip: text;     color: transparent;\">❂</span>')
.replace(new RegExp('2 ❂' , "g"), '<span style=\"background:linear-gradient(to right bottom,red 0%,gold 14%,yellow 28%,lightgreen 42%,blue 56%,navy 70%,purple 84%);-webkit-background-clip: text;     color: transparent;\">❂</span>')
.replace(new RegExp('3 ❂' , "g"), '<span style=\"background:linear-gradient(to right bottom,red 0%,gold 14%,yellow 28%,lightgreen 42%,blue 56%,navy 70%,purple 84%);-webkit-background-clip: text;     color: transparent;\">❂</span>');
$("body").html(b)

//奖惩机制
/*
var badge = <undefined>;
alert("恭喜您获得徽章"+badge);
$("[name='message']").val("/me获得了徽章" + badge);
$("[name='post']").submit();
*/

//查看地图
$("#btn-map").bind("click",function(){
$("#map").css({"display": "block" });
$("#map").css({"z-index": "10001"});
$("#mask").css({"display": "block"});
$("#mask").css({"z-index": "10000"});

$("#mask").bind("click",function(){
$("#map").css({"display": "none"});
$("#mask").css({"display": "none"});
})

});




},3000)
