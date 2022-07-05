const files = require.context('.',true,/\.js$/);

const modules = {}
files.keys().forEach(key=>{
    const path= key.replace(/\.\/|\.js/g,'');
    if(path === 'index') return; // 自己不做任何处理
    let [name,type] = path.split('/'); // [user,actions]
    if(!modules[name]){
        modules[name] = {
            namespaced:true // 增加命名空间
        }
    }
    // 所有的action mutation 都被增加到了 全局上了
    // {user:{namespaced:true,state:{}},...}
    modules[name][type] = files(key).default; // 获取文件导出的结果
    // user/actions    [user,actions]
})
export default modules;
