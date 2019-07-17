/**
 * Created by Administrator on 2017/2/24.
 */
$(function(){

    $('.lb_coaTab select').on('focus blur',function(){
        $(this).parent().toggleClass('lb_coaArrUp');//选项获得焦点时箭头改变方向
    }).on('change',function(){
        var category=$(this).val();//获得选中的value值
        $(this).siblings('p').children('span').text(category);//赋予显示的span中
    });


    //初始化，先实例6个对象
    for(var i=0;i<6;i++)
    {
        new coachList({
            ParentId:'.lb_coaPrjMain',//列表父元素
            headImg:'../../images/andClub/V2_0/head_2.jpg',//头像URL路径
            coaName:'张三',//教练名字
            coaLev:'国家级',//教练等级
            coaProject:'羽毛球',//指导项目
            Reserve:false//是否可预约(false为不可预约)
        },function(){
            alert('我是点击回调函数');
        });
    }









});

//------------------------------------下拉刷新功能---------------------------

//教练列表构造
function coachList(obj,callback)
{
    var that=this;
    this.object=obj;
    this.callback=callback;
    this.createList=function()
    {
        var li=$('<li  flex="main:justify cross:center"></li>');
        //头像构造
        var $div1=$('<div></div>');
        $div1.addClass('lb_coaHeadImg');
        var $div2=$('<div></div>');
        $div2.addClass('lb_coaImgBox');
        $div2.css({'background-image':'url('+that.object.headImg+')'});//头像地址；

        $div1.append($div2);
        li.append($div1);
        //简介构造
        var $div3=$('<div></div>');
        $div3.addClass('lb_coaInt').appendTo(li);
        var $p1=$('<p></p>');
        $p1.addClass('lb_coaNameLev');
        var span1=$('<span class="font_1"></span>');
        span1.text(that.object.coaName);//教练名字
        var span2=$('<span class="font_3"></span>');
        span2.text(that.object.coaLev);//教练等级
        $p1.append(span1).append(span2).appendTo($div3);
        var $p2=$('<p></p>');//指导项目容器
        $p2.addClass('lb_coaZdxm font_1');
        var span3=$('<span>指导项目：</span>');
        var span4=$('<span></span>');
        span4.text(that.object.coaProject);//教练指导项目
        $p2.append(span3).append(span4).appendTo($div3);
        var div4=$('<div></div>');
        div4.addClass('lb_coaYyBtn font_6');
        var span5=$('<span>可预约</span>');
        div4.append(span5).appendTo(li);
        if(!that.object.Reserve)//可否预约
        {
            li.addClass('lb_NoYuyue');
        }
        li.appendTo($(that.object.ParentId)).on('click',that.callback);
    };
    //执行
    this.createList();
}


var data,
    myScroll,
    pullDownEl, pullDownOffset,
    pullUpEl, pullUpOffset;

function pullUpAction () {
    //本地测试，为了看到加载中效果故加上定时器
    setTimeout(function () {
        //new一个教练出来
        new coachList({
            ParentId:'.lb_coaPrjMain',//列表父元素
            headImg:'../../images/andClub/V2_0/head_1.jpg',//头像URL路径
            coaName:'张三',//教练名字
            coaLev:'国家级',//教练等级
            coaProject:'羽毛球',//指导项目
            Reserve:true//是否可预约(false为不可预约)
        },function(){
            alert('我是点击回调函数');
        });

        //还原
        myScroll.refresh();
    }, 600);
}

//去除浏览器默认事件
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
//domready后绑定初始化事件
document.addEventListener('DOMContentLoaded', loaded, false);

function loaded() {
    pullUpEl = document.getElementById('pullUp');
    pullUpOffset = pullUpEl.offsetHeight;

    /*初始化iScroll控件*/

    myScroll = new iScroll('wrapper', {
        vScrollbar : false,
        onRefresh : function () {
            if (pullUpEl.className.match('loading')) {
                pullUpEl.className = '';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
            }
        },
        onScrollMove: function () {
            if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
                pullUpEl.className = 'flip';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '松手开始更新...';
            }
        },
        onScrollEnd: function () {
            if (pullUpEl.className.match('flip')) {
                pullUpEl.className = 'loading';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中...';
                pullUpAction();
            }
        }
    });
}














