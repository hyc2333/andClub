/**
 * Created by Administrator on 2017/1/3.
 */
$(function(){
    for(var i=0;i<15;i++)
    {
        if(i==4)
        {
            list({
                image:'../../images/andClub/himg_1.png',//主照片
                //sale:'优惠订场',//优惠订场（可选）
                venueName:'场馆名称',
                venueObject:['羽毛球','篮球','乒乓球'],//场地项目
                address:'福州市鼓楼区西二环北区西二环北路62号',//场地地址
                tel:'059187886011'//场地电话
            },function(){
                alert(1);
            });
        }else{
            list({
                image:'../../images/andClub/himg_1.png',//主照片
                sale:'优惠订场',//优惠订场（可选）
                venueName:'场馆名称',
                venueObject:['羽毛球','乒乓球'],//场地项目
                address:'福州市鼓楼区西二环北区西二环北路62号',//场地地址
                tel:'059187886011'//场地电话
            },function(){
                alert(1);
            });
        }

    }
});

//场地列表构造函数
function list(obj,callBack){
    var that=this;
    this.objectData=obj;
    this.CallBack=callBack;
    this.createList=function(){
        var Floor=$('<div></div>');//外框
        Floor.addClass('floor_p');
        var Floor_main=$('<div></div>');//内框
        Floor_main.addClass('floor_main');
        var Floor_siteimg=$('<div></div>');//照片
        Floor_siteimg.addClass('floor_siteimg').css('background-image',that.objectData.image);
        var Floor_sitecontent=$('<div></div>');//信息框;
        Floor_sitecontent.addClass('floor_sitecontent');
        var Floor_s_name=$('<p></p>');//场馆名称框
        Floor_s_name.addClass('floor_s_name');
        var F_name=$('<span></span>');//场馆名字
        F_name.text(that.objectData.venueName);
        //插入DOM元素
        Floor.append(Floor_main);
        Floor_main.append(Floor_siteimg).append(Floor_sitecontent);
        Floor_sitecontent.append(Floor_s_name);
        Floor_s_name.append(F_name);

        if(that.objectData.sale)//判断是否定义‘优惠订场’
        {
            //如果定义了优惠订场，则创建出来，没定义就不创建
            var sale_f=$('<span></span>');
            sale_f.addClass('f_yh');
            sale_f.text(that.objectData.sale);
            Floor_s_name.append(sale_f);
        }

        var Floor_prj=$('<p></p>');//场馆项目框
        Floor_prj.addClass('floor_prj');
        Floor_sitecontent.append(Floor_prj);

        //场地项目遍历循环，that.objectData.venueObject要传入一个数组
        var objColor=['#77cf36','#559ff2','#f7697d','#f24f20','#9847d1','gray'];//项目背景色
        //区域随机数生成函数
        function rd(n,m)
        {
            var c = m-n+1;
            return Math.floor(Math.random() * c + n);
        }
        for(var i=0;i<that.objectData.venueObject.length;i++)
        {
            var prjName=$('<span></span>');
            prjName.text(that.objectData.venueObject[i]);
            prjName.css('background',objColor[rd(0,5)]);//背景随机颜色
            Floor_prj.append(prjName);
        }

        var venueAdd=$('<p></p>');//场地地址
        venueAdd.addClass('in_h_info_add_1 dc_date');
        venueAdd.text(that.objectData.address);
        Floor_sitecontent.append(venueAdd);

        var venuetel=$('<p></p>');//场地电话
        venuetel.addClass('dc_date');
        venuetel.text(that.objectData.tel);
        Floor_sitecontent.append(venuetel);

        Floor.click(that.CallBack);//点击框的回调函数
        $('body').append(Floor);//把整个框放到body元素下；
    };
    this.createList();//执行构造函数
}














