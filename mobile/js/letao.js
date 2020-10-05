(function(w,z){
  if(!w.letao) {
    w.letao = {};
  }
  var getParamsByUrl= function() {
    var obj = {};
    //获取搜索信心 url?之后的信息
    var search = location.search;
    if(search) {
      search = search.replace(/^\?/,'');
      if(search) {
        var arr = search.split('&');
        arr.forEach((v,k) => {
          var itemArr = v.split('=');
          obj[itemArr[0]] = itemArr[1];
        });
      }
    }
    return obj;
  };
  w.letao.getParamsByUrl = getParamsByUrl;
})(window,$);