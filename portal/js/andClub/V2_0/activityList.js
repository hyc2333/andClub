/**
 * Created by Administrator on 2017/3/1.
 */

//------------------------------------下拉刷新功能---------------------------


var data,
    myScroll,
    pullDownEl, pullDownOffset,
    pullUpEl, pullUpOffset;

function pullUpAction () {
    //本地测试，为了看到加载中效果故加上定时器
    setTimeout(function () {
        alert('你触发了下拉更新');
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













