
function getOne(i,j){
    var imgurl;
    var rand;
    if(j==-1){
        if(quartz<300){
            if(!buyQuartz())
                return;
        }
        quartz-=300;
        $("#quartz").text(quartz);
    }
    if(j==0||j==-1){
        
        times=times+1;
        $("#times").text(times);
        rand=Math.random();
    }
    else
        rand=j;
    if(rand<srrpsums){ //作为sr机体使用
        log[i]=0;
        var bias=srrpms/srms.length;
        if(rand<srrpms){    //up
            for(var r=0;r<srms.length;r=r+1){
                imgurl="card/"+srms[r]+".PNG";
                $("#r_"+i).attr("src",imgurl);
                $("#srsu").append("<img class=\"img-thumbnail\" src=\""+imgurl+"\"></img> ");
            }
            return;
        }
        bias=(srrpsums-srrpms)/srsu.length;
        for(var r=0;r<srsu.length;r=r+1){  //作为sr指挥使用
            if(rand>=srrpms+r*bias&&rand<srrpms+(r+1)*bias){
                imgurl="card/"+srsu[r]+".PNG";
                $("#r_"+i).attr("src",imgurl);
                $("#srsu").append("<img class=\"img-thumbnail\" src=\""+imgurl+"\"></img> ");
                return;
            }
        }
    }
    if(rand<srrp){  //作为sr驾驶使用
        log[i]=2;
        var bias=(srrp-srrpsums)/srpt.length;
        for(var r=0;r<srpt.length;r=r+1){
            if(rand>=srrpsums+r*bias&&rand<srrpsums+(r+1)*bias){
                imgurl="card/"+srpt[r]+".PNG";
                $("#r_"+i).attr("src",imgurl);
                $("#srpt").append("<img class=\"img-thumbnail\" src=\""+imgurl+"\"></img> ");
                return;
            }
        }
    }//-------------------------------------------------------------------------
    if(rand<hrrpms){  //作为HR机体使用
        log[i]=0;
        var bias=(hrrpms-srrp)/hrms.length;
        for(var r=0;r<hrms.length;r=r+1){
            if(rand>=srrp+r*bias&&rand<srrp+(r+1)*bias){
                imgurl="card/"+hrms[r]+".PNG";
                $("#r_"+i).attr("src",imgurl);
                $("#hrms").append("<img class=\"img-thumbnail\" src=\""+imgurl+"\"></img> ");
                return;
            }
        }
    }
    if(rand<hrrpsums){   //作为HR指挥使用
        log[i]=2;
        var bias=(hrrpsums-hrrpms)/hrsu.length;
        for(var r=0;r<hrpt.length;r=r+1){
            if(rand>=hrrpms+r*bias&&rand<hrrpms+(r+1)*bias){
                imgurl="card/"+hrsu[r]+".PNG";
                $("#r_"+i).attr("src",imgurl);
                $("#hrsu").append("<img class=\"img-thumbnail\" src=\""+imgurl+"\"></img> ");
                return;
            }
        }
    }
    if(rand<hrrp){   //作为HR驾驶使用
        log[i]=1;
        var bias=(hrrp-hrrpsums)/hrpt.length;
        for(var r=0;r<hrpt.length;r=r+1){
            if(rand>=hrrpsums+r*bias&&rand<hrrpsums+(r+1)*bias){
                imgurl="card/"+hrpt[r]+".PNG";
                $("#r_"+i).attr("src",imgurl);
                return;
            }
        }
    }
    //--------------------------------------------------------------------------
	//作为R使用
    log[i]=3;
    var bias=(1-hrrp)/rcard.length;
    for(var r=0;r<rcard.length;r=r+1){
        if(rand>=hrrp+r*bias&&rand<hrrp+(r+1)*bias){
            imgurl="card/"+rcard[r]+".PNG";
            $("#r_"+i).attr("src",imgurl);
            return;
        }
    }
}
function getTen(){
    if(quartz<3000){
        if(!buyQuartz())
            return;
    }
    quartz-=3000;
    $("#quartz").text(quartz);
    log=new Array(11);
    for(var i=1;i<=10;i++)
        getOne(i,0);
    var no_gold=true,no_servant=true;   //pro: golden card, mini:servant
    for(var i=1;i<=10;i++){
        if(log[i]%2==0)
            no_gold=false;
    }
    if(no_gold){     //no golden card,randomly pick a silver card, change to a gold card
        var pick=Math.floor(Math.random()*10+1);
        getOne(pick,Math.random()*0.2);
    }
    for(var i=1;i<=10;i++){  //check if no servant is summoned.
        if(log[i]<2)
            no_servant=false;
    }
    if(no_servant){
        var pick=Math.floor(Math.random()*10+1);
        var cnt=0;
        while(log[pick]%2==0&&cnt<10){     //no servant, randomly pick a silver card
            pick=Math.floor(Math.random()*10+1);
            cnt+=1;
        }
        if(cnt==10){
            for(var i=1;i<=10;i++){
                if(log[i]==3)
                    pick=i;
            }
        }
        var rand=Math.random()*0.44;
        if(rand>0.01&&rand<=0.04)   //(0.01,0.04] -> (srrp,hrrpms]
            rand=rand+0.04;
        else if(rand>0.04)      //(0.04,0.44) -> (hrrpsums,hrrp)
            rand+=0.16;
        getOne(pick,rand);
    }
}
function clearResult(){
    for(var i=1;i<=10;i++){
        $("#r_"+i).attr("src","");
    }
}
