const path=require('path');


const filePath=path.join('/content/subfolder','text.txt');

console.log(path.resolve(__dirname,'content','subfolder','text.txt'))