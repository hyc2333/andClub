/**
 * Created by Administrator on 2017/2/28.
 */






    var mySwiper = new Swiper('.swiper-container', {
        pagination: '.my-pagination-ul',
        paginationClickable: true,
        onlyExternal:true,//只允许点击拖动
        paginationBulletRender: function (index, className) {
            switch (index) {
                case 0:
                    name = '运动类';
                    break;
                case 1:
                    name = '文化类';
                    break;
                case 2:
                    name = '生活类';
                    break;
                case 3:
                    name = '商业类';
                    break;
                default:
                    name = '';
            }
            return '<li class="' + className + '">' + name + '</li>';
        },
        onSlideChangeEnd: function(swiper){
            //alert(swiper.activeIndex); //切换结束时，告诉我当前slider索引值

            $('.lb_loading').show();//打开loading窗口
            setTimeout(function(){
                $('.lb_loading').hide();//3秒后关闭loading窗口
            },3000);
        }
    });

    //更新页码函数
    function Page(id,index)
    {
        var sport=$(id);//类别父元素
        var Uhildren=sport.children('li').length;//总数量
        var page=sport.siblings('.lb_actCardPage');//页码
        var nowPage=index+1;//当前的索引值+1;
        page.text(nowPage+'/'+Uhildren);//更新页码
    }

    //运动类卡片叠加
    new ElastiStack( document.getElementById( 'lb_sportAct' ),
        {distDragBack :100,
            distDragMax :150,
            onUpdateStack : function( current )
            {
                Page('#lb_sportAct',current);//更新页码
                //查看详情赋予新的链接
                $('#lb_sportAct').siblings('.lb_moreBtn').children('a').attr('href','activityCard_details.html?page='+current);
            }
        });

    //文化类卡片叠加
    new ElastiStack( document.getElementById( 'lb_cultureAct' ),
        {distDragBack :100,
            distDragMax :150,
            onUpdateStack : function( current ) {
                Page('#lb_cultureAct',current);//更新页码
                //查看详情赋予新的链接
                $('#lb_cultureAct').siblings('.lb_moreBtn').children('a').attr('href','activityCard_details.html?page='+current);
            }
        });

    //生活类卡片叠加
    new ElastiStack( document.getElementById( 'lb_lifeAct' ),
        {distDragBack :100,
            distDragMax :150,
            onUpdateStack : function( current ) {
                Page('#lb_lifeAct',current);//更新页码
                //查看详情赋予新的链接
                $('#lb_lifeAct').siblings('.lb_moreBtn').children('a').attr('href','activityCard_details.html?page='+current);
            }
        });


    //商业类卡片叠加
    new ElastiStack( document.getElementById( 'lb_businessAct' ),
        {distDragBack :100,
            distDragMax :150,
            onUpdateStack : function( current ) {
                Page('#lb_businessAct',current);//更新页码
                //查看详情赋予新的链接
                $('#lb_businessAct').siblings('.lb_moreBtn').children('a').attr('href','activityCard_details.html?page='+current);
            }
        });










