link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css'); document.body.appendChild(link);

link1 = document.createElement('link');
link1.setAttribute('rel', 'stylesheet');
link1.setAttribute('href', 'https://mess20.github.io/css/magic effect.css'); document.body.appendChild(link1);

$("body").append(" <div id=\"tool-nav\" style=\"z-index:6001;display:flex;justify-content:space-around; position:fixed;bottom:1.6vh;left:50vw;width:50vw;height:2rem;\">    <btn id=\"btn-skill\" style=\"\"><i class=\"fa fa-magic\" ></i></btn>    <btn id=\"btn-map\" style=\"\"><i class=\"fa fa-map\" ></i></btn>    </div>                                <div id=\"skill-panel\" style=\"position:fixed;left:22vw;right:22vw;top:35vh;bottom:35vh;display:none;background:#3A393E;border-radius:15px;padding:20px;flex-direction:column;justify-content:space-around;padding-left:4rem;\">  <div id=\"m1\">Shock wave</div> <div id=\"m2\">Blue blaze</div> <div id=\"m3\">Darkblue curse</div> <div id=\"m4\">Ash fog</div> <div id=\"m5\">Explosion</div> <div id=\"m6\">Quick swords</div> <div id=\"m7\">Silvers lightning</div> <div id=\"m8\">Fleuret</div>  <div id=\"m9\">Sorry, you haven't got any skills.</div> <div id=\"m10\">Ball fire</div> <div id=\"m11\">Blood-sword</div> <div id=\"m12\">Ice arrow</div> <div id=\"m13\">Flame shield</div> <div id=\"m14\">Ice-breaking</div> <div id=\"m15\">Water hiding</div> </div>            <img id=\"map\" style=\"opacity:0.7;display:none;position:fixed;overflow-x:auto;left:0;bottom:20%;height:60%;width:auto;\" src=\"http://i.miaosu.bid/data/f_18363771.jpg\">      <div id=\"mask\" style=\"position:fixed;left:0;top:0;height:100vh;width:100vw;background:rgba(0,0,0,0.7);display:none;\"></div>   <div id=\"mask1\" style=\"position:fixed;right:-12vw;bottom:-25vh;height:80vh;width:80vw;background:transparent;display:block;z-index:-1000\"></div> ");  

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
