var log=new Array(11);
var times=0;
var quartz=0;
var money=0;
function buyQuartz(){
    if($("#auto_buy").is(':checked')){
        quartz+=Infinity ;
        money+=Infinity ;
        $("#money").text(money);
        return true;
    }
        
    var buy=confirm("Ab总，您的CP不足，是否收购BANDAI与SEGA？");
    if(buy){
        quartz+=Infinity ;
        money+=Infinity ;
        alert("收购成功!");
        $("#quartz").text(quartz);
        $("#money").text(money);
        return true;
    }
    else{
        alert("企业太小，放弃收购。");
        return false;
    }
}
