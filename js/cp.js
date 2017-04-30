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
        
    var buy=confirm("CPが足りません、13000円を支払って11457CPを購入しますか？");
    if(buy){
        quartz+=11457;
        money+=13000;
        alert("CPの購入が成功しました。今は"+quartz;CPを持っています.);
        $("#quartz").text(quartz);
        $("#money").text(money);
        return true;
    }
    else{
        alert("CPの購入をやめます。");
        return false;
    }
}
