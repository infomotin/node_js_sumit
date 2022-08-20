const EventEmitter = require('events');
const emitter = new EventEmitter();
class EventsStart extends EventEmitter{
    eventsStart(){
    console.log('Event Emitter');
    setTimeout(() => { 
        this.emit('bellRing', {data: 'data',data2: 'data2',data3: 'data3'});
    }, 2000);
}

}





module.exports = EventsStart;
