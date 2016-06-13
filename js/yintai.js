$(function(){
	 var hidden=$(".ewma")[0]
	 var hidden1=$(".ewma-box")[0]
     var on=$(".tl-wx")[0]
     on.onmouseover=function(){
        hidden.style.display="block"
        hidden1.style.display="block"
    }
    on.onmouseout=function(){
        hidden.style.display="none"
        hidden1.style.display="none" 
    }


    var hidden2=$(".ewma1")[0]
    var hidden3=$(".ewma-box1")[0]
    var on1=$(".tl-phone")[0]
    on1.onmouseover=function(){
        hidden2.style.display="block"
        hidden3.style.display="block"
    }
    on1.onmouseout=function(){
        hidden2.style.display="none"
        hidden3.style.display="none" 
    }


    var hidden4=$(".card")[0]
    var on2=$(".our")[0]
    var hidden5=$(".kong")[0]
    on2.onmouseover=function(){
        hidden4.style.display="block"
        hidden5.style.display="block"
    }
    on2.onmouseout=function(){
        hidden4.style.display="none"
        hidden5.style.display="none"
    }


    // banner左
    var hidden6=$(".nav-hidden")[0]
    var hidden7=$(".nav-hidden1")[0]
    var hidden8=$(".nav-hidden2")[0]
    var hidden9=$(".nav-hidden3")[0]
    var hidden10=$(".nav-hidden4")[0]
    var hidden11=$(".nav-hidden5")[0]
    var hidden12=$(".nav-hidden6")[0]
    var hidden13=$(".nav-hidden7")[0]
    var hidden14=$(".nav-hidden8")[0]
    var hidden15=$(".nav-hidden9")[0]
    var on3=$(".nav-list1")[0]
    var on4=$(".nav-list2")[0]
    var on5=$(".nav-list3")[0]
    var on6=$(".nav-list4")[0]
    var on7=$(".nav-list5")[0]
    var on8=$(".nav-list6")[0]
    var on9=$(".nav-list7")[0]
    var on10=$(".nav-list8")[0]
    var on11=$(".nav-list9")[0]
    var on12=$(".nav-list10")[0]
    on3.onmouseover=function(){
        hidden6.style.display="block"
    }
    on3.onmouseout=function(){
        hidden6.style.display="none"
    }
    on4.onmouseover=function(){
        hidden7.style.display="block"
    }
    on4.onmouseout=function(){
        hidden7.style.display="none"
    }
    on5.onmouseover=function(){
        hidden8.style.display="block"
    }
    on5.onmouseout=function(){
        hidden8.style.display="none"
    }
    on6.onmouseover=function(){
        hidden9.style.display="block"
    }
    on6.onmouseout=function(){
        hidden9.style.display="none"
    }
    on7.onmouseover=function(){
        hidden10.style.display="block"
    }
    on7.onmouseout=function(){
        hidden10.style.display="none"
    }
    on8.onmouseover=function(){
        hidden11.style.display="block"
    }
    on8.onmouseout=function(){
        hidden11.style.display="none"
    }
    on9.onmouseover=function(){
        hidden12.style.display="block"
    }
    on9.onmouseout=function(){
        hidden12.style.display="none"
    }
    on10.onmouseover=function(){
        hidden13.style.display="block"
    }
    on10.onmouseout=function(){
        hidden13.style.display="none"
    }
    on11.onmouseover=function(){
        hidden14.style.display="block"
    }
    on11.onmouseout=function(){
        hidden14.style.display="none"
    }
    on12.onmouseover=function(){
        hidden15.style.display="block"
    }
    on12.onmouseout=function(){
        hidden15.style.display="none"
    }




    // banner轮播
    var box=$(".banner-box")[0]
    var imgs=$(".panner1")
    var circles=$(".circle")
    var left=$(".left")[0]
    var right=$(".right")[0]
    var n=0
    var t=setInterval(move,2000)
     function move(type){
        if(type=="l"){
            n--
            if(n<0){
            n=imgs.length-1
        }
        }else{
            n++
            if(n>=imgs.length){
            n=0
}
   }    
        //图片轮播
        for(var i=0;i<imgs.length;i++){
            imgs[i].style.display="none";//每个图片消失
            circles[i].style.background="#211616";//每个图片对应圈圈出现底色
        }
            imgs[n].style.display="block";//当前图片显现
            circles[n].style.background="#e5004f";//图片对应圈圈出现上层色
    }
    box.onmouseover=function(){
        clearInterval(t)
    }
    box.onmouseout=function(){
        t=setInterval(move,2000)
    }
       //圈圈选项卡
    for(var i=0;i<circles.length;i++){
        circles[i].index=i;
        circles[i].onmouseover=function(){
            for(var i=0;i<imgs.length;i++){
            imgs[i].style.display="none";//每个图片消失
            circles[i].style.background="#211616";//每个图片对应圈圈出现底色
        }
            imgs[this.index].style.display="block";//当前图片显现
            circles[this.index].style.background="#e5004f"//图片对应圈圈出现上层色
            n=this.index;
        }
    }
    //左右拐
    right.onclick=function(){
        move("r")
    }
    left.onclick=function(){
        move("l")
    }

    // 一楼
    var obj=$(".one-bottom-middle")
    for(var i=0;i<obj.length;i++){        
        lunbo(obj[i])
    }
    function lunbo(obj){       
        var boss=obj
        var imgs1=$(".pics",obj)
        var circles1=$(".circle1",obj)
        var left1=$(".left1",obj)[0]
        var right1=$(".right1",obj)[0]
        var n1=0
        var next=0
        var t1=setInterval(move3,1000)
        function move3(type){
            if(type=="l"){
                n1--
                if(n1<0){
                    n1=imgs1.length-1
                }
            }else{
                n1++
                if(n1>=imgs1.length){
                    n1=0
                }
            }    

            for(var i=0;i<imgs1.length;i++){
                imgs1[i].style.display="none";
                circles1[i].style.background="#211616";
            }
            imgs1[n1].style.display="block";
            circles1[n1].style.background="#e5004f";
        }
        boss.onmouseover=function(){
            clearInterval(t1)
        }
        boss.onmouseout=function(){
            t1=setInterval(move3,1000)
        }
        for(var i=0;i<circles1.length;i++){
            circles1[i].index=i;
            circles1[i].onclick=function(){
                for(var i=0;i<imgs1.length;i++){
                    imgs1[i].style.display="none";
                    circles1[i].style.background="#211616";
                }
                imgs1[this.index].style.display="block";
                circles1[this.index].style.background="#e5004f"
                n1=this.index;
            }
        }

        right1.onclick=function(){
            move3("")
        }
        left1.onclick=function(){
            move3("l")
        } 
    }




    // 
    var obj1=$(".floor-one-bnav")
    for(var i=0;i<obj1.length;i++){        
        lunbo1(obj1[i])
    }
    function lunbo1(obj){
    var box2=$(".floor-one-bsnav",obj)[0]
        var imgs2=$(".js",obj)[0]//*获取的是图片框
        var left2=$(".lrbtn",obj)[0]
        var right2=$(".lrbtn1",obj)[0]
        var flag=true//获取开关默认是开着的状态
        var t3=setInterval(move4,1000)//传入两个参数
        function move4(){
            if(!flag){
                return
            }
            flag=false//动画之前关闭开关
            var imgf=getFirst(imgs2)//获取图片框的第一个图片
            animate(imgs2,{left:-170},2000,function(){//
            imgs2.appendChild(imgf)//把图片追加到最后
            imgs2.style.left=0//恢复图片框的位置
            flag=true
            })
        }
        function move5(){
            if(!flag){
                return
            }
            flag=false
            var imgf=getFirst(imgs2)
            var imgs=getLast(imgs2)
            imgs.insertBefore(imgs,imgf)
            imgs.style.left=-170+"px"
            animate(imgs2,{left:0},2000,function(){
            flag=true
            })
        }
        box2.onmouseover=function(){
            clearInterval(t3)
        }
        box2.onmouseout=function(){
            t3=setInterval(move4,1000)
        }
        left2.onclick=function(){
            move4()
        }
        right2.onclick=function(){
            move5()
        }
    }





//楼层轮播
        var floor=$(".floor-one")
        var tbox=$(".shu2")[0]
        var lis=$(".shu-list")
        var cw=document.documentElement.clientWidth
        var ch=document.documentElement.clientHeight
        var bh=tbox.offsetHeight
        var sign=true
        var shuju=["潮流女装","精品女装","时尚鞋靴","潮流箱包","美容护肤","户外运动","内衣配饰","美容护肤","户外运动"]
        tbox.style.top=((ch-bh)/2-40)+"px"//给固定定位的top赋值
        for(var i=0;i<lis.length;i++){
            lis[i].index=i;//索引
            lis[i].onclick=function(){//点击楼层时
                //判断兼容性
                var floor=$(".floor-one")
                if(this.index === 8){
                    document.body.scrollTop=0
                }else{
                     sign=false   
                     console.log(this.index)              
                     var top=floor[this.index].offsetTop;
                     animate(document.body,{scrollTop:top},300,function(){
                         sign=true
                     });
                }
            for(var i=0;i<lis.length;i++){
                lis[i].innerHTML=""
                lis[i].style.background="none"
            }
                lis[this.index].style.background="#e5004f"
                lis[this.index].innerHTML=shuju[this.index]
            }
        }
        // for(var i=0;i<lis.length;i++){
        //     lis[i].index=i
        //     lis[i].ommouseover=function(){
        //         lis[this.index].style.background="#e5004f"
        //         lis[this.index].style.color="#fff"
        //         lis[this.index].style.innerHTML=shuju[this.index]
        //     }
        //     lis[i].onmouseout=function(){
        //         var floor=$(".floor-one")
        //         var top=floor[this.index].offsetTop
        //         if(top==document.body.scrollTop||(top-document.body.scrollTop<=250)&&top-document.body.scrollTop<=150){
        //             lis[this.index].style.background="e5004f"
        //             lis[this.index].style.color="#fff"
        //         }else if(top==document.body.scrollTop||(document.body.scrollTop-top<=280)&&document.body.scrollTop-top==0){
        //             lis[this.index].style.background="#e5004f"
        //             lis[this.index].style.color="#fff"
        //         }else{
        //             lis[i].innerHTML=""
        //             lis[i].style.background="none"
        //             lis[i].classList.add('lis'+(this.index-1)+'')
        //         }
        //     }
        // }
        var flag2=true;//定义开关
        var flag1=true;
        window.onscroll=function(){
        if(!sign){
            return
        }
        var floor=$(".floor-one")
        var shuju=["潮流女装","精品女装","时尚鞋靴","潮流箱包","美容护肤","户外运动","内衣配饰","户外运动","内衣配饰"]
        var obj2=document.documentElement.scrollTop? document.documentElement:document.body;
            for(var i=0;i<lis.length;i++){
                if(obj2.scrollTop>=floor[i].offsetTop-ch+100){
                    for(var j=0;j<lis.length;j++){
                        lis[j].innerHTML=""
                        lis[j].style.background="none"
                    }
                        lis[i].innerHTML=shuju[i]
                        lis[i].style.background="#e5004f"
                }
            }
            if(obj2.scrollTop>=floor[0].offsetTop-ch+100){//第一层楼出现
                if(flag2){
                    flag2=false//关掉动画
                    animate(tbox,{opacity:1},500,function(){//执行动画
                        flag1=true//消失的开关开启
                    });
                }
            }else{
                 if(flag1){//没有到达一楼时
                    flag1=false//消失的动画关闭
                    animate(tbox,{opacity:0},500,function(){//执行动画，楼层消失
                        flag2=true//显示的开关开启
                    });
                }
            }
        }





        //选项卡
         var sbox=$(".tuijian-in")
         var bbox=$(".bbox")
         for(var i=0;i<bbox.length;i++){
            bbox[i].index=i
            bbox[i].onmouseover=function(e){
                for(var i=0;i<bbox.length;i++){
                    sbox[i].style.display="none"
                }
                if(e.target!==this.index){
                    for(var i=0;i<bbox.length;i++){
                        bbox[i].style.fontWeight="normal"
                        bbox[i].style.borderColor="#333"
                    }     
                }
                sbox[this.index].style.display="block"
                bbox[this.index].style.fontWeight="bold"
                bbox[this.index].style.borderColor="#e5004f"
            }
         }
         
         var sbox1=$(".s-box")
         var bbox1=$(".b-box")
         for(var i=0;i<bbox.length;i++){
            bbox1[i].index=i
            bbox1[i].onmouseover=function(e){
                for(var i=0;i<bbox1.length;i++){
                    sbox1[i].style.display="none"
                }
                if(e.target!=this.index){
                    for(var i=0;i<bbox1.length;i++){
                        bbox1[i].style.fontWeight="normal"
                        bbox1[i].style.borderColor="#333"
                    }     
                }
                sbox1[this.index].style.display="block"
                bbox1[this.index].style.fontWeight="bold"
                bbox1[this.index].style.borderColor="#e5004f"
            }
         }



})