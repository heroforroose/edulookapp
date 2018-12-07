exports.keys = 'edulook.com';
// 添加view 配置
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.html': 'nunjucks',
    }
}
exports.news = {
    pageSize: 5,
    serverUrl: ' http://127.0.0.1:7001/mock/test.json',
};