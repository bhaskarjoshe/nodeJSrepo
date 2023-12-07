const EventEmitter =require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response',(name,id)=>{
console.log(`Data Received : ${name} ${id}`);
})

customEmitter.on('relax',()=>{
console.log(`Data Received 2`);
})

customEmitter.emit('response','john',34);
customEmitter.emit('relax');