var srms=new Array("001","002","003","004","005","006","007","008");//sr机体
var srsu=new Array("301","302","303","304");//sr指挥
var srpt=new Array("201","202","203","204","205","206","207","208");//sr驾驶	
var hrms=new Array("011","012","013","014","015","016","017","018");//HR机体
var hrpt=new Array("211","212","213","214","215","216","217","218");//HR驾驶
var hrsu=new Array("311","312","313","314");//HR指挥
var rcard=new Array("031","032","033","034","035","036","037","038","231","232","233","234","235","236","331","332","333","334");//R ALL

var srrp=0.025;//SR确率
var srrpms=srrp*(srms.length/(srms.length+srsu.length+srpt.length));
var srrpsums=srrp*((srms.length+srsu.length)/(srms.length+srsu.length+srpt.length));
var hrrp=srrp+0.225;//HR确率
var hrrpms=srrp+hrrp*(hrms.length/(hrpt.length+hrms.length+hrsu.length));
var hrrpsums=srrp+hrrp*((hrms.length+hrsu.length)/(hrpt.length+hrms.length+hrsu.length));