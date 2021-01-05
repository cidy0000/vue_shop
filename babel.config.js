//这是项目发布阶段需要用到的babel插件
const prodplugins = []
if (Process.env.NODE_ENV === 'production') {
    prodPlugins.push('transform-remove-console')
}
module.exports = {
    presets: ['@vue/app'],
    plugins: [
        [
            'component',
            {
                libraryName: 'element-ui',
                styleLibraryName: 'theme-chalk'
            }
        ],
        //发布产品时候的插件数组
        ...prodplugins,
        '@babel/plugin-syntax-dynamic-import'
    ]
}