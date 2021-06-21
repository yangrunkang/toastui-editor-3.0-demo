const { Editor } = toastui;
const { chart, codeSyntaxHighlight, colorSyntax, tableMergedCell } = Editor.plugin;

const chartOptions = {
    minWidth: 100,
    maxWidth: 600,
    minHeight: 100,
    maxHeight: 300
};



const editor = new Editor({
    el: document.querySelector('#editor'),
    previewStyle: 'vertical',
    height: '500px',
    initialValue: allPluginsContent,
    plugins: [[chart, chartOptions], [codeSyntaxHighlight, { highlighter: Prism }], colorSyntax, tableMergedCell],
    language: 'zh-CN'
});

// 删除默认监听事件
editor.removeHook('addImageBlobHook')
// 添加自定义监听事件
editor.addHook('addImageBlobHook', (blob, callback) => {
  // 此处填写自己的上传逻辑，url为上传后的图片地址
  console.log(blob);
  console.log('这里自己实现上传,上传完将图片地址传给编辑器');
  // 这里是回调地址,给编辑器
  callback('https://www.google.com.hk/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png');
})