/**
 * Created by Administrator on 2017/2/24.
 */
$(function(){

    var lb_CusBox=$('.lb_CusBox');//列表
    var listNum=0;//列表元素数量

    for(var i=0;i<lb_CusBox.length;i++)
    {
        listNum=lb_CusBox.eq(i).find('.lb_CusItem').length;//实际的列表元素数量
        if(listNum>3)//当元素大于3个时显示下拉bar
        {
            lb_CusBox.eq(i).find('.lb_CusListBar').show();
        }
        else
        {
            lb_CusBox.eq(i).find('.lb_CusListBar').hide();
        }
    }


    //点击下拉bar
    $('.lb_CusListBar').on('click',function(){
        var listLength=$(this).siblings('.lb_CusItem').length;//查询列表元素数量
        var iconDir=$(this).children('i');
        if(iconDir.hasClass('iconDir'))//判断箭头是否朝上
        {
            $(this).parent().parent().animate({'max-height':'249px'},500,function(){
                iconDir.removeClass('iconDir');
            });
        }else{
            //53为每条的高度，90是bar的高度+Title的高度+margin
            $(this).parent().parent().animate({'max-height':53*listLength+90+'px'},500,function(){
                iconDir.addClass('iconDir');
            });
        }




    });

});






















