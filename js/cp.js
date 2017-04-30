// JavaScript Document
var log=new Array(11);
var times=0;
var quartz=0;
var money=0;
function buyQuartz(){
    if($("#auto_buy").is(':checked')){
        quartz+=11457;
        money+=13000;
        $("#money").text(money);
        return true;
    }
        
    var buy=confirm("您的CP不足，是否花费13000円购11457cp？");
    if(buy){
        quartz+=11457;
        money+=13000;
        alert("购买cp成功。您目前持有cp："+quartz);
        $("#quartz").text(quartz);
        $("#money").text(money);
        return true;
    }
    else{
        alert("取消购入cp。");
        return false;
    }
}
