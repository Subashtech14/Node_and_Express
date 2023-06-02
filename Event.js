const EventEmitter= require('events');

const customEmitter= new EventEmitter();

customEmitter.on('response',(name,id)=>{
    console.log('data received',` `,name,id);
})
//customEmitter.on(which event,()=>{})
customEmitter.on('response',()=>{
    console.log('Some Other Data');
})
customEmitter.emit('response','john',34);
// on - listen for an event
// emit - emit or trigger an event