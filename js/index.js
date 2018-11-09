$(function () {
    // 轮番图
    slider();
    // 头部展开与合并
    headerPlay();

});


// 自动轮播图
function slider() {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        // autoplay: true, //自动轮播
        delay: 1000, //1秒切换一次
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
    });
}

//头部展开区域
function headerPlay(){
    $('.icon-xiangxiajiantou').on('click',function () { 
        $('.nav-item-layer').toggle();
        $('.mark').toggle();   
     });
}