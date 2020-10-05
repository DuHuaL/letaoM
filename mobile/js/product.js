$(function(){
  //初始化轮播图
  var gallery = mui('.mui-slider');
  gallery.slider({
    interval:1000//自动轮播周期，若为0则不自动播放，默认为0；
  });
  //初始化区域滚动
  mui('.mui-scroll-wrapper').scroll({
    indicators: false
  });

  //0、获取地址栏的商品id
  //1、主动触发下拉刷新 去渲染商品详情
  //1-1、轮播图的渲染和初始化
  //1-2、渲染尺码按钮 40-50这个范围
  //2、选择尺码的交互效果
  //3、选择数量 最小0，最大是剩余数量（库存）
  //4、加入购物车
  //4-1、验证尺码
  //4-2、验证数量
  //4-3、提交
  //4-4、响应
  //4-4-1、没有登录，跳转登录页，登录完成返回商品详情页
  //4-4-2、如果已经登录 添加成功 弹出提示框 ‘亲，添加成功，去购物车看看吗’
  //4-4-3、否 关闭提示框
  //4-4-4、是 跳转到购物车页面
  new Product();
});
var Product = function() {
  this.productId = letao.getParamsByUrl().id;
  //需要动态渲染的容器
  this.$el = $('.mui-scroll');
  console.log(this.productId);
};
Product.prototype.init = function() {

};
Product.prototype.render = function() {};