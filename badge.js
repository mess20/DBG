
link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', 'https://mess20.github.io/DBG/css/decoration.css'); document.body.appendChild(link);

function badgeWear(){
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
};

setInterval(badgeWear,100);


