const {readFile,writeFile}=require('fs')

console.log('Start');

readFile('./content/first.txt','utf8',(err,result)=>{
if (err){
console.log('File Path Incorrect');
return;
}
const first=result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if (err){
        console.log('File Path Incorrect');
        return;
        }
        const second=result;
        writeFile(
            './content/result-async.txt',
            `Here is the new result: ${first}, ${second}`,
            (err,result)=>{
            if(err){
            return;}
            console.log('Done with this task');
        });
    })

})

console.log('Start the next task')