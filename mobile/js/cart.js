$(function(){
  //需求：
  //1、自动的下拉 加载数据进行渲染
  //2、点击刷新按钮 也可以加载数据进行渲染
  //3、手动下拉 加载数据进行渲染
  //4、编辑功能
  //4-1、点击编辑按钮 需要弹窗
  //4-2、弹框内容 动态渲染 可选尺码 可选数量 当前选择的尺码和数量 都要渲染上去
  //4-3、重新选择尺码 和数量
  //4-4、点击确认之后 请求后台 如果成功 列表重新渲染
  //5、删除
  //5-1、点击删除 弹框
  //5-2、弹框内容 温馨提示 老铁 确认删除改商品吗？
  //5-3、点击确认 请求后台 如果成功 列表重新渲染
  //6、总金额的计算
  //6-1、选择checkbox 重新计算
  //6-2、修改的时候 重新计算
  //6-3、删除的时候 重新计算

  new Cart();
});
var Cart = function() {
  this.$el = $('.mui-table-view');//需要更新的容器
  this.init();
};
Cart.prototype.init = function() {
  var that = this;
  mui.init({
    pullRefresh: {
      container: '.mui-scroll-wrapper',
      indicators: false,
      down: {
        auto: true,
        callback:function() {
          var pr = this;
          that.render(function(){
            //关闭下拉
            pr.endPulldownToRefresh();
          });

        }
      }
    }
  });
};
Cart.prototype.render = function(callback) {
  var that = this;
  //这里发请求需要登录，由于接口没写完，这是就省略登录验证
  $.ajax({
    type: 'get',
    url: 'http://localhost:3000/cart/queryCart',
    data: {},
    dataType: 'json',
    success:function(data) {
      console.log(data);
      that.$el.html(template('cart',data));
      callback&&callback();
    }
  });
};
Cart.prototype.bindEvent= function() {
  $('.mui-icon-refresh').on('tap',function(){

  });
};