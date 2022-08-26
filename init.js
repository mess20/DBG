$("body").append(" <div id=\"tip\" style=\"position:fixed;left:22vw;right:22vw;top:15vh;bottom:15vh;display:block;background:#3A393E;border-radius:30px;padding:20px;flex-direction:column;justify-content:space-around;padding:6% 8%;z-index:10000;line-height:3.5rem;overflow:auto\"> <span-title style=\'display:block;font-size:2.4rem;margin-bottom:4rem;\'><center>重要声明</center> </span-title><li>请在房间内严格遵守drrr.com的聊天守则；</li><li>在房间内不得恶意侵扰其他用户；</li><li>（可选）如果点选此条声明，即表明您允许自己与游戏有直接联系且紧密相关的所有信息、言论（指游戏设定、在游戏期间为参与游戏发布的言论及图片等）在无恶意条件下，被免费且无署名情况下通过转载、修改、二次创作等形式使用。如有疑惑或异议可以暂点取消，与游戏管理员交流后再做决定。<input type=\"checkbox\" id=\"check\"></li>  <br><span>希望您仔细阅读上述要求，一旦点击“确定”，即表明您同意前两条规定和所选规定。</span>  <div style=\'margin-top:12%;margin-left:15%;margin-right:15%;display:flex;justify-content:space-around;\'><div style=\'color:lightyellow;display:block\' id=\'cancel-btn\'>取消</div><div style=\'color:lightyellow\' id=\'confirm-btn\'>确定</div></div> </div> ");
$("#check").click();

$("#check").attr("checked",true);
$("#check").bind('click',function(){
if($("#check").attr('checked')){                 $("#check").attr("checked",false);
}else{
$("#check").attr("checked",true);}
        })


$('#cancel-btn').bind('click',function(){
location.reload();
})

$('#confirm-btn').bind('click',function(){

if($("#check").attr('checked')){  
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
$("[name='message']").val('同意全部协议');
$("[name='post']").submit();
}
});
}

$("#tip").remove();
$("body").append(" <div id=\"tip\" style=\"position:fixed;left:22vw;right:22vw;top:25vh;display:block;background:#3A393E;border-radius:20px;padding:20px;flex-direction:column;justify-content:space-around;padding:6% 5%;z-index:10000;line-height:3.5rem\"> <span-title style=\'display:block;font-size:2rem;margin-bottom:2rem;\'><center>请选择身份：</center> </span-title><li onclick=\'gamerMode()\'>游戏玩家</li><li onclick=\'onlookerMode()\'>旁观者</li><li onclick=\'umpireMode()\'>裁判（裁判须尽职监督游戏全过程中所有玩家的言论及行为。点击即申请。） </li> </div> ");

}) //$('#confirm-btn').onclick




function gamerMode(){
$("#tip").remove();
$("body").append(" <div id=\"tip\" style=\"overflow:auto;position:fixed;left:22vw;right:22vw;top:15vh;bottom:15vh;display:block;background:#3A393E;border-radius:30px;padding:6% 5%;flex-direction:column;justify-content:space-around;z-index:10000;line-height:3.5rem\"> <span-title style=\'display:block;font-size:2rem;margin-bottom:2rem;\'><center>游戏过程中，</center> </span-title><li>谈论游戏外的私人话题，请密聊。</li><li>非本人专属游戏时间，讨论游戏相关的话题时，请一律小字。</li><li>不得利用游戏漏洞以任何形式实施或参与作弊行为；</li><li>游戏期间裁判会严格监督每位游戏玩家的言论及行为，并对违规行为给予相应惩罚。</li> <br><span>希望您仔细阅读上述要求，关于以上要求，如有异议，您可以选择旁观游戏或退出房间等。一旦点击“确定”，即表明您同意上述所有规定。</span>  <div style=\'margin-top:10%;margin-left:20%;margin-right:20%;display:flex;justify-content:space-around;\'><div style=\'color:lightyellow\' id=\'cancel-btn\'>取消</div><div style=\'color:lightyellow\' id=\'confirm-btn\'>确定</div></div> </div> ");
$('#cancel-btn').bind('click',function(){
location.reload();
})
$('#confirm-btn').bind('click',function(){
$("#tip").remove();
var script = document.createElement('script');
script.src = "https://mess20.github.io/DBG/gamer.js";
$('head')[0].appendChild(script);
})

}

function onlookerMode(){
$("#tip").remove();
$("body").append(" <div id=\"tip\" style=\"overflow:auto;position:fixed;left:22vw;right:22vw;top:15vh;bottom:15vh;display:block;background:#3A393E;border-radius:30px;padding:6% 5%;flex-direction:column;justify-content:space-around;z-index:10000;line-height:3.5rem\"> <span-title style=\'display:block;font-size:2rem;margin-bottom:2rem;\'><center>游戏进行期间，</center> </span-title><li>不得以任何形式透露游戏玩家游戏相关情报，不得协助他人作弊；</li><li>谈论游戏外的私人话题，请密聊。</li><li>讨论游戏相关的话题时，请一律小字。</li><br><span>希望您仔细阅读上述要求，关于以上要求，如有异议，您可以选择参与游戏或退出房间等。一旦点击“确定”，即表明您同意上述所有规定。</span>  <div style=\'margin-top:10%;margin-left:20%;margin-right:20%;display:flex;justify-content:space-around;\'><div style=\'color:lightyellow\' id=\'cancel-btn\'>取消</div><div style=\'color:lightyellow\' id=\'confirm-btn\'>确定</div></div> </div> ");
$('#cancel-btn').bind('click',function(){
location.reload();
})
$('#confirm-btn').bind('click',function(){
$("#tip").remove();
var script = document.createElement('script');
script.src = "https://mess20.github.io/DBG/onlooker.js";
$('head')[0].appendChild(script);
//待补充
})

}

function umpireMode(){
$("#tip").remove();
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
$("[name='message']").val('申请成为裁判');
$("[name='post']").submit();
}
});
}


