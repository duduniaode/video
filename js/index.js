
 $(window).ready(function(){
    box();
    // page();
    //  鼠标放上去 背景变白效果
    //?????????????
    $(".hot-content li div").mouseover(function(){
        $(this).addClass("div-selected");
    })
    $(".hot-content div").mouseout(function(){
        $(this).removeClass("div-selected");
    })
    // 资讯详情 鼠标放上背景变白
    $(".ceefax-content li div").mouseover(function(){
        $(this).addClass("ceefax-selected");
    })
    $(".ceefax-content div").mouseout(function(){
        $(this).removeClass("ceefax-selected");
    })
    // 碟机播放器
    $(".video-nav-text").mouseenter(function(){
        //鼠标放上去后，添加active类 其他的删除active类
        $(this).addClass("video-nav-active").siblings(".video-nav-text").removeClass("video-nav-active");
        //对应索引值的div添加selected类，其他的删除selected类
        $(".video-content>div").eq($(this).index()).addClass("vcontent-selected").siblings("div").removeClass("vcontent-selected");
    });
    // 碟机播放器 更多
    $(".more").click(function(){
        // 当前元素的兄弟元素的子元素
        $(this).siblings("ul").find(".video-line").show();
        // 当前的more隐藏
        $(this).parent().find(".more").hide();
    });
    // 更多公告
    $("#notice-more").click(function(){
        $(".notice2").show();
        $(".notice3").show();
        $("#notice-more").hide();
    })
    
 });



// //  分页
// function page(){
//     // content-ul下li标签的个数就是文章数量
//     var artical = document.getElementsByClassName("content-ul")[0].getElementsByTagName("li");
//     console.log(artical.length);
//     var arr = new Array(artical.length);
//     for(var i=0;i<artical.length;i++){
//         // 将li标签中的内容赋给数组
//         arr[i]=artical[i].innerHTML;
//     }

//     // 设置当前页
//     var nowpage = 1;
//     // 设置每页信息条数
//     var page_size = 4;
//     // 设置总页数
//     var page_all;
//     // 看余数 设置总页数
//     if(arr.length%page_size==0){
//         page_all=arr.length/page_size;
//     }else{
//         // 取整
//         page_all=parseInt(arr.length/page_size)+1;
//     }

//     // e输入页
//     function change(e){
//         nowpage = e;
//         // 如果输入页<1 则为第一页
//         if(e<1){
//             e=1;
//             nowpage=1;
//         }
//         // 如果输入页>最大页
//         // 输入页和当前页=最大页
//         if(e>page_all){
//             e=page_all;
//             nowpage=page_all;
//         }
//         // 当前页面清空
//         document.getElementsByClassName("content-ul")[0].innerHTML="";
//          /**
//         *   1.创建li标签
//             2.将第几条信息传递给li标签
//             3.将li标签插入到ul中
//         */
//        for(var j=0;j<page_size;j++){
//         //1. 创建li标签
//         var li = document.createElement("li");
//         // 2.将（(e-1)*page_size+j）条信息给li标签
//         li.innerHTML=arr[(e-1)*page_size+j];
//         // 3.将li标签插入到ul中
//         document.getElementById("content-ul").appendChild(li);
//         if(arr[(e-1)*page_size+j+1]==null) break;
//         }

//         // 设置显示的页数数字
//         var pagenum = "";
//         for(var m=1;m<=page_all;m++){
//             // pagenum=pagenum+"<span><a href='#' onClick='change("+m+")'>"+m+"</a></span> ";
//             if(e==m){
//                 pagenum=pagenum+"<span><a href='#' onClick='change("+m+")' style='color:#FF0000'>"+m+"</a></span> ";  
//             }else{  
//                 pagenum=pagenum+"<a href='#' onClick='change("+m+")'>"+m+"</a> ";  
//             }  
//         }

//         document.getElementById("page1").innerHTML=nowpage;
//         document.getElementById("page2").innerHTML=page_all;
//         document.getElementById("page3").innerHTML=pagenum;
//     }
// }
