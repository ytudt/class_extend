
  /**
   * 1.封装bind方法，比原生bind效率更高，摘自vue1 源码
   * @param {fn} 需要借用的方法
   * @param {ctx}  借用方法的对象                    
   * return function                         
   *                     
   */
function bind(fn, ctx) {
    return function(a) {
        var l = arguments.length;
        return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx)

    }
}
//例
var obj1 = {
    name: 'dt',
    say:function(){
    	console.log(this.name)
    }
}
var obj2={
	name:'huahua'
}
var fn = bind(obj1.say, obj2)
fn()

  /**
   * 2.汉字与utf8编码互转                        
   *                     
   */
var UTFTranslate = {
  //输入汉字专为utf8编码
    Change: function(pValue) {
        return pValue.replace(/[^\u0000-\u00FF]/g, function($0) {
            return escape($0).replace(/(%u)(\w{4})/gi, "&#x$2;")
        });
    },
    //输入utf8编码专为汉字
    ReChange: function(pValue) {
        return unescape(pValue.replace(/&#x/g, '%u').replace(/\\u/g, '%u').replace(/;/g, ''));
    }
};

