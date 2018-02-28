$(function() {
    var O_showbox = $('div.showbox');
    var O_imgbox = $('div.showbox div.imgbox');
    var O_imgs = $('div.showbox div.imgbox img');
    var O_pre = $('div.showbox div.pre');
    var O_aft = $('div.showbox div.aft');
    var O_lis = $('div.showbox ul.odot ul.lis li');
    var timer = null;
    var O_index = 1;
    var oshow_width = O_showbox.width();
    var O_imgs_len = O_imgs.length;
    O_imgs.each(function() {
        $(this).css('width', oshow_width + 'px');
    });
    O_imgbox.css('width', oshow_width * O_imgs_len + 'px');

    O_imgbox.css('left', '-' + oshow_width + 'px');
    O_aft.on('click', function() {
        O_index++;
        var target_left = -O_index * oshow_width;
        O_imgbox.stop(false, true).animate({ 'left': target_left + 'px' }, function() {
            if (O_index >= O_imgs_len - 1) {
                O_index = 1;
                O_imgbox.css('left', '-' + oshow_width + 'px');
            };
            O_lis.removeClass('active').removeClass('changtai');
            O_lis.eq(O_index - 1).addClass('active').siblings().addClass('changtai');
        });
    });
    O_pre.on('click', function() {
        O_index--;
        var target_left = -O_index * oshow_width;
        O_imgbox.stop(false, true).animate({ 'left': target_left + 'px' }, function() {
            if (O_index <= 0) {
                O_index = O_imgs_len - 2;
                O_imgbox.css('left', '-' + oshow_width * O_index + 'px');
            };
            O_lis.removeClass('active').removeClass('changtai');
            O_lis.eq(O_index - 1).addClass('active').siblings().addClass('changtai');
        });
    });

    function aoto_play() {
        timer = setInterval(function() {
            O_aft.click();
        }, 1500)
    };
    aoto_play();
    O_lis.on('click', function() {
        var index = $(this).index();
        O_index = index + 1;
        var target_left = -O_index * oshow_width;
        O_imgbox.stop(false, true).animate({ 'left': target_left + 'px' });
        O_lis.removeClass('active').removeClass('changtai');
        O_lis.eq(O_index - 1).addClass('active').siblings().addClass('changtai');
    });
    O_showbox.hover(function() {
        clearInterval(timer);
    }, function() {
        aoto_play();
    });

    // 自适应
    var Oz_width = 1903; //初始状态的宽度
    var Oz_height = 800; //初始状态的高度
    // var Oz_ratio = Oz_height / Oz_width; // 自适应高宽比率
    var Oz_ratio = 0.8;

    function zishiying() {
        // var curwidth = $(document.body).width();
        //初始化
        // 设定显示divbox的宽为视窗宽度，高度为宽度按比例缩放
        O_showbox.width('430' + 'px');
        O_showbox.height(parseInt('430' * Oz_ratio) + 'px');
        //设置图片的高度和宽度
        O_imgs.each(function() {
            $(this).css('width', oshow_width + 'px');
            $(this).css('height', parseInt('430' * Oz_ratio) + 'px');
        });
        // 设定imgbox的高度和宽度
        O_imgbox.css('width', curwidth * O_imgs_len + 'px');
        O_imgbox.css('height', parseInt('430' * Oz_ratio) + 'px');

    }
    zishiying();
    $(window).resize(function() {
        zishiying();
        //  window.location.reload();
    });
});