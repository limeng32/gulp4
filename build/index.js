KISSY.add('gulp4/index',["gulp4/header/header","gulp4/article/article"],function(S ,require, exports, module) {
 //初始化header模块
var header = require('gulp4/header/header');
header.init();

//初始化article模块
var article = require('gulp4/article/article');
article.init();
});