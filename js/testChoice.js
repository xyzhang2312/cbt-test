// This is the first page that allows subjects to pick one test
setFontSize();
window.onresize = setFontSize; //实时监听
function setFontSize(){
    var width = document.body.offsetWidth;
    var newSize = width/375*20;  
    var setHtml=document.getElementsByTagName('html')[0]; //通过根元素设置
    setHtml.style.fontSize = newSize+"px";
}

const testIntro="<div role=\"main\" class=\"form-all\" box-shadow=0 0 32px rgba(42, 42, 42, 0.16)>"+
"<ul class=\"form-section page-section\">"+
    "<div class=\"form-header-group  header-large\">"+
    "   <img src=\"./assets/BNUlogo.png\" alt=\"BNU logo\" loading=\"lazy\" class=\"form-image\" style=\"border:0\" tabindex=\"0\" data-component=\"image\"> "+
    "	  <div class=\"header-text httac htvam\">"+
    "		   <h1 id=\"header_1\" class=\"form-header\" data-component=\"header\">项目测验<\/h1>"+
    "	  <\/div>"+
    "<\/div>"+
    "<div id=\"text_2\" class=\"form-html\" data-component=\"text\" tabindex=\"0\">"+
    "    <div style=\"font-family:Inter, sans-serif;color:#2c3345;\">"+
    "    <p class=\"MsoNormal\" style=\"font-family:Inter, sans-serif;\"><strong><span style=\"line-height:107%;\">项目说明<\/strong><\/p>"+
    "    <p class=\"MsoNormal\" style=\"font-family:Inter, sans-serif;\">首先，非常感谢您参与此次测验！该项目由北京师范大学认知神经科学与学习国家重点实验室开展，目的是为了探究心理及药物治疗手段对精神类疾病的治疗机制。本项目采集的所有个人信息将会严格保密，仅用于科学研究，请您根据自己的情况如实填写并认真完成，感谢您的配合！<\/p>"+
    "         <hr width=\"300\" \/>"+
    "    <p class=\"MsoNormal\" style=\"font-family:Inter, sans-serif;\"><strong><span style=\"line-height:107%;\">请选择测验类别<\/strong><\/p>"+
    "   <br>"+
    "   <a href=\"./goal-setting/game.html\"><img class=\"testPick\" src=\"./assets/imgs/game.png\" alt=\"pick game\" data-component=\"image\"></a>"+
    "   <p>"+
    "   </p>"+
    "   <a href=\"./causal-attribution/choice.html\"><img class=\"testPick\" src=\"./assets/imgs/choice.png\" alt=\"pick attribution\" data-component=\"image\"></a>"+
    "   <p>"+
    "   </p>"+
    "   <a href=\"./twiceTest/twiceTest.html\"><img class=\"testPick\" src=\"./assets/imgs/both.png\" alt=\"test 2 days\" data-component=\"image\"></a>"+
    "   <br><br>"+
    "<\/ul>"+
"<\/div>";

document.getElementById('testIntro').innerHTML = testIntro;