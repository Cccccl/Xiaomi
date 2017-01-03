        //关键字搜索，阻止默认的冒泡行为。
            $('.search-text').on('click',function(e){
                $(this).css({
                  'border': '1px solid #ff6700'
                });
                $('.keyword-list').css({
                  'display': 'block'
                });
                $(document).on('click',function(){
                    $('.search-text').css({
                      'border':'1px solid #e0e0e0',
                    });
                    $('.keyword-list').css({
                      'display': 'none'
                    });
                });
                 e.stopPropagation();
            })

            $(".search-text").on("click", function(e){
                e.stopPropagation();
            });


            
                jQuery(".nav").slide({ 
                        type:"menu", //效果类型
                        titCell:".m", // 鼠标触发对象
                        targetCell:".sub", // 效果对象，必须被titCell包含
                        delayTime:300, // 效果时间
                        triggerTime:0, //鼠标延迟触发时间
                        returnDefault:true  //返回默认状态
                    });



                   jQuery("#nav").slide({ 
                      type:"menu", //效果类型
                      titCell:".mainCate", // 鼠标触发对象
                      targetCell:".subCate", // 效果对象，必须被titCell包含
                      delayTime:0, // 效果时间
                      triggerTime:0, //鼠标延迟触发时间
                      defaultPlay:false,//默认执行
                      returnDefault:true//返回默认
                  });


//购物车移入移出。
$('.xiaomiCart').hover(function() {
    $(this).find('a').css({
        'color': '#ff6700'
    });
    $(this).find('img').attr({
        'src': 'img/hover/购物车.png'
    });
    $('.car-item').animate({top:101}, 'slow');
    $('.car-item').css({
        'z-index': '1995'
    });
}, function(){
    $(this).find('a').css({
        'color': '#fff'
    });
    $('.car-item').animate({top:-60}, 'slow');
    $('.car-item').css({
        'z-index': '-1'
    });
    $(this).find('img').attr({
        'src': 'img/购物车.png'
    });
});

//鼠标移入移出logo的动画效果
$('.HeaderLogo').hover(function() {
    console.log($(this).find('.logo'));
    $(this).find('.logo').animate({left:'-110px'});
    $(this).find('.home').animate({left:'-55px'});
}, function() {
       console.log($(this).find('.home'));
       $(this).find('.logo').animate({left:'-55px'});
       $(this).find('.home').animate({left:'0px'});
});

//鼠标移入移出点赞，图片改变。
$('.tab-pal').find('.left div').hover(function() {
    $(this).css({
        'background-color': '#ff6700',
    });
    $(this).find('img').attr({
        'src': 'img/hover/like_2_shape.png'
    });
}, function() {
    $(this).css({
        'background-color': '#fff',
    });
    $(this).find('img').attr({
        'src': 'img/dataline/like_2_shape.png'
    });
});

//点击回复框样式改变。
$('.reply').click(function(){
        $(this).find('input').css({
            'border': '1px solid #ff6700'
        });
        $(this).find('a').css({
            'border': '1px solid #ff6700',
            'background-color':'#ff6700',
            'color':'white'
        });
})

jQuery(".notice").slide({ titCell:".tab-hd li", mainCell:".tab-bd",delayTime:0 });
jQuery(".scrollBox").slide({ titCell:".list li", mainCell:".piclist", effect:"left",vis:5,scroll:5,delayTime:800,trigger:"click",easing:"easeOutCirc"});


//点击加载更多，显示更多的内容。
    $('.bottom').click(function() {
        $('.left_5').css({
            'height': '5050px'
        });
        $('.hide').css({
            'display': 'block'
        });
        $(this).css({
            'display': 'none'
        });
        $('.more_5').css({
            'display': 'block'
        });

    });

//输入移入移出全部商品分类，显示菜单。
    $('#all').hover(function() {
        $('.metu').find('.container').show();
    }, function() {
        $('.metu').find('.container').hover(function() {
            $(this).show();
        }, function() {
            $(this).hide();
        });
        $('.metu').find('.container').hide();
    });

//
    $(window).scroll(function(){
        var top=document.body.scrollTop 
        var maintop=$(".main_body")
        var current=""//当前所在楼层的（item）id
        maintop.each(function(){
            var mTop=$(this).offset().top//4个楼层分别到document顶部的距离。
            
            if(top>mTop-200)//当鼠标移动到相应楼层附近的时候，给current赋当前楼层的id。
            {
                current="#"+$(this).attr("id")
            }
            else
            {
                return false;
            }
        });

        // if($(".act").attr("href")!=current&&current){
            if(top>800){
            $('.ids a').each(function(){
                if($(this).attr('href')==current){
                    $(this).addClass('act')
                }else{
                     $(this).removeClass("act")
                }
            })
            }
            // $(".ids").find("[href="+current+"]").addClass("act")
        // }
    })
    $(".ids").find("a").hover(function(){
        $(this).addClass("ahover")
    },function(){
        $(this).removeClass("ahover")
    })
    $(".ids").find("a").click(function(e){
        var id=$(this).attr('href');
        var target=$(id).offset().top-30;//目标区域距离document顶部的距离。
        $('html,body').animate({scrollTop:target},600);
        event.preventDefault();//取消事件的默认行为。
    })


//滚动条，导航栏固定在页面的顶部。
    $(window).scroll(function(){
        if($(window).scrollTop()>=800){
            $('.xiaomiSection_2').addClass('posfix');
            $('.xiaomiSection_2').find('.goods').css({
                'visibility': 'visible'
            });
            $('.xiaomiSection_2').find('.buy').css({
                'visibility': 'visible'
            });
        }else{
            $('.xiaomiSection_2').removeClass('posfix');
            $('.xiaomiSection_2').find('.goods').css({
                'visibility': 'hidden'
            });
            $('.xiaomiSection_2').find('.buy').css({
                'visibility': 'hidden'
            });
        };

    })

//点击小图替换大图。
    $('#smallTobig').find('li').click(function() {
        $('#smallTobig').find('li').css({
            'border': '1px solid #e0e0e0'
        });
        $(this).css({
            'border': '1px solid #ff6700'
        });
        var Src=$(this).find('a img').attr('src')
        var result=Src.substring(0,Src.length-9)+'482x482.jpg';
        $('#Big').find('a img').attr({
            'src': result
        });
    });


    $("img.lazy").lazyload();
