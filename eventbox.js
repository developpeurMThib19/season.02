const EventEmitter = require('events')

function empty(){
 const emitter = new EventEmitter();
    emitter.on('hi', () => {
    console.log('Ch0ooooooper !')
})
emitter.emit('hi')
}

 function withArgs(names){
     const emitter = new EventEmitter()
     emitter.on('newFellow', () =>{
         console.log(`Here com's a new pirate ->> ${name}`)
     })
     for(let i = 0; i < names.lenght; i++){
         emitter.emit('newFellow', names[i])
     }
 } 

module.exports = {
    empty,
    withArgs,
}