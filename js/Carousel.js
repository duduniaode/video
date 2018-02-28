
 //  轮播图
// $(function(){
  //  第i张图片
  function box(){
  var i = 0;
  // 定时器
  var timer = null;
  // 创建圆点
  for(var j = 0;j < $('.showbox-img li').length; j++){
    // 在dots下插入li标签 有几张图片就添加几个
    $('.dots').append('<li></li>');
  }
  // 给第一个圆点添加样式（默认从第一个开始）
  $('.dots li').first().addClass('active');
  // 复制第一张图片
  var firstimg = $('.showbox-img li').first().clone();

  // console.log($('.showbox-img li').length);
  
  // console.log($('.showbox-img img').width());
  // 将复制到的第一张图片放到最后一张图片后面 
  // 设置showbox-img的宽度为图片张数*图片宽度（由于复制了一张图片 结果比实际图片数量+1）
  $('.showbox-img').append(firstimg).width($('.showbox-img li').length*($('.showbox-img img').width())); 
  // console.log($('.showbox-img').width());
  // 上一张图片
  $('.pre').click(function(){
    i--;
    if(i==-1) {
      // i的值是从0开始的
        i=$('.showbox-img li').length-2;
        $('.showbox-img').css({left:-($('.showbox-img li').length-1)*430});
    }
    //$(selector).animate(styles,options)
    // styles 必需。规定产生动画效果的 CSS 样式和值（同上）。
    //options 可选。规定动画的额外选项。
    //stop()作用：停止当前正在执行的动画
    // 整个图片向左移动
    $('.showbox-img').stop().animate({left:-i*430},300);
    //给上一张图片添加小圆点指示
    $('.dots li').eq(i).addClass('active').siblings().removeClass('active');
  })
  // 下一张图片
  $('.next').click(function(){
    i++;
    if(i==$('.showbox-img li').length) {
        i=1; //这里不是i=0
        $('.showbox-img').css({left:0}); //保证无缝轮播，设置left值
    };
    $('.showbox-img').stop().animate({left:-i*430},300);
    //给下一张图片添加小圆点指示
    if (i==$('.showbox-img li').length-1) { 
      $('.dots li').eq(0).addClass('active').siblings().removeClass('active');
    }else{
      $('.dots li').eq(i).addClass('active').siblings().removeClass('active');
    }
  });

  // 左右箭头的显示
  $('.showbox').hover(function(){
    $('.pre').show();
    $('.next').show();
  },function(){
    $('.pre').hide();
    $('.next').hide();
  })

  //定时器自动播放
  timer = setInterval(function(){
    i++;
    if(i==$('.showbox-img li').length){
      // 当i==$('.showbox-img li').length时 就是复制过去的第一张图片
      // 第一张图片已经出现过了 所以i=1而不是i=0
      i = 1;
      // //保证无缝轮播 设置left值
      $('.showbox-img').css({left:0});
    };
    // 每300ms执行一次
    $('.showbox-img').stop().animate({left:-i*430},300);
    // 设置图片对应的圆点变色
    // 当i == $('.showbox-img li').length-1时 当前的图片是最后一张
    if(i == $('.showbox-img li').length-1){
      $('.dots li').eq(0).addClass('active').siblings().removeClass('active');
    }else{
      $('.dots li').eq(i).addClass('active');
      $('.dots li').eq(i).siblings().removeClass('active');
    }
  },1000)
 
  // 鼠标移入时(执行第一个function) 停止播放；移出时(执行第一个function) 开始自动播放
  $('.showbox').hover(function(){
    // 停止播放
    clearInterval(timer);
    // 鼠标放上时文字显示
    $('.showbox-img li>span').fadeIn(500);
    // 圆点消失
    $('.dots').hide();
    },function(){
    $('.showbox-img li>span').fadeOut(500);
    $('.dots').show();
    
      //自动播放
        timer = setInterval(function(){
          i++;
          if(i == $('.showbox-img li').length){
            i=1;
            $('.showbox-img').css({left:0});
          };
          $('.showbox-img').stop().animate({left:-i*430},300);
          if (i==$('.showbox-img li').length-1) { 
            $('.dots li').eq(0).addClass('active').siblings().removeClass('active');
          }else{
            $('.dots li').eq(i).addClass('active').siblings().removeClass('active');
          }
        },1000)
    })
  
//  })
  }